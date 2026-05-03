import type { Metadata } from "next";
import { ContactHero } from "./components/ContactHero";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cura Mind & Wellness to schedule a psychiatric consultation. Reach us by phone or complete our secure intake form.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-padding bg-bg">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
