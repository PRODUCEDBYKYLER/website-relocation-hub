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
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[130px]" />
        <div className="animate-float-delayed absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-[160px]" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-start">
        <p className="text-primary text-lg md:text-2xl tracking-[0.35em] uppercase">Audio Producer</p>
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
          <h1 className="text-[11vw] md:text-[9vw] font-bold text-foreground leading-[0.85] tracking-tight uppercase select-none">
            Kyler<br />Chavez
          </h1>
        </div>

        {/* Solid accent line under name */}
        <div className="w-24 h-0.5 bg-primary mt-4 mb-6" />

        <div ref={ctaRef} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="text-muted-foreground/60 text-xs tracking-[0.25em] uppercase">
            Est. Round Rock, TX
          </p>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground/50 text-xs italic hidden md:block">
              (your laptop mic called — it's sorry)
            </span>
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
