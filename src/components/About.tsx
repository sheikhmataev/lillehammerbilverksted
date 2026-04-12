import Image from "next/image";
import { ownerImages } from "@/data/images";
import AnimateInView from "./AnimateInView";

export default function About() {
  const owner = ownerImages.nasihEier;

  return (
    <section id="om-oss" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-3">
                Om oss
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white leading-tight">
                Ditt lokale MekoPartner bilverksted i Lillehammer
              </h2>
              <div className="mt-6 space-y-4 text-warm-white/70 leading-relaxed">
                <p>
                  Lillehammer Bilverksted AS har levert pålitelig bilservice siden 2013. Med 10
                  erfarne mekanikere og et bredt spekter av tjenester er vi rustet til å ta hånd om
                  din bil — uansett merke eller modell.
                </p>
                <p>
                  Som stolt MekoPartner-verksted bruker vi kun reservedeler av høy kvalitet og følger
                  strengt bilprodusentenes anbefalinger. Vi tror på personlig service — nyt en kopp
                  kaffe mens du venter, og stol på at bilen din er i trygge hender.
                </p>
                <p>
                  Enten du trenger regelmessig service, dekkskift, avanserte reparasjoner eller bare
                  en rask sjekk, er vi klare. Drop-in er alltid velkommen.
                </p>
              </div>
            </div>

            {/* Owner photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden ring-2 ring-warm-white/10">
                  <Image
                    src={owner.src}
                    alt={owner.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                    placeholder="blur"
                    blurDataURL={owner.blurDataURL}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-heading text-lg font-semibold text-warm-white">
                    Nasih Raof Ahmed
                  </p>
                  <p className="text-sm text-warm-white/50">Daglig leder & eier</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
