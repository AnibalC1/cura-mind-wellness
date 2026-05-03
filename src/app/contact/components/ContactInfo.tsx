"use client";

import { motion } from "framer-motion";
import { LOCATIONS, HOURS } from "@/lib/data";
import { Phone, Clock, MapPin, Shield } from "lucide-react";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Hours */}
      <div className="card-luxury p-7">
        <div className="flex items-center gap-3 mb-6">
          <Clock size={16} className="text-gold" />
          <span className="label-eyebrow">Office Hours</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-ivory/60 text-sm">Monday</span>
            <span className="text-ivory/40 text-sm font-mono">{HOURS.monday}</span>
          </div>
          <div className="w-full h-px bg-ivory/5" />
          <div className="flex items-center justify-between">
            <span className="text-ivory/60 text-sm">Saturday</span>
            <span className="text-ivory/40 text-sm font-mono">{HOURS.saturday}</span>
          </div>
          <div className="w-full h-px bg-ivory/5" />
          <p className="text-ivory/25 text-xs italic">Other days by appointment</p>
        </div>
      </div>

      {/* Phone numbers */}
      <div className="card-luxury p-7">
        <div className="flex items-center gap-3 mb-6">
          <Phone size={16} className="text-gold" />
          <span className="label-eyebrow">By Phone</span>
        </div>
        <div className="space-y-4">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="flex items-start gap-3">
              <MapPin size={13} className="text-gold/50 mt-0.5 shrink-0" />
              <div>
                <p className="text-ivory/60 text-sm">{loc.state}</p>
                <a
                  href={`tel:${loc.phone}`}
                  className="text-gold/60 hover:text-gold text-sm font-mono transition-colors"
                >
                  {loc.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="card-luxury p-7">
        <div className="flex items-center gap-3 mb-6">
          <MapPin size={16} className="text-gold" />
          <span className="label-eyebrow">Our Offices</span>
        </div>
        <div className="space-y-5">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="border-b border-ivory/5 pb-5 last:border-0 last:pb-0">
              <p className="text-ivory/70 text-sm font-medium mb-1">{loc.state}</p>
              <p className="text-ivory/40 text-xs leading-relaxed">
                {loc.address}<br />{loc.city}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy note */}
      <div className="flex items-start gap-3 p-5 rounded-xl border border-ivory/5 bg-bg-elevated">
        <Shield size={14} className="text-sage mt-0.5 shrink-0" />
        <p className="text-ivory/30 text-xs leading-relaxed">
          All communication is protected under HIPAA. Your privacy is our commitment.
        </p>
      </div>

      {/* Crisis note */}
      <div className="p-5 rounded-xl border border-gold/10 bg-gold/5">
        <p className="text-ivory/40 text-xs leading-relaxed">
          <span className="text-gold/60 font-medium block mb-1">If you are in crisis:</span>
          Call or text <span className="text-gold/60 font-mono">988</span> (Suicide & Crisis Lifeline) or call <span className="text-gold/60 font-mono">911</span> for immediate help.
        </p>
      </div>
    </motion.div>
  );
}
