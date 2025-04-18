import {
  BotIcon,
  Code,
  GitBranch,
  HelpCircle,
  Layout,
  Terminal,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function Skills() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Tech Stack</h2>

      <Tabs defaultValue="backend" className="w-full">
        <TabsList className="grid grid-cols-4 sm:grid-cols-6 mb-8">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>

          <TabsTrigger value="database">Databases</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
          <TabsTrigger value="other">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="frontend" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Next.js", "React.js", "Tailwind", "ShadCN", "Material UI"].map(
              (tech) => (
                <div
                  key={tech}
                  className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
                >
                  <Code className="h-6 w-6 mb-2 text-primary" />
                  <span className="font-medium">{tech}</span>
                </div>
              ),
            )}
          </div>
        </TabsContent>

        <TabsContent value="backend" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Nest.js", "Node.js", "Express.js"].map((tech) => (
              <div
                key={tech}
                className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
              >
                <Terminal className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["LangchainJS"].map((tech) => (
              <div
                key={tech}
                className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
              >
                <BotIcon className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "PostgreSQL",
              "MongoDB",
              "Snowflake",
              "Prisma",
              "Mongoose",
              "DBT Cloud",
            ].map((tech) => (
              <div
                key={tech}
                className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
              >
                <Layout className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="devops" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Vercel", "Docker", "AWS EC2", "Neon"].map((tech) => (
              <div
                key={tech}
                className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
              >
                <GitBranch className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="other" className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "PhonePe Gateway",
              "Jest",
              "React Testing Library",
              "AWS Textract",
              "n8n",
              "Slack API",
              "Redis",
              "RabbitMQ",
            ].map((tech) => (
              <div
                key={tech}
                className="p-4 border rounded-lg bg-card hover:border-primary/50 transition-all flex flex-col items-center text-center hover:shadow-sm"
              >
                <HelpCircle className="h-6 w-6 mb-2 text-primary" />
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
