import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarIcon,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Aayush Pagare",
  description:
    "Full Stack Developer with experience in end-to-end development, AI integration, and rapid prototyping",
};

export default function AboutPage() {
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
      duration: "Aug 2023 - Nov 2024 · 1 yr 4 mos",
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
    <div className="container py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold tracking-tight mb-6">About Me</h1>

      <section className="mb-12">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-4">
            I am a Full Stack Engineer with 2 years of experience specializing
            in building web applications end-to-end from backend to frontend,
            integrating AI, and deploying production-ready systems.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">What I Offer:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>End-to-End Development:</strong> I handle everything
                from backend APIs to sleek frontend interfaces.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>AI Integration:</strong> Seamlessly integrate AI
                technologies to enhance your product.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>Rapid Prototyping:</strong> I specialize in quickly
                building MVPs or prototypes to bring your ideas to life.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>Production-Grade Expertise:</strong>{" "}
                {`I'm experienced in
                working on live, production-ready systems.`}
              </span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">How I Work:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>Test-Driven Development:</strong> Writing reliable and
                maintainable code is my priority.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>Collaboration:</strong> I thrive in team environments
                through PR reviews, pair programming, and clear communication.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
              <span>
                <strong>Ownership & Delivery:</strong> I take full
                responsibility for my work and am committed to delivering
                high-quality results.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Briefcase className="mr-2 h-6 w-6 text-primary" />
          Professional Experience
        </h2>

        {experienceData.map((exp, index) => (
          <Card key={index} className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <CardTitle className="text-xl">{exp.position}</CardTitle>
                <Badge variant="outline" className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  {exp.duration}
                </Badge>
              </div>
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4 text-muted-foreground" />
                <p className="text-muted-foreground font-medium">
                  {exp.company} · {exp.type}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <GraduationCap className="mr-2 h-6 w-6 text-primary" />
          Education
        </h2>

        {educationData.map((edu, index) => (
          <Card key={index} className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{edu.degree}</CardTitle>
                <Badge variant="outline" className="flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  {edu.duration}
                </Badge>
              </div>
              <p className="text-muted-foreground font-medium">
                {edu.institution}
              </p>
              {edu.achievements && (
                <p className="text-sm font-medium mt-1">
                  Achievement: {edu.achievements}
                </p>
              )}
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
