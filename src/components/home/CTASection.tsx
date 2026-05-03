"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 bg-bg-card overflow-hidden">
      {/* Gold glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/8 via-transparent to-transparent"
        style={{ backgroundSize: "60% 80%", backgroundPosition: "50% 50%" }}
      />

      {/* Top + bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container-luxury text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="label-eyebrow mb-6 inline-block">Take the First Step</span>
          <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6 max-w-3xl mx-auto">
            Ready to begin your journey toward healing?
          </h2>

          <div className="gold-divider mx-auto mb-8" />

          <p className="text-ivory/50 text-base max-w-xl mx-auto leading-relaxed mb-12 font-light">
            Our team is here to guide you. Reach out today — your first step toward transformation starts with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary">
              Book a Consultation
              <ArrowRight size={14} />
            </Link>
            <a href="tel:6177777982" className="btn-outline">
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* State badges */}
          <div>
            <p className="text-ivory/25 text-xs tracking-[0.2em] uppercase mb-4">
              Accepting new patients in
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {["Massachusetts", "Texas", "California", "Oregon", "New York"].map((state) => (
                <span
                  key={state}
                  className="text-xs px-4 py-1.5 border border-ivory/10 text-ivory/30 rounded-full font-inter"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
