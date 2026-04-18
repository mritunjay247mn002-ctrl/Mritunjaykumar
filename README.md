# Mritunjay Kumar — Personal Website

A premium, dark-themed personal site for a mining research scholar and AI tool-builder.

## Tech

- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS 3
- Framer Motion 11

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy

Zero-config deploy to [Vercel](https://vercel.com): just import the repo.

## Edit content

All content lives in `/data` as plain TypeScript:

- `data/profile.ts` — name, tagline, email, socials, bio
- `data/research.ts` — research cards
- `data/projects.ts` — project cards
- `data/skills.ts` — skill clusters

Images are served from `/public/images/*.svg`.

## Project structure

```
app/
  components/        UI components (Hero, Navbar, Projects, ...)
  globals.css        Tailwind layers + theme extras
  layout.tsx         Root layout, fonts, metadata
  page.tsx           Single-page site composition
data/                Typed content
public/
  images/            Project images (SVG placeholders)
  favicon.svg
tailwind.config.ts   Design tokens (ink / amber) & animations
```

## Easter egg

Type `rock` anywhere on the page.
