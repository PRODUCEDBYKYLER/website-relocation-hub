import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { tracks } from "@/data/tracks";

type TrackInfo = { title: string; artist: string; image: string };

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// Every 4th card (0-indexed) is portrait-tall to create the masonry stagger
const cardAspect = (i: number) => (i % 4 === 0 ? "aspect-[3/4]" : "aspect-square");

const MasonryCard = ({ trackId, index }: { trackId: string; index: number }) => {
  const [info, setInfo] = useState<TrackInfo | null>(null);
  const cardRef = useScrollReveal<HTMLAnchorElement>(index * 60);

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
      className={`reveal group relative overflow-hidden rounded-2xl block mb-4 break-inside-avoid ${cardAspect(index)}`}
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

      {/* Persistent bottom gradient for legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Hover overlay darkens the whole card */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Track info always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-semibold text-sm leading-tight truncate">{info?.title ?? "..."}</p>
        <p className="text-white/60 text-xs mt-0.5 truncate">{info?.artist}</p>
      </div>

      {/* Spotify badge — fades in on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-1.5 bg-[#1DB954] text-black text-xs font-bold px-3 py-1.5 rounded-full">
          <SpotifyIcon />
          Listen
        </div>
      </div>
    </a>
  );
};

const ProductionsMasonry = () => (
  <section className="px-6 pb-24">
    <div className="container mx-auto max-w-6xl">
      <div className="columns-2 md:columns-3 gap-4">
        {tracks.map((track, i) => (
          <MasonryCard key={track.id} trackId={track.id} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductionsMasonry;
