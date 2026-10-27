# Placeholders — replace before launch

Every item below is written in `[square brackets]` in the source. Nothing on
the site invents a logo, testimonial, or result number; where real data is
missing, the component either renders an offer fact or renders nothing at all.

Find them all at any time:

```bash
grep -rno "\[[A-Za-z][^]]*\]" content/site.ts
```

---

## 1 · Identity — `content/site.ts`, the `site` object

| Placeholder | Where it shows up |
|---|---|
| `[replace with the real domain]` (`site.url`) | canonical URLs, sitemap, OG tags, Organization schema |
| `[hello@yourdomain]` (`site.email`) | footer, /book, privacy, terms |
| `[LinkedIn URL]` (`site.linkedin`) | footer icon, About, Organization schema |
| `[Your name]` (`site.founder`) | home founder note, About, Organization schema |

## 2 · Booking — `site.booking.calLink`

`[set before launch]`. While empty, `/book` renders a labelled panel instead of
an empty calendar.

1. Create the Cal.com event: **20-min Ops Call**, 20 minutes, Google Meet link
   generated automatically, times shown in the visitor's local timezone.
2. Add these intake questions, in order:
   1. Full name *(required)*
   2. Work email *(required)*
   3. Company name and website *(required)*
   4. Your role *(required)*
   5. Industry — dropdown, the twelve industries from `content/site.ts` plus
      **Other** *(required)*. The exact list is printed inside the `/book`
      placeholder panel so you can copy it.
   6. Team size — 1–19 · 20–49 · 50–199 · 200–999 · 1,000+ *(required)*
   7. What's the biggest operational headache right now? *(required, free text)*
   8. Phone or WhatsApp *(optional)*
3. Set the event's **redirect on booking** to `https://yourdomain/thank-you/`.
4. Put the slug (e.g. `sharpframe/20min-ops-call`) into `site.booking.calLink`.

The inline embed also listens for `bookingSuccessful` and routes to
`/thank-you` itself, so the redirect is belt-and-braces.

## 3 · Rental case study — `content/site.ts`, `rentalCase`

| Placeholder | Note |
|---|---|
| `[city]` | in the subheadline |
| `[X vehicles]` | quick-facts bar |
| `[Client]`, `[X]` | the "Before" paragraph |
| `[Two or three sentences on what changed, with real numbers.]` | the "After" paragraph |
| `headline` | currently the descriptive line. Swap for the strongest **confirmed** number, e.g. "40 hours of admin saved every week" |
| `stats` | currently three neutral facts about what was delivered. Replace with three real numbers, labelled "client-reported" if they are estimates |
| `after.testimonial` | `null`. Set only with a real, approved quote — the block does not render until you do |

Also update `caseStudiesIndex.cards[0].headline` so the carousel card matches.

## 4 · Legal

- `legalUpdated` → `[date]`
- `[Cal.com]`, `[Vercel Analytics]`, `[email provider]` in `privacy.sections`
- `[Have this reviewed by a lawyer…]` — do this, especially for EU/UK clients

---

## Assets still to produce

| Asset | Spec | Where it goes |
|---|---|---|
| Founder headshot | Square, 1200px+, no sunglasses | `public/founder.jpg`. Two placeholder blocks are marked `[Replace with the founder headshot…]` — one on Home section 10, one on About section 3. Swap the `div` for `next/image` |
| Rental screenshots | 3 anonymized — blur customer names and numbers | Case study "What we built" and the dark carousel cards, both marked `[Replace with 3 anonymized screenshots]` |
| Wordmark logo | SVG, light and dark | `src/components/logo.tsx` holds a text wordmark plus an inline `FrameMark` SVG. Replace the SVG; layout needs no change |
| Favicon | Lime square-frame on ink | `src/app/icon.svg` (already drawn to spec) and `public/favicon.ico` |
| OG image | 1200×630 | `public/og-image.png` — **already in place**, off-white with the lime marker |

---

## Things deliberately left off

- **Client logos.** The "built for" strip scrolls industry names instead. Swap
  it for a logo row only when you have written permission from each client.
- **Testimonials.** Both testimonial slots are `null` and render nothing.
- **Result numbers.** Hero stat cards carry offer facts (3 weeks, 5x,
  7 deliverables, 100% credit), per the honesty rules. Replace them one at a
  time as real results are confirmed — `home.hero.stats`.
- **Prices.** Nowhere on the site, by design.
- **Footer newsletter.** Hidden behind `site.showChecklistSignup: false`. Flip
  it to `true` once the Ops Leak Checklist PDF exists, and point
  `ChecklistSignup`'s `onSubmit` at your email provider.

---

## Deploy

```bash
npm run build          # static export → ./out
```

- Deploy `out/` to Vercel (or Netlify) and point the domain at it, HTTPS on.
- Vercel Analytics is already wired in `src/app/layout.tsx`. It only reports
  once deployed; locally `/_vercel/insights/script.js` 404s, which is the sole
  reason the Lighthouse best-practices score sits at 96 rather than 100.
- Events firing today (`src/lib/analytics.ts`):
  `book_call_click` with a `location` property on every CTA, and
  `booking_completed` on `/thank-you` plus from the Cal.com callback.
- Submit `https://yourdomain/sitemap.xml` in Google Search Console.

### Measured on the production build

| Page | Perf | A11y | Best practices | SEO |
|---|---|---|---|---|
| Home | 92 | 100 | 96 | 100 |
| Blueprint | 96 | 100 | 96 | 100 |
| Services | 97 | 100 | 96 | 100 |
| Industries | 97 | 100 | 96 | 100 |
| Book | 97 | 100 | 96 | 100 |
| Rental case study | 97 | 100 | 96 | 100 |

Performance is measured against `npx serve`, which sends no cache headers;
Vercel's immutable caching on `_next/static` lifts it further.
