import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const BEFORE_URL =
  "https://cdn.samply.app/users/JTpwJe9D98fWz5L0x3Eoo4nhx4C2/files/f348dd28-12bc-4472-ab54-2d6355d8294a/output/aac256k@output.mp4";
const AFTER_URL =
  "https://cdn.samply.app/users/JTpwJe9D98fWz5L0x3Eoo4nhx4C2/files/e7bcb8e2-d9f7-44c0-a9f5-3d4eac629ccc/output/aac256k@output.mp4";

const processTags = [
  "Room noise removed",
  "EQ applied",
  "Compression",
  "Normalized for loudness",
];

const BeforeAfterPlayer = () => {
  const [isAfter, setIsAfter] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const beforeRef = useRef<HTMLAudioElement>(null);
  const afterRef = useRef<HTMLAudioElement>(null);
  const isAfterRef = useRef(false);

  useEffect(() => {
    isAfterRef.current = isAfter;
  }, [isAfter]);

  useEffect(() => {
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    const onTimeUpdate = (e: Event) => {
      const target = e.target as HTMLAudioElement;
      const activeIsAfter = isAfterRef.current;
      const isActive =
        (activeIsAfter && target === after) ||
        (!activeIsAfter && target === before);
      if (isActive) {
        setProgress((target.currentTime / target.duration) * 100 || 0);
      }
    };

    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    before.addEventListener("timeupdate", onTimeUpdate);
    after.addEventListener("timeupdate", onTimeUpdate);
    before.addEventListener("ended", onEnded);
    after.addEventListener("ended", onEnded);

    return () => {
      before.removeEventListener("timeupdate", onTimeUpdate);
      after.removeEventListener("timeupdate", onTimeUpdate);
      before.removeEventListener("ended", onEnded);
      after.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const active = isAfterRef.current ? afterRef.current : beforeRef.current;
    if (!active) return;
    if (active.paused) {
      active.play();
      setIsPlaying(true);
    } else {
      active.pause();
      setIsPlaying(false);
    }
  };

  const handleToggle = (switchToAfter: boolean) => {
    if (switchToAfter === isAfterRef.current) return;
    const before = beforeRef.current;
    const after = afterRef.current;
    if (!before || !after) return;

    const active = isAfterRef.current ? after : before;
    const next = isAfterRef.current ? before : after;
    const currentTime = active.currentTime;
    const wasPlaying = !active.paused;

    active.pause();
    next.currentTime = currentTime;
    setIsAfter(switchToAfter);

    if (wasPlaying) {
      next.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const active = isAfterRef.current ? afterRef.current : beforeRef.current;
    if (!active) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    active.currentTime = pct * active.duration;
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">
          Hear the Difference
        </p>
        <h2 className="font-['Tanker'] text-3xl md:text-4xl text-center text-foreground mb-3">
          Before & After
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-12">
          Real audio from a real session. Toggle between raw and processed.
        </p>

        <div className="border border-border/60 rounded-2xl p-8 md:p-10 bg-secondary/10">
          {/* Hidden audio elements */}
          <audio ref={beforeRef} src={BEFORE_URL} preload="auto" />
          <audio ref={afterRef} src={AFTER_URL} preload="auto" />

          {/* Before / After toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex bg-secondary/60 rounded-full p-1 gap-1">
              <button
                onClick={() => handleToggle(false)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  !isAfter
                    ? "bg-secondary border border-border text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Before
              </button>
              <button
                onClick={() => handleToggle(true)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  isAfter
                    ? "bg-primary text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                After
              </button>
            </div>
          </div>

          {/* Status label */}
          <div className="text-center mb-8 h-4">
            <span
              className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                isAfter ? "text-primary" : "text-muted-foreground/60"
              }`}
            >
              {isAfter ? "Processed · Clean Audio" : "Raw Recording · Unprocessed"}
            </span>
          </div>

          {/* Play button */}
          <div className="flex justify-center mb-7">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300 group"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={22} />
              ) : (
                <Play size={22} className="translate-x-0.5" />
              )}
            </button>
          </div>

          {/* Progress bar */}
          <div
            className="h-1 bg-border/40 rounded-full cursor-pointer mb-10 group"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-primary rounded-full transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Process tags — dim when Before, bright when After */}
          <div
            className={`flex flex-wrap gap-2 justify-center transition-opacity duration-500 ${
              isAfter ? "opacity-100" : "opacity-25"
            }`}
          >
            {processTags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-primary/50 text-primary rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterPlayer;
