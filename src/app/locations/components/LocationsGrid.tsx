"use client";

import { motion } from "framer-motion";
import { LOCATIONS, HOURS } from "@/lib/data";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const STATE_ACCENTS: Record<string, { bg: string; border: string; text: string }> = {
  ma: { bg: "from-blue-950/30", border: "border-blue-900/20", text: "text-blue-300/50" },
  tx: { bg: "from-amber-950/25", border: "border-amber-900/20", text: "text-amber-300/50" },
  ca: { bg: "from-orange-950/25", border: "border-orange-900/20", text: "text-orange-300/50" },
  or: { bg: "from-emerald-950/25", border: "border-emerald-900/20", text: "text-emerald-300/50" },
};

export function LocationsGrid() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LOCATIONS.map((loc, i) => {
            const accent = STATE_ACCENTS[loc.id];
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                {/* State header */}
                <div className={`bg-gradient-to-br ${accent.bg} to-bg-elevated p-8 pb-6`}>
                  <div className="flex items-start justify-between mb-6">
                    <span className={`font-cormorant text-8xl font-light leading-none ${accent.text}`}>
                      {loc.abbr}
                    </span>
                    <div className="text-right">
                      <span className="label-eyebrow block">Location</span>
                      {loc.note && (
                        <span className="text-sage/60 text-xs italic mt-1 block">{loc.note}</span>
                      )}
                    </div>
                  </div>
                  <h2 className="font-dm text-3xl text-ivory mb-1">{loc.state}</h2>
                  <p className="text-ivory/40 text-sm">{loc.city}</p>
                </div>

                {/* Details */}
                <div className="p-8">
                  {/* Address + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin size={14} className="text-gold" />
                        <span className="label-eyebrow text-[10px]">Address</span>
                      </div>
                      <p className="text-ivory/60 text-sm leading-relaxed">
                        {loc.address}<br />{loc.city}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Phone size={14} className="text-gold" />
                        <span className="label-eyebrow text-[10px]">Phone</span>
                      </div>
                      <a
                        href={`tel:${loc.phone}`}
                        className="text-gold/70 hover:text-gold text-sm font-mono transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-8 p-4 rounded-xl bg-bg-elevated border border-ivory/5">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={14} className="text-gold" />
                      <span className="label-eyebrow text-[10px]">Hours</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-ivory/50">Monday</p>
                        <p className="text-ivory/30 text-xs">{HOURS.monday}</p>
                      </div>
                      <div>
                        <p className="text-ivory/50">Saturday</p>
                        <p className="text-ivory/30 text-xs">{HOURS.saturday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="label-eyebrow mb-4">Services Available</p>
                    <div className="flex flex-wrap gap-2">
                      {loc.services.map((svc) => (
                        <div key={svc} className="flex items-center gap-1.5">
                          <CheckCircle size={11} className="text-gold/50" />
                          <span className="text-ivory/40 text-xs">{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-ivory/5">
                    <a
                      href={`tel:${loc.phone}`}
                      className="btn-outline w-full justify-center text-xs py-3"
                    >
                      <Phone size={13} />
                      Call This Location
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
