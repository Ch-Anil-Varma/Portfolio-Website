import { BrainCircuit, BarChart3, Bot, Code2, Wrench, Users, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";
import { Reveal, SectionHeading, Card } from "@/components/ui";

const icons: Record<string, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  "bar-chart-3": BarChart3,
  bot: Bot,
  "code-2": Code2,
  wrench: Wrench,
  users: Users,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-surface/40">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for AI, automation, and shipping."
          description="Grouped the way I actually use them — from model-facing work down to the soft skills that keep a project moving."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Code2;
            return (
              <Reveal key={cat.category} delay={(i % 3) * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center text-primary">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-medium text-sm">{cat.category}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <li
                        key={s}
                        className="text-xs rounded-full border border-border px-2.5 py-1.5 text-muted hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
