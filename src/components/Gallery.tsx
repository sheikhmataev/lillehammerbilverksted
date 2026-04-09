"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/images";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="galleri" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-3">
            Galleri
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white">
            Fra verkstedet
          </h2>
        </div>

        {/* Masonry grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i)}
              className="block w-full overflow-hidden rounded-lg group cursor-pointer break-inside-avoid"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={img.blurDataURL}
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)
          }
          onNext={() =>
            setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
          }
        />
      )}
    </section>
  );
}
