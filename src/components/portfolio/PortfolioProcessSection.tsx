import {
  Compass,
  DraftingCompass,
  Code2,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { portfolioProcess } from "@/lib/data/caseStudies";

const icons = [Compass, DraftingCompass, Code2, ShieldCheck, Rocket, Handshake];

export function PortfolioProcessSection() {
  return (
    <Section className="bg-bg-surface/40">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Development Process
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How we take products from idea to scale
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {portfolioProcess.map((step, i) => {
          const Icon = icons[i] ?? Compass;
          return (
            <Reveal key={step.title} delay={i * 0.05}>
              <div className="relative h-full rounded-xl border border-border bg-bg-elevated/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-bright">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-xs font-bold tracking-wider text-accent/50">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
