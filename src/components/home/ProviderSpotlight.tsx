"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, MapPin, GraduationCap } from "lucide-react";
import { PROVIDER } from "@/lib/data";

export function ProviderSpotlight() {
  return (
    <section className="section-padding bg-bg-card relative overflow-hidden">
      {/* Decorative gold line left */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Photo placeholder + credential badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Portrait Frame */}
            <div className="relative">
              {/* Outer decorative border */}
              <div className="absolute -inset-3 border border-gold/10 rounded-3xl" />
              <div className="absolute -inset-6 border border-gold/5 rounded-4xl" />

              {/* Portrait */}
              <div className="relative bg-bg-elevated rounded-2xl overflow-hidden aspect-[3/4] flex items-end">
                {/* Real provider photo */}
                <Image
                  src="/images/vivian-1.png"
                  alt="Dr. Vivian Emuobe, DNP, APRN, PMHNP-BC"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Bottom overlay with name */}
                <div className="relative z-10 w-full p-8 bg-gradient-to-t from-bg via-bg/80 to-transparent">
                  <p className="font-cormorant text-3xl font-light text-ivory">
                    {PROVIDER.name}
                  </p>
                  <p className="text-gold text-xs tracking-widest uppercase mt-1">
                    {PROVIDER.credentials}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating credential card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -right-6 top-16 card-luxury p-5 w-56"
            >
              <div className="flex items-start gap-3">
                <Award size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-xs font-medium mb-1">Board Certified</p>
                  <p className="text-ivory/40 text-[11px] leading-tight">
                    Psychiatric Mental Health Nurse Practitioner
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating license card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="absolute -left-6 bottom-16 card-luxury p-5"
            >
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-sage mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-xs font-medium mb-2">Licensed In</p>
                  <div className="flex gap-1.5">
                    {PROVIDER.licenses.map((l) => (
                      <span key={l} className="text-[10px] border border-sage/30 text-sage/60 px-1.5 py-0.5 rounded">
                        {l.slice(0, 2).toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <span className="label-eyebrow mb-4 inline-block">Meet Your Provider</span>
            <h2 className="font-cormorant text-display-lg font-light text-ivory mb-3">
              Dr. Vivian Emuobe
            </h2>
            <p className="font-cormorant text-xl text-gold italic mb-8">
              {PROVIDER.title}
            </p>

            <div className="gold-divider mb-8" />

            <p className="text-ivory/55 leading-relaxed mb-8 font-light text-base">
              With doctoral-level training and extensive clinical leadership experience, Dr. Emuobe brings both institutional depth and intimate personal care to every patient relationship. Her practice is built on the conviction that healing requires being truly seen.
            </p>

            {/* Former Role */}
            <div className="bg-bg-elevated rounded-xl p-5 mb-8 border border-ivory/5">
              <div className="flex items-start gap-3">
                <Award size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/30 text-xs tracking-wider uppercase mb-1">Previously</p>
                  <p className="text-ivory/70 text-sm">{PROVIDER.formerRole}</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={14} className="text-gold" />
                <span className="label-eyebrow">Education</span>
              </div>
              <div className="space-y-3 pl-5 border-l border-gold/20">
                {PROVIDER.education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-ivory/70 text-sm">{edu.degree}</p>
                    <p className="text-ivory/30 text-xs">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-10">
              <p className="label-eyebrow mb-4">Areas of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {PROVIDER.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs px-3 py-1.5 rounded-full bg-bg-elevated border border-ivory/8 text-ivory/50"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/about" className="btn-outline">
              Full Profile
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
