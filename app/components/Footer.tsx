import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="container-rail flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">
          © {new Date().getFullYear()} · {profile.name}
        </p>
        <div className="flex items-center gap-5 text-xs text-neutral-500">
          <a
            href={profile.website}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-[44px] items-center py-2 transition-colors active:text-amber/90 hover:text-amber md:min-h-0 md:py-0"
          >
            miningtoolkit.in
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-[44px] items-center py-2 transition-colors active:text-amber/90 hover:text-amber md:min-h-0 md:py-0"
          >
            linkedin
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] items-center py-2 transition-colors active:text-amber/90 hover:text-amber md:min-h-0 md:py-0"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
