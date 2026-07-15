import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { techExpertise } from "@/lib/data/caseStudies";

export function PortfolioTech() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Technology Expertise
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A modern stack built for product companies
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {Object.entries(techExpertise).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-bg-elevated/40 p-5">
              <h3 className="font-display text-sm font-semibold tracking-wide text-accent-bright uppercase">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-bg-deep/70 px-2.5 py-1.5 font-display text-xs text-text-muted transition hover:border-accent/40 hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
