/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-file @typescript-eslint/no-explicit-any
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiLangchain,
  SiPostgresql,
  SiMongodb,
  SiSnowflake,
  SiPrisma,
  SiMongoose,
  SiDbt,
  SiVercel,
  SiDocker,
  SiPhonepe,
  SiJest,
  SiTestinglibrary,
  SiSlack,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";
import { FiServer, FiCode, FiBox } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// Map of technologies to their specific icons
const techIcons: Record<string, any> = {
  "Next.js": SiNextdotjs,
  "React.js": SiReact,
  Tailwind: SiTailwindcss,
  ShadCN: FiCode,
  "Material UI": FiCode,
  "Nest.js": SiNestjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  LangchainJS: SiLangchain,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Snowflake: SiSnowflake,
  Prisma: SiPrisma,
  Mongoose: SiMongoose,
  "DBT Cloud": SiDbt,
  Vercel: SiVercel,
  Docker: SiDocker,
  "AWS EC2": FiCode,
  Neon: FiCode,
  "PhonePe Gateway": SiPhonepe,
  Jest: SiJest,
  "React Testing Library": SiTestinglibrary,
  "AWS Textract": FiCode,
  n8n: FiServer,
  "Slack API": SiSlack,
  Redis: SiRedis,
  RabbitMQ: SiRabbitmq,
};

// Function to get icon for a technology
const TechIcon = ({ tech }: { tech: string }) => {
  const Icon = techIcons[tech] || FiBox;
  return <Icon className="h-6 w-6 mb-2 text-primary" />;
};

export default function Skills() {
  const categories = {
    frontend: ["Next.js", "React.js", "Tailwind", "ShadCN", "Material UI"],
    backend: ["Nest.js", "Node.js", "Express.js"],
    ai: ["LangchainJS"],
    database: [
      "PostgreSQL",
      "MongoDB",
      "Snowflake",
      "Prisma",
      "Mongoose",
      "DBT Cloud",
    ],
    devops: ["Vercel", "Docker", "AWS EC2", "Neon"],
    other: [
      "PhonePe Gateway",
      "Jest",
      "React Testing Library",
      "AWS Textract",
      "n8n",
      "Slack API",
      "Redis",
      "RabbitMQ",
    ],
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>

      <Tabs defaultValue="frontend" className="w-full">
        <div className="overflow-x-auto pb-2">
          <TabsList className="grid min-w-max grid-cols-6 mb-4 md:mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="database">Databases</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="other">Others</TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(categories).map(([category, technologies]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="p-3 md:p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
                >
                  <TechIcon tech={tech} />
                  <span className="font-medium text-sm md:text-base">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
