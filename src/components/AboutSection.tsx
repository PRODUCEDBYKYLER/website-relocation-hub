import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>(150);

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="w-full h-px bg-border mb-24" />

      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-0">
        {/* Left: heading + copy — padded */}
        <div ref={leftRef} className="reveal px-6 md:pl-14 md:pr-16">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight mb-8">
            The<br />Producer.
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-5">
            Based in Round Rock, Texas. Obsessed with great sound and, most importantly, having a relationship with <em>you</em>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Whether it's tracking vocals, mixing a full project, or producing a podcast — Kyler brings a collaborative, professional approach to every session.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The goal is simple: take your project and make it better than you could imagine.
          </p>
          <p className="text-primary/70 text-sm italic mt-8">
            (serious about the craft. not always serious about everything else.)
          </p>
        </div>

        {/* Right: portrait bleeds to right edge */}
        <div ref={rightRef} className="reveal reveal-right px-6 md:px-0">
          <img
            src="/headshot.jpeg"
            alt="Kyler Chavez"
            className="w-full aspect-[4/5] object-cover object-top rounded-2xl md:rounded-r-none"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
