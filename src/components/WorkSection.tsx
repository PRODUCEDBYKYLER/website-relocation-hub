import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { tracks } from "@/data/tracks";

type TrackInfo = { title: string; artist: string; image: string };

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const TrackCard = ({ trackId, delay }: { trackId: string; delay: number }) => {
  const [info, setInfo] = useState<TrackInfo | null>(null);
  const cardRef = useScrollReveal<HTMLAnchorElement>(delay);

  useEffect(() => {
    fetch(`https://open.spotify.com/oembed?url=https://open.spotify.com/track/${trackId}`)
      .then((r) => r.json())
      .then((data) => {
        const parts = data.title.split(" by ");
        setInfo({
          title: parts[0] ?? data.title,
          artist: parts[1] ?? "",
          image: data.thumbnail_url,
        });
      })
      .catch(() => {});
  }, [trackId]);

  return (
    <a
      ref={cardRef}
      href={`https://open.spotify.com/track/${trackId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group relative aspect-square overflow-hidden rounded-2xl block flex-1"
    >
      {info?.image ? (
        <img
          src={info.image}
          alt={info.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-secondary animate-pulse" />
      )}

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/65 transition-colors duration-400" />

      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-semibold text-sm leading-tight truncate">{info?.title}</p>
        <p className="text-white/60 text-xs mt-0.5 truncate">{info?.artist}</p>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 bg-[#1DB954] text-black text-xs font-bold px-4 py-2 rounded-full">
          <SpotifyIcon />
          Listen on Spotify
        </div>
      </div>
    </a>
  );
};

const WorkSection = ({ limit = 3 }: { limit?: number }) => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const displayTracks = tracks.slice(0, limit);

  return (
    <section id="work" className="py-24">
      <div className="w-full h-px bg-border mb-24" />

      {/* Offset LEFT: less left padding, more right breathing room */}
      <div className="pl-6 md:pl-14 pr-[8%] max-w-[1200px]">
        <div ref={headingRef} className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">My Work</p>
            <h2 className="text-3xl md:text-5xl font-normal text-foreground leading-tight">Productions</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs md:text-right">
            Produced by me in Austin, TX.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {displayTracks.map((track, i) => (
            <TrackCard key={track.id} trackId={track.id} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
