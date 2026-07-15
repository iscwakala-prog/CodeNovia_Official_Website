"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaLabel } from "@/lib/data/nav";
import { HeroNetwork } from "@/components/home/HeroNetwork";
import { HeroScene } from "@/components/home/HeroScene";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-[7.5rem] lg:pb-16">
      {/* Full-bleed animated layer */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(30,155,255,0.22),transparent_45%),radial-gradient(ellipse_at_85%_30%,rgba(61,180,255,0.16),transparent_40%),radial-gradient(ellipse_at_50%_100%,rgba(14,40,80,0.9),transparent_55%)]" />
        <div className="hero-aurora absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full bg-accent/20 blur-[100px]" />
        <div className="hero-aurora-delay absolute -right-1/4 bottom-0 h-[55%] w-[55%] rounded-full bg-accent-bright/15 blur-[110px]" />
        <HeroNetwork />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,180,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(61,180,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 78%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/30 via-transparent to-bg-deep" />
      </div>

      <Container className="relative z-10 grid min-h-[calc(100svh-6rem)] items-start gap-10 pt-2 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:pt-6 xl:gap-12 xl:pt-8">
        <div className="max-w-2xl pt-1 text-center lg:max-w-xl lg:pt-4 lg:text-left xl:max-w-2xl">
          <motion.p
            className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase sm:mb-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CodeNovia
          </motion.p>
          <motion.h1
            className="font-display text-[2.35rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Building Smarter Digital Experiences
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:mt-5 sm:text-lg lg:mx-0"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            We transform ideas into powerful digital solutions for your
            business.
          </motion.p>
          <motion.div
            className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <Button href="/contact" size="lg">
              {ctaLabel}
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full self-center lg:justify-self-end lg:self-start lg:pt-2 xl:pt-0"
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroScene />
        </motion.div>
      </Container>
    </section>
  );
}
