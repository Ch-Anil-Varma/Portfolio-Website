"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Layers } from "lucide-react";
import { projects, projectFilters } from "@/lib/data";
import { Reveal, SectionHeading, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="py-24 sm:py-28 bg-surface/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="The work I'm proudest of."
          description="Automation, robotics, and applied AI — each one built to solve a specific, real problem."
        />

        <Reveal className="flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "text-xs rounded-full border px-3.5 py-1.5 transition-colors",
                filter === f
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted hover:border-primary hover:text-primary"
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const isOpen = expanded === project.title;
              return (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden hover:border-primary/40 hover:shadow-[0_24px_50px_-30px_rgba(37,99,235,0.4)] transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-[1fr_1.4fr]">
                    <div className="relative h-52 lg:h-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-40 grid-backdrop"
                        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      />
                      <Layers
                        size={64}
                        strokeWidth={1.2}
                        className="text-primary/60 relative group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <Badge>{project.status}</Badge>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t) => (
                          <Badge key={t}>{t}</Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setExpanded(isOpen ? null : project.title)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                        >
                          View Details
                          <ChevronDown
                            size={15}
                            className={cn("transition-transform", isOpen && "rotate-180")}
                          />
                        </button>
                       
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-border grid sm:grid-cols-3 gap-5 text-xs">
                              <div>
                                <p className="font-semibold mb-2 text-foreground">Features</p>
                                <ul className="space-y-1.5 text-muted">
                                  {project.features.map((f) => (
                                    <li key={f}>• {f}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold mb-2 text-foreground">Challenge</p>
                                <p className="text-muted leading-relaxed">{project.challenge}</p>
                              </div>
                              <div>
                                <p className="font-semibold mb-2 text-foreground">Solution</p>
                                <p className="text-muted leading-relaxed">{project.solution}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
