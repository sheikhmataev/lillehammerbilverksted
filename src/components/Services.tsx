import AnimateInView from "./AnimateInView";

const services = [
  {
    title: "Bilservice",
    description:
      "Regelmessig service holder bilen i topp stand for mange år fremover.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Dekkservice",
    description:
      "Dekkskift, balansering og oppbevaring for trygg kjøring hele året.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      </svg>
    ),
  },
  {
    title: "Reparasjoner",
    description:
      "Alt fra motor og elektronikk til bremser og clutch — vi fikser det.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    title: "Drop-in",
    description:
      "Ingen timeavtale? Stikk innom — vi tar imot drop-in kunder hver dag.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="py-20 sm:py-28 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-3">
              Tjenester
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white">
              Komplette biltjenester
            </h2>
          </div>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <AnimateInView key={service.title}>
              <div className="group bg-surface rounded-xl p-6 border border-white/5 hover:border-red/30 transition-all duration-300 h-full">
                <div className="text-red mb-4">{service.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-warm-white mb-2">
                  {service.title}
                </h3>
                <p className="text-warm-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-red transition-all duration-300" />
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
