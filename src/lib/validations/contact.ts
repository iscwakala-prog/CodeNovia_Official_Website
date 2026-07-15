import { z } from "zod";
import {
  budgetOptions,
  projectStageOptions,
  serviceOptions,
  timelineOptions,
} from "@/lib/data/contact";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid business email."),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number.")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number."),
  country: z.string().optional(),
  website: z
    .string()
    .optional()
    .refine(
      (value) => !value || value.trim() === "" || /^https?:\/\//i.test(value) || /^[\w.-]+\.[\w.-]+/.test(value),
      "Please enter a valid website URL.",
    ),
  service: z.enum(serviceOptions, {
    message: "Please select a service.",
  }),
  projectStage: z.enum(projectStageOptions, {
    message: "Please select a project stage.",
  }),
  budget: z.enum(budgetOptions, {
    message: "Please select an estimated budget.",
  }),
  timeline: z.enum(timelineOptions, {
    message: "Please select a timeline.",
  }),
  description: z
    .string()
    .min(20, "Please share a bit more about your project (at least 20 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
