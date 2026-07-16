import {
  Bot,
  Boxes,
  Cloud,
  Compass,
  Globe2,
  Layers,
  Lightbulb,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ctaLabel } from "@/lib/data/nav";
import {
  aboutMission,
  aboutVision,
  approachSteps,
  coreValues,
  globalStatement,
  industries,
  techStack,
  timeline,
  whatWeBuild,
  whoWeAre,
  whyChoose,
} from "@/lib/data/about";

const valueIcons = [Lightbulb, Sparkles, Target, Shield, Users];
const whyIcons = [Layers, Bot, Workflow, Compass, Rocket];

export function AboutSections() {
  return (
    <>
      {/* Who We Are */}
      <Section>
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            {whoWeAre.eyebrow}
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {whoWeAre.title}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {whoWeAre.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-text-muted">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-bg-surface/40">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-bg-elevated/50 p-8">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
                aria-hidden
              />
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
                {aboutMission.title}
              </p>
              <p className="relative mt-5 font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                {aboutMission.statement}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-bg-elevated to-bg-deep p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,155,255,0.15),transparent_60%)]"
                aria-hidden
              />
              <p className="font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
                {aboutVision.title}
              </p>
              <p className="relative mt-5 font-display text-xl font-semibold leading-relaxed text-white sm:text-2xl">
                {aboutVision.statement}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What We Build */}
      <Section>
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            What We Build
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Products and platforms that power modern business
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whatWeBuild.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="group h-full rounded-xl border border-border bg-bg-elevated/40 p-5 transition hover:border-accent/40 hover:bg-bg-elevated">
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition group-hover:bg-accent/25">
                  <Boxes size={18} />
                </span>
                <h3 className="font-display text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-bg-surface/40">
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Industries We Empower
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sector expertise, global standards
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.name} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-bg-elevated/35 p-6 transition hover:border-accent/35">
                <h3 className="font-display text-lg font-semibold text-white">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Our Approach
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From idea to scale—one disciplined process
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {approachSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative h-full rounded-xl border border-border bg-bg-elevated/40 p-6">
                <span className="font-display text-4xl font-bold text-accent/30">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>
                {i < approachSteps.length - 1 && (
                  <span
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-accent/40 xl:block"
                    aria-hidden
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-bg-surface/40">
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Core Values
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What we stand for
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coreValues.map((value, i) => {
            const Icon = valueIcons[i] ?? Sparkles;
            return (
              <Reveal key={value.title} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-border bg-bg-elevated/35 p-5 text-center sm:text-left">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-accent-bright">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Technology Stack */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
              Technology Stack
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Modern, cloud-native, production-proven
            </h2>
            <p className="mt-4 text-text-muted">
              We build with technologies trusted by the world&apos;s most
              ambitious product teams—architected for performance, security, and
              scale.
            </p>
          </div>
        </Reveal>
        <Reveal className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-bg-elevated/60 px-4 py-2 font-display text-sm font-medium text-text-muted transition hover:border-accent/40 hover:text-accent-bright"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-8 flex justify-center gap-8 text-text-muted">
          <span className="inline-flex items-center gap-2 text-sm">
            <Cloud size={16} className="text-accent-bright" />
            Cloud-native
          </span>
          <span className="inline-flex items-center gap-2 text-sm">
            <Smartphone size={16} className="text-accent-bright" />
            Cross-platform
          </span>
          <span className="inline-flex items-center gap-2 text-sm">
            <Bot size={16} className="text-accent-bright" />
            AI-ready
          </span>
        </Reveal>
      </Section>

      {/* Why Choose */}
      <Section className="bg-bg-surface/40">
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-wide text-accent-bright">
            Why Businesses Choose CodeNovia
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A partner built for serious growth
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = whyIcons[i] ?? Sparkles;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group h-full rounded-xl border border-border bg-bg-elevated/40 p-6 transition hover:border-accent/45">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-bright transition group-hover:shadow-[0_0_24px_rgba(30,155,255,0.25)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
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

      {/* Timeline */}
      <Section>
        <Reveal>
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            Our Journey
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Company timeline
          </h2>
        </Reveal>
        <div className="relative mt-12">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent md:left-1/2 md:block"
            aria-hidden
          />
          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-4 md:w-1/2 ${
                    i % 2 === 0
                      ? "md:ml-0 md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span className="absolute left-0 top-1 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_#1e9bff] md:left-1/2 md:block" />
                  <span className="font-display text-sm font-bold tracking-wider text-accent-bright">
                    {entry.year}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {entry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {entry.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Global Statement */}
      <Section className="!py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-r from-bg-elevated via-bg-surface to-bg-elevated px-6 py-16 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,155,255,0.12),transparent_70%)]"
              aria-hidden
            />
            <Globe2
              className="relative mx-auto mb-6 text-accent-bright"
              size={40}
              strokeWidth={1.5}
            />
            <p className="relative font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {globalStatement}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Final CTA */}
      <Section className="pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,155,255,0.2),transparent_65%)]"
              aria-hidden
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Let&apos;s Build Something Extraordinary Together
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-text-muted">
                Whether you&apos;re launching a product, modernizing operations,
                or scaling globally—CodeNovia is ready to engineer what comes
                next.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  Start a Project
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  {ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
