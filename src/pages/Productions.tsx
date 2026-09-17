import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";

const Productions = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <WorkSection />
    </div>
    <Footer />
  </div>
);

export default Productions;
