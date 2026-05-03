import type { Metadata } from "next";
import { ServicesHero } from "./components/ServicesHero";
import { ServicesList } from "./components/ServicesList";
import { TelehealthBanner } from "./components/TelehealthBanner";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive psychiatric services at Cura Mind & Wellness — medication management, TMS therapy, IV ketamine, psychotherapy, ADHD assessment, pharmacogenomics, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <TelehealthBanner />
      <CTASection />
    </>
  );
}
