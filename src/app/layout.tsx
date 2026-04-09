import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lillehammer Bilverksted AS — Ditt lokale MekoPartner verksted",
  description:
    "Kompetanse møter lidenskap. Lillehammer Bilverksted AS tilbyr bilservice, dekkskift, reparasjoner og drop-in for alle bilmerker. Åpen mandag–lørdag.",
  keywords: [
    "bilverksted",
    "Lillehammer",
    "bilservice",
    "dekkskift",
    "reparasjon",
    "MekoPartner",
    "drop-in",
  ],
  openGraph: {
    title: "Lillehammer Bilverksted AS",
    description:
      "Ditt lokale MekoPartner bilverksted i Lillehammer. Bilservice, dekkskift og reparasjoner for alle bilmerker.",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
