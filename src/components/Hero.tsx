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
          className="absolute bottom-0 object-cover object-top"
          style={{ top: "64px", height: "calc(100% - 64px)", width: "115%", left: "-15%" }}
        />
        {/* Right fade so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-l from-background from-25% via-background/50 via-55% to-transparent" />
        {/* Bottom fade to ground the section */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      {/* Top right: tagline */}
      <div ref={subRef} className="reveal relative z-10 self-end max-w-sm md:max-w-md text-right">
        <p className="text-muted-foreground text-lg md:text-2xl leading-relaxed font-light">
          Your music.<br />
          <em>Your vision.</em>
        </p>
      </div>

      {/* Bottom right: name */}
      <div className="relative z-10 flex flex-col items-end text-right">
        <div ref={nameRef} className="reveal">
          <h1 className="text-[10vw] md:text-[7vw] font-normal text-foreground leading-[0.9] uppercase select-none">
            Kyler<br />Chavez
          </h1>
        </div>
        <div className="w-24 h-0.5 bg-primary mt-4 ml-auto" />
      </div>

      {/* Photo credit */}
      <p className="absolute bottom-4 left-4 z-10 text-xs tracking-wider text-foreground/40">
        Photo: Jake Rosser
      </p>

      {/* Full-width divider at the bottom of the hero */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-10" />
    </section>
  );
};

export default Hero;
