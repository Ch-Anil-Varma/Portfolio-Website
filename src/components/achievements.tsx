import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { Reveal, SectionHeading, Card, Badge } from "@/components/ui";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Where the work got tested."
          description="Competitions and selections where the result wasn't a grade — it was whether the thing worked."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <Card className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary">
                    <Trophy size={18} />
                  </span>
                  <Badge>{a.category}</Badge>
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-snug">{a.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{a.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
