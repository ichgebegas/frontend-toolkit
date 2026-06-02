export type ShowcaseRoute =
  | { kind: "category"; slug: string }
  | { kind: "block"; id: string }
  | { kind: "preview"; id: string }
  | { kind: "home" };

export function appHref(path = ""): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function parseShowcaseRoute(pathname: string): ShowcaseRoute {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const routePath = basePath && pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname;
  const parts = routePath.replace(/^\/|\/$/g, "").split("/").filter(Boolean);

  if (parts[0] === "categories" && parts[1]) {
    return { kind: "category", slug: parts[1] };
  }

  if (parts[0] === "blocks" && parts[1]) {
    return { kind: "block", id: parts[1] };
  }

  if (parts[0] === "preview" && parts[1]) {
    return { kind: "preview", id: parts[1] };
  }

  return { kind: "home" };
}
