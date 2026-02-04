"use client";

import { motion, useScroll } from "framer-motion";
import React from "react";
import Hero from "@/components/landing/hero";
import FreelanceServices from "@/components/landing/freelance";
import ClientTestimonials from "@/components/landing/clients";
import FeaturedProjects from "@/components/landing/featured-projects";
import LatestPosts from "@/components/landing/latest-posts";
import Skills from "@/components/landing/skills";
import { Button } from "@/components/ui/button";
import { Post, Project } from "@/lib/types";
import { RevealSection } from "../reveal-section";
import HeroImage from "./hero-image";

export const LandingComponent = ({
  featuredProjects,
  latestPosts,
}: {
  featuredProjects: Project[];
  latestPosts: Post[];
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-800 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-9 md:space-y-18">
         <HeroImage />

      
         <RevealSection delay={0.1}>
          <FreelanceServices />
        </RevealSection>

        <RevealSection delay={0.1}>
          <FeaturedProjects featuredProjects={featuredProjects} />
        </RevealSection>

        <RevealSection delay={0.1}>
          <ClientTestimonials />
        </RevealSection>

        <RevealSection delay={0.1}>
          <LatestPosts latestPosts={latestPosts} />
        </RevealSection>

        <RevealSection delay={0.1}>
          <Skills />
        </RevealSection>

         {/* <RevealSection>
          <Hero />
        </RevealSection>   */}

        {/* Contact CTA - Simple and direct */}
        <RevealSection delay={0.1}>
          <section className="border-t pt-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">{`Let's Build Something Together`}</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {`Have a project in mind or want to discuss tech? I'm currently
                available for freelance work and collaborations.`}
              </p>
              <a href="mailto:aayushpagare21@gmail.com">
                <Button size="lg" className="mt-4 cursor-pointer">
                  Get in touch
                </Button>
              </a>
            </div>
          </section>
        </RevealSection>
      </div>
    </>
  );
};
