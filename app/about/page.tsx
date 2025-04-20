import AboutMe from "@/components/about";

export const metadata = {
  title: "About – Aayush Pagare | Full Stack Developer & AI Engineer",
  description:
    "Learn about Aayush Pagare, a Full Stack Engineer with 2 years of experience in building end-to-end web applications, AI integration, and delivering production-ready systems.",
  openGraph: {
    title: "About – Aayush Pagare | Full Stack Developer & AI Engineer",
    description:
      "Discover Aayush Pagare's journey as a Full Stack Engineer specializing in building web applications, integrating AI technologies, and delivering scalable solutions.",
    url: "https://aayushpagare.com/about",
    siteName: "Aayush Pagare",
    images: [
      {
        url: "https://aayushpagare.com/aayush-pagare.jpeg",
        width: 1200,
        height: 630,
        alt: "Aayush Pagare About Page",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About – Aayush Pagare | Full Stack Developer & AI Engineer",
    description:
      "Explore the professional background of Aayush Pagare, a Full Stack Engineer with expertise in AI integration and web development.",
    images: ["https://aayushpagare.com/aayush-pagare.jpeg"],
    creator: "@_imaayush21_",
  },
  metadataBase: new URL("https://aayushpagare.com"),
};

export default function AboutPage() {
  return <AboutMe />;
}
