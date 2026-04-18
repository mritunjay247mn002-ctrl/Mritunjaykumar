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
            className="transition-colors hover:text-amber"
          >
            miningtoolkit.in
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-amber"
          >
            linkedin
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-amber"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
