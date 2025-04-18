import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Slider } from "../slider";

// Define the testimonial type for better type safety
type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  avatarFallback: string;
  rating: number;
  text: string;
  alt: string;
};

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aman Yadav",
      role: "Founder and CEO, Anthroholic",
      avatar: "/aman-yadav.jpg",
      avatarFallback: "AY",
      rating: 5.0,
      text: "I had the pleasure of working with Aayush on the development of AnswerWriting.com, and I couldn't be more satisfied with his work. He is highly skilled, detail-oriented, and delivered exactly what I envisioned. His technical expertise, problem-solving ability, and commitment to quality made the entire process smooth and efficient. I highly recommend Aayush to anyone looking for a reliable and talented Full Stack developer.",
      alt: "Aman Yadav's feedback for Aayush Pagare",
    },
    {
      id: 2,
      name: "Paolo Morreale",
      role: "Client on Freelancer.com",
      avatar: "/paolo-morealle.jpg",
      avatarFallback: "PM",
      rating: 4.8,
      text: "Aayush fully understood my needs. Project has been developed as required. Probably we could cooperate again in the future.",
      alt: "Paolo's feedback for Intelligent Assignment Grading Web Application",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= Math.floor(rating)
                ? "fill-primary text-primary"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    );
  };

  const testimonialCards = testimonials.map((testimonial) => (
    <Card
      key={testimonial.id}
      className="h-full overflow-hidden border-primary/20 hover:border-primary/50 transition-all"
    >
      <CardContent className="p-6 relative">
        <Avatar className="h-16 w-16 border">
          <AvatarImage src={testimonial.avatar} alt={testimonial.alt} />
          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
        </Avatar>
        <div className="pt-10 pl-6">
          <p className="text-muted-foreground italic mb-6">
            {`"${testimonial.text}"`}
          </p>
          <div className="flex items-center gap-2">
            {renderStars(testimonial.rating)}
            <span className="text-sm font-medium">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>
          <div className="mt-2">
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ));

  return (
    <section className="space-y-8 py-8">
      <h2 className="text-3xl font-bold">Client Testimonials</h2>

      <Slider
        itemsPerView={2}
        autoplayDelay={5000}
        showControls={true}
        showIndicators={true}
        className="mt-8"
      >
        {testimonialCards}
      </Slider>
    </section>
  );
}
