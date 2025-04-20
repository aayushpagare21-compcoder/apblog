import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import ReactMarkdown from "react-markdown";
import { StyledContent } from "@/components/mdx-content";

export const revalidate = 84000;

export function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => {
    return {
      slug: project.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any): Promise<Metadata> {
  const awaitedParams = await params;
  const project = await getProjectBySlug(awaitedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `Projects - ${project.title}`,
    description: project.description,
    openGraph: {
      title: `Blog - ${project.title}`,
      description: project.description,
      url: `https://aayushpagare.com/blog/${project.slug}`,
      siteName: "Aayush Pagare",
      images: [
        {
          url: project.image
            ? `https://aayushpagare.com/${project.image}`
            : "https://aayushpagare.com/aayush-pagare.jpeg", // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: project.description,
        },
      ],
      type: "profile",
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ProjectPage({ params }: any) {
  const awaitedParams = await params;
  const project = await getProjectBySlug(awaitedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container px-4 sm:px-6 py-8 sm:py-12">
      <article className="mx-auto max-w-4xl">
        <Button variant="ghost" asChild className="group my-4">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Back
          </Link>
        </Button>
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button className="w-full sm:w-auto mb-2 sm:mb-0" asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border mb-6 sm:mb-8">
          <Image
            src={project.image || "/placeholder.svg?height=600&width=1200"}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </div>
        <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
          <StyledContent>
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </StyledContent>
        </div>
      </article>
    </div>
  );
}
