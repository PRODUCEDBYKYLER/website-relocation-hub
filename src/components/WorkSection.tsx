const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">My Work</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Productions</h2>

        <div className="flex justify-center">
          <iframe
            title="Kyler Chavez Productions"
            src="https://open.spotify.com/embed/playlist/5FYo83Ha2GrQIYJvSbdbQa?utm_source=generator&theme=0"
            width="100%"
            height="600"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl max-w-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
