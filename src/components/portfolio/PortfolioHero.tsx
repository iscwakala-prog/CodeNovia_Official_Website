"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const headline = [
  "Building",
  "Technology",
  "That",
  "Powers",
  "Modern",
  "Businesses",
];
const highlightWords = new Set(["Powers", "Modern", "Businesses"]);

export function PortfolioHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(30,155,255,0.22),transparent_50%),radial-gradient(ellipse_at_90%_35%,rgba(61,180,255,0.14),transparent_45%)]" />
        <div className="hero-aurora absolute -left-1/4 top-0 h-[55%] w-[55%] rounded-full bg-accent/18 blur-[100px]" />
        <div className="hero-aurora-delay absolute -right-1/4 top-1/4 h-[50%] w-[50%] rounded-full bg-accent-bright/12 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,180,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(61,180,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black 20%, transparent 88%)",
          }}
        />
        {!reduce && (
          <div className="hero-beam absolute inset-y-[28%] left-0 w-1/3 bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-12 2xl:px-14">
        <div className="max-w-3xl">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-block h-px w-8 bg-accent-bright" />
            Portfolio
          </motion.p>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {headline.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className={`mr-[0.28em] inline-block ${
                  highlightWords.has(word)
                    ? "services-headline-glow bg-gradient-to-r from-accent-bright via-white to-accent bg-clip-text text-transparent"
                    : "text-white"
                }`}
                initial={
                  reduce ? false : { opacity: 0, y: 24, filter: "blur(8px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.5,
                  delay: 0.05 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            From fintech and education to enterprise operations and AI-driven
            solutions, we design and build software products engineered for
            scale.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Button href="#case-studies" size="lg">
              View Our Work
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Start Your Project
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-lg lg:block"
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          aria-hidden
        >
          <div className="absolute inset-[10%] rounded-full bg-accent/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-4 shadow-[0_0_60px_rgba(30,155,255,0.15)]">
            <div className="mb-3 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-3 h-2 flex-1 rounded bg-white/5" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 space-y-3 rounded-xl border border-border bg-bg-deep/80 p-4">
                <div className="h-2 w-24 rounded bg-accent/40" />
                <div className="h-20 rounded-lg bg-gradient-to-br from-accent/25 to-transparent" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 rounded bg-white/5" />
                  <div className="h-8 rounded bg-white/5" />
                  <div className="h-8 rounded bg-accent/20" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-border bg-bg-deep/80 p-3">
                  <div className="h-2 w-10 rounded bg-white/20" />
                  <div className="mt-3 h-10 rounded bg-accent/30" />
                </div>
                <div className="rounded-xl border border-border bg-bg-deep/80 p-3">
                  <div className="h-2 w-12 rounded bg-white/20" />
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 rounded bg-white/10" />
                    <div className="h-1.5 w-2/3 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
