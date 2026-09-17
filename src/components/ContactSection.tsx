import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

const ContactSection = () => {
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("service", service);

    try {
      const res = await fetch("https://formspree.io/f/mlgonyrr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setService("");
        gtag('event', 'conversion_event_submit_lead_form', {});
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">Get In Touch</p>
        <h2 className="text-2xl md:text-3xl font-normal text-center text-foreground mb-4">Book Your Project</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-12">
          <MapPin size={14} className="text-primary" />
          <span>Round Rock, TX</span>
        </div>

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

            <Select value={service} onValueChange={setService}>
              <SelectTrigger className="bg-secondary/50 border-border/50">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recording">Recording</SelectItem>
                <SelectItem value="mixing">Mixing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <Textarea
              name="message"
              placeholder="Tell me about your project..."
              className="bg-secondary/50 border-border/50 min-h-[120px]"
            />

            <Button type="submit" size="lg" className="w-full rounded-full text-base font-medium" disabled={submitting}>
              {submitting ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
