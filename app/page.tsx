import Hero from "@/components/landing/hero";
import FreelanceServices from "@/components/landing/freelance";
import ClientTestimonials from "@/components/landing/clients";
import FeaturedProjects from "@/components/landing/featured-projects";
import LatestPosts from "@/components/landing/latest-posts";
import Skills from "@/components/landing/skills";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-9 md:space-y-18">
      <Hero />
      <FreelanceServices />
      <FeaturedProjects />
      <ClientTestimonials />
      <LatestPosts />
      <Skills />

      {/* Contact CTA - Simple and direct */}
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
    </div>
  );
}
