import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const head = Oswald({ variable: "--font-head", subsets: ["latin"], weight: ["500", "600", "700"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kbpm-contracting-inc.growlocalvisibility.com"),
  title: "KBPM & Contracting Inc. | Contractor & Property Maintenance in The Beaches, Toronto",
  description:
    "Kew Beach Property Maintenance & Contracting: renovations, property maintenance, property management, Airbnb upkeep and backyard builds across Toronto and the GTA. Led by Courtney and Alex. 5.0 stars from 12 Google reviews. Call 647-507-2942.",
  openGraph: {
    title: "KBPM & Contracting Inc. | One Call for Every Trade",
    description: "Renovations, maintenance and property management from The Beaches, Toronto. Call 647-507-2942.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p1.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
