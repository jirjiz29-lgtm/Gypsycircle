import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-sand text-ink pt-24 pb-12 border-t border-border mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-clay flex items-center justify-center text-white font-display font-black text-xl">
              G
            </div>
            <span className="font-display font-black text-3xl uppercase tracking-tighter">
              Gypsy<span className="text-clay italic">Circle.</span>
            </span>
          </Link>
          <p className="text-muted max-w-sm mb-10 font-sans font-medium leading-relaxed">
            We are not a travel agency. We are a community of explorers, dreamers, and wanderers. 
            Real India, real experiences, raw adventures.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 border border-border rounded-full hover:bg-clay hover:text-white transition-all">
              <Instagram size={24} />
            </a>
            <a href="#" className="p-3 border border-border rounded-full hover:bg-clay hover:text-white transition-all">
              <Youtube size={24} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-black uppercase mb-8 text-clay text-sm tracking-widest">Quick Links</h4>
          <ul className="flex flex-col gap-5 text-xs font-bold uppercase tracking-widest">
            <li><Link to="/trips" className="hover:text-clay">Upcoming Trips</Link></li>
            <li><Link to="/about" className="hover:text-clay">Our Story</Link></li>
            <li><Link to="/community" className="hover:text-clay">Community</Link></li>
            <li><Link to="/reviews" className="hover:text-clay">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black uppercase mb-8 text-clay text-sm tracking-widest">Connect</h4>
          <ul className="flex flex-col gap-6 text-sm font-medium text-muted">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-clay shrink-0" />
              <span>Hauz Khas Village, New Delhi</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-clay shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-clay shrink-0" />
              <span>explore@gypsycircle.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12 mt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted font-bold uppercase tracking-[0.2em] font-display">
        <p>© 2026 GypsyCircle Adventures. Born for the road.</p>
        <p className="flex items-center gap-2">Made with <span className="text-clay">●</span> by Travelers</p>
      </div>
    </footer>
  );
};
