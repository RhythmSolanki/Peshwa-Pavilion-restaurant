"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Info } from "lucide-react";
import { SIGNATURE_DISHES, Dish } from "@/data/restaurantData";

export default function Menu() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    { key: "All", label: "Full Menu" },
    { key: "Appetizer", label: "Appetizers" },
    { key: "Main", label: "Signature Mains" },
    { key: "Bread", label: "Tandoor Breads" },
    { key: "Dessert", label: "Royal Desserts" },
  ];

  const filteredDishes =
    filter === "All"
      ? SIGNATURE_DISHES
      : SIGNATURE_DISHES.filter((dish) => dish.category === filter);

  return (
    <section id="menu" className="py-24 md:py-32 bg-warm-cream/35 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-10 left-10 w-48 h-48 border border-soft-beige/30 rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 border border-soft-beige/30 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
              Culinary Masterpieces
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-rich-charcoal mb-4">
            Signature Menu
          </h2>
          <p className="font-sans text-rich-charcoal/60 text-sm leading-relaxed">
            Discover a curated collection of culinary treasures cooked using centuries-old heritage recipes,
            representing the finest tastes of Indian and international dining.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`font-sans text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 border focus:outline-none ${
                filter === category.key
                  ? "bg-rich-charcoal text-off-white border-rich-charcoal shadow-sm"
                  : "bg-white/60 text-rich-charcoal/80 border-soft-beige/50 hover:border-dusty-rose hover:text-dusty-rose"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={dish.id}
                className="group flex flex-col bg-white border border-soft-beige/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-soft-beige/25">
                  {/* Dish Image
                      TODO: Replace with official signature dish photograph. */}
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Vegetarian/Non-Vegetarian Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-1.5 shadow-sm flex items-center justify-center">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        dish.isVegetarian ? "bg-green-600" : "bg-red-600"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-serif text-xl font-extrabold text-rich-charcoal group-hover:text-dusty-rose transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <span className="font-sans text-xs font-semibold text-dusty-rose whitespace-nowrap bg-warm-cream px-2 py-0.5 border border-soft-beige/40">
                        {dish.priceIndicator}
                      </span>
                    </div>
                    
                    <p className="font-sans text-xs md:text-sm text-rich-charcoal/70 leading-relaxed mb-6">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-soft-beige/20 flex items-center justify-between text-[11px] uppercase tracking-wider text-rich-charcoal/50">
                    <span className="font-sans font-semibold">{dish.category}</span>
                    <span className="flex items-center gap-1">
                      <Leaf className={`w-3.5 h-3.5 ${dish.isVegetarian ? "text-green-600" : "text-rich-charcoal/30"}`} />
                      {dish.isVegetarian ? "Vegetarian" : "Traditional Meal"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footnote / Disclaimer */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs text-rich-charcoal/50 italic bg-white/40 p-4 border border-soft-beige/30 max-w-xl mx-auto">
          <Info className="w-4 h-4 text-dusty-rose flex-shrink-0" />
          <span>Please inform our staff about any dietary restrictions or allergies before ordering. All signature dishes are freshly prepared daily by our executive culinary team.</span>
        </div>
      </div>
    </section>
  );
}
