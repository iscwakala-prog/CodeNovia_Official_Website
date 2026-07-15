"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { portfolioMetrics } from "@/lib/data/caseStudies";

function MetricValue({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numeric = Number.parseInt(value, 10);
  const isNumeric = !Number.isNaN(numeric) && value.includes("+");
  const [display, setDisplay] = useState(isNumeric ? "0+" : value);

  useEffect(() => {
    if (!inView || !isNumeric || reduce) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(numeric * progress);
      setDisplay(`${current}+`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, numeric, reduce, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-white sm:text-4xl">
      {display}
    </span>
  );
}

export function PortfolioMetrics() {
  return (
    <Section className="!py-10 md:!py-14 border-y border-border bg-bg-surface/50">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6">
        {portfolioMetrics.map((metric, i) => (
          <Reveal key={metric.label} delay={i * 0.04}>
            <div className="rounded-xl border border-border bg-bg-elevated/40 px-4 py-5 text-center transition hover:border-accent/35">
              <MetricValue value={metric.value} />
              <p className="mt-2 text-xs font-medium tracking-wide text-text-muted sm:text-sm">
                {metric.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
