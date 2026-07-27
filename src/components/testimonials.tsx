"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-24 sm:py-28 bg-surface/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say after working with me."
          align="center"
        />

        <div className="max-w-2xl mx-auto relative">
          <Quote size={40} className="text-primary/30 mx-auto mb-4" />
          <div className="relative min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
                className="text-center w-full"
              >
                <p className="text-lg sm:text-xl leading-relaxed">&ldquo;{current.quote}&rdquo;</p>
                <p className="mt-6 text-sm font-medium">{current.name}</p>
                <p className="text-xs text-muted">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
