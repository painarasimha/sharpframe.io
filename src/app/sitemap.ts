import type { MetadataRoute } from "next";

import { site } from "@content/site";

/** Emitted as a static file at build time (output: "export"). */
export const dynamic = "force-static";

/** /thank-you is excluded on purpose — it is noindex. */
const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/blueprint", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/case-studies/rental-operations",
    priority: 0.8,
    changeFrequency: "yearly" as const,
  },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
