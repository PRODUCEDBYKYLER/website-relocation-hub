import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6 md:px-14">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-['Cormorant_Garamond'] text-foreground font-semibold">Kyler Chavez</p>
          <p className="text-muted-foreground/70 text-xs italic mt-1">obsessed with music since forever</p>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://www.instagram.com/kylerfranklin/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
            <Youtube size={18} />
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Kyler Chavez. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
