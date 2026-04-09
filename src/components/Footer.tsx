export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 items-center text-center sm:text-left">
          {/* Logo / Name */}
          <div>
            <p className="font-heading text-xl font-bold text-warm-white">
              Lillehammer Bilverksted AS
            </p>
            <p className="mt-1 text-sm text-warm-white/40">
              Ditt lokale MekoPartner verksted
            </p>
          </div>

          {/* Address + Org */}
          <div className="text-sm text-warm-white/50 sm:text-center">
            <p>Storgata 136, 2615 Lillehammer</p>
            <p className="mt-1">Org.nr: 912 153 797</p>
          </div>

          {/* MekoPartner badge */}
          <div className="sm:text-right">
            <p className="text-sm font-semibold text-warm-white/60">
              MekoPartner
            </p>
            <p className="text-xs text-warm-white/30 mt-1">
              Kvalitetssikret bilverksted
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-warm-white/30">
          &copy; {new Date().getFullYear()} Lillehammer Bilverksted AS. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
}
