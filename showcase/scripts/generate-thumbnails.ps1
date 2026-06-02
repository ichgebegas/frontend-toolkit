param(
  [string[]] $Filter = @(),
  [string] $ShowcaseUrl = "http://127.0.0.1:5173",
  [string] $AgentBrowser = "C:\Program Files\nodejs\agent-browser.cmd",
  [string] $ThumbnailSession = "toolkit-thumbnails"
)

$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$dataDir = Join-Path $root "src\data"
$outputDir = Join-Path $root "public\thumbnails"
$agentBrowserArgs = @("--session", $ThumbnailSession)
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$blocks = @()
foreach ($category in @("about", "article", "blog", "carousel", "contact", "faq", "features", "footer", "gallery", "hero", "link-page", "navbar", "process", "stats")) {
  $file = Join-Path $dataDir "$category-blocks.ts"
  $text = Get-Content -LiteralPath $file -Raw
  $matches = [regex]::Matches($text, 'id:\s*"(?<id>[^"]+)".*?categorySlug:\s*"(?<category>[^"]+)"', 'Singleline')
  if ($matches.Count -eq 0) {
    $matches = [regex]::Matches($text, '^\s*\["(?<id>[^"]+)",', 'Multiline')
  }
  foreach ($match in $matches) {
    $id = $match.Groups["id"].Value
    $slug = if ($match.Groups["category"].Success) {
      $match.Groups["category"].Value
    } else {
      $category
    }
    if ($Filter.Count -eq 0 -or $Filter -contains $id -or $Filter -contains $slug) {
      $blocks += [pscustomobject]@{ Id = $id; Category = $slug }
    }
  }
}

Write-Host "Generating $($blocks.Count) thumbnails from $ShowcaseUrl"

function Wait-ForThumbnailReady {
  param(
    [int] $TimeoutSeconds = 14
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  $stableReadyChecks = 0
  do {
    $ready = @'
(() => {
  const preview = document.querySelector(".preview-document");
  if (!preview || preview.querySelector(".preview-loading")) return false;
  if (document.body.innerText.includes("Loading preview...")) return false;

  const visibleImages = [...document.images].filter((image) => {
    const rect = image.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < innerHeight && rect.right > 0 && rect.left < innerWidth;
  });

  return preview.children.length > 0 &&
    visibleImages.every((image) => image.complete && image.naturalWidth > 0);
})()
'@ | & $AgentBrowser @agentBrowserArgs eval --stdin

    if (($ready -join "").Trim() -eq "true") {
      $stableReadyChecks += 1
      if ($stableReadyChecks -ge 2) {
        return $true
      }
    } else {
      $stableReadyChecks = 0
    }

    Start-Sleep -Milliseconds 350
  } while ((Get-Date) -lt $deadline)

  return $false
}

function Open-NavbarMenuForCapture {
  $clicked = @'
(() => {
  const scope = document.querySelector("header") || document.querySelector("nav");
  if (!scope) return false;

  const buttons = [...scope.querySelectorAll("button")];
  const trigger = buttons.find((button) => {
    const text = button.textContent || "";
    return button.getAttribute("aria-expanded") === "false" ||
      button.hasAttribute("aria-haspopup") ||
      /menu/i.test(text);
  });

  if (!trigger) return false;
  trigger.click();
  return true;
})()
'@ | & $AgentBrowser @agentBrowserArgs eval --stdin

  return (($clicked -join "").Trim() -eq "true")
}

$index = 0
foreach ($block in $blocks) {
  $index += 1
  $output = Join-Path $outputDir "$($block.Id).png"
  $url = "$ShowcaseUrl/preview/$($block.Id)?capture=1"

  & $AgentBrowser @agentBrowserArgs open $url | Out-Null
  & $AgentBrowser @agentBrowserArgs wait 450 | Out-Null
  if (-not (Wait-ForThumbnailReady)) {
    Write-Warning "Timed out while waiting for visible images in $($block.Id)"
  }
  if ($block.Category -eq "navbar") {
    Open-NavbarMenuForCapture | Out-Null
  }
  & $AgentBrowser @agentBrowserArgs wait 1400 | Out-Null
  & $AgentBrowser @agentBrowserArgs screenshot $output | Out-Null
  Write-Host "$index/$($blocks.Count) $($block.Id)"
}
