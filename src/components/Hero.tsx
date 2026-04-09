import Image from "next/image";
import { heroImages } from "@/data/images";

export default function Hero() {
  const hero = heroImages[0];

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={hero.src}
        alt={hero.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        placeholder="blur"
        blurDataURL={hero.blurDataURL}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-warm-white leading-[0.95]">
          Lillehammer
          <br />
          Bilverksted
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-warm-white/80 max-w-2xl mx-auto">
          Kompetanse møter lidenskap — din destinasjon for bilservice i Lillehammer
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.mekopartner.no/bilverksted/lillehammer/lillehammer-bilverksted-as/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-red hover:bg-red-hover text-warm-white font-semibold rounded transition-colors text-lg"
          >
            Bestill time
          </a>
          <a
            href="tel:93988885"
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-warm-white/30 hover:border-warm-white/60 text-warm-white font-semibold rounded transition-colors text-lg"
          >
            Ring oss
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-warm-white/50"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
