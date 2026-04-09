import AnimateInView from "./AnimateInView";

const hours = [
  { day: "Mandag – Torsdag", time: "08:00 – 16:30" },
  { day: "Fredag", time: "08:00 – 16:30" },
  { day: "Lørdag", time: "08:00 – 15:00" },
  { day: "Søndag", time: "Stengt" },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView>
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-widest uppercase mb-3">
              Kontakt
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white">
              Åpningstider & kontakt
            </h2>
          </div>
        </AnimateInView>

        <AnimateInView>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Hours + Contact info */}
            <div className="bg-surface rounded-xl p-8 border border-white/5">
              <h3 className="font-heading text-2xl font-semibold text-warm-white mb-6">
                Åpningstider
              </h3>

              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-warm-white/70">{h.day}</span>
                    <span
                      className={`font-semibold ${h.time === "Stengt" ? "text-red" : "text-warm-white"}`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 text-red shrink-0"
                  >
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a href="tel:93988885" className="text-warm-white hover:text-amber transition-colors">
                    939 88 885
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 text-red shrink-0"
                  >
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a
                    href="mailto:lillehammerbilverksted@gmail.com"
                    className="text-warm-white hover:text-amber transition-colors break-all"
                  >
                    lillehammerbilverksted@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5 text-red shrink-0 mt-0.5"
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-warm-white/70">
                    Storgata 136, 2615 Lillehammer
                  </span>
                </div>
              </div>

              <a
                href="https://www.mekopartner.no/bilverksted/lillehammer/lillehammer-bilverksted-as/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center w-full px-6 py-3.5 bg-red hover:bg-red-hover text-warm-white font-semibold rounded transition-colors"
              >
                Bestill time online
              </a>
            </div>

            {/* Right: Google Map */}
            <div className="bg-surface rounded-xl overflow-hidden border border-white/5 min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.706938980579!2d10.458463977866003!3d61.12142367553129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466a88101b9fb7ef%3A0xad89947cdc9b7d00!2sLillehammer%20Bilverksted%20AS!5e1!3m2!1sen!2sno!4v1775740226174!5m2!1sen!2sno"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lillehammer Bilverksted på Google Maps"
              />
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
