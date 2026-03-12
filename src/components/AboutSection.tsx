const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="aspect-[4/5] rounded-2xl bg-secondary/60 border border-border/50 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Photo</span>
          </div>

          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Producer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based in Round Rock, Texas, Kyler Chavez is an audio producer passionate about
              crafting high-quality sound for artists, podcasters, and creators of all kinds.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a keen ear for detail and years of experience behind the board, Kyler brings
              a collaborative, professional approach to every session — whether it's tracking
              vocals, mixing a full project, or producing a podcast from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
