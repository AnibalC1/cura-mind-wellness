import type { Metadata } from "next";
import { AboutHero } from "./components/AboutHero";
import { ProviderBio } from "./components/ProviderBio";
import { CredentialsTimeline } from "./components/CredentialsTimeline";
import { ClinicalApproach } from "./components/ClinicalApproach";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Dr. Emuobe",
  description:
    "Meet Dr. Vivian Emuobe, DNP, APRN, PMHNP-BC — board-certified psychiatric mental health nurse practitioner and founder of Cura Mind & Wellness.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProviderBio />
      <CredentialsTimeline />
      <ClinicalApproach />
      <CTASection />
    </>
  );
}
