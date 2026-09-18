import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutSection = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>(150);

  return (
    <section id="about" className="py-24 overflow-hidden">

      <div className="grid md:grid-cols-2 items-start gap-12 md:gap-0">
        {/* Left: heading + copy — padded */}
        <div ref={leftRef} className="reveal px-6 md:pl-14 md:pr-16">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight mb-8">
            The<br />Producer.
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-5">
            Based in Round Rock, Texas and obsessed with everything production.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Whether it's tracking vocals, mixing a full project — Kyler brings a collaborative, professional approach to every session.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            I have never given up on a song. My promise to you is that we will try every combination to make sure the final production is something you are proud of, and fits your voice as an artist.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal is simple — take your signature voice and craft a production that reflects your voice and the emotion of the song.
          </p>
        </div>

        {/* Right: portrait with editorial gradient bleeds */}
        <div ref={rightRef} className="reveal reveal-right relative overflow-hidden min-h-[520px] md:min-h-[700px]">
          <img
            src="/headshot.jpeg"
            alt="Kyler Chavez"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 28%" }}
          />
          {/* Left fade — blend into text column */}
          <div className="absolute inset-0 bg-gradient-to-r from-background from-[2%] via-background/10 via-20% to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 via-25% to-transparent" />
          {/* Top fade — edge blend */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 via-[20%] to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
