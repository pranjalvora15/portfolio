"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionHeader({ label }: { label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex items-center gap-4">
      <motion.span
        className="block h-px bg-primary"
        initial={{ width: 0 }}
        animate={inView ? { width: 32 } : { width: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <div className="relative overflow-hidden">
        <motion.h2
          className="text-2xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {label}
        </motion.h2>
        {/* Shine sweep */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"
          initial={{ x: "-150%" }}
          animate={inView ? { x: "250%" } : { x: "-150%" }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
