"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory?: string;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
}: CategoryFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={pathname}
        className={cn(
          "inline-flex items-center rounded-md border px-3 py-1 text-sm",
          !selectedCategory
            ? "bg-primary text-primary-foreground"
            : "bg-background hover:bg-muted",
        )}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`${pathname}?${createQueryString("category", category)}`}
          className={cn(
            "inline-flex items-center rounded-md border px-3 py-1 text-sm",
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-muted",
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
