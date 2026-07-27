import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { certifications } from "@/lib/data";
import { Reveal, SectionHeading, Card } from "@/components/ui";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28 bg-surface/40">
      <div className="section-container">
        <SectionHeading eyebrow="Certifications" title="Credentials worth mentioning." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.08}>
              <Card className="h-full flex flex-col">
                <BadgeCheck size={20} className="text-primary mb-4" />
                <h3 className="font-medium text-sm mb-1 leading-snug">{cert.name}</h3>
                <p className="text-xs text-muted mb-4">
                  {cert.issuer} · {cert.date}
                </p>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-1 text-xs text-primary font-medium"
                >
                  Verify <ArrowUpRight size={13} />
                </a>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={certifications.length * 0.08}>
            <Card className="h-full flex flex-col justify-center items-center text-center border-dashed">
              <p className="text-xs text-muted leading-relaxed">
                More certifications in progress — this space updates as new ones are earned.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
