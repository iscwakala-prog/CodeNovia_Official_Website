import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/validations/contact";
import {
  buildLeadEmailHtml,
  buildLeadEmailSubject,
  buildLeadEmailText,
} from "@/lib/email/templates/leadNotification";

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function getMailTransport() {
  const host = requireEnv("SMTP_HOST");
  const port = Number(requireEnv("SMTP_PORT"));
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  if (Number.isNaN(port)) {
    throw new Error("SMTP_PORT must be a valid number.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendLeadNotificationEmail(data: ContactFormValues) {
  const contactEmail = requireEnv("CONTACT_EMAIL");
  const fromName = process.env.EMAIL_FROM_NAME?.trim() || "CodeNovia Website";
  const fromAddress = requireEnv("SMTP_USER");
  const transport = getMailTransport();

  const subject = buildLeadEmailSubject(data);
  const html = buildLeadEmailHtml(data);
  const text = buildLeadEmailText(data);

  const info = await transport.sendMail({
    from: `"${fromName}" <${fromAddress}>`,
    to: contactEmail,
    replyTo: data.email,
    subject,
    html,
    text,
  });

  return info;
}
