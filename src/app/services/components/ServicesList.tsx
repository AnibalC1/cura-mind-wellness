"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import {
  Pill, ClipboardList, Heart, Zap, Video, Sparkles, Activity, Brain, Dna,
  CheckCircle, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";


const ICON_MAP: Record<string, React.ElementType> = {
  Pill, ClipboardList, Heart, Zap, Video, Sparkles, Activity, Brain, Dna,
};

export function ServicesList() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-luxury">
        <div className="space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Heart;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="card-luxury overflow-hidden group hover:bg-bg-elevated transition-colors duration-500">
                  <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-0",
                  )}>
                    {/* Left accent bar */}
                    <div className={cn(
                      "lg:col-span-1 flex lg:flex-col items-center justify-start lg:justify-center p-6 lg:p-8",
                      "border-b lg:border-b-0 lg:border-r border-ivory/5"
                    )}>
                      <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/15 transition-colors">
                        <Icon size={22} className="text-gold" />
                      </div>
                      <div className="ml-4 lg:ml-0 lg:mt-6">
                        <p className="font-cormorant text-5xl font-light text-ivory/5 leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="lg:col-span-8 p-8 lg:p-10">
                      <div className="flex flex-wrap items-start gap-3 mb-4">
                        <h2 className="font-dm text-2xl text-ivory group-hover:text-gold transition-colors duration-300">
                          {service.name}
                        </h2>
                        {service.note && (
                          <span className="text-xs px-3 py-1 rounded-full bg-sage/10 border border-sage/20 text-sage">
                            {service.note}
                          </span>
                        )}
                      </div>

                      <p className="text-ivory/60 text-base leading-relaxed mb-6 font-light">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="label-eyebrow mb-3">Who Is This For?</p>
                          <p className="text-ivory/40 text-sm leading-relaxed font-light">{service.whoFor}</p>
                        </div>
                        <div>
                          <p className="label-eyebrow mb-3">What To Expect</p>
                          <p className="text-ivory/40 text-sm leading-relaxed font-light">{service.whatToExpect}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: availability column */}
                    <div className="lg:col-span-3 p-8 border-t lg:border-t-0 lg:border-l border-ivory/5 flex flex-col justify-between">
                      <div>
                        <p className="label-eyebrow mb-4">Available In</p>
                        <div className="space-y-2">
                          {["MA", "TX", "CA", "OR", "NY"].map((state) => {
                            const available = service.states.includes(state);
                            return (
                              <div key={state} className="flex items-center gap-2">
                                <CheckCircle
                                  size={14}
                                  className={available ? "text-gold" : "text-ivory/10"}
                                />
                                <span className={cn(
                                  "text-sm",
                                  available ? "text-ivory/60" : "text-ivory/20 line-through"
                                )}>
                                  {state === "MA" ? "Massachusetts" :
                                   state === "TX" ? "Texas" :
                                   state === "CA" ? "California" :
                                   state === "OR" ? "Oregon" : "New York"}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-ivory/5">
                        {service.telehealth ? (
                          <div className="flex items-center gap-2">
                            <Video size={14} className="text-sage" />
                            <span className="text-sage/70 text-xs">Telehealth available</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-ivory/30" />
                            <span className="text-ivory/30 text-xs">In-person only</span>
                          </div>
                        )}
                      </div>
                    </div>
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

