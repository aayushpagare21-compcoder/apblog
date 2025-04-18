import { getAllPosts } from "@/lib/mdx";
import { getAllProjects } from "@/lib/projects";
import type { MetadataRoute } from "next";

export const revalidate = 84000;

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllPosts();
  const projects = getAllProjects();
  const slugs = blogs.map((blog) => blog.slug);
  const projectSlugs = projects.map((pr) => pr.slug);

  // Create sitemap entries for blog posts
  const blogEntries = slugs.map((slug) => ({
    url: `https://aayushpagare.com/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));
  const projectEntries = projectSlugs.map((slug) => ({
    url: `https://aayushpagare.com/projects/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  // Add static pages
  const staticPages = [
    {
      url: "https://aayushpagare.com",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1.0,
    },
    {
      url: "https://aayushpagare.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1.0,
    },
    {
      url: "https://aayushpagare.com/projects",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1.0,
    },
    {
      url: "https://aayushpagare.com/blog",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogEntries, ...projectEntries];
}
