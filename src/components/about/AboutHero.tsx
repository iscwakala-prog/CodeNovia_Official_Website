"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ctaLabel } from "@/lib/data/nav";
import { targetClients } from "@/lib/data/about";

const headline = ["Engineering", "tomorrow's", "digital", "infrastructure"];
const highlightWords = new Set(["tomorrow's", "infrastructure"]);

export function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(30,155,255,0.22),transparent_50%),radial-gradient(ellipse_at_80%_30%,rgba(61,180,255,0.14),transparent_45%)]" />
        <div className="hero-aurora absolute -left-1/4 top-0 h-[60%] w-[60%] rounded-full bg-accent/18 blur-[100px]" />
        <div className="hero-aurora-delay absolute -right-1/4 top-1/3 h-[50%] w-[50%] rounded-full bg-accent-bright/12 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,180,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(61,180,255,0.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, black 25%, transparent 88%)",
          }}
        />
        {!reduce && (
          <>
            <div className="hero-beam absolute inset-y-[25%] left-0 w-2/5 bg-gradient-to-r from-transparent via-accent/18 to-transparent" />
            <motion.div
              className="absolute right-[10%] top-[20%] h-40 w-40 rounded-full border border-accent/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute right-[16%] top-[32%] h-24 w-24 rounded-full border border-accent-bright/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute left-[12%] bottom-[25%] h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_12px_#3db4ff]"
              animate={{ opacity: [0.4, 1, 0.4], y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-wide text-accent-bright"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block h-px w-8 bg-accent-bright"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ originX: 0 }}
            />
            About CodeNovia
          </motion.p>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem]">
            {headline.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className={`mr-[0.28em] inline-block ${
                  highlightWords.has(word)
                    ? "services-headline-glow bg-gradient-to-r from-accent-bright via-white to-accent bg-clip-text text-transparent"
                    : "text-white"
                }`}
                initial={
                  reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="mt-6 h-0.5 max-w-sm origin-left rounded-full bg-gradient-to-r from-accent via-accent-bright to-transparent"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="mt-7 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            CodeNovia is a technology company building software products, AI
            solutions, and digital infrastructure for businesses worldwide—an
            engineering partner for teams with global ambitions.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {targetClients.map((client) => (
              <span
                key={client}
                className="rounded-md border border-border bg-bg-elevated/60 px-3.5 py-2 font-display text-xs font-medium tracking-wide text-text-muted backdrop-blur-sm"
              >
                {client}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
          >
            <Button href="/contact" size="lg">
              {ctaLabel}
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
