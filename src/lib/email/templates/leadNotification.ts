import type { ContactFormValues } from "@/lib/validations/contact";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string | null) {
  const display = value?.trim() ? escapeHtml(value.trim()) : "—";
  return `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #1e2a3f;color:#8fa3bf;font-size:13px;width:38%;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 14px;border-bottom:1px solid #1e2a3f;color:#ffffff;font-size:14px;font-weight:500;vertical-align:top;">
        ${display}
      </td>
    </tr>
  `;
}

export function buildLeadEmailSubject(data: ContactFormValues): string {
  const company = data.companyName?.trim() || "Individual";
  return `New Business Inquiry - ${data.service} - ${company}`;
}

export function buildLeadEmailHtml(data: ContactFormValues): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Business Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#050b18;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050b18;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#0a1528;border:1px solid #1e2a3f;border-radius:14px;overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 20px;background:linear-gradient(135deg,#0f1c34 0%,#0a1528 100%);border-bottom:1px solid #1e2a3f;">
              <p style="margin:0 0 8px;color:#3db4ff;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                CodeNovia
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;line-height:1.3;font-weight:700;">
                New Business Inquiry
              </h1>
              <p style="margin:10px 0 0;color:#a8b3c7;font-size:14px;line-height:1.5;">
                A new lead was submitted from the CodeNovia website contact form.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 28px 8px;">
              <h2 style="margin:0 0 12px;color:#3db4ff;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">
                Client Information
              </h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050b18;border:1px solid #1e2a3f;border-radius:10px;">
                ${row("Full Name", data.fullName)}
                ${row("Company Name", data.companyName)}
                ${row("Business Email", data.email)}
                ${row("Phone Number", data.phone)}
                ${row("Country", data.country)}
                ${row("Company Website", data.website)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 28px 8px;">
              <h2 style="margin:0 0 12px;color:#3db4ff;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">
                Project Information
              </h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050b18;border:1px solid #1e2a3f;border-radius:10px;">
                ${row("Service Required", data.service)}
                ${row("Project Stage", data.projectStage)}
                ${row("Estimated Budget", data.budget)}
                ${row("Timeline", data.timeline)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 28px 28px;">
              <h2 style="margin:0 0 12px;color:#3db4ff;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">
                Project Description
              </h2>
              <div style="background:#050b18;border:1px solid #1e2a3f;border-radius:10px;padding:16px 18px;color:#d8e0ec;font-size:14px;line-height:1.7;white-space:pre-wrap;">
${escapeHtml(data.description)}
              </div>
              <p style="margin:18px 0 0;color:#8fa3bf;font-size:12px;line-height:1.5;">
                Tip: Click Reply in Gmail to respond directly to the client
                (<strong style="color:#3db4ff;">${escapeHtml(data.email)}</strong>).
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 28px 24px;border-top:1px solid #1e2a3f;background:#07101f;">
              <p style="margin:0;color:#8fa3bf;font-size:12px;text-align:center;">
                CodeNovia Website · Lead Notification System
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildLeadEmailText(data: ContactFormValues): string {
  return [
    "New Business Inquiry — CodeNovia Website",
    "",
    "CLIENT INFORMATION",
    `Full Name: ${data.fullName}`,
    `Company Name: ${data.companyName || "—"}`,
    `Business Email: ${data.email}`,
    `Phone Number: ${data.phone}`,
    `Country: ${data.country || "—"}`,
    `Company Website: ${data.website || "—"}`,
    "",
    "PROJECT INFORMATION",
    `Service Required: ${data.service}`,
    `Project Stage: ${data.projectStage}`,
    `Estimated Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    "",
    "PROJECT DESCRIPTION",
    data.description,
    "",
    `Reply-To is set to: ${data.email}`,
  ].join("\n");
}
