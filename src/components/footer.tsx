import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/lib/data";

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Phone };

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="section-container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="console-text text-sm text-primary">{profile.shortName}</p>
          <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">
            AI &amp; Robotics undergraduate building automation, chatbots, and tools that
            replace repetitive work with something that just runs.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Quick links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-3">Elsewhere</p>
          <div className="flex gap-3">
            {(
              [
                { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
                { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
                { label: "GitHub", href: profile.github, icon: "github" },
              ] as const
            ).map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="console-text">Built with Next.js · Designed for recruiters</p>
        </div>
      </div>
    </footer>
  );
}
