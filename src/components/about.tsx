import { Sparkles, Target, GraduationCap, Languages } from "lucide-react";
import { profile, languages, hobbies } from "@/lib/data";
import { Reveal, SectionHeading, Card } from "@/components/ui";

const pillars = [
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    text: "I build practical AI applications, including chatbots, automation tools, and machine learning solutions that solve real-world problems.",
  },
  {
    icon: Target,
    title: "Robotics & Embedded Systems",
    text: "Passionate about robotics, ESP32, Raspberry Pi,Arduino, sensors, and intelligent embedded systems that bridge software with hardware.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    text: "Currently pursuing a B.Sc. in Artificial Intelligence & Robotics while continuously expanding my skills through hands-on projects, hackathons, and emerging technologies.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Building useful things, one automated process at a time."
          description="A quick look at how I think about AI, robotics, and the work I want to do next."
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12">
          <div className="space-y-5">
            {profile.aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-muted leading-relaxed text-[15px] sm:text-base">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.24} className="grid sm:grid-cols-3 gap-4 pt-6">
              {pillars.map((p) => (
                <Card key={p.title} className="!p-5">
                  <p.icon size={18} className="text-primary mb-3" />
                  <p className="font-medium text-sm mb-1.5">{p.title}</p>
                  <p className="text-xs text-muted leading-relaxed">{p.text}</p>
                </Card>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Card className="h-full">
              <p className="console-text text-xs uppercase tracking-wider text-primary mb-5">
                Quick facts
              </p>
              <dl className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Currently</dt>
                  <dd className="text-right font-medium">BSc AI &amp; Robotics, final years</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">CGPA</dt>
                  <dd className="font-medium">8.9</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Based in</dt>
                  <dd className="font-medium">{profile.location}</dd>
                </div>
                <div className="border-b border-border pb-3">
                  <dt className="text-muted flex items-center gap-1.5 mb-2">
                    <Languages size={13} /> Languages
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {languages.map((l) => (
                      <span
                        key={l}
                        className="text-xs rounded-full border border-border px-2.5 py-1 text-muted"
                      >
                        {l}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted mb-2">Outside of work</dt>
                  <dd>
                    <ul className="space-y-1.5">
                      {hobbies.map((h) => (
                        <li key={h} className="text-xs text-muted flex gap-2">
                          <span className="text-primary">–</span> {h}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
