"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Siden 2013", icon: "🏢" },
  { label: "10 ansatte", icon: "👥" },
  { label: "Alle bilmerker", icon: "🚗" },
  { label: "Åpen lørdag", icon: "📅" },
];

export default function TrustBar() {
  return (
    <section className="bg-surface py-6 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 text-warm-white/90 text-sm sm:text-base font-medium"
            >
              <span className="text-lg">{stat.icon}</span>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
