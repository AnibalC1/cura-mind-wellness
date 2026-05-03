import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProviderSpotlight } from "@/components/home/ProviderSpotlight";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ProviderSpotlight />
      <PhilosophySection />
      <LocationsPreview />
      <CTASection />
    </>
  );
}
