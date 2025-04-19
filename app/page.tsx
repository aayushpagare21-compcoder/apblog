import Hero from "@/components/landing/hero";
import FreelanceServices from "@/components/landing/freelance";
import ClientTestimonials from "@/components/landing/clients";
import FeaturedProjects from "@/components/landing/featured-projects";
import LatestPosts from "@/components/landing/latest-posts";
import Skills from "@/components/landing/skills";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Aayush Pagare – Full Stack Developer",
  description:
    "A Full stack engineer with 2 years of experience. Skilled at building web-applications end-to-end from backend to frontend, integrating AI and deploying it.",
  openGraph: {
    title:
      "Aayush Pagare – Full Stack Developer, Freelancer and a Technical Writer",
    description:
      "A Full stack engineer with 2 years of experience. Skilled at building web-applications end-to-end from backend to frontend, integrating AI and deploying it.",
    url: "https://aayushpagare.com",
    siteName: "Aayush Pagare",
    images: [
      {
        url: "https://aayushpagare.com/aayushpagare.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Aayush Pagare Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aayush Pagare – Full Stack Developer",
    description:
      "A Full stack engineer with 2 years of experience. Skilled at building web-applications end-to-end from backend to frontend, integrating AI and deploying it.",
    images: ["https://aayushpagare.com/aayush-pagare.jpg"], // Replace with your image
    creator: "@_imaayush21_",
  },
  metadataBase: new URL("https://aayushpagare.com"),
};

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
