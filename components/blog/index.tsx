"use client";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import PostCard from "@/components/post-card";
import { Post } from "@/lib/types";

// Masked reveal component
const RevealText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 75, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Masked reveal for grid items with staggered animation
const RevealCard = ({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.1 + index * 0.1, // Staggered delay based on index
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const BlogComponent = ({ posts }: { posts: Post[] }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-800 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container py-12 max-w-4xl mx-auto px-4">
        <RevealText>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Blog</h1>
        </RevealText>

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post, index) => (
              <RevealCard key={post.slug} index={index}>
                <PostCard post={post} />
              </RevealCard>
            ))}
          </div>
        ) : (
          <RevealText className="text-center py-12">
            <p className="text-muted-foreground">
              No posts found in this category.
            </p>
          </RevealText>
        )}
      </div>
    </>
  );
};
