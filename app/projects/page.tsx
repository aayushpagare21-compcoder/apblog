import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects | Aayush Pagare",
  description: "Explore Aayush's latest projects and work",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <div className="container py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Projects</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
