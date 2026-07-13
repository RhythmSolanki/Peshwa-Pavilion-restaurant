"use client";

import { Star, MapPin, Users, IndianRupee, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Hero() {
  const handleScrollClick = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-warm-cream"
    >
      {/* Background Image
          High-end luxury hotel dining hall.
          TODO: Replace with official Peshwa Pavilion glass dome atrium photo. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />

      {/* Airy Pastel Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/90 via-[#FAF6F0]/80 to-[#FDFBF8]" />

      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-soft-beige/30 filter blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-sage-green/10 filter blur-3xl -z-10" />

      {/* Main Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center z-10 py-16">
        {/* Rating and Review Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 text-rich-charcoal/70 text-xs tracking-widest uppercase font-semibold"
        >
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3.5 py-1.5 border border-soft-beige/50">
            <Star className="w-3.5 h-3.5 fill-dusty-rose text-dusty-rose" />
            <span>{RESTAURANT_INFO.rating} Rating</span>
          </div>
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3.5 py-1.5 border border-soft-beige/50">
            <Users className="w-3.5 h-3.5 text-dusty-rose" />
            <span>{RESTAURANT_INFO.reviewsCount.toLocaleString()}+ Reviews</span>
          </div>
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-3.5 py-1.5 border border-soft-beige/50">
            <IndianRupee className="w-3.5 h-3.5 text-dusty-rose" />
            <span>{RESTAURANT_INFO.priceRange} Per Person</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-rich-charcoal mb-4 tracking-tight leading-none"
        >
          {RESTAURANT_INFO.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 md:w-16 bg-dusty-rose" />
          <h2 className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-dusty-rose font-bold">
            {RESTAURANT_INFO.cuisine}
          </h2>
          <span className="h-[1px] w-8 md:w-16 bg-dusty-rose" />
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-rich-charcoal/80 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed mb-12"
        >
          {RESTAURANT_INFO.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => handleScrollClick()}
            className="w-48 bg-rich-charcoal hover:bg-rich-charcoal/90 text-off-white py-4 font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md"
          >
            Explore Story
          </button>
          <a
            href="#menu"
            className="w-48 bg-white border border-soft-beige hover:border-dusty-rose text-rich-charcoal py-4 font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm block text-center"
          >
            View Signature Menu
          </a>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.button
          onClick={handleScrollClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-rich-charcoal/60 group-hover:text-dusty-rose transition-colors duration-300">
            Scroll To Discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-soft-beige/80 group-hover:border-dusty-rose flex items-center justify-center text-rich-charcoal/60 group-hover:text-dusty-rose bg-white/40 transition-colors duration-300"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative Side Borders */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-rich-charcoal/30">
        <span className="h-20 w-[1px] bg-soft-beige" />
        <span className="text-[9px] tracking-[0.4em] uppercase writing-mode-vertical">ITC HOTELS</span>
        <span className="h-20 w-[1px] bg-soft-beige" />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-rich-charcoal/30">
        <span className="h-20 w-[1px] bg-soft-beige" />
        <span className="text-[9px] tracking-[0.4em] uppercase writing-mode-vertical">THE LUXURY COLLECTION</span>
        <span className="h-20 w-[1px] bg-soft-beige" />
      </div>
    </section>
  );
}
