"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Flame, Map, Globe, Cake } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

interface ExperienceFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function Experience() {
  const [activeFeature, setActiveFeature] = useState<string>("buffet");

  const features: ExperienceFeature[] = [
    {
      id: "buffet",
      icon: <UtensilsCrossed className="w-5 h-5" />,
      title: "Lavish Buffet Spread",
      subtitle: "Mumbai's Premier Feast",
      description: "Our signature multi-cuisine buffet is legendary. Spanning breakfast, lunch, and dinner, it features dozens of hot options, gourmet cold salads, artisanal cheeses, and fresh seafood, prepared fresh by culinary masters.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "live",
      icon: <Flame className="w-5 h-5" />,
      title: "Live Cooking Stations",
      subtitle: "Culinary Artistry in Motion",
      description: "Interact with our master chefs as they prepare custom dishes right before your eyes. From sizzling grills and stone-baked artisanal breads to customized pasta and stir-fries, your food is served straight from the flame.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "indian",
      icon: <Map className="w-5 h-5" />,
      title: "Indian Culinary Heritage",
      subtitle: "Flavors of the Subcontinent",
      description: "Celebrate the rich legacy of Indian dining. Our signature clay tandoors produce authentic kebabs, while slow-cooking vessels simmer our famous Dal Bukhara and Mughlai curries to robust perfection.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "global",
      icon: <Globe className="w-5 h-5" />,
      title: "International Canvas",
      subtitle: "Gourmet Global Journey",
      description: "Take a global culinary tour. Our continental counters offer everything from traditional European roasts to East Asian woks, fresh sushi, and Mediterranean delicacies, catering to sophisticated global palates.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "dessert",
      icon: <Cake className="w-5 h-5" />,
      title: "Grand Dessert Collection",
      subtitle: "Sweet Symphony",
      description: "End your dining experience on a high note. Enjoy a decadent spread of traditional warm Indian sweets like Gulab Jamun alongside artisanal French pastries, macaroons, and hand-churned kulfi.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section id="experience" className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-soft-beige/10 filter blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: List of Experience Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
                Five-Star Dining
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-5xl font-black text-rich-charcoal mb-8 leading-tight">
              The Dining Experience
            </h2>

            {/* Selector list */}
            <div className="space-y-4">
              {features.map((feature) => {
                const isActive = feature.id === activeFeature;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left p-5 border transition-all duration-300 flex gap-4 items-start focus:outline-none ${
                      isActive
                        ? "bg-white border-dusty-rose shadow-sm"
                        : "bg-white/40 border-soft-beige/30 hover:border-soft-beige hover:bg-white/60"
                    }`}
                  >
                    {/* Icon container */}
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isActive ? "bg-dusty-rose text-off-white" : "bg-soft-beige/30 text-rich-charcoal/70"
                      }`}
                    >
                      {feature.icon}
                    </div>

                    <div>
                      <span className="font-sans text-[10px] tracking-widest uppercase text-dusty-rose font-bold block mb-1">
                        {feature.subtitle}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-rich-charcoal mb-2">
                        {feature.title}
                      </h3>
                      
                      {/* Description visible on active only, or collapsed for others */}
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="font-sans text-xs md:text-sm text-rich-charcoal/70 leading-relaxed mt-2"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Image Visualizer */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full flex items-center justify-center">
            {/* Elegant double-border frame */}
            <div className="absolute inset-4 border border-soft-beige/50 -z-10" />
            <div className="absolute inset-0 border border-soft-beige/30 -z-10" />

            <div className="w-full h-full aspect-[4/3] lg:aspect-auto lg:h-[550px] overflow-hidden p-4 bg-white shadow-md border border-soft-beige/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  {/* Active Feature Image
                      TODO: Replace with official Peshwa Pavilion buffet / cooking station photo. */}
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Subtle caption banner */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rich-charcoal/80 to-transparent p-6 text-off-white">
                    <span className="font-serif text-lg font-bold block">
                      {currentFeature.title}
                    </span>
                    <span className="font-sans text-[10px] tracking-wider uppercase text-off-white/80">
                      {RESTAURANT_INFO.hotel}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
