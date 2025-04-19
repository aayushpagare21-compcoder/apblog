export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  categories: string[];
  readingTime: number;
  image?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  content: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
