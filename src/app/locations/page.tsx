import type { Metadata } from "next";
import { LocationsHero } from "./components/LocationsHero";
import { LocationsGrid } from "./components/LocationsGrid";
import { TelehealthSection } from "./components/TelehealthSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Cura Mind & Wellness has locations in Quincy MA, Richmond TX, Riverside CA, and Portland OR. Telehealth available in all licensed states.",
};

export default function LocationsPage() {
  return (
    <>
      <LocationsHero />
      <LocationsGrid />
      <TelehealthSection />
      <CTASection />
    </>
  );
}
