import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import PostCard from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog | Aayush Pagare",
  description: "Read Aayush's thoughts on development, design, and technology",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

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
