"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getAllCategories } from "@/lib/data/blog";

const headline = ["Insights", "that", "move", "business", "forward"];
const highlightWords = new Set(["business", "forward"]);

export function BlogHero() {
  const reduce = useReducedMotion();
  const categories = getAllCategories().slice(0, 6);

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(30,155,255,0.2),transparent_50%),radial-gradient(ellipse_at_90%_20%,rgba(61,180,255,0.12),transparent_45%)]" />
        <div className="hero-aurora absolute -left-1/4 top-0 h-[55%] w-[55%] rounded-full bg-accent/15 blur-[90px]" />
        <div className="hero-aurora-delay absolute -right-1/4 top-1/4 h-[45%] w-[45%] rounded-full bg-accent-bright/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,180,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(61,180,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black 20%, transparent 85%)",
          }}
        />
        {!reduce && (
          <div className="hero-beam absolute inset-y-[30%] left-0 w-1/3 bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-10 xl:px-12 2xl:px-14">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase"
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
            Blog
          </motion.p>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
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
                  delay: 0.08 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="mt-5 h-0.5 max-w-xs origin-left rounded-full bg-gradient-to-r from-accent via-accent-bright to-transparent"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            Practical perspectives on software, AI, platforms, and growth—
            written for founders, SMEs, and enterprises building what&apos;s
            next.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap gap-2"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-md border border-border bg-bg-elevated/60 px-3.5 py-2 font-display text-xs font-medium tracking-wide text-text-muted backdrop-blur-sm"
            >
              {category}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
