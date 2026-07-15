import {
  CalendarCheck,
  ClipboardList,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { contactProcess } from "@/lib/data/contact";

const icons = [ClipboardList, MessageSquare, CalendarCheck, Rocket];

export function ContactProcess() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Our Process
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From inquiry to delivery—clear every step
          </h2>
        </div>
      </Reveal>

      <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div
          className="pointer-events-none absolute top-12 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent xl:block"
          aria-hidden
        />
        {contactProcess.map((step, i) => {
          const Icon = icons[i] ?? Rocket;
          return (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full rounded-xl border border-border bg-bg-elevated/40 p-6 text-center xl:text-left">
                <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent-bright xl:mx-0">
                  <Icon size={20} />
                </span>
                <p className="font-display text-xs font-bold tracking-wider text-accent-bright">
                  Step {step.step}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">
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
