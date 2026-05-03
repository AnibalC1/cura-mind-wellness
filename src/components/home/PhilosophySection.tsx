"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/lib/data";

export function PhilosophySection() {
  return (
    <section className="relative py-32 bg-bg overflow-hidden">
      {/* Full-width quote */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent"
        style={{ backgroundSize: "80% 60%", backgroundPosition: "50% 50%" }}
      />

      <div className="container-luxury">
        {/* Big Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-32"
        >
          <div className="relative inline-block">
            {/* Opening quote mark */}
            <span className="absolute -top-12 -left-8 font-cormorant text-[8rem] text-gold/10 leading-none select-none">
              "
            </span>
            <blockquote className="font-cormorant text-display-md font-light text-ivory/80 max-w-4xl mx-auto leading-relaxed">
              Healing begins with understanding. Transformation happens when you are truly seen, supported, and believed in.
            </blockquote>
            <span className="absolute -bottom-16 -right-8 font-cormorant text-[8rem] text-gold/10 leading-none select-none">
              "
            </span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-16"
          />
          <p className="mt-6 text-gold/50 text-xs tracking-[0.3em] uppercase font-inter">
            The Cura Mind & Wellness Commitment
          </p>
        </motion.div>

        {/* Philosophy pillars */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-eyebrow mb-4 inline-block">Our Approach</span>
            <h2 className="font-cormorant text-display-md font-light text-ivory">
              The Four Pillars of Our Care
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHILOSOPHY.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center group"
              >
                {/* Number */}
                <div className="flex justify-center mb-6">
                  <span className="font-cormorant text-6xl font-light text-gold/15 group-hover:text-gold/25 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="gold-divider mx-auto mb-6" />

                <h3 className="font-dm text-lg text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-ivory/40 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
