"use client";

import { useState } from "react";

const navLinks = [
  { label: "Om oss", href: "#om-oss" },
  { label: "Tjenester", href: "#tjenester" },
  { label: "Galleri", href: "#galleri" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold tracking-wide text-warm-white">
          Lillehammer Bilverksted
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-warm-white/70 hover:text-warm-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:93988885"
            className="text-sm font-semibold text-warm-white bg-red hover:bg-red-hover transition-colors px-4 py-2 rounded"
          >
            Ring 939 88 885
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-warm-white p-2"
          aria-label="Meny"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-white/5 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-warm-white/70 hover:text-warm-white transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:93988885"
            className="block mt-3 text-center font-semibold text-warm-white bg-red hover:bg-red-hover transition-colors px-4 py-3 rounded"
          >
            Ring 939 88 885
          </a>
        </div>
      )}
    </nav>
  );
}
