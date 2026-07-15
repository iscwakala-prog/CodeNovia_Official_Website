"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { contactFaqs } from "@/lib/data/contact";

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-bg-surface/40">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Answers before you reach out
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-3">
        {contactFaqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <Reveal key={faq.question} delay={index * 0.04}>
              <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated/40">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-bg-elevated/70"
                >
                  <span className="font-display text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-accent-bright transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
