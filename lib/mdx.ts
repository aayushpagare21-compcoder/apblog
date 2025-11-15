import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "./types";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts: Post[] = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
    const slug = fileName.replace(/\.md?$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      categories: data.categories || [],
      readingTime:
        data.readingTime || Math.ceil(content.split(" ").length / 200),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    content,
    image: data?.image,
    categories: data.categories || [],
    readingTime: data.readingTime || Math.ceil(content.split(" ").length / 200),
  };
}

export async function getAllCategories(): Promise<string[]> {
  const posts = getAllPosts();
  const categoriesSet = new Set<string>();

  posts.forEach((post) => {
    post.categories.forEach((category) => categoriesSet.add(category));
  });

  return Array.from(categoriesSet);
}
