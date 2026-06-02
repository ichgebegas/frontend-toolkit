import { describe, expect, it } from "vitest";
import source from "../blocks/hero/hero-developer-tools-code.tsx?raw";
import mediaSource from "../lib/media.ts?raw";
import thumbnailScript from "../../scripts/generate-thumbnails.ps1?raw";

describe("Toolkit visible branding", () => {
  it("does not show the source package name in the developer code sample", () => {
    expect(source).not.toContain("text: \"import { Hero } from '@opensite/ui';\"");
  });

  it("uses local Toolkit artwork for the primary brand placeholders", () => {
    expect(mediaSource).toContain('"/toolkit-logo-dark.svg"');
    expect(mediaSource).toContain('"/toolkit-logo-light.svg"');
    expect(mediaSource).not.toContain("ui-placeholder-logo-dark-1.png");
    expect(mediaSource).not.toContain("ui-placeholder-logo-white-1.png");
  });

  it("opens an available navbar menu before capturing navbar thumbnails", () => {
    expect(thumbnailScript).toContain("function Open-NavbarMenuForCapture");
    expect(thumbnailScript).toContain('$block.Category -eq "navbar"');
  });
});
