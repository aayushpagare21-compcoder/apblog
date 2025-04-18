import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "./types";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      technologies: data.technologies,
      liveUrl: data.liveUrl || null,
      githubUrl: data.githubUrl || null,
      content,
    };
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    title: data.title,
    description: data.description,
    image: data.image,
    technologies: data.technologies,
    liveUrl: data.liveUrl || null,
    githubUrl: data.githubUrl || null,
    content,
  };
}
