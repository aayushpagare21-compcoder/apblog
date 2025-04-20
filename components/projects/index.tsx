"use client";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import { Project } from "@/lib/types";
import ProjectCard from "../project-card";

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

export const ProjectsComponent = ({ projects }: { projects: Project[] }) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-800 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container py-12 max-w-4xl mx-auto px-4">
        <RevealText>
          <h1 className="text-3xl font-bold tracking-tight mb-6">Projects</h1>
        </RevealText>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <RevealCard key={project.slug}>
              <ProjectCard project={project} />
            </RevealCard>
          ))}
        </div>
      </div>
    </>
  );
};
