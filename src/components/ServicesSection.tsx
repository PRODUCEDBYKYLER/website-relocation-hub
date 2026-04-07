import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    num: "01",
    title: "Production",
    description: "Full-service music production — from the first idea to a finished record, built around your sound.",
    aside: "where it all starts",
    href: null,
  },
  {
    num: "02",
    title: "Mixing",
    description: "Balanced, polished mixes that bring clarity and punch to every track.",
    aside: "Mixes that match your music",
    href: null,
  },
  {
    num: "03",
    title: "Podcast Production",
    description: "End-to-end podcast production — from recording to editing and delivery.",
    aside: "your voice for your audience",
    href: "/podcast-production",
  },
];

const ServiceRow = ({ service, delay }: { service: typeof services[0]; delay: number }) => {
  const rowRef = useScrollReveal<HTMLDivElement>(delay);
  const inner = (
    <>
      <span className="text-xs font-mono text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 pt-1">
        {service.num}
      </span>
      <div>
        <h3 className="text-2xl md:text-4xl font-normal text-foreground group-hover:translate-x-2 transition-transform duration-300 leading-tight">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-base mt-2 max-w-md leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
      </div>
      <p className="hidden md:block text-primary/0 group-hover:text-primary/60 text-xs italic text-right max-w-[200px] transition-colors duration-300">
        {service.aside}
      </p>
    </>
  );

  const className = "reveal group border-b border-border/40 hover:border-primary/40 py-8 md:py-10 grid grid-cols-[2.5rem_1fr] md:grid-cols-[2.5rem_1fr_auto] items-start md:items-center gap-4 md:gap-8 transition-colors duration-300";

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
    <section id="services" className="py-24 px-6 md:px-14">
      <div className="container mx-auto max-w-5xl">
        <div ref={headingRef} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">What I Do</p>
            <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight">Services</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs md:text-right">
            Every project gets the same attention — whether it's your debut single or your Magnum Opus. I want to see your vision come to life.
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
