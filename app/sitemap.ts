import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://esubalew.et",
      lastModified: new Date(),
    },
    {
      url: "https://esubalew.et/projects",
      lastModified: new Date(),
    },
    {
      url: "https://esubalew.et/blog",
      lastModified: new Date(),
    },
    {
      url: "https://esubalew.et/events",
      lastModified: new Date(),
    },
  ]
}

