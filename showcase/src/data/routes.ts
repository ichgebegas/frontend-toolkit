export type ShowcaseRoute =
  | { kind: "category"; slug: string }
  | { kind: "block"; id: string }
  | { kind: "preview"; id: string }
  | { kind: "home" };

export function appHref(path = ""): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function routeHref(path: string): string {
  const routePath = path.replace(/^\/+/, "");
  return import.meta.env.BASE_URL === "/"
    ? appHref(routePath)
    : `${appHref()}#/${routePath}`;
}

export function parseShowcaseRoute(pathname: string, hash = ""): ShowcaseRoute {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const routePath = hash.startsWith("#/")
    ? hash.slice(1)
    : basePath && pathname.startsWith(basePath)
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
