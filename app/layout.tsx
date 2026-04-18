import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { buildSeoKeywords, seoDescription } from "@/data/seo";
import { profile } from "@/data/profile";
import { getSiteUrl } from "@/data/site";

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

const siteUrl = getSiteUrl();
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: `${profile.name} — Portfolio`,
  title: {
    default: `${profile.name} · ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: seoDescription,
  keywords: buildSeoKeywords(),
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "science",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: seoDescription,
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_IN",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.title}`,
    description: seoDescription,
    images: [new URL("/opengraph-image", siteUrl).href],
    ...(twitterHandle
      ? { site: twitterHandle, creator: twitterHandle }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
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
    <html lang="en-IN" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="pointer-events-none fixed left-4 top-4 z-[200] -translate-y-[140%] rounded-md bg-amber px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
