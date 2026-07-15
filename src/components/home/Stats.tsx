import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { stats } from "@/lib/data/stats";

export function Stats() {
  return (
    <Section className="!py-10 md:!py-14 border-y border-border bg-bg-surface/60">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <div className="text-center">
              <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
