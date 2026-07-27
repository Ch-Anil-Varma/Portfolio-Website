"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/lib/data";
import { SectionHeading, Reveal, Card } from "@/components/ui";

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (data: FormState): Errors => {
    const next: Errors = {};
    if (!data.name.trim()) next.name = "Please share your name.";
    if (!data.email.trim()) next.email = "Please share an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = "That email doesn't look quite right.";
    if (!data.message.trim() || data.message.trim().length < 10)
      next.message = "Say a little more — at least 10 characters.";
    return next;
  };

const onSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const next = validate(form);
  setErrors(next);

  if (Object.keys(next).length > 0) return;

  try {
    setLoading(true);
    setServerError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.error || "Failed to send");
    }

    setSubmitted(true);
    setForm(initialState);

  } catch (err) {
    setServerError("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const infoCards = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="py-24 sm:py-28 bg-surface/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Open to internships, research collaborations, and interesting problems. Reach out — I read everything."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="space-y-4">
            {infoCards.map((c) => (
              <Reveal key={c.label}>
                <Card className="flex items-center gap-4 !p-5">
                  <span className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary">
                    <c.icon size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium hover:text-primary truncate block">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-[var(--radius-card)] border border-border overflow-hidden h-40 relative bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="absolute inset-0 grid-backdrop opacity-40" />
                <div className="relative text-center">
                  <MapPin size={22} className="text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted">{profile.location}</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Card>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full min-h-[340px] flex flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 size={36} className="text-primary mb-4" />
                  <p className="font-medium mb-1">Message sent successfully...!</p>
                  <p className="text-sm text-muted max-w-xs">
                    Thanks for reaching out — connect an email service to send this automatically,
                    or email {profile.email} directly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="text-xs font-medium mb-1.5 block">
                        Name
                      </label>
                      <input
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        aria-invalid={!!errors.name}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs font-medium mb-1.5 block">
                        Email
                      </label>
                      <input
                        id="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        aria-invalid={!!errors.email}
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs font-medium mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      aria-invalid={!!errors.message}
                      rows={6}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me a bit about the opportunity or idea..."
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>}
                  </div>
                  {serverError && (
                    <p className="text-sm text-red-500">
                      {serverError}
                    </p>
                  )}
                  <button
                   type="submit"
                   disabled={loading}
                   className="inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-medium px-6 py-3 hover:opacity-90 disabled:opacity-60 transition-all"
                  >
                   <Send size={15} />

                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
