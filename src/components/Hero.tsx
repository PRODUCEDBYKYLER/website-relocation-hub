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
      {/* Background photo — anchored right like an editorial layout */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/pedalboard.jpg"
          alt=""
          className="w-full h-full object-cover object-[50%_top]"
        />
        {/* Left fade so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background from-20% via-background/50 via-50% to-transparent" />
        {/* Bottom fade to ground the section */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
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
          <p className="text-muted-foreground/60 text-sm tracking-[0.25em] uppercase">
            @ Redeemer Studio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
