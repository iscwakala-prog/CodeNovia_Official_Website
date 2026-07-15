import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeNovia | Building Smarter Digital Experiences",
    template: "%s | CodeNovia",
  },
  description:
    "CodeNovia builds smarter digital experiences—web, mobile, AI, cloud, and software consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeBootScript = `(function(){try{var k='codenovia-theme';var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark')t='dark';var r=document.documentElement;r.dataset.theme=t;r.classList.toggle('light',t==='light');r.classList.toggle('dark',t==='dark');}catch(e){}})();`;

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg-deep font-sans text-text transition-colors duration-300">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
