import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import SubstackSection from "@/components/SubstackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingCTA />
      <Hero />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <SubstackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
