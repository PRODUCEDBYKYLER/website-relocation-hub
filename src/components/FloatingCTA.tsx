import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-black/40">
        <a href="#contact">Book Your Project</a>
      </Button>
    </div>
  );
};

export default FloatingCTA;
