import Link from "next/link";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <CardHeader className="p-4 pb-0">
        <div className="space-y-1">
          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="text-xl font-semibold leading-tight hover:underline">
              {post.title}
            </h3>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {post.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
