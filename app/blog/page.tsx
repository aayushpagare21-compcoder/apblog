import { getAllPosts } from "@/lib/mdx";
import PostCard from "@/components/post-card";

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

  return (
    <div className="container py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Blog</h1>
      {posts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No posts found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
