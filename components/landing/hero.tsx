import { GitBranch } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="space-y-6">
      <div className="hidden md:flex gap-2">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
          Freelancer
        </div>
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
          Technical Writer 
        </div>
      </div>

      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="block">Aayush Pagare</span>
        <span className="block mt-2 text-xl sm:text-2xl text-muted-foreground">
          Building on RAG, LLMs, TS and Next.js
        </span>
      </h1>

      <p className="max-w-2xl text-muted-foreground">
         I build high-performance web applications with Next.js and TypeScript,
        focusing on clean architecture, type safety, and seamless user
        experience. I also integrate AI agents and LLMs to enable intelligent,
        context-aware features across the stack.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button asChild size="lg">
          <Link href="/projects">View Work</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          onClick={() => {
            console.log("GitHub clicked");
            window.optimeleon?.("track", "posthog_last_fired_check");
          }}
        >
          <Link
            href="https://github.com/aayushpagare21-compcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GitBranch className="h-4 w-4" /> GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
}
