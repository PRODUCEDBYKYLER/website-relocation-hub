import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Who I Am", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Productions", href: "/productions" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-['Tanker'] text-xl font-semibold text-foreground tracking-wide">
          Produced by Kyler
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href === "/contact" ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 px-5 py-2 rounded-full font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors duration-300 ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-3 ml-4">
            <a href="https://www.instagram.com/producedbykyler/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 transition-colors ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-3">
            <a href="https://www.instagram.com/producedbykyler/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
