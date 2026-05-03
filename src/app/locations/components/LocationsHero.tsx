"use client";

import { motion } from "framer-motion";

export function LocationsHero() {
  return (
    <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container-luxury text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="label-eyebrow mb-4 inline-block">Find Us</span>
          <h1 className="font-cormorant text-display-xl font-light text-ivory mb-6">
            Our Locations
          </h1>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-ivory/50 max-w-xl mx-auto text-base leading-relaxed font-light">
            Four clinic locations across the country — plus telehealth for patients anywhere in our licensed states.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
