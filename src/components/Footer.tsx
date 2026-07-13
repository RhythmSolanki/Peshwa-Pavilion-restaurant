"use client";

import { ArrowUp, Globe } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

const InstagramIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-cream border-t border-soft-beige/50 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Restaurant Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h3 className="font-serif text-2xl font-black text-rich-charcoal tracking-wide mb-2">
              PESHWA PAVILION
            </h3>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-dusty-rose font-bold mb-4 block">
              ITC Maratha, Mumbai
            </span>
            <p className="font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed max-w-sm mb-6">
              Experience the pinnacle of five-star dining in Mumbai. Providing exceptional multi-cuisine buffets
              and signature Indian delicacies in a sun-bathed atrium dining environment.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-rose border border-soft-beige hover:border-dusty-rose text-rich-charcoal hover:text-off-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-rose border border-soft-beige hover:border-dusty-rose text-rich-charcoal hover:text-off-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Page"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.itchotels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-dusty-rose border border-soft-beige hover:border-dusty-rose text-rich-charcoal hover:text-off-white flex items-center justify-center transition-all duration-300"
                aria-label="ITC Hotels Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-rich-charcoal mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-rich-charcoal/60 tracking-wider">
              <li>
                <a href="#about" className="hover:text-dusty-rose transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-dusty-rose transition-colors duration-300">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-dusty-rose transition-colors duration-300">
                  Dining Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-dusty-rose transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-dusty-rose transition-colors duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Venue */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-base font-bold text-rich-charcoal mb-4">
              Contact Details
            </h4>
            <div className="space-y-3 font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed">
              <p>
                <strong>Tel:</strong> {RESTAURANT_INFO.phone}
              </p>
              <p>
                <strong>Location:</strong> Lobby Level, ITC Maratha, Sahar, Andheri East, Mumbai, 400099
              </p>
              <p>
                <strong>Daily Timings:</strong> 6:30 AM – 11:30 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-soft-beige/40 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-rich-charcoal/50 text-center md:text-left">
            © {currentYear} Peshwa Pavilion, ITC Maratha. All rights reserved. Developed for showcase.
          </p>
          
          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-rich-charcoal/60 hover:text-dusty-rose transition-colors duration-300 focus:outline-none"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full border border-soft-beige/80 group-hover:border-dusty-rose flex items-center justify-center text-rich-charcoal/60 group-hover:text-dusty-rose bg-white/40 transition-colors duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
