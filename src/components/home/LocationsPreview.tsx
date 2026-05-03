"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Video } from "lucide-react";
import { LOCATIONS } from "@/lib/data";

const STATE_GRADIENTS: Record<string, string> = {
  ma: "from-blue-950/40 to-bg-elevated",
  tx: "from-amber-950/30 to-bg-elevated",
  ca: "from-orange-950/30 to-bg-elevated",
  or: "from-emerald-950/30 to-bg-elevated",
};

export function LocationsPreview() {
  return (
    <section className="section-padding bg-bg relative">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="label-eyebrow mb-4 inline-block">Where We Are</span>
          <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
            Four States. One Standard of Care.
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-ivory/50 max-w-lg mx-auto text-base leading-relaxed font-light">
            Premium psychiatric care available in person at each location, or via telehealth from anywhere in our licensed states.
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`card-luxury overflow-hidden group`}
            >
              {/* State Header */}
              <div className={`bg-gradient-to-br ${STATE_GRADIENTS[loc.id]} p-6 pb-4`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-cormorant text-5xl font-light text-ivory/10">
                    {loc.abbr}
                  </span>
                  <MapPin size={16} className="text-gold/60 mt-2" />
                </div>
                <p className="font-dm text-xl text-ivory mb-1">{loc.state}</p>
                <p className="text-ivory/40 text-xs">{loc.city}</p>
              </div>

              {/* Details */}
              <div className="p-6 pt-4">
                <div className="mb-4">
                  <p className="text-ivory/30 text-xs tracking-wide mb-1">Address</p>
                  <p className="text-ivory/60 text-sm leading-relaxed">{loc.address}</p>
                  <p className="text-ivory/60 text-sm">{loc.city}</p>
                </div>

                <a
                  href={`tel:${loc.phone}`}
                  className="flex items-center gap-2 text-gold/60 hover:text-gold text-sm transition-colors group/phone"
                >
                  <Phone size={13} />
                  <span className="font-mono text-xs tracking-wide">{loc.phone}</span>
                </a>

                {loc.note && (
                  <div className="mt-4 pt-4 border-t border-ivory/5">
                    <p className="text-sage/60 text-xs italic">{loc.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Telehealth Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 card-luxury p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-sage/10 border border-sage/20 flex items-center justify-center shrink-0">
              <Video size={24} className="text-sage" />
            </div>
            <div>
              <h3 className="font-dm text-xl text-ivory mb-1">Telehealth Available Everywhere</h3>
              <p className="text-ivory/40 text-sm">
                Secure video psychiatry for patients in MA, TX, CA, OR, and NY — no travel required.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-outline shrink-0">
            Schedule Virtual Visit
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/locations" className="text-gold/60 hover:text-gold text-sm tracking-widest uppercase transition-colors flex items-center gap-2 justify-center group">
            View All Location Details
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
