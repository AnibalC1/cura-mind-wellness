"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, ArrowRight } from "lucide-react";

const TELEHEALTH_STATES = [
  { abbr: "MA", name: "Massachusetts" },
  { abbr: "TX", name: "Texas" },
  { abbr: "CA", name: "California" },
  { abbr: "OR", name: "Oregon" },
  { abbr: "NY", name: "New York" },
];

export function TelehealthSection() {
  return (
    <section className="section-padding bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-sage/5 via-transparent to-transparent" />

      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-3xl bg-sage/10 border border-sage/20 flex items-center justify-center mx-auto mb-8">
            <Video size={32} className="text-sage" />
          </div>
          <span className="label-eyebrow mb-4 inline-block">No Clinic Required</span>
          <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
            Telehealth — Available Everywhere
          </h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-ivory/50 max-w-2xl mx-auto text-base leading-relaxed font-light">
            Wherever you are in our licensed states, you can access Cura Mind & Wellness through secure, private video consultations. No waiting rooms. No commute. Just quality care.
          </p>
        </motion.div>

        {/* State cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {TELEHEALTH_STATES.map((state, i) => (
            <motion.div
              key={state.abbr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-luxury p-6 text-center min-w-[160px]"
            >
              <p className="font-cormorant text-5xl font-light text-gold/30 mb-2">
                {state.abbr}
              </p>
              <p className="text-ivory/50 text-sm">{state.name}</p>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                <span className="text-sage/60 text-xs">Accepting patients</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Schedule a Telehealth Appointment
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
