import { LandingComponent } from "@/components/landing";
import { getAllPosts } from "@/lib/mdx";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Aayush Pagare – Full Stack Developer",
  description:
    "A Full stack engineer with 2 years of experience. Skilled at building web-applications end-to-end from backend to frontend, integrating AI and deploying it.",
  openGraph: {
    title:
      "Aayush Pagare – Full Stack Developer, Freelancer and a Technical Writer",
    description:
      "A Full stack engineer with 2 years of experience. Skilled at building web-applications end-to-end from backend to frontend, integrating AI and deploying it.",
    url: "https://aayushpagare.com",
    siteName: "Aayush Pagare",
    images: [
      {
        url: "https://aayushpagare.com/aayush-pagare.jpeg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Aayush Pagare Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Pagare – Full Stack Developer",
    description:
      "A Full stack engineer with 2 years of experience. Skilled at building web-applications end-to-end from backend to frontend, integrating AI and deploying it.",
    images: ["https://aayushpagare.com/aayush-pagare.jpeg"], // Replace with your image
    creator: "@_imaayush21_",
  },
  metadataBase: new URL("https://aayushpagare.com"),
};

export default function Home() {
  const projects = getAllProjects();
  const featuredProjects = projects.slice(0, 2);
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 2);

  return (
    <LandingComponent
      featuredProjects={featuredProjects}
      latestPosts={latestPosts}
    />
  );
}
