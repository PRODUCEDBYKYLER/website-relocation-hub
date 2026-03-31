import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const leftRef = useScrollReveal<HTMLDivElement>(150);
  const rightRef = useScrollReveal<HTMLDivElement>(250);
  const studioRef = useScrollReveal<HTMLDivElement>(100);

  return (
    <section id="about" className="py-24 overflow-hidden">
      {/* Solid divider */}
      <div className="w-full h-px bg-border mb-24" />

      <div className="container mx-auto max-w-5xl px-6 md:px-14">
        <div ref={headingRef} className="reveal mb-16">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            The<br />Producer.
          </h2>
        </div>
      </div>

      {/* Asymmetric: text left, portrait bleeds to right edge */}
      <div className="grid md:grid-cols-2 items-center mb-16">
        <div ref={leftRef} className="reveal px-6 md:pl-14 md:pr-12 pb-12 md:pb-0">
          <p className="text-foreground/80 text-lg leading-relaxed mb-6">
            Based in Round Rock, Texas. Obsessed with great sound and, most importantly, having a relationship with <em>you</em>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With a keen ear for detail and years of experience, Kyler brings a collaborative, professional approach to every session — whether it's tracking vocals, mixing a full project, or producing a podcast from the ground up.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The goal is simple: take your project and make it better than you could imagine.
          </p>
          <p className="text-primary/70 text-sm italic mt-8">
            (serious about the craft. not always serious about everything else.)
          </p>
        </div>

        {/* Portrait — bleeds to right edge */}
        <div ref={rightRef} className="reveal reveal-right px-6 md:pr-0">
          <img
            src="/headshot.3 copy.jpeg"
            alt="Kyler Chavez"
            className="w-full aspect-[4/5] object-cover object-top rounded-2xl md:rounded-r-none"
          />
        </div>
      </div>

      {/* Studio photo — full bleed with olive left border accent */}
      <div ref={studioRef} className="reveal container mx-auto max-w-5xl px-6 md:px-14">
        <div className="relative rounded-2xl overflow-hidden border border-border/40">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
          <img
            src="/studio-4.jpg"
            alt="In the studio"
            className="w-full object-cover max-h-[420px]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
          <p className="absolute bottom-4 left-6 text-xs tracking-[0.3em] uppercase text-foreground/60">In the studio</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
