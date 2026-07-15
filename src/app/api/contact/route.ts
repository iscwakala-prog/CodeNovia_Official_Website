import { NextResponse } from "next/server";
import { sendLeadNotificationEmail } from "@/lib/email/sendLeadNotification";
import { contactFormSchema } from "@/lib/validations/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please check the form fields and try again.",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    await sendLeadNotificationEmail(parsed.data);

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for contacting CodeNovia. Our team will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[contact] Failed to send lead email:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your message right now. Please try again or contact us on WhatsApp.",
      },
      { status: 500 },
    );
  }
}
