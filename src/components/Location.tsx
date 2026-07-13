"use client";

import { MapPin, Phone, Compass, ExternalLink } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact and Directions Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-dusty-rose font-bold">
                Find Your Way
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl md:text-5xl font-black text-rich-charcoal mb-6 leading-tight">
              How to Reach Us
            </h2>

            <p className="font-sans text-rich-charcoal/70 text-sm md:text-base leading-relaxed mb-8">
              Peshwa Pavilion is located inside the grand atrium lobby of the **ITC Maratha Hotel**, conveniently situated
              near Mumbai's international airport terminal.
            </p>

            {/* Details blocks */}
            <div className="space-y-6 mb-10">
              {/* Address detail */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-soft-beige/40 flex items-center justify-center flex-shrink-0 text-dusty-rose">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-rich-charcoal mb-1">
                    Address
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed max-w-sm">
                    {RESTAURANT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-soft-beige/40 flex items-center justify-center flex-shrink-0 text-dusty-rose">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-rich-charcoal mb-1">
                    Inquiries & Call
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-rich-charcoal/60 leading-relaxed">
                    {RESTAURANT_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={RESTAURANT_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-rich-charcoal hover:bg-rich-charcoal/90 text-off-white px-6 py-4 font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow shadow-rich-charcoal/10"
              >
                <Compass className="w-4 h-4" />
                Get Directions
              </a>
              
              <a
                href={RESTAURANT_INFO.phoneLink}
                className="inline-flex items-center justify-center gap-2 bg-white border border-soft-beige hover:border-dusty-rose text-rich-charcoal px-6 py-4 font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-sm"
              >
                <Phone className="w-4 h-4 text-dusty-rose" />
                Call Restaurant
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-full">
            <div className="w-full h-full aspect-[4/3] lg:aspect-auto lg:h-[450px] p-3 bg-white border border-soft-beige shadow-md">
              <iframe
                title="ITC Maratha Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0826955078353!2d72.8711462!3d19.114947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87042531cd9%3A0xe54ef9265f7c030d!2sITC%20Maratha%2C%20a%20Luxury%20Collection%20Hotel%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
