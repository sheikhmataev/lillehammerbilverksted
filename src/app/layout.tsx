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
  title: "Lillehammer Bilverksted AS | Bilservice, Reparasjon & Bilpleie i Lillehammer",
  description:
    "Autorisert MekoPartner bilverksted i Lillehammer. Vi tilbyr profesjonell bilservice, reparasjoner, dekkskift, bilpleie og EU-kontroll for alle bilmerker. Drop-in og timebestilling. Åpen mandag–lørdag på Storgata 136.",
  keywords: [
    "bilverksted Lillehammer",
    "bilservice Lillehammer",
    "bilreparasjon Lillehammer",
    "mekopartner Lillehammer",
    "dekkskift Lillehammer",
    "bilpleie Lillehammer",
    "EU-kontroll Lillehammer",
    "verksted Lillehammer",
    "bilverksted",
    "bilservice",
    "bilreparasjon",
    "bilpleie",
    "dekkhotell",
    "oljeskift",
    "bremser",
    "suspensjon",
    "eksos",
    "bilverksted Gjøvik",
    "bilverksted Hamar",
    "Mjøsregionen",
    "Oppland",
    "alle bilmerker",
    "drop-in verksted",
    "timebestilling bil",
    "bilservice pris",
    "billig bilservice",
  ],
  authors: [{ name: "Lillehammer Bilverksted AS" }],
  creator: "Lillehammer Bilverksted AS",
  publisher: "Lillehammer Bilverksted AS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lillehammerbilverksted.no"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lillehammer Bilverksted AS | Autorisert MekoPartner Verksted",
    description:
      "Ditt lokale MekoPartner bilverksted i Lillehammer. Profesjonell bilservice, reparasjoner, dekkskift, bilpleie og EU-kontroll for alle bilmerker. Drop-in og timebestilling.",
    url: "https://lillehammerbilverksted.no",
    siteName: "Lillehammer Bilverksted AS",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "https://lillehammerbilverksted.no/images/nasih_eier.png",
        width: 1200,
        height: 630,
        alt: "Lillehammer Bilverksted AS - Autorisert MekoPartner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lillehammer Bilverksted AS | Bilservice i Lillehammer",
    description:
      "Autorisert MekoPartner bilverksted i Lillehammer. Bilservice, reparasjoner, dekkskift og bilpleie for alle bilmerker.",
    images: ["https://lillehammerbilverksted.no/images/nasih_eier.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Lillehammer Bilverksted AS",
    image: "https://lillehammerbilverksted.no/images/nasih_eier.png",
    "@id": "https://lillehammerbilverksted.no",
    url: "https://lillehammerbilverksted.no",
    telephone: "+4793988885",
    email: "lillehammerbilverksted@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Storgata 136",
      addressLocality: "Lillehammer",
      postalCode: "2615",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 61.12142367553129,
      longitude: 10.458463977866003,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "16:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    description:
      "Autorisert MekoPartner bilverksted i Lillehammer. Vi tilbyr profesjonell bilservice, reparasjoner, dekkskift, bilpleie og EU-kontroll for alle bilmerker.",
    sameAs: [
      "https://www.mekopartner.no/bilverksted/lillehammer/lillehammer-bilverksted-as/",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Lillehammer",
      },
      {
        "@type": "City",
        name: "Gjøvik",
      },
      {
        "@type": "City",
        name: "Hamar",
      },
      {
        "@type": "AdministrativeArea",
        name: "Oppland",
      },
    ],
    serviceType: [
      "Bilservice",
      "Bilreparasjon",
      "Dekkskift",
      "Bilpleie",
      "EU-kontroll",
      "Oljeskift",
      "Bremser",
      "Suspensjon",
      "Eksos",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Hva koster en bilservice hos Lillehammer Bilverksted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prisen på bilservice varierer avhengig av biltype og omfang av service. Kontakt oss på 939 88 885 for et pristilbud eller bestill time online.",
        },
      },
      {
        "@type": "Question",
        name: "Tar dere imot alle bilmerker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, som autorisert MekoPartner verksted tar vi imot alle bilmerker for service, reparasjon og EU-kontroll.",
        },
      },
      {
        "@type": "Question",
        name: "Kan jeg komme på drop-in uten timebestilling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vi tar imot drop-in kunder innenfor åpningstidene. For å unngå ventetid anbefaler vi likevel å bestille time på forhånd.",
        },
      },
      {
        "@type": "Question",
        name: "Hvor lang tid tar en EU-kontroll?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En EU-kontroll tar vanligvis 30-45 minutter. Vi kan også utføre nødvendige reparasjoner hvis bilen ikke godkjennes.",
        },
      },
      {
        "@type": "Question",
        name: "Tilbyr dere dekkhotell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, vi tilbyr dekkhotell for lagring av sommer- og vinterdekk. Kontakt oss for priser og tilgjengelighet.",
        },
      },
    ],
  };

  return (
    <html
      lang="nb"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
