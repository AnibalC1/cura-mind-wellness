"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-0 md:pb-0">
      {/* Background layers */}
      <div className="absolute inset-0 bg-bg" />

      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/8 via-transparent to-transparent"
        style={{ backgroundSize: "120% 80%", backgroundPosition: "50% -10%" }}
      />

      {/* Subtle texture lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 80px, #5DA9A7 80px, #5DA9A7 81px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="label-eyebrow mb-8 inline-block">
            Psychiatric & Mental Health Care
          </span>
        </motion.div>

        <motion.h1
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-cormorant text-display-2xl font-light text-ivory max-w-5xl mx-auto mb-4"
          style={{ lineHeight: "1.04" }}
        >
          Healing begins
          <br />
          <span className="italic text-gold-gradient">with understanding.</span>
        </motion.h1>

        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex justify-center mb-10"
        >
          <div className="gold-divider" />
        </motion.div>

        <motion.p
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-cormorant text-xl md:text-2xl font-light text-ivory/60 max-w-2xl mx-auto leading-relaxed mb-14"
          style={{ fontStyle: "italic" }}
        >
          Transformation happens when you are truly seen, supported, and believed in.
        </motion.p>

        <motion.div
          custom={0.55}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Begin Your Journey
            <ArrowRight size={14} />
          </Link>
          <Link href="/services" className="btn-outline">
            Explore Services
          </Link>
        </motion.div>

        {/* Provider Name */}
        <motion.div
          custom={0.7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-ivory/5"
        >
          <p className="text-ivory/30 text-xs tracking-[0.25em] uppercase font-inter mb-2">
            Led by
          </p>
          <p className="font-cormorant text-2xl font-light text-ivory/70">
            Dr. Vivian Emuobe, DNP, APRN, PMHNP-BC
          </p>
          <p className="text-ivory/30 text-xs mt-1 tracking-wide">
            Licensed in MA · TX · CA · OR · NY
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-ivory/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
