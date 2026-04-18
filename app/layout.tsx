import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://miningtoolkit.in"),
  title: {
    default: `${profile.name} · ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description:
    "Mritunjay Kumar. Mining research scholar at NITK Surathkal. Research focus on underground pillar design and rock mechanics. Founder of MiningToolkit, an integrated mining engineering suite.",
  keywords: [
    "Mritunjay Kumar",
    "Mining Engineering",
    "Pillar Stability",
    "AI in Mining",
    "Rock Mechanics",
    "MiningToolkit",
    "NITK Surathkal",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.tagline,
    url: profile.website,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.title}`,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
