"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Pill, ClipboardList, Heart, Zap, Video, Sparkles, Activity, Brain, Dna } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Pill, ClipboardList, Heart, Zap, Video, Sparkles, Activity, Brain, Dna,
};

const FEATURED_SERVICES = SERVICES.slice(0, 6);

export function ServicesOverview() {
  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage/3 rounded-full blur-3xl" />

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="label-eyebrow mb-4 inline-block">Our Specialties</span>
          <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
            Comprehensive Psychiatric Care
          </h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="text-ivory/50 max-w-xl mx-auto text-base leading-relaxed font-light">
            Evidence-based treatments delivered with clinical precision and genuine compassion.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Heart;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ServiceCard service={service} Icon={Icon} />
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-outline">
            View All Services
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
}: {
  service: (typeof SERVICES)[0];
  Icon: React.ElementType;
}) {
  return (
    <div className={cn(
      "card-luxury p-8 group cursor-pointer transition-all duration-500",
      "hover:bg-bg-elevated"
    )}>
      {/* Icon */}
      <div className="mb-6">
        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors duration-300">
          <Icon size={20} className="text-gold" />
        </div>
      </div>

      {/* Content */}
      <h3 className="font-dm text-xl text-ivory mb-3 group-hover:text-gold transition-colors duration-300">
        {service.name}
      </h3>
      <p className="text-ivory/40 text-sm leading-relaxed font-light">
        {service.shortDescription}
      </p>

      {/* State availability */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {service.states.map((state) => (
          <span
            key={state}
            className={cn(
              "text-[10px] tracking-wider px-2 py-0.5 rounded border font-medium",
              state === "NY" && !service.telehealth
                ? "border-ivory/10 text-ivory/20"
                : "border-gold/20 text-gold/50"
            )}
          >
            {state}
          </span>
        ))}
        {service.telehealth && (
          <span className="text-[10px] tracking-wider px-2 py-0.5 rounded border border-sage/30 text-sage/60 font-medium">
            Telehealth
          </span>
        )}
      </div>

      {/* Special note */}
      {service.note && (
        <p className="mt-3 text-gold/40 text-xs italic">{service.note}</p>
      )}

      {/* Hover arrow */}
      <div className="mt-6 flex items-center gap-2 text-gold/0 group-hover:text-gold/60 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <span className="text-xs tracking-widest uppercase font-inter">Learn more</span>
        <ArrowRight size={12} />
      </div>
    </div>
  );
}
