import Link from "next/link";
import { LOCATIONS, HOURS } from "@/lib/data";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-card border-t border-ivory/5">
      {/* Main Footer */}
      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div
                aria-hidden
                className="w-14 h-14 shrink-0 bg-gold opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  WebkitMaskImage: "url(/images/logo.png)",
                  maskImage: "url(/images/logo.png)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
              <div className="flex flex-col leading-none">
                <span className="font-cormorant text-3xl font-light text-ivory">
                  Cura Mind
                </span>
                <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold">
                  & Wellness
                </span>
              </div>
            </Link>
            <p className="text-ivory/50 text-sm leading-relaxed mb-8 font-light">
              Healing begins with understanding. Transformation happens when you are truly seen, supported, and believed in.
            </p>
            <div className="space-y-1">
              <p className="label-eyebrow mb-3">Dr. Vivian Emuobe</p>
              <p className="text-ivory/40 text-xs">DNP, APRN, PMHNP-BC</p>
              <p className="text-ivory/40 text-xs">Board-Certified PMHNP</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-eyebrow mb-6">Navigate</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Dr. Emuobe", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Locations", href: "/locations" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-ivory/50 hover:text-gold text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hours */}
          <div>
            <p className="label-eyebrow mb-6">Hours</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-sm">Monday</p>
                  <p className="text-ivory/40 text-xs">{HOURS.monday}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-ivory/70 text-sm">Saturday</p>
                  <p className="text-ivory/40 text-xs">{HOURS.saturday}</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-ivory/30 text-xs italic">Other days by appointment</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="label-eyebrow mb-4">Telehealth</p>
              <p className="text-ivory/40 text-xs leading-relaxed">
                Available in MA, TX, CA, OR & NY
              </p>
            </div>
          </div>

          {/* Locations */}
          <div>
            <p className="label-eyebrow mb-6">Locations</p>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex items-start gap-3">
                  <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-ivory/70 text-sm font-medium">{loc.state}</p>
                    <p className="text-ivory/40 text-xs">{loc.city}</p>
                    <a
                      href={`tel:${loc.phone}`}
                      className="flex items-center gap-1 text-gold/60 hover:text-gold text-xs transition-colors mt-0.5"
                    >
                      <Phone size={10} />
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/5">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/20 text-xs">
            © {new Date().getFullYear()} Cura Mind & Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-ivory/20 hover:text-ivory/40 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-ivory/20 hover:text-ivory/40 text-xs transition-colors">
              HIPAA Notice
            </Link>
            <Link href="#" className="text-ivory/20 hover:text-ivory/40 text-xs transition-colors">
              Accessibility
            </Link>
          </div>
          <p className="text-ivory/15 text-xs">
            If you are experiencing a mental health emergency, please call 988 or 911.
          </p>
        </div>
      </div>
    </footer>
  );
}
