# producedbykyler.com — Project Context

Use this file to get up to speed on the site quickly. Read this before making any changes.

---

## Owner
**Kyler Chavez** — Audio producer based in Round Rock, TX
Website: producedbykyler.com
Email: kyler@producedbykyler.com
Instagram: @kylerfranklin
YouTube: @capitallimitsmusic
Substack: producedbykyler.substack.com

---

## Tech Stack
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Hosting:** Deployed via Lovable (controls the build) → custom domain producedbykyler.com
- **Repo:** https://github.com/chasestubb/kyler-chavez-audio (owned by Chase Stubb, Kyler has push access)
- **Contact form:** Formspree — `https://formspree.io/f/mlgonyrr`
- **Analytics:** Google Analytics G-TL8JY33MXH (injected via React in App.tsx to bypass Lovable's index.html override)
- **Vercel Analytics:** @vercel/analytics also added (secondary)
- **Newsletter API:** rss2json proxy → `https://api.rss2json.com/v1/api.json?rss_url=https://producedbykyler.substack.com/feed`

---

## Local Dev
```bash
cd /Users/kylerchavez/PROJECTS/kyler-chavez-audio
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh"
npm run dev
```
Preview server config: `/Users/kylerchavez/PROJECTS/.claude/launch.json` → name: `producedbykyler`

---

## Typography

| Role | Font | Notes |
|------|------|-------|
| Headings (h1–h6) | **Tanker** (Regular 400) | `/public/fonts/Tanker-Regular.woff2` — all uppercase, `font-normal` only (no bold weight exists) |
| Body text | **Birdie** (Regular) | `/public/fonts/Birdie-Regular.woff2` — replaces DM Sans for all body copy |
| Green label text | **DM Sans** | Applied via `.text-primary` class in `src/index.css` — used for all olive/green uppercase labels |
| Fallback | DM Sans, sans-serif | Loaded via Google Fonts |

---

## Color Palette (CSS custom properties — HSL)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `30 12% 7%` | Dark near-black background |
| `--foreground` | `38 33% 78%` | Warm beige — main text |
| `--primary` | `75 38% 32%` | Olive green — accents, labels, borders |
| `--secondary` | `30 8% 16%` | Slightly lighter dark — form inputs |
| `--muted-foreground` | `38 20% 52%` | Muted beige — secondary text |
| `--border` | `38 18% 22%` | Subtle warm border |

---

## Site Structure & Section Order

```
Navbar
Hero
AboutSection       (id="about")
WorkSection        (id="work")
ServicesSection    (id="services")
SubstackSection    (id="newsletter") ← includes studio photo at top
ContactSection     (id="contact")
Footer
FloatingCTA        (fixed bottom-right, appears after 60% scroll)
```

---

## Component Notes

### `src/components/Hero.tsx`
- Full-screen section with pedalboard photo background (`/public/pedalboard.jpg`)
- Dark overlay: `bg-background/60`
- Top-left: "Producer @ / Redeemer Studio" in olive DM Sans (`text-sm tracking-[0.35em]`)
- Top-right: "Round Rock, TX" + italic Austin joke
- Middle-right: "Your ideas, / *your vision.*" tagline
- Bottom-left: "KYLER CHAVEZ" in Tanker at `text-[9vw] md:text-[7vw]`
- Olive accent line + "Book Your Project" CTA button

### `src/components/Navbar.tsx`
- Fixed nav, logo: "Produced by Kyler" in Tanker
- Links: Home, Services, Work, About, Contact
- Instagram → https://www.instagram.com/kylerfranklin/
- Border: `border-primary/30`

### `src/components/AboutSection.tsx`
- Two-column grid on desktop: text left, headshot right
- Photo (`/public/headshot.jpeg`) bleeds to right edge on desktop (`md:rounded-r-none`, no right padding)
- Left column padded: `px-6 md:pl-14 md:pr-16`
- Scroll reveal animations on both columns

### `src/components/WorkSection.tsx`
- Three Spotify track cards in horizontal layout
- Fetches album art via Spotify oEmbed API
- Track IDs: `3fH3Dqsf8HqnoJiaGvUjVe`, `5ZoUiu6rtIcRzaiVGqyOwx`, `3MB5O9YFUnL16UcbtHFbCJ`
- Hover: scale + dark overlay + green "Listen on Spotify" button → opens Spotify

### `src/components/ServicesSection.tsx`
- Three numbered hover rows: 01 Production, 02 Mixing, 03 Podcast Production
- On hover: number turns olive, title slides right, description brightens, italic aside fades in
- Section copy: "Every project gets the same attention — whether it's your debut single or your Magnum Opus."

### `src/components/SubstackSection.tsx`
- Starts with studio photo (`/public/studio-4.jpg`) with olive left-border accent
- Fetches latest Substack post via rss2json (rendered without scroll reveal — async fix)
- Substack embed iframe for subscribing
- Newsletter description: "My thoughts on life and music...and the occasional anti-AI rant."

### `src/components/ContactSection.tsx`
- Formspree endpoint: `https://formspree.io/f/mlgonyrr`
- Services: Recording, Mixing, Podcast Production, Other
- Shows "Sending..." state and success message

### `src/components/Footer.tsx`
- "Kyler Chavez" in Tanker, "obsessed with music since forever"
- Icons: Instagram (@kylerfranklin), YouTube (@capitallimitsmusic), Substack, Email

### `src/components/FloatingCTA.tsx`
- Fixed `bottom-6 right-6`, appears after scrolling 60% of viewport height
- Olive rounded-full "Book Your Project" button → scrolls to `#contact`

---

## Public Assets

| File | Usage |
|------|-------|
| `/public/pedalboard.jpg` | Hero background |
| `/public/headshot.jpeg` | About section portrait |
| `/public/studio-4.jpg` | Studio photo (before newsletter) |
| `/public/studio-5.jpg` | Unused (available) |
| `/public/2A3A0027.jpg` | Unused (available) |
| `/public/favicon.svg` | Browser tab icon — dark bg, olive border, beige "K", olive dot |
| `/public/fonts/Tanker-Regular.woff2` | Heading font |
| `/public/fonts/Birdie-Regular.woff2` | Body font |
| `/public/fonts/BespokeSerif-Regular.woff2` | Available but no longer in use |

---

## Animations
- Scroll reveal: `src/hooks/use-scroll-reveal.ts` — IntersectionObserver adds `revealed` class
- CSS: `.reveal` starts at `opacity: 0; transform: translateY(20px)`, transitions on `.revealed`
- **Important:** Don't use scroll reveal on async-rendered elements (e.g. Substack post card) — observer fires before the element mounts

---

## Key Decisions & Gotchas
- **Lovable overrides `index.html`** — GA tag must be injected via React (`App.tsx`), not `index.html`
- **Tanker has no bold weight** — always use `font-normal`, never `font-bold` on headings
- **Git push auth:** repo is under `chasestubb` GitHub account; push with embedded token if needed
- **Large image pushes:** if push fails, set `git config http.postBuffer 524288000`
- **Preview port:** Vite runs on 8083 or 8085 — check `autoPort` in `.claude/launch.json`
- **Formspree:** use form ID `mlgonyrr`, not the email directly
