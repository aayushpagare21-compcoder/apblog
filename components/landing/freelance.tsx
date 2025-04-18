import { BotIcon, Monitor } from "lucide-react";
import { Slider } from "../slider";
import { Card, CardContent } from "../ui/card";

const serviceItems = [
  {
    title: "Full Stack Development",
    description:
      "I build custom websites and web applications using modern technologies, always focusing on performance and delivering the best user experience.",
    icon: <Monitor className="h-8 w-8 mb-4 text-primary" />,
  },
  {
    icon: <BotIcon className="h-8 w-8 mb-4 text-primary" />,
    title: "AI Agent Development",
    description:
      "I design and implement AI agents that automate tasks, enhance user interactions, and provide context-aware responses. Using tools like LangChain and LLMs, I create efficient, dynamic, and tailored AI solutions to meet your needs.",
  },
];

export default function FreelanceServices() {
  // Create card components for each service
  const serviceCards = serviceItems.map((service, index) => (
    <Card
      key={index}
      className="h-full overflow-hidden border-primary/20 hover:border-primary/50 transition-all"
    >
      <CardContent className="p-6">
        {service.icon}
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  ));

  return (
    <section className="w-full space-y-8 py-8">
      <h2 className="text-2xl font-bold">Services</h2>

      {/* Remove the unnecessary grid container that was conflicting with the slider */}
      <div className="w-full">
        <Slider itemsPerView={2} showControls={true} showIndicators={true}>
          {serviceCards}
        </Slider>
      </div>
    </section>
  );
}
