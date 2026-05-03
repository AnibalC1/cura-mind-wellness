"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/lib/data";
import { Shield, Users, Microscope, Globe } from "lucide-react";

const ICONS = [Shield, Users, Microscope, Globe];

export function ClinicalApproach() {
  return (
    <section className="section-padding bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-sage/4 via-transparent to-transparent"
        style={{ backgroundPosition: "80% 50%", backgroundSize: "60% 80%" }}
      />

      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="label-eyebrow mb-4 inline-block">How We Work</span>
          <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
            Clinical Philosophy
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-ivory/50 max-w-2xl mx-auto leading-relaxed font-light">
            Every clinical decision at Cura Mind & Wellness is shaped by four guiding principles that define how we approach, understand, and treat each patient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PHILOSOPHY.map((pillar, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="card-luxury p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-dm text-xl text-ivory mb-3 group-hover:text-gold transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-ivory/45 text-sm leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="border border-gold/15 rounded-2xl p-10">
            <p className="font-cormorant text-2xl font-light text-ivory/70 leading-relaxed italic">
              &ldquo;We do not treat symptoms. We treat people — in all their complexity, history, and potential.&rdquo;
            </p>
            <div className="gold-divider mx-auto mt-6 mb-4" />
            <p className="text-gold/50 text-xs tracking-widest uppercase">Dr. Vivian Emuobe</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
