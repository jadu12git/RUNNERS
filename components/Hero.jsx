"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 text-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-8"
      >
        Discover Music Events
      </motion.h1>

      <div className="h-24 mb-10 flex items-center justify-center">
      <div className="w-2/3 h-0.5 bg-purple-500 opacity-70 animate-pulse shadow-[0_0_20px_rgba(139,92,246,0.7)]" />

      </div>

      <Link href="/signup">
        <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 rounded-xl bg-purple-500 shadow-lg shadow-purple-500/40"
        >
            Join the movement
        </motion.button>
        </Link>

    </section>
  );
}
