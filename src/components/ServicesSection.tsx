import { Mic, Sliders, Disc3, Podcast } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Mic,
    title: "Recording",
    description: "Professional studio recording with top-tier equipment and acoustics tailored to your project.",
  },
  {
    icon: Sliders,
    title: "Mixing",
    description: "Balanced, polished mixes that bring clarity and punch to every track.",
  },
  {
    icon: Disc3,
    title: "Mastering",
    description: "Final-stage mastering for streaming, vinyl, or any distribution format.",
  },
  {
    icon: Podcast,
    title: "Podcast Production",
    description: "End-to-end podcast production — from recording to editing and delivery.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">What I Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <CardContent className="p-8">
                <service.icon className="text-primary mb-4" size={28} />
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
