"use client";

import { motion } from "framer-motion";
import { Coffee, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function About() {
  const highlights = [
    {
      icon: <Sparkles className="w-5 h-5 text-dusty-rose" />,
      title: "Elegant Sun-Bathed Atrium",
      description: "Dine under a spectacular high glass dome that bathes the restaurant in warm natural light by day and starlight by night.",
    },
    {
      icon: <Coffee className="w-5 h-5 text-dusty-rose" />,
      title: "Extensive Luxury Buffet",
      description: "A meticulously curated culinary spread combining heritage Indian delicacies with contemporary global classics.",
    },
    {
      icon: <Heart className="w-5 h-5 text-dusty-rose" />,
      title: "Legendary Service Standards",
      description: "Experience the hallmark warmth and hospitality of ITC Hotels, where every guest is treated like royalty.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-soft-beige/20 filter blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage-green/10 filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Decorative Framed Image Stack */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] border border-soft-beige/60 p-4 bg-white/40 backdrop-blur-sm"
            >
              {/* Main Image - Restaurant Interior.
                  TODO: Replace with official Peshwa Pavilion atrium photograph. */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=800&auto=format&fit=crop')`,
                }}
              />
              
              {/* Floating Accent Badge */}
              <div className="absolute -bottom-6 -right-6 bg-warm-cream border border-soft-beige shadow-lg p-6 max-w-[200px] hidden md:block">
                <span className="font-serif text-3xl font-bold text-dusty-rose block mb-1">5-Star</span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-rich-charcoal/70 leading-relaxed block">
                  Dining Experience at ITC Maratha, Mumbai
                </span>
              </div>
            </motion.div>

            {/* Overlapping Small Decorative Image - Exquisite plating
                TODO: Replace with official signature dish close-up image. */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -left-4 -bottom-8 w-2/5 aspect-square border border-soft-beige bg-white p-2 shadow-md hidden sm:block"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400&auto=format&fit=crop')`,
                }}
              />
            </motion.div>
          </div>

          {/* Right: Narrative Story Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
                The Heritage & Taste
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-black text-rich-charcoal mb-6 leading-tight"
            >
              A Masterpiece of Culinary Grandeur
            </motion.h2>

            {/* Story Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-rich-charcoal/70 text-sm md:text-base leading-relaxed space-y-4 mb-8 text-justify"
            >
              <p>{RESTAURANT_INFO.longDescription}</p>
              <p>
                From early-morning breakfast gatherings to elegant midnight dining, Peshwa Pavilion offers a
                delightful sensory journey. Enjoy a rich tapestry of flavors carefully prepared in our open kitchens,
                surrounded by the regal charm and sophisticated environment of one of Mumbai's finest landmark hotels.
              </p>
            </motion.div>

            {/* Highlights List */}
            <div className="w-full space-y-6">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-soft-beige/40 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-rich-charcoal mb-1">
                      {highlight.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
