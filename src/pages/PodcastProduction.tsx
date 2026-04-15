import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mic, Scissors, Headphones, Zap, CheckCircle, ArrowLeft } from "lucide-react";
import BeforeAfterPlayer from "@/components/BeforeAfterPlayer";

const services: { icon: React.ElementType; title: string; description: ReactNode }[] = [
  {
    icon: Mic,
    title: "Recording Consultation",
    description: "Get your home setup dialed in before you record. I'll help you get clean, broadcast-quality audio with the gear you already have.",
  },
  {
    icon: Scissors,
    title: "Editing & Clean-up",
    description: "Editing that fits what you need. Relaxed, conversational, scripted, concise. Whatever fits your vibe, I'm here to make it happen.",
  },
  {
    icon: Headphones,
    title: "Mixing & Mastering",
    description: <>My main goal is to make sure your listeners can play your episode and the audio quality is the same as their favorite <em>insert big podcast here</em>. Your podcast will be up to streaming standards and have the correct file delivery for your platform.</>,
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Most episodes delivered within 48–72 hours. Consistent publishing builds audiences — we can build your process together.",
  },
];

const process = [
  { step: "01", title: "Send Your Raw Audio", body: "Upload your recording — phone memo, Zoom call, dedicated mic. I work with whatever you've got." },
  { step: "02", title: "I Handle the Rest", body: "Editing, mixing, noise removal, and loudness normalization. You'll get a polished, publish-ready file back." },
  { step: "03", title: "Publish with Confidence", body: "Your episode sounds like a professional production. No more second-guessing the audio quality." },
];

const PodcastProduction = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Podcast Production Austin TX | Produced by Kyler";

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute("content") ?? "";
    metaDesc?.setAttribute("content", "Professional podcast editing, mixing, and production in Austin, TX. Fast turnaround, flat-rate pricing, and a free sample edit on your first episode. Book with Kyler Chavez.");

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "podcast-page-schema";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Podcast Production",
      "description": "Professional podcast editing, mixing, and audio production for podcasters in Austin, TX and remotely.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Produced by Kyler",
        "url": "https://producedbykyler.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Round Rock",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      },
      "areaServed": [
        { "@type": "City", "name": "Austin", "containedInPlace": { "@type": "State", "name": "Texas" } },
        { "@type": "City", "name": "Round Rock", "containedInPlace": { "@type": "State", "name": "Texas" } }
      ],
      "serviceType": "Podcast Production",
      "url": "https://producedbykyler.com/podcast-production",
      "offers": {
        "@type": "Offer",
        "description": "Flat-rate and project-based pricing. Free sample edit on your first episode.",
        "areaServed": "Austin, TX"
      }
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute("content", prevDesc);
      document.getElementById("podcast-page-schema")?.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("service", "Podcast Production");
    data.set("_subject", "Podcast Production Inquiry — producedbykyler.com");
    try {
      const res = await fetch("https://formspree.io/f/mlgonyrr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        gtag('event', 'conversion_event_submit_lead_form', {});
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
        <div className="container mx-auto flex items-center justify-between h-16 px-6 max-w-5xl">
          <a href="/" className="font-['Tanker'] text-xl font-semibold text-foreground tracking-wide">
            Produced by Kyler
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            Back to site
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Austin, TX</p>
          <h1 className="font-['Tanker'] text-5xl md:text-7xl text-foreground leading-none mb-6">
            Podcast Production
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-4 leading-relaxed">
            Professional editing, mixing, and audio cleanup for podcasters in Austin and beyond. Your show deserves to sound as good as it sounds in your head.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-10">
            <MapPin size={14} className="text-primary" />
            <span>Round Rock / Austin, TX — Remote-friendly</span>
          </div>
          <a href="#contact">
            <Button size="lg" className="rounded-full text-base font-medium px-10">
              Get a Free Sample Edit
            </Button>
          </a>
        </div>
      </section>

      {/* Before/After callout */}
      <section className="py-16 px-6 border-y border-border/50">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            You've put your whole life into building your business, your craft, your voice. Don't let bad audio get in the way of telling <em>your</em> story. A professionally mixed podcast ensures that people know your story is worth telling.
          </p>
        </div>
      </section>

      {/* Before / After Player */}
      <BeforeAfterPlayer />

      {/* Services */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">What's Included</p>
          <h2 className="font-['Tanker'] text-3xl md:text-4xl text-center text-foreground mb-16">
            Everything Your Show Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Icon size={22} className="text-primary mb-4" />
                <h3 className="text-foreground font-medium mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">How It Works</p>
          <h2 className="font-['Tanker'] text-3xl md:text-4xl text-center text-foreground mb-16">
            Have a Remote Podcast?
          </h2>
          <div className="space-y-10">
            {process.map(({ step, title, body }) => (
              <div key={step} className="flex gap-6">
                <span className="font-['Tanker'] text-4xl text-primary/40 leading-none shrink-0 w-12">{step}</span>
                <div>
                  <h3 className="text-foreground font-medium mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kyler */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">Why Work With Me</p>
          <h2 className="font-['Tanker'] text-3xl md:text-4xl text-center text-foreground mb-12">
            A Local Austin Producer, Not a Faceless Service
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto">
            {[
              "Music producer background — I hear audio differently than a general editor",
              "Based in Round Rock, TX — available for in-person sessions in the Austin area",
              "Consistent communication, no ghosting after you send your files",
              "Flat-rate and project-based pricing. No surprise fees.",
              "Free sample edit on your first episode — no commitment",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-muted-foreground text-sm">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-2xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">Get Started</p>
          <h2 className="font-['Tanker'] text-3xl md:text-4xl text-center text-foreground mb-3">
            Book Your Podcast Project
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-12">
            Send me a message and I'll reply within 24 hours with a free sample edit offer.
          </p>

          {submitted ? (
            <div className="text-center py-16">
              <p className="text-foreground text-xl font-semibold mb-2">Message sent.</p>
              <p className="text-muted-foreground text-sm">I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input name="name" placeholder="Your name" required className="bg-secondary/50 border-border/50" />
                <Input name="email" type="email" placeholder="Email address" required className="bg-secondary/50 border-border/50" />
              </div>
              <Input name="show" placeholder="Podcast name (or 'Not launched yet')" className="bg-secondary/50 border-border/50" />
              <Textarea
                name="message"
                placeholder="Tell me about your show — topic, episode length, how often you publish..."
                className="bg-secondary/50 border-border/50 min-h-[120px]"
              />
              <Button type="submit" size="lg" className="w-full rounded-full text-base font-medium" disabled={submitting}>
                {submitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10 px-6 text-center">
        <p className="text-muted-foreground/70 text-xs">
          &copy; {new Date().getFullYear()} Kyler Chavez — <a href="/" className="hover:text-primary transition-colors">producedbykyler.com</a>
        </p>
      </footer>

    </div>
  );
};

export default PodcastProduction;
