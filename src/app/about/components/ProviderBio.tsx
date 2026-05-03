"use client";

import { motion } from "framer-motion";
import { PROVIDER } from "@/lib/data";
import { Award, Heart, Globe } from "lucide-react";

export function ProviderBio() {
  return (
    <section className="section-padding bg-bg-card">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/10 rounded-3xl" />
              <div className="bg-bg-elevated rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated via-bg-card to-bg" />
                <div className="text-center relative z-10">
                  <div className="w-28 h-28 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-cormorant text-4xl text-gold/40 font-light">VE</span>
                  </div>
                  <p className="text-ivory/20 text-xs tracking-widest">Provider Photo</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg to-transparent">
                  <p className="font-cormorant text-2xl font-light text-ivory">{PROVIDER.name}</p>
                  <p className="text-gold text-xs tracking-widest uppercase mt-1">{PROVIDER.credentials}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { label: "States Licensed", value: "5" },
                { label: "Years Experience", value: "10+" },
                { label: "Specialties", value: "6" },
                { label: "Services Offered", value: "9" },
              ].map((stat) => (
                <div key={stat.label} className="card-luxury p-4 text-center">
                  <p className="font-cormorant text-3xl font-light text-gold mb-1">{stat.value}</p>
                  <p className="text-ivory/30 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <span className="label-eyebrow mb-4 inline-block">Biography</span>
            <h2 className="font-cormorant text-display-md font-light text-ivory mb-8">
              A Clinician Who Truly Listens
            </h2>

            <div className="space-y-5 text-ivory/55 leading-relaxed font-light text-base">
              <p>
                Dr. Vivian Emuobe is a board-certified Psychiatric Mental Health Nurse Practitioner with advanced doctoral training and extensive clinical experience across five states. Her approach is rooted in the belief that healing is possible when patients feel genuinely seen, heard, and understood.
              </p>
              <p>
                With a distinguished background as former Psychiatric Programs Director at HRI Hospital in Brookline, Massachusetts, Dr. Emuobe brings both institutional leadership and deeply personal clinical care to every patient relationship. She is licensed in Texas, Massachusetts, California, Oregon, and New York — enabling her to serve patients across the country through telehealth.
              </p>
              <p>
                Dr. Emuobe specializes in trauma-informed psychiatric care, women's mental health across the lifespan, and culturally responsive treatment that honors the full complexity of each person's identity and experience. She understands that mental health is not separate from culture, history, or lived experience — and she practices accordingly.
              </p>
              <p>
                At Cura Mind & Wellness, she has built a practice where clinical excellence and human warmth are not competing values — they are inseparable.
              </p>
            </div>

            {/* Key highlights */}
            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-elevated border border-ivory/5">
                <Award size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-sm font-medium mb-1">Former Leadership Role</p>
                  <p className="text-ivory/40 text-sm">{PROVIDER.formerRole}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-elevated border border-ivory/5">
                <Globe size={18} className="text-sage mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-sm font-medium mb-1">Multi-State Licensing</p>
                  <p className="text-ivory/40 text-sm">
                    Licensed and practicing in {PROVIDER.licenses.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-bg-elevated border border-ivory/5">
                <Heart size={18} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-sm font-medium mb-1">Clinical Philosophy</p>
                  <p className="text-ivory/40 text-sm">
                    Trauma-informed, culturally responsive, whole-person psychiatric care
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
