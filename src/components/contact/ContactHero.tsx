"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/Button";
import { contactInfo } from "@/lib/data/contact";

const headline = ["Let's", "Build", "Something", "Extraordinary", "Together"];
const highlightWords = new Set(["Extraordinary", "Together"]);

export function ContactHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(30,155,255,0.22),transparent_50%),radial-gradient(ellipse_at_85%_40%,rgba(61,180,255,0.14),transparent_45%)]" />
        <div className="hero-aurora absolute -left-1/4 top-0 h-[55%] w-[55%] rounded-full bg-accent/18 blur-[100px]" />
        <div className="hero-aurora-delay absolute -right-1/4 top-1/4 h-[50%] w-[50%] rounded-full bg-accent-bright/12 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(61,180,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(61,180,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, black 20%, transparent 90%)",
          }}
        />
        {!reduce && (
          <>
            <div className="hero-beam absolute inset-y-[28%] left-0 w-1/3 bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
            <motion.div
              className="absolute right-[8%] top-[18%] hidden h-44 w-44 rounded-full border border-accent/20 lg:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute right-[14%] top-[30%] hidden h-28 w-28 rounded-full border border-accent-bright/20 lg:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-deep to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 xl:px-12 2xl:px-14">
        <div className="max-w-3xl">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase"
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.span
              className="inline-block h-px w-8 bg-accent-bright"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{ originX: 0 }}
            />
            Contact
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
                  delay: 0.06 + i * 0.07,
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
            Tell us about your business goals and our team will help you find
            the right technology solution.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Button href="#project-form" size="lg">
              Start Your Project
            </Button>
            <Button
              href={contactInfo.whatsappHref}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          aria-hidden
        >
          <div className="absolute inset-[18%] rounded-full bg-accent/25 blur-3xl" />

          <motion.div
            className="absolute inset-[8%] rounded-full border border-accent/25"
            style={{ borderStyle: "dashed" }}
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[16%] rounded-full border border-accent-bright/20"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center">
            <img
              src="/brand/codenovia-logo.png"
              alt=""
              className="h-[36%] w-[36%] object-contain drop-shadow-[0_0_40px_rgba(30,155,255,0.45)]"
              aria-hidden
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
