import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { StyledContent } from "@/components/mdx-content";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const revalidate = 84000;

export function generateStaticParams() {
  const blogs = getAllPosts();

  return blogs.map((blog) => {
    return {
      slug: blog.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any): Promise<Metadata> {
  const awaitedParams = await params;
  const post = getPostBySlug(awaitedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `Blog - ${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: `Blog - ${post.title}`,
      description: post.excerpt,
      url: `https://aayushpagare.com/blog/${post.slug}`,
      siteName: "Aayush Pagare",
      images: [
        {
          url: post.image
            ? `https://aayushpagare.com/${post.image}`
            : "https://aayushpagare.com/aayush-pagare.jpg", // Replace with your actual OG image URL
          width: 1200,
          height: 630,
          alt: post.excerpt,
        },
      ],
      type: "profile",
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage({ params }: any) {
  const awaitedParams = await params;
  const post = getPostBySlug(awaitedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container px-4 sm:px-6 py-6 sm:py-12">
      <article className="mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="group mb-4 -ml-2 px-2">
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
            <span>Back to blog</span>
          </Link>
        </Button>
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none prose-sm sm:prose-base">
          <StyledContent>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </StyledContent>
        </div>
      </article>
    </div>
  );
}
