import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-between gap-4 md:flex-row md:h-16">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} aayushpagare.com All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/aayushpagare21-compcoder"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/_imaayush21_"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aayush-pagare-5817a81aa/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
