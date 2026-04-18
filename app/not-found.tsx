import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "./components/SiteShell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-neutral-500">404</p>
        <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
          This page does not exist.
        </h1>
        <p className="max-w-md text-sm text-neutral-400">
          The link may be broken or the page was removed. Head back to the portfolio home.
        </p>
        <Link
          href="/"
          className="rounded-full bg-amber px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-amber/90"
        >
          Back to home
        </Link>
      </div>
    </SiteShell>
  );
}
