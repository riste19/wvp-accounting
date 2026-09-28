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
**search engines saw a blank page**.

This is that site, rebuilt as an **exact replica** — same markup, same
classes, same colours, same images, same animations — in a static export
where all of the text is in the HTML. At 1440px and at 390px the two render
to the same page height, and a pixel diff of every screen differs by under
0.25% (anti-aliasing, and the deliberate corrections listed below).

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
| `/{locale}/politika-za-privatnost` | Privacy policy, linked from the footer |
| `/{locale}/uslovi-za-koristenje` | Terms of use, linked from the footer |
| `/admin` | The editor's panel. `noindex`, never cached |

The home page's sections are `#home`, `#services`, `#why-us` and `#contact`,
the same ids the approved site uses. The header and footer also link to
`#packages`, which — exactly as on the approved site — has no section, so the
link does nothing. The ids are defined once in `src/data/site/sections.ts`.

The approved site has no blog, no legal pages and no social profiles. The
blog exists because the admin panel publishes to it, but, as there, nothing
on the page links to it. Its footer's privacy and terms links went to `#`;
here they open real pages, in all three languages.

---

## Content layer

Changing text on the site means editing a file in `src/data/content`, never a
component.

| File | Holds |
| --- | --- |
| `text.ts` | Every word of the home page, header, footer and contact form |
| `services.ts` | The twelve service cards |
| `pillars.ts` | The three "why us" cards |
| `ui.ts` | Page metadata and control labels — the scaffolding, not the content |
| `legal.ts` | Privacy policy and terms, in all three languages |
| `posts.json` | Blog posts. **Written by the admin panel — do not hand-edit** |

`text.ts`, `services.ts` and `pillars.ts` were generated from the live
JavaScript bundle of the approved site, so the wording is his, word for word.

### Where this differs from the approved site

Each of these is a plain mistake there. They are fixed here and listed so he
can confirm rather than discover them later.

| Where | Approved site | Here |
| --- | --- | --- |
| Footer email | `info@wvpaccouting.mk` — missing the "n"; mail to it bounces | `info@wvpaccounting.mk`, as its own contact section already has |
| AL, hero line 3 | "MÊ TÊ MIRËN" (circumflex, not diaeresis) | "MË TË MIRËN" |
| AL, hero button | "Shërbime Tona" | "Shërbimet Tona" |
| AL, footer line | "PER KLIENTIN, … MÊ TÊ MIRËN." | "PËR KLIENTIN, … MË TË MIRËN." |
| Form errors | English on every language ("Name must be at least 2 characters") | In the page's language; English keeps its exact wording |
| Contact form | Shows "sent" after a second and **discards the message** | Actually sends it, via `/api/contact`, and says so if it fails |
| Footer privacy / terms | `href="#"`: the pages never existed | Real pages. A site with a contact form has to say what it does with the data |

Invisible differences: the language pills are links to `/mk`, `/en`, `/sq`
rather than buttons (so each language is its own crawlable page — switching
keeps your scroll position, as it did there), and the phone and email are
`tel:`/`mailto:` links.

### Language codes

The old site used `al` for Albanian. This one uses **`sq`**, the ISO code,
because that is what `lang` and `hreflang` must carry — and it matches the
consulting site. The visible switcher still reads "AL".

---

## Design

Everything is copied from the approved site rather than approximated:

- **Tokens.** The `:root` block in `src/app/globals.css` is that site's,
  value for value — HSL channels used as `hsl(var(--x))`, primary
  `0 84% 40%`, its radius scale off `--radius: 0.75rem`. Both sites are
  Tailwind v4, so its class strings are used unchanged and produce the same
  CSS.
- **Images.** The files in `public/images` are its own, byte for byte. The
  header logo is a 1920×1080 canvas sized by `h-32`; trimming it would change
  how big it looks.
- **Motion.** That site animates with framer-motion. `globals.css` reproduces
  each animation in CSS with the same distances, durations, delays and
  curves (framer's default spring is sampled into a `linear()` easing), so
  this site does not ship the library. See `components/motion`.
- **Type.** Montserrat, via `next/font`.

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
17 checks — no stray `out/index.html`, no `/_next/image` references, every
`<img>` resolving, `_redirects` and `_headers` present with LF endings, all
three locale roots carrying the right `lang` attribute, and every sitemap URL
being a page the build actually produced.

**A 200 on a page URL does not prove which build is live.** To check a deploy,
fetch the page, pull its `/_next/static/chunks/*.js` URLs, and grep the
concatenated bundle for a string unique to the new code.

### Secrets

Set in the Cloudflare Pages dashboard, never in the repo. `.dev.vars.example`
lists them; `.dev.vars` is gitignored. Never put a real key in the example
file.

---

## Kept exactly as the approved site has them

Decided 2026-09-27: these match the approved site, on purpose.

- **"Packages" goes nowhere.** It is in the header and footer with no section
  behind it. The approved site's bundle does contain five packages (no
  prices) that were never put on the page.
- **Nothing links to the blog**, so a post published from the admin panel is
  reachable only by its URL and the sitemap.
- **No social profiles**, visible or in the structured data.
- **The hero photo is its 800px file**, stretched across the full screen. It
  looks as soft there. A larger original of the same shot would sharpen both.

## Still to settle

1. **A lawyer should read the privacy policy and terms before launch.** They
   were adapted from the consulting site's, rewritten for an accounting firm
   and translated into Albanian and English on 2026-09-28. Worth checking: the
   legal bases, the retention periods, and the transfer to Cloudflare and
   Resend in the US. Move `updated` in `legal.ts` whenever they change.
2. **`info@wvpaccounting.mk` may not receive mail.** The domain's MX record
   points at the web host, which does not accept mail. The contact section,
   the footer and the privacy policy all send people to that address.
3. **The starter blog post** (`dobredojdovte-na-nasiot-blog`) exists because a
   static export needs at least one post to generate the route. He can delete
   it from the panel once there is a real one.

---

## Ownership

Built and maintained by Riste Semenkovski.
