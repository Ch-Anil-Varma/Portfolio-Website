"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 18,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="console-text text-xs uppercase tracking-[0.2em] text-primary mb-3">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl mb-14", align === "center" && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-[0_18px_40px_-24px_rgba(37,99,235,0.35)] hover:-translate-y-1 hover:border-primary/40",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="console-text inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] text-muted">
      {children}
    </span>
  );
}
