import { getAllProjects } from "@/lib/projects";
import { ProjectsComponent } from "@/components/projects";

export const metadata = {
  title: "Projects – Aayush Pagare | Full Stack Developer",
  description:
    "Explore the diverse projects by Aayush Pagare, showcasing expertise in full stack development, AI integration, and innovative web solutions.",
  openGraph: {
    title: "Projects – Aayush Pagare | Full Stack Developer",
    description:
      "A curated collection of projects by Aayush Pagare, highlighting skills in building scalable web applications and integrating AI technologies.",
    url: "https://aayushpagare.com/projects",
    siteName: "Aayush Pagare",
    images: [
      {
        url: "https://aayushpagare.com/answer-writing-free-mains-answer-writing-and-evaluation-with-ai.webp", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Aayush Pagare Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects – Aayush Pagare | Full Stack Developer",
    description:
      "Discover the innovative projects by Aayush Pagare, encompassing full stack development and AI-powered solutions.",
    images: [
      "https://aayushpagare.com/answer-writing-free-mains-answer-writing-and-evaluation-with-ai.webp",
    ], // Replace with your actual Twitter image URL
    creator: "@_imaayush21_", // Optional: Replace with your Twitter handle
  },
  metadataBase: new URL("https://aayushpagare.com"),
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return <ProjectsComponent projects={projects} />;
}
