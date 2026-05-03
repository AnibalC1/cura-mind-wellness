"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-luxury text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="label-eyebrow mb-4 inline-block">About Our Practice</span>
          <h1 className="font-cormorant text-display-xl font-light text-ivory mb-6">
            Meet Dr. Vivian Emuobe
          </h1>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-cormorant text-xl italic text-gold mb-4">
            DNP, APRN, PMHNP-BC
          </p>
          <p className="text-ivory/40 max-w-xl mx-auto text-base leading-relaxed font-light">
            A psychiatric clinician whose practice is grounded in the belief that every person deserves to be genuinely understood.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
