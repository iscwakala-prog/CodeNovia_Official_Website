import { Mail, Phone, ArrowUpRight, Share2 } from "lucide-react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";
import { Reveal } from "@/components/motion/Reveal";
import { contactInfo } from "@/lib/data/contact";

const cards = [
  {
    icon: Mail,
    title: "Email",
    description: "Reach our team for project inquiries and partnerships.",
    href: `mailto:${contactInfo.email}`,
    cta: contactInfo.email,
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with CodeNovia for urgent conversations.",
    href: contactInfo.phoneHref,
    cta: contactInfo.phone,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    description: "Start a fast conversation with our team on WhatsApp.",
    href: contactInfo.whatsappHref,
    cta: "Start a Conversation",
  },
  {
    icon: FacebookIcon,
    title: "Facebook",
    description: "Follow CodeNovia for updates, insights, and company news.",
    href: contactInfo.facebook,
    cta: contactInfo.facebookLabel,
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    description: "See our work, culture, and behind-the-scenes moments.",
    href: contactInfo.instagram,
    cta: contactInfo.instagramLabel,
  },
  {
    icon: Share2,
    title: "LinkedIn",
    description: "Follow our journey and connect with the team.",
    href: contactInfo.linkedin,
    cta: contactInfo.linkedinLabel,
  },
] as const;

export function QuickContact() {
  return (
    <div className="space-y-4">
      <Reveal>
        <p className="mb-2 font-display text-xs font-semibold tracking-[0.2em] text-accent-bright uppercase">
          Quick Contact
        </p>
        <h2 className="font-display text-2xl font-bold text-white">
          Prefer another channel?
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Choose the path that works best for you—we&apos;re ready to respond.
        </p>
      </Reveal>

      <div className="grid gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={i * 0.05}>
              <Link
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex gap-4 rounded-xl border border-border bg-bg-elevated/45 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-bg-elevated"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-bright transition group-hover:bg-accent/25 group-hover:shadow-[0_0_20px_rgba(30,155,255,0.25)]">
                  <Icon size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-white">
                      {card.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-text-muted transition group-hover:text-accent-bright"
                    />
                  </div>
                  <p className="mt-1 text-sm text-text-muted">
                    {card.description}
                  </p>
                  <p className="mt-2 truncate font-display text-sm font-semibold text-accent-bright">
                    {card.cta}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
