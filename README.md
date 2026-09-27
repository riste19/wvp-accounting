# WVP Accounting — Website (MK / AL / EN)

Marketing website for **ВФП АКАУНТИНГ ДООЕЛ Скопје** (WVP Accounting, Skopje),
the accounting arm of the **WVP Group** and sister company to
[WVP Plus Consulting](https://wvpconsulting.mk).

Built with the Next.js App Router, TypeScript and Tailwind CSS v4. Fully
static (SSG), in three languages: Macedonian, Albanian and English.

---

## Why this repo exists

The firm already had a site at `wvpaccounting.mk`. It was a Vite + React
single-page app, and its `index.html` was an empty `<div id="root">` — every
word on the page was assembled by JavaScript in the browser. That means
**search engines saw a blank page**. This rebuild puts the same content, and
the same design, into a static export where all of it is in the HTML.

It is a separate repository from the consulting site on purpose. Same
architecture, same admin panel, but its own content, its own editors and its
own deploy — so breaking one cannot take down the other.

---

## Running locally

Requires **Node.js 20+** and npm.

```bash
npm install
npm run dev        # http://localhost:3000 — no Cloudflare Functions
npm run build      # static export to out/, then verify-export.mjs
npm run preview    # build + wrangler pages dev out — Functions DO run here
npm run typecheck
npm run lint
```

`next dev` does **not** run the Cloudflare Pages Functions, so `/api/contact`
and the admin API return 404 there. Use `npm run preview` to exercise them.

> The consulting site's preview also uses port 8788. Run only one at a time,
> or pass `--port` to wrangler.

---

## Routes

| Route | What it is |
| --- | --- |
| `/` | Redirects to `/mk` via `public/_redirects` (302 for now — see that file) |
| `/{mk,sq,en}` | The whole site: one page, anchored sections |
| `/{locale}/blog` | Post list |
| `/{locale}/blog/{slug}` | A post |
| `/{locale}/politika-za-privatnost` | Privacy policy |
| `/{locale}/uslovi-za-koristenje` | Terms of use |
| `/admin` | The editor's panel. `noindex`, never cached |

The home page's sections are `#home`, `#services`, `#packages`, `#why-us`,
`#about` and `#contact` — the same anchor ids the previous site used, so any
link anyone has already shared still lands in the right place. The ids are
defined once in `src/data/site/sections.ts`; nothing hard-codes them.

---

## Content layer

Changing text on the site means editing a file in `src/data/content`, never a
component.

| File | Holds |
| --- | --- |
| `text.ts` | Every word of the home page, in all three languages |
| `services.ts` | The twelve service cards |
| `pillars.ts` | The three "why us" cards |
| `packages.ts` | The five packages |
| `contactForm.ts` | Form labels, placeholders, errors |
| `ui.ts` | Page metadata and control labels — the scaffolding, not the content |
| `legal.ts` | Privacy policy and terms |
| `posts.json` | Blog posts. **Written by the admin panel — do not hand-edit** |

`text.ts`, `services.ts`, `pillars.ts` and `packages.ts` were extracted from
the live JavaScript bundle of the approved site, so the wording is his, not a
rewrite.

### Corrections made to the approved site's copy

Each of these is a plain mistake on the live site. They are fixed here and
listed so he can confirm rather than discover them later.

| Where | Was | Now |
| --- | --- | --- |
| Contact email | Both `info@wvpaccounting.mk` and `info@wvpaccouting.mk` appeared; the second bounces | Only the correct spelling |
| MK, "why us" #4 | „Трезорски тројазична поддршка" | „Тројазична поддршка" |
| MK, HR services | „Отварање на боледување" | „Отворање на боледување" |
| MK, email placeholder | „вашиот@емаил.ком" (Cyrillic — not a usable address) | `vasiot@email.com` |
| AL, hero line 3 | "MÊ TÊ MIRËN" (circumflex, not diaeresis) | "MË TË MIRËN" |
| AL, hero button | "Shërbime Tona" | "Shërbimet Tona" |
| AL, "why us" #4 | "Mbështetje tërgjistore" | "Mbështetje trigjuhëshe" |

The corrections live in the `FIX` table at the top of the generator that
produced `text.ts`; in this repo they are simply part of the file.

### Language codes

The old site used `al` for Albanian. This one uses **`sq`**, the ISO code,
because that is what `lang` and `hreflang` must carry — and it matches the
consulting site. The visible switcher still reads "AL".

---

## Design

Both brand colours are sampled from the logotype rather than guessed:

- `--primary: #e0021b` — the red the WVP mark is drawn in. The same red the
  consulting site uses, because it is the same group.
- `--ink: #1a3041` — the navy of the word АКАУНТИНГ. This is what separates
  the two sites: it carries the dark bands, the headings and the footer.

Type is **Montserrat**, as on the approved site. Tokens are declared in
`src/app/globals.css` via `@theme inline`; Tailwind v4 has no config file.

---

## The admin panel

`/admin` is the same panel as the consulting site, with one difference that
matters. The consulting site publishes to five *countries*; this firm works in
one country from one office, so the chooser is three **language versions** —
Macedonian, Albanian, English — not countries. See
`src/features/admin/postEditing.ts`.

Every save is a real commit to this repository, which triggers a Cloudflare
build. Point `GITHUB_BRANCH` at a throwaway branch when developing locally.

---

## Deployment

Cloudflare Pages, build on push.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | 20+ (`.nvmrc`) |

`npm run build` ends with `scripts/verify-export.mjs`, which fails the build on
16 checks — no stray `out/index.html`, no `/_next/image` references, every
`<img>` resolving, `_redirects` and `_headers` present with LF endings, and all
three locale roots carrying the right `lang` attribute.

**A 200 on a page URL does not prove which build is live.** To check a deploy,
fetch the page, pull its `/_next/static/chunks/*.js` URLs, and grep the
concatenated bundle for a string unique to the new code.

### Secrets

Set in the Cloudflare Pages dashboard, never in the repo. `.dev.vars.example`
lists them; `.dev.vars` is gitignored. Never put a real key in the example
file.

---

## Still to settle with the client

1. **The packages have no prices.** The approved site shows none either — the
   cards carry a "monthly" label and a "choose package" button, but no
   figures. Add a `price` field to `packages.ts` when he sets them.
2. **The contact form asks two more questions** than his site did: company and
   subject. A lead that arrives already sorted by topic is worth more than the
   half-second it costs. Easy to trim back if he disagrees.
3. **The starter blog post** (`dobredojdovte-na-nasiot-blog`) exists because a
   static export needs at least one post to generate the route. He can delete
   it from the panel once there is a real one.
4. **The legal pages** were adapted from the consulting site's, with the entity
   and services renamed. A lawyer should read them before launch.
5. **No social profiles.** The structured data points at the group's LinkedIn.
   Replace `company.social` the moment the firm gets its own.
6. **The logotype is Macedonian in every language.** There is no Latin
   "ACCOUNTING" version of the artwork; the approved site has the same.

---

## Ownership

Built and maintained by Riste Semenkovski.
