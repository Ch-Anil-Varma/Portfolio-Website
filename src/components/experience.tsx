import { CheckCircle2 } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal, SectionHeading, Card, Badge } from "@/components/ui";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Real projects, real stakes."
          description="No corporate internships yet — instead, work that shipped to real users and competitions judged by real results."
        />

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-8">
            {experience.map((item, i) => (
              <Reveal key={item.organization} delay={i * 0.1}>
                <div className="relative sm:pl-12">
                  <div className="hidden sm:flex absolute left-0 top-1 h-8 w-8 rounded-full bg-background border-2 border-primary items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <Card>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold">{item.role}</h3>
                        <p className="text-sm text-primary">{item.organization}</p>
                      </div>
                      <Badge>{item.duration}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-muted leading-relaxed">
                          <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
