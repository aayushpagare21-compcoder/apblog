import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Link href={`/projects/${project.slug}`} className="block">
          <Image
            src={project.image || "/placeholder.svg?height=300&width=600"}
            alt={project.title}
            width={600}
            height={300}
            className="object-cover transition-transform hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-4 flex-grow">
        <Link href={`/projects/${project.slug}`} className="block">
          <h3 className="text-xl font-semibold mb-2 hover:underline">
            {project.title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-3">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
