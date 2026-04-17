import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "./Button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        scrolled ? "bg-sand shadow-sm py-3 border-bottom border-border" : "bg-transparent"
      )}
    >
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-clay rounded-none flex items-center justify-center text-white font-display font-black text-xl group-hover:bg-ink transition-colors">
          G
        </div>
        <span className={cn(
          "font-display font-black text-2xl uppercase tracking-tighter transition-colors",
          scrolled ? "text-ink" : "text-white"
        )}>
          Gypsy<span className="text-clay italic">Circle.</span>
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        {["Trips", "About", "Community"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={cn(
              "font-display uppercase text-xs font-bold tracking-[0.1em] hover:text-clay transition-colors mt-1",
              scrolled ? "text-ink" : "text-white"
            )}
          >
            {item}
          </Link>
        ))}
        <Button variant="earth" size="sm" className="bg-ink hover:bg-clay">
          WhatsApp Support
        </Button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("md:hidden p-2", scrolled ? "text-ink" : "text-white")}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-sand z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {["Home", "Trips", "About", "Community"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-ink font-display text-5xl font-black uppercase tracking-tighter hover:text-clay"
          >
            {item}
          </Link>
        ))}
        <div className="flex gap-8 mt-10">
          <a href="#" className="text-ink hover:text-clay"><Instagram size={40} /></a>
          <a href="#" className="text-ink hover:text-clay"><MessageCircle size={40} /></a>
        </div>
      </div>
    </nav>
  );
};
