"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view for active styling
      const sections = ["home", "about", "menu", "experience", "gallery", "reviews", "hours", "location"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "menu", label: "Menu" },
    { id: "experience", label: "Experience" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "hours", label: "Hours" },
    { id: "location", label: "Find Us" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-off-white/95 backdrop-blur-md shadow-sm border-b border-soft-beige/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo / Text */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex flex-col items-start cursor-pointer text-left focus:outline-none"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-rich-charcoal">
              PESHWA PAVILION
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-dusty-rose font-medium">
              ITC Maratha, Mumbai
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-sm tracking-widest uppercase cursor-pointer hover:text-dusty-rose transition-colors relative py-1 focus:outline-none ${
                  activeSection === link.id ? "text-dusty-rose font-semibold" : "text-rich-charcoal/80"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-dusty-rose"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:block">
            <a
              href={RESTAURANT_INFO.phoneLink}
              className="inline-flex items-center gap-2 bg-dusty-rose hover:bg-dusty-rose/90 text-off-white px-5 py-2.5 rounded-none font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm"
            >
              Call Restaurant
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-rich-charcoal focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-off-white/98 backdrop-blur-lg lg:hidden pt-24 px-8 pb-10 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-serif text-2xl tracking-wide py-2 border-b border-soft-beige/30 focus:outline-none ${
                    activeSection === link.id ? "text-dusty-rose font-bold" : "text-rich-charcoal"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <p className="font-sans text-xs text-rich-charcoal/60 tracking-wider">
                {RESTAURANT_INFO.address}
              </p>
              <a
                href={RESTAURANT_INFO.phoneLink}
                className="w-full bg-dusty-rose text-off-white py-4 text-center font-sans text-sm tracking-widest uppercase font-semibold"
              >
                Call: {RESTAURANT_INFO.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
