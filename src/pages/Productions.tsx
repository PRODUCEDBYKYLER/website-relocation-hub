import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductionsMasonry from "@/components/ProductionsMasonry";
import Footer from "@/components/Footer";

const Productions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <div className="container mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <p className="text-primary text-xs tracking-[0.35em] uppercase mb-3">My Work</p>
        <h1 className="text-3xl md:text-5xl font-normal text-foreground leading-tight mb-6">Productions</h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto">
          Any of the works below have been either fully produced or co-produced by me.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mt-3">
          If you're an independent artist in the Central Texas area and like what you hear,{" "}
          <Link to="/contact" className="text-primary hover:underline underline-offset-4 transition-colors">
            I'd love to get the conversation started
          </Link>
          .
        </p>
      </div>
      <ProductionsMasonry />
    </div>
    <Footer />
  </div>
);

export default Productions;
