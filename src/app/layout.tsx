import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Serif_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cura Mind & Wellness | Luxury Psychiatric Care",
    template: "%s | Cura Mind & Wellness",
  },
  description:
    "Board-certified psychiatric care with Dr. Vivian Emuobe, DNP, APRN, PMHNP-BC. Telehealth & in-person across MA, TX, CA, OR. Medication management, TMS therapy, ketamine, and more.",
  keywords: [
    "psychiatrist",
    "mental health",
    "medication management",
    "TMS therapy",
    "ketamine therapy",
    "telehealth psychiatry",
    "ADHD assessment",
    "Quincy MA",
    "Richmond TX",
    "Riverside CA",
    "Portland OR",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Cura Mind & Wellness",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSerif.variable} ${inter.variable} ${cinzel.variable}`}
    >
      <body className="bg-bg text-ivory-muted antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
