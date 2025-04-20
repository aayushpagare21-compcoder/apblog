import { getAllPosts } from "@/lib/mdx";
import { BlogComponent } from "@/components/blog";

export const metadata = {
  title: "Blog – Aayush Pagare | Full Stack Developer & AI Engineer",
  description:
    "Stay updated with the latest insights, tutorials, and experiences from Aayush Pagare on full stack development, AI integration, and modern web technologies.",
  openGraph: {
    title: "Blog – Aayush Pagare | Full Stack Developer & AI Engineer",
    description:
      "Explore articles and tutorials by Aayush Pagare on full stack development, AI integration, and modern web technologies.",
    url: "https://aayushpagare.com/blog",
    siteName: "Aayush Pagare",
    images: [
      {
        url: "https://aayushpagare.com/aayush-pagare.jpeg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Aayush Pagare Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Aayush Pagare | Full Stack Developer & AI Engineer",
    description:
      "Read the latest posts by Aayush Pagare on full stack development, AI integration, and modern web technologies.",
    images: ["https://aayushpagare.com/aayush-pagare.jpeg"], // Replace with your actual Twitter image URL
    creator: "@_imaayush21_", // Optional: Replace with your Twitter handle
  },
  metadataBase: new URL("https://aayushpagare.com"),
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogComponent posts={posts} />;
}
