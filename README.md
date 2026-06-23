# SharpFrame

Marketing site for **SharpFrame** — an AI-native content agency for DTC skincare
and supplement brands. This is a Next.js rebuild of the original single-file
`sharpframe_website.html`, with the same content but a modern, component-based
architecture.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first theme in `src/app/globals.css`)
- **shadcn/ui** primitives (`Button`, `Accordion`) on Radix UI
- **next/font** for Syne, DM Sans & DM Mono
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts + metadata
│   ├── page.tsx            # composes every section
│   └── globals.css         # Tailwind v4 theme + design tokens
├── components/
│   ├── reveal.tsx          # IntersectionObserver fade-up wrapper
│   ├── sections/           # one component per page section
│   └── ui/                 # shadcn primitives (button, accordion)
├── hooks/
│   └── use-count-up.ts     # eased count-up animation for the hero ticker
└── lib/
    ├── content.ts          # all copy / data, kept editable in one place
    └── utils.ts            # cn() helper
```

## Design tokens

The original palette (electric-lime accent on a near-black surface) and
typography live as CSS variables in `globals.css` and are exposed to Tailwind
through `@theme` — e.g. `bg-surface`, `text-brand`, `border-rule`,
`font-display`.

## Available scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
