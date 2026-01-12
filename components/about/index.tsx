"use client";

import AayushImage from "@/public/aayush-pagare.jpeg";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarIcon,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Building,
} from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const metadata = {
  title: "About – Aayush Pagare | Full Stack Developer & AI Engineer",
  description:
    "Learn about Aayush Pagare, a Full Stack Engineer with 2 years of experience in building end-to-end web applications, AI integration, and delivering production-ready systems.",
  openGraph: {
    title: "About – Aayush Pagare | Full Stack Developer & AI Engineer",
    description:
      "Discover Aayush Pagare's journey as a Full Stack Engineer specializing in building web applications, integrating AI technologies, and delivering scalable solutions.",
    url: "https://aayushpagare.com/about",
    siteName: "Aayush Pagare",
    images: [
      {
        url: "https://aayushpagare.com/aayush-pagare.jpeg",
        width: 1200,
        height: 630,
        alt: "Aayush Pagare About Page",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About – Aayush Pagare | Full Stack Developer & AI Engineer",
    description:
      "Explore the professional background of Aayush Pagare, a Full Stack Engineer with expertise in AI integration and web development.",
    images: ["https://aayushpagare.com/aayush-pagare.jpeg"],
    creator: "@_imaayush21_",
  },
  metadataBase: new URL("https://aayushpagare.com"),
};

// Masked reveal component
const RevealText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

   useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && typeof (window as any).optimeleon === "function") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).optimeleon("track", "about_page_custom_event");
    }
  }, []);

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

// Masked reveal for lists
const RevealList = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();

  const experienceData = [
    {
      position: "Founding Engineer",
      company: "Anthroholic",
      type: "Full-time",
      location: "Delhi, India · Remote",
      duration: "Jan 2025 - Present · 4 mos",
      responsibilities: [
        "Designed & built the entire platform from scratch, handling full-stack development (frontend, backend, and AI integration)",
        "Owned the full product lifecycle—from conceptualization to execution—ensuring scalability, performance, and reliability",
        "Collaborated with educators & students, integrating their feedback to refine and optimize the platform",
        "Worked directly with the founder, aligning technology with business strategy and making key product decisions",
        "Delivered the fully functional platform in just 3 months, balancing speed and execution with high-quality standards",
      ],
    },
    {
      position: "Junior Software Developer",
      company: "MatlabInfotech",
      type: "Full-time",
      location: "Vadodara, Gujarat, India",
      duration: "Feb 2023 - Nov 2024 · 1 yr 8 mos",
      responsibilities: [
        "Worked on a fintech project as part of an Agile team, successfully implementing various user stories",
        "Explored tools such as Customer.io, Census, DBT Cloud, and Snowflake to enhance data workflows",
        "Gained exposure to financial technology integrations like Orum and Plaid",
        "Applied various design principles and coding standards, deepening understanding of low-level system design",
        "Developed workflow automation projects with Slack app development using tools like slack-bolt and N8N",
        "Implemented leave permission automation and resume parsing automation systems",
      ],
    },
  ];

  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Gujarat Technological University",
      duration: "2019 - 2023",
      achievements: "9.44 CPI",
    },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-800 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container py-8 md:py-12 max-w-4xl mx-auto px-4">
        {/* Hero section with masked reveal */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Profile image */}
          <RevealText className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden relative shadow-md">
            <Image
              src={AayushImage}
              alt="Aayush Pagare"
              loading="lazy"
              placeholder="blur"
              fill
              sizes="(max-width: 768px) 160px, 224px"
              className="object-cover"
              priority
            />
          </RevealText>

          {/* Profile information */}
          <div className="text-center md:text-left flex-grow">
            <RevealText>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                Aayush Pagare
              </h1>
            </RevealText>

            <RevealText>
              <h2 className="text-lg md:text-xl text-muted-foreground mb-4">
                Full Stack Developer & AI Engineer
              </h2>
            </RevealText>

            <RevealText>
              <div className="prose max-w-none">
                <p className="text-base md:text-lg leading-relaxed">
                  I am a Full Stack Engineer with 2 years of experience
                  specializing in building web applications end-to-end from
                  backend to frontend, integrating AI, and deploying
                  production-ready systems.
                </p>
              </div>
            </RevealText>
          </div>
        </div>

        <section className="mb-8 md:mb-12">
          <RevealText>
            <div className="prose max-w-none">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                What I Offer:
              </h3>
            </div>
          </RevealText>

          <ul className="space-y-2">
            <RevealList delay={0.1}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>End-to-End Development:</strong> I handle everything
                  from backend APIs to sleek frontend interfaces.
                </span>
              </li>
            </RevealList>

            <RevealList delay={0.2}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>AI Integration:</strong> Seamlessly integrate AI
                  technologies to enhance your product.
                </span>
              </li>
            </RevealList>

            <RevealList delay={0.3}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>Rapid Prototyping:</strong> I specialize in quickly
                  building MVPs or prototypes to bring your ideas to life.
                </span>
              </li>
            </RevealList>

            <RevealList delay={0.4}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>Production-Grade Expertise:</strong>{" "}
                  {`I'm experienced in
                  working on live, production-ready systems.`}
                </span>
              </li>
            </RevealList>
          </ul>

          <RevealText className="mt-6">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              How I Work:
            </h3>
          </RevealText>

          <ul className="space-y-2">
            <RevealList delay={0.1}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>Test-Driven Development:</strong> Writing reliable and
                  maintainable code is my priority.
                </span>
              </li>
            </RevealList>

            <RevealList delay={0.2}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>Collaboration:</strong> I thrive in team environments
                  through PR reviews, pair programming, and clear communication.
                </span>
              </li>
            </RevealList>

            <RevealList delay={0.3}>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>
                  <strong>Ownership & Delivery:</strong> I take full
                  responsibility for my work and am committed to delivering
                  high-quality results.
                </span>
              </li>
            </RevealList>
          </ul>
        </section>

        <section className="mb-8 md:mb-12">
          <RevealText>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
              <Briefcase className="mr-2 h-5 w-5 md:h-6 md:w-6 text-primary" />
              Professional Experience
            </h2>
          </RevealText>

          {experienceData.map((exp, index) => (
            <RevealList key={index} delay={index * 0.2}>
              <Card className="mb-4 md:mb-6">
                <CardHeader className="pb-2 px-4 md:px-6 pt-4 md:pt-6">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <CardTitle className="text-lg md:text-xl">
                      {exp.position}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="flex items-center text-xs md:text-sm"
                    >
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      {exp.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <p className="text-muted-foreground font-medium text-sm md:text-base">
                      {exp.company} · {exp.type}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </CardHeader>
                <CardContent className="px-4 md:px-6 py-2 md:py-3">
                  <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealList>
          ))}
        </section>

        <section className="mb-8">
          <RevealText>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 md:h-6 md:w-6 text-primary" />
              Education
            </h2>
          </RevealText>

          {educationData.map((edu, index) => (
            <RevealList key={index} delay={index * 0.2}>
              <Card className="mb-4 md:mb-6">
                <CardHeader className="pb-2 px-4 md:px-6 pt-4 md:pt-6">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <CardTitle className="text-lg md:text-xl">
                      {edu.degree}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="flex items-center text-xs md:text-sm"
                    >
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      {edu.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-medium text-sm md:text-base">
                    {edu.institution}
                  </p>
                  {edu.achievements && (
                    <p className="text-xs md:text-sm font-medium mt-1">
                      Achievement: {edu.achievements}
                    </p>
                  )}
                </CardHeader>
              </Card>
            </RevealList>
          ))}
        </section>
      </div>
    </>
  );
}
