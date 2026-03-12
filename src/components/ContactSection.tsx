import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <p className="text-primary text-sm tracking-[0.3em] uppercase text-center mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Book a Session</h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-12">
          <MapPin size={14} className="text-primary" />
          <span>Round Rock, TX</span>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input placeholder="Your name" className="bg-secondary/50 border-border/50" />
            <Input type="email" placeholder="Email address" className="bg-secondary/50 border-border/50" />
          </div>

          <Select>
            <SelectTrigger className="bg-secondary/50 border-border/50">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recording">Recording</SelectItem>
              <SelectItem value="mixing">Mixing</SelectItem>
              <SelectItem value="mastering">Mastering</SelectItem>
              <SelectItem value="podcast">Podcast Production</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            placeholder="Tell me about your project..."
            className="bg-secondary/50 border-border/50 min-h-[120px]"
          />

          <Button type="submit" size="lg" className="w-full rounded-full text-base font-medium">
            Send Inquiry
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
