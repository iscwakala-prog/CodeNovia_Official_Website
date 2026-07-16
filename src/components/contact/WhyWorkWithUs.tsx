import {
  Bot,
  Handshake,
  Layers,
  LineChart,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { whyWorkWithUs } from "@/lib/data/contact";

const icons = [Layers, Bot, Workflow, Handshake, LineChart];

export function WhyWorkWithUs() {
  return (
    <Section className="bg-bg-surface/40">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-wide text-accent-bright">
            Why Work With CodeNovia
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for trust, speed, and lasting results
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {whyWorkWithUs.map((item, i) => {
          const Icon = icons[i] ?? Layers;
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group h-full rounded-xl border border-border bg-bg-elevated/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-bg-elevated">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition group-hover:bg-accent/25 group-hover:shadow-[0_0_20px_rgba(30,155,255,0.3)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
