import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="animate-float-delayed absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">Audio Producer · Round Rock, TX</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Kyler Chavez
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-10">
          Recording, mixing & mastering — bringing your sound to life.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-full px-8 text-base font-medium"
        >
          <a href="#contact">Book a Session</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
