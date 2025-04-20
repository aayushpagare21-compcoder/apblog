import { ArrowRight } from "lucide-react";
import PostCard from "../post-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Post } from "@/lib/types";

export default function LatestPosts({ latestPosts }: { latestPosts: Post[] }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Latest Writing</h2>
        <Button variant="ghost" asChild className="group">
          <Link href="/blog" className="flex items-center gap-1">
            All posts
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
