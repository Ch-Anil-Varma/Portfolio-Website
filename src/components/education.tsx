import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { Reveal, SectionHeading, Card } from "@/components/ui";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic path." />

        <div className="grid sm:grid-cols-3 gap-5">
          {education.map((item, i) => (
            <Reveal key={item.institution} delay={i * 0.1}>
              <Card className="h-full">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary mb-4">
                  <GraduationCap size={18} />
                </div>
                <p className="text-xs console-text text-primary mb-2">{item.period}</p>
                <h3 className="font-semibold text-sm leading-snug mb-1">{item.institution}</h3>
                <p className="text-sm text-muted mb-3">{item.degree}</p>
                <p className="text-xs font-medium inline-flex rounded-full border border-border px-2.5 py-1 text-muted">
                  {item.detail}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
