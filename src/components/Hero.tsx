import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Hero = () => {
  const nameRef = useScrollReveal<HTMLDivElement>(100);
  const subRef = useScrollReveal<HTMLDivElement>(300);
  const ctaRef = useScrollReveal<HTMLDivElement>(500);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-14 pt-28 pb-14 overflow-hidden"
    >
      {/* Pedalboard background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/pedalboard.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Top bar */}

      <div className="relative z-10 flex justify-between items-start">
        <p className="text-primary text-sm tracking-[0.35em] uppercase leading-tight">Producer @<br />Redeemer Studio</p>
        <p className="text-muted-foreground text-xs text-right hidden md:block">
          Round Rock, TX<br />
          <span className="italic">(yes, near Austin — no, not the same thing)</span>
        </p>
      </div>

      {/* Middle offset tagline */}
      <div ref={subRef} className="reveal relative z-10 self-end max-w-sm md:max-w-md text-right">
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
          Your ideas,<br />
          <em>your vision.</em>
        </p>
      </div>

      {/* Big name + CTA */}
      <div className="relative z-10">
        <div ref={nameRef} className="reveal">
          <h1 className="text-[9vw] md:text-[7vw] font-normal text-foreground leading-[0.9] uppercase select-none">
            Kyler<br />Chavez
          </h1>
        </div>

        {/* Solid accent line under name */}
        <div className="w-24 h-0.5 bg-primary mt-4 mb-6" />

        <div ref={ctaRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-muted-foreground/60 text-xs tracking-[0.25em] uppercase">
            Round Rock, TX
          </p>
          <div className="flex items-center gap-4">
<Button asChild size="lg" className="rounded-full px-10 text-base font-medium">
              <a href="#contact">Book Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
