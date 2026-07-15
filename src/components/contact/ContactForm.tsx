"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  budgetOptions,
  projectStageOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/data/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

const fieldClass =
  "w-full rounded-lg border border-border bg-bg-deep/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/25";

const labelClass =
  "mb-2 block font-display text-xs font-semibold tracking-wide text-text-muted";

const errorClass = "mt-1.5 text-xs text-red-400";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className={errorClass}>{message}</p>;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      website: "",
      description: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("idle");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ||
            "We couldn't send your message right now. Please try again.",
        );
      }

      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or reach us on WhatsApp.",
      );
    }
  };

  return (
    <div
      id="project-form"
      className="scroll-mt-28 rounded-2xl border border-border bg-bg-elevated/50 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm sm:p-8 lg:p-10"
    >
      <div className="mb-8">
        <p className="mb-2 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
          Project Inquiry
        </p>
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Start your project
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Share a few details so we can qualify your needs and respond with a
          clear next step.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-accent/30 bg-accent/10 px-6 py-12 text-center">
          <CheckCircle2 className="mx-auto text-accent-bright" size={40} />
          <p className="mt-4 font-display text-xl font-semibold text-white">
            Message received
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-text-muted">
            Thank you for contacting CodeNovia. Our team will get back to you
            within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 font-display text-sm font-semibold text-accent-bright hover:text-white"
          >
            Send another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
          <fieldset>
            <legend className="mb-4 font-display text-sm font-semibold tracking-wide text-white">
              Basic Information
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-accent-bright">*</span>
                </label>
                <input
                  id="fullName"
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Jane Smith"
                  {...register("fullName")}
                />
                <FieldError message={errors.fullName?.message} />
              </div>
              <div>
                <label htmlFor="companyName" className={labelClass}>
                  Company Name
                </label>
                <input
                  id="companyName"
                  autoComplete="organization"
                  className={fieldClass}
                  placeholder="Acme Inc."
                  {...register("companyName")}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Business Email <span className="text-accent-bright">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="jane@company.com"
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-accent-bright">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="+92 300 0000000"
                  {...register("phone")}
                />
                <FieldError message={errors.phone?.message} />
              </div>
              <div>
                <label htmlFor="country" className={labelClass}>
                  Country
                </label>
                <input
                  id="country"
                  autoComplete="country-name"
                  className={fieldClass}
                  placeholder="Pakistan"
                  {...register("country")}
                />
              </div>
              <div>
                <label htmlFor="website" className={labelClass}>
                  Company Website
                </label>
                <input
                  id="website"
                  type="url"
                  className={fieldClass}
                  placeholder="https://example.com"
                  {...register("website")}
                />
                <FieldError message={errors.website?.message} />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4 font-display text-sm font-semibold tracking-wide text-white">
              Project Information
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelClass}>
                  Service Required <span className="text-accent-bright">*</span>
                </label>
                <select
                  id="service"
                  className={fieldClass}
                  defaultValue=""
                  {...register("service")}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.service?.message} />
              </div>
              <div>
                <label htmlFor="projectStage" className={labelClass}>
                  Project Stage <span className="text-accent-bright">*</span>
                </label>
                <select
                  id="projectStage"
                  className={fieldClass}
                  defaultValue=""
                  {...register("projectStage")}
                >
                  <option value="" disabled>
                    Select stage
                  </option>
                  {projectStageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.projectStage?.message} />
              </div>
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Estimated Budget <span className="text-accent-bright">*</span>
                </label>
                <select
                  id="budget"
                  className={fieldClass}
                  defaultValue=""
                  {...register("budget")}
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.budget?.message} />
              </div>
              <div>
                <label htmlFor="timeline" className={labelClass}>
                  Timeline <span className="text-accent-bright">*</span>
                </label>
                <select
                  id="timeline"
                  className={fieldClass}
                  defaultValue=""
                  {...register("timeline")}
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.timeline?.message} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="description" className={labelClass}>
                  Project Description{" "}
                  <span className="text-accent-bright">*</span>
                </label>
                <textarea
                  id="description"
                  rows={5}
                  className={`${fieldClass} resize-y min-h-[140px]`}
                  placeholder="Tell us about your project, business goals, challenges and requirements."
                  {...register("description")}
                />
                <FieldError message={errors.description?.message} />
              </div>
            </div>
          </fieldset>

          {status === "error" && (
            <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-7 font-display text-[15px] font-semibold text-white glow-accent transition hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} />
                Submit Inquiry
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
