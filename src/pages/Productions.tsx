import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

const Productions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <div className="container mx-auto max-w-5xl px-6 pt-20 pb-4 text-center">
        <p className="text-muted-foreground text-base leading-relaxed">
          Any of the works below have been either fully produced or co-produced by me.
        </p>
        <p className="text-muted-foreground text-base leading-relaxed mt-4">
          If you're an independent artist in the Central Texas area and like what you hear,{" "}
          <Link to="/contact" className="text-primary hover:underline underline-offset-4 transition-colors">
            I'd love to get the conversation started
          </Link>
          .
        </p>
      </div>
      <WorkSection />
    </div>
    <Footer />
  </div>
);

export default Productions;
