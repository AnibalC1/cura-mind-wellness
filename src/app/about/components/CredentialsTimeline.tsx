"use client";

import { motion } from "framer-motion";
import { PROVIDER } from "@/lib/data";
import { GraduationCap, Briefcase, Award, Shield } from "lucide-react";

const TIMELINE = [
  {
    icon: GraduationCap,
    category: "Education",
    title: "Bachelor of Science in Nursing",
    org: "UMass Boston",
    detail: "Foundation in clinical nursing science and patient-centered care",
    color: "sage",
  },
  {
    icon: GraduationCap,
    category: "Education",
    title: "Master's — Psychiatry & Mental Health",
    org: "Walden University",
    detail: "Advanced psychiatric clinical training and evidence-based therapeutic modalities",
    color: "gold",
  },
  {
    icon: GraduationCap,
    category: "Education",
    title: "Doctor of Nursing Practice (DNP)",
    org: "Advanced Graduate Studies",
    detail: "Doctoral-level clinical leadership, advanced pharmacology, and systems-level practice",
    color: "gold",
  },
  {
    icon: Briefcase,
    category: "Experience",
    title: "Psychiatric Programs Director",
    org: "HRI Hospital — Brookline, MA",
    detail: "Led inpatient psychiatric programs, clinical staffing, and patient care standards at a leading Massachusetts psychiatric facility",
    color: "ivory",
  },
  {
    icon: Award,
    category: "Certification",
    title: "Board Certification — PMHNP-BC",
    org: "ANCC (American Nurses Credentialing Center)",
    detail: "Nationally certified Psychiatric Mental Health Nurse Practitioner",
    color: "gold",
  },
  {
    icon: Shield,
    category: "Licensing",
    title: "Multi-State Licensure",
    org: "TX · MA · CA · OR · NY",
    detail: "Licensed to practice psychiatric care in five states — in-person and via telehealth",
    color: "sage",
  },
];

const colorMap: Record<string, string> = {
  gold: "bg-gold/10 border-gold/20 text-gold",
  sage: "bg-sage/10 border-sage/20 text-sage",
  ivory: "bg-ivory/5 border-ivory/20 text-ivory",
};

export function CredentialsTimeline() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="label-eyebrow mb-4 inline-block">Credentials & Experience</span>
          <h2 className="font-cormorant text-display-lg font-light text-ivory">
            Education & Career
          </h2>
          <div className="gold-divider mx-auto mt-6" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

            <div className="space-y-8">
              {TIMELINE.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="flex gap-6"
                  >
                    {/* Icon node */}
                    <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center shrink-0 ${colorMap[item.color]}`}>
                      <Icon size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2 pb-8 border-b border-ivory/5 last:border-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] tracking-widest uppercase text-ivory/30 font-inter">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="font-dm text-lg text-ivory mb-1">{item.title}</h3>
                      <p className="text-gold/60 text-sm mb-2 font-cormorant italic">{item.org}</p>
                      <p className="text-ivory/40 text-sm leading-relaxed font-light">{item.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
