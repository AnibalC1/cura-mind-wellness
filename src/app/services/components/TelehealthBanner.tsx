"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, ArrowRight, Shield } from "lucide-react";

export function TelehealthBanner() {
  return (
    <section className="py-20 bg-bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-sage/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />

      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-sage/10 border border-sage/20 flex items-center justify-center">
                  <Video size={24} className="text-sage" />
                </div>
                <div>
                  <span className="label-eyebrow block mb-1">Remote Care</span>
                  <h2 className="font-dm text-2xl text-ivory">Telepsychiatry</h2>
                </div>
              </div>
              <p className="text-ivory/50 leading-relaxed mb-6 font-light">
                All services marked with telehealth availability can be delivered via secure, HIPAA-compliant video consultation. No commuting. No waiting rooms. The same quality of care.
              </p>
              <div className="flex items-start gap-3">
                <Shield size={14} className="text-gold mt-0.5 shrink-0" />
                <p className="text-ivory/30 text-sm">
                  HIPAA-compliant platform. Your privacy is protected at every step.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "No travel required",
                "Flexible scheduling",
                "Available across MA, TX, CA, OR & NY",
                "Same quality as in-person care",
                "Private, secure video platform",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-bg-elevated border border-ivory/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                  <span className="text-ivory/60 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-outline">
              Schedule a Telehealth Visit
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
