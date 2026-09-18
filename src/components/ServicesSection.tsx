import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    num: "01",
    title: "Collaborator",
    description: "Whether simple lyric changes or finding the right tempo, I'll make sure your song without production will be the best that it can.",
    aside: "your song, elevated",
    href: null,
  },
  {
    num: "02",
    title: "Production",
    description: "Full-service music production at my studio space in Austin, Texas. Your ideas. Your voice.",
    aside: "I center production around your voice as an artist",
    href: null,
  },
  {
    num: "03",
    title: "Mixing",
    description: "Balanced, polished mixes that bring clarity and punch to every track.",
    aside: "Mixes that match your music",
    href: null,
  },
];

const ServiceRow = ({ service, delay }: { service: typeof services[0]; delay: number }) => {
  const rowRef = useScrollReveal<HTMLDivElement>(delay);
  const inner = (
    <>
      <p className="hidden md:block text-primary/0 group-hover:text-primary/60 text-xs italic text-left max-w-[200px] transition-colors duration-300">
        {service.aside}
      </p>
      <div className="text-right">
        <h3 className="text-2xl md:text-4xl font-normal text-foreground group-hover:-translate-x-2 transition-transform duration-300 leading-tight">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-base mt-2 max-w-md leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300 ml-auto">
          {service.description}
        </p>
      </div>
      <span className="text-xs font-mono text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 pt-1 text-right">
        {service.num}
      </span>
    </>
  );

  const className = "reveal group border-b border-border/40 hover:border-primary/40 py-8 md:py-10 grid grid-cols-[1fr_2.5rem] md:grid-cols-[auto_1fr_2.5rem] items-start md:items-center gap-4 md:gap-8 transition-colors duration-300";

  if (service.href) {
    return (
      <a ref={rowRef as React.Ref<HTMLAnchorElement>} href={service.href} className={className}>
        {inner}
      </a>
    );
  }

  return (
    <div ref={rowRef} className={`${className} cursor-default`}>
      {inner}
    </div>
  );
};

const ServicesSection = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-24">
      {/* Offset RIGHT: heading and rows mirror Productions (right-oriented) */}
      <div className="pl-[12%] md:pl-[18%] pr-6 md:pr-14">
        <div ref={headingRef} className="reveal flex flex-col md:flex-row-reverse md:items-end justify-between mb-16 gap-4">
          <div className="text-right">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">What I Do</p>
            <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight">Services</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Production for your song start-to-finish.
          </p>
        </div>

        <div className="border-t border-border/40">
          {services.map((service, i) => (
            <ServiceRow key={service.num} service={service} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
