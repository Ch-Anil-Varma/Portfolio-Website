"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin, CircleDot } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/lib/data";

function useTypingLoop(lines: string[]) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const current = lines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 32);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 16);
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- timer-driven typing animation state machine, updates are gated by setTimeout, not synchronous
        setLineIndex((i) => (i + 1) % lines.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex, lines]);

  return text;
}


export function Hero() {
  const typed = useTypingLoop(profile.taglines);

  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24 pb-20">
      <div className="absolute inset-0 grid-backdrop opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <motion.div
        className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--color-primary), transparent 70%)" }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 left-[-10%] h-[360px] w-[360px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted mb-6"
          >
            <CircleDot size={12} className="text-emerald-500" />
            {profile.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08]"
          >
            Hi, I&apos;m {profile.shortName.split(" ")[0]}
            <span className="text-primary">.</span>
            <br />
            <span className="text-gradient">{profile.headline}.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="console-text mt-6 h-6 text-sm sm:text-base text-primary"
          >
            <span>{typed}</span>
            <span className="type-cursor" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-5 max-w-xl text-muted leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-medium px-5 py-3 hover:opacity-90 transition-opacity"
            >
              <Download size={16} /> Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border text-sm font-medium px-5 py-3 hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={16} /> Get in touch
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-11 w-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <LinkedinIcon size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-6 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin size={14} /> {profile.location}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={560}
              height={700}
              priority
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

         
        </motion.div>
      </div>
    </section>
  );
}
