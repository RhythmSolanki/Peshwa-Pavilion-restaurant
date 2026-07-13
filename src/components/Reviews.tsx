"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS, RESTAURANT_INFO } from "@/data/restaurantData";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000); // 8 seconds per slide
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-5 w-[1px] h-32 bg-soft-beige -translate-y-1/2" />
      <div className="absolute top-1/2 right-5 w-[1px] h-32 bg-soft-beige -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Aggregated Rating Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left bg-warm-cream/50 p-8 md:p-10 border border-soft-beige/60 shadow-sm relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-soft-beige/25 rounded-bl-full -z-10" />

            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-dusty-rose font-bold">
                Guest Sentiments
              </span>
            </div>

            <h2 className="font-serif text-3xl font-black text-rich-charcoal mb-6">
              What Diners Say
            </h2>

            {/* Score Display */}
            <div className="flex items-baseline gap-2 mb-2 justify-center lg:justify-start">
              <span className="font-serif text-6xl md:text-7xl font-extrabold text-rich-charcoal">
                {RESTAURANT_INFO.rating}
              </span>
              <span className="font-sans text-xl text-rich-charcoal/40">/ 5</span>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4 justify-center lg:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(RESTAURANT_INFO.rating)
                      ? "fill-dusty-rose text-dusty-rose"
                      : "text-soft-beige"
                  }`}
                />
              ))}
            </div>

            <p className="font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed mb-6">
              Based on <strong>{RESTAURANT_INFO.reviewsCount.toLocaleString()}</strong> verified dining reviews across Google, EazyDiner, and guest registries.
            </p>

            <span className="h-[1px] w-20 bg-soft-beige" />
          </div>

          {/* Right Column: Carousel Slider */}
          <div className="lg:col-span-8 flex flex-col justify-center relative min-h-[350px]">
            {/* Quote watermark icon */}
            <Quote className="absolute top-0 left-0 w-24 h-24 text-soft-beige/15 pointer-events-none transform -translate-x-4 -translate-y-12" />

            <div className="relative overflow-hidden w-full px-2 py-6">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex flex-col"
                >
                  {/* Rating Stars for specific review */}
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-dusty-rose text-dusty-rose" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="font-serif text-lg md:text-2xl text-rich-charcoal leading-relaxed font-medium mb-8 italic">
                    "{REVIEWS[activeIndex].comment}"
                  </p>

                  {/* Review Author Meta */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-soft-beige flex items-center justify-center font-serif text-sm font-bold text-rich-charcoal">
                      {REVIEWS[activeIndex].author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-extrabold text-rich-charcoal">
                        {REVIEWS[activeIndex].author}
                      </h4>
                      <div className="flex items-center gap-2 font-sans text-xs text-rich-charcoal/50">
                        <span>{REVIEWS[activeIndex].role}</span>
                        <span>•</span>
                        <span>{REVIEWS[activeIndex].date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-10 border-t border-soft-beige/30 pt-6">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${
                      idx === activeIndex ? "w-8 bg-dusty-rose" : "w-2 bg-soft-beige"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 border border-soft-beige hover:border-dusty-rose hover:text-dusty-rose text-rich-charcoal bg-white/40 flex items-center justify-center transition-colors duration-300 focus:outline-none"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 border border-soft-beige hover:border-dusty-rose hover:text-dusty-rose text-rich-charcoal bg-white/40 flex items-center justify-center transition-colors duration-300 focus:outline-none"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
