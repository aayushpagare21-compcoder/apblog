import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Button } from "../ui/button";
import { Project } from "@/lib/types";

export default function FeaturedProjects({
  featuredProjects,
}: {
  featuredProjects: Project[];
}) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Button variant="ghost" asChild className="group">
          <Link href="/projects" className="flex items-center gap-1">
            All Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
