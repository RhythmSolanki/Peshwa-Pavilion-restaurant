"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/restaurantData";

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "dishes" | "venue">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    filter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-warm-cream/35 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
              Visual Tour
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-rich-charcoal mb-4">
            Ambience & Platters
          </h2>
          <p className="font-sans text-rich-charcoal/60 text-sm leading-relaxed">
            Step inside our sun-bathed atrium and preview our signature culinary creations. Sourced from high-quality
            hospitality visual archives.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`font-sans text-[11px] tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 focus:outline-none ${
              filter === "all"
                ? "border-dusty-rose text-dusty-rose font-bold"
                : "border-transparent text-rich-charcoal/60 hover:text-rich-charcoal"
            }`}
          >
            All Photos
          </button>
          <button
            onClick={() => setFilter("dishes")}
            className={`font-sans text-[11px] tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 focus:outline-none ${
              filter === "dishes"
                ? "border-dusty-rose text-dusty-rose font-bold"
                : "border-transparent text-rich-charcoal/60 hover:text-rich-charcoal"
            }`}
          >
            Special Dishes
          </button>
          <button
            onClick={() => setFilter("venue")}
            className={`font-sans text-[11px] tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 focus:outline-none ${
              filter === "venue"
                ? "border-dusty-rose text-dusty-rose font-bold"
                : "border-transparent text-rich-charcoal/60 hover:text-rich-charcoal"
            }`}
          >
            The Venue
          </button>
        </div>

        {/* Masonry Image Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden border border-soft-beige/30 bg-white p-2 shadow-sm hover:shadow-md hover:border-dusty-rose/40 transition-all duration-500"
              >
                {/* Photo Container
                    TODO: Replace with official Peshwa Pavilion and ITC Maratha venue & dishes photography. */}
                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />

                  {/* Dark Elegant Hover Overlay */}
                  <div className="absolute inset-0 bg-rich-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="w-8 h-8 rounded-full bg-white/95 text-rich-charcoal flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 self-end shadow">
                      <Eye className="w-4 h-4 text-dusty-rose" />
                    </div>
                    <div>
                      <span className="font-sans text-[8px] tracking-[0.25em] uppercase text-off-white/80 font-bold block mb-1">
                        {item.category === "dishes" ? "Gastronomy" : "Atmosphere"}
                      </span>
                      <h3 className="font-serif text-base font-extrabold text-off-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-rich-charcoal/95 backdrop-blur-md flex flex-col justify-center items-center p-6 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-dusty-rose transition-colors duration-300 p-2 z-50 bg-black/30 rounded-full"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider Content Wrapper */}
            <div className="relative max-w-5xl w-full flex flex-col items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:-left-16 text-white hover:text-dusty-rose transition-colors duration-300 p-3 bg-black/40 hover:bg-black/60 rounded-full z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Frame */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-4 max-h-[75vh] max-w-[90vw] flex flex-col items-center shadow-2xl border border-soft-beige"
              >
                {/* Image
                    TODO: Replace with official high-res asset in lightbox. */}
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[60vh] object-contain max-w-full"
                />

                {/* Subtitle info below image */}
                <div className="w-full text-center mt-4">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-dusty-rose font-bold block mb-1">
                    {filteredItems[lightboxIndex].category === "dishes" ? "Signature Dish" : "Interior View"}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-rich-charcoal">
                    {filteredItems[lightboxIndex].title}
                  </h4>
                  <p className="font-sans text-xs text-rich-charcoal/60 mt-1 max-w-md mx-auto">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:-right-16 text-white hover:text-dusty-rose transition-colors duration-300 p-3 bg-black/40 hover:bg-black/60 rounded-full z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Image counter bottom */}
            <div className="absolute bottom-6 text-white/60 font-sans text-xs tracking-wider">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
