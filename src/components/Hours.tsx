"use client";

import { Clock, Coffee, Sunset, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hours() {
  const sessions = [
    {
      icon: <Coffee className="w-5 h-5 text-dusty-rose" />,
      name: "Lavish Breakfast Buffet",
      time: "6:30 AM – 10:30 AM",
      description: "An extensive spread of morning delicacies, fresh fruit juices, and international bakeries.",
    },
    {
      icon: <Sunset className="w-5 h-5 text-dusty-rose" />,
      name: "Royal Lunch Buffet",
      time: "12:30 PM – 3:30 PM",
      description: "A decadent mid-day feast featuring chef signature curries, live grills, and dessert spreads.",
    },
    {
      icon: <Moon className="w-5 h-5 text-dusty-rose" />,
      name: "Grand Dinner Buffet & A la Carte",
      time: "7:00 PM – 11:30 PM",
      description: "Our premier dining experience featuring full signature items including Dal Bukhara and roasted raan.",
    },
  ];

  return (
    <section id="hours" className="py-24 md:py-32 bg-warm-cream/35 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-1/2 left-10 w-96 h-96 border border-soft-beige/30 rounded-full -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Timings Summary Card */}
          <div className="lg:col-span-5 bg-white border border-soft-beige p-8 md:p-12 shadow-md relative flex flex-col justify-center">
            {/* Corner Accent Borders */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-soft-beige/40 pointer-events-none" />

            <div className="flex items-center gap-2 mb-6 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
                Operating Schedule
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
            </div>

            <div className="text-center relative py-6">
              {/* Luxury Clock Icon */}
              <div className="w-16 h-16 rounded-full bg-warm-cream border border-soft-beige flex items-center justify-center mx-auto mb-6 text-dusty-rose relative shadow-inner">
                <Clock className="w-7 h-7" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-sage-green rounded-full border border-white animate-pulse" />
              </div>

              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-sage-green font-bold bg-sage-green/10 px-3 py-1 border border-sage-green/20 rounded-full inline-block mb-4">
                Open Daily
              </span>

              <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-rich-charcoal mb-2">
                Opening Hours
              </h3>
              
              <p className="font-serif text-2xl md:text-3xl font-medium text-dusty-rose mb-6">
                6:30 AM – 11:30 PM
              </p>

              <div className="text-rich-charcoal/50 font-sans text-xs tracking-wider border-t border-soft-beige/40 pt-6 max-w-xs mx-auto">
                All-day luxury dining service under the ITC Maratha atrium. Dress Code: Smart Casual.
              </div>
            </div>
          </div>

          {/* Right: Detailed Session Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
                Dining Curations
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-5xl font-black text-rich-charcoal mb-8 leading-tight">
              Buffet & Dining Sessions
            </h2>

            {/* Session cards */}
            <div className="space-y-6">
              {sessions.map((session, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/50 border border-soft-beige/40 p-6 flex flex-col sm:flex-row gap-4 items-start shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-warm-cream flex items-center justify-center flex-shrink-0">
                    {session.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                      <h4 className="font-serif text-lg font-bold text-rich-charcoal">
                        {session.name}
                      </h4>
                      <span className="font-sans text-xs font-semibold text-dusty-rose whitespace-nowrap bg-warm-cream/80 px-2 py-0.5 border border-soft-beige/30">
                        {session.time}
                      </span>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed">
                      {session.description}
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
