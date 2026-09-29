# Spenner Consulting

> SPENNER Consulting exists to create order in what feels complex and messy.

Spenner Consulting is a personal **website for Glenn Spenner**, a senior project manager and management consultant with over 30 years of experience leading projects and transformation work in IT, energy and telecom. The site presents his services, background and professional history, and lets visitors book a first meeting.

The site is a **static, dependency-free** web project: no build step, no server, no framework runtime. Just plain HTML, CSS and vanilla JavaScript that you can host anywhere — GitHub Pages, Netlify, a web hotel or a USB stick.

---

## Pages

| Page | Path | Content |
|---|---|---|
| Home | `index.html` | Positioning statement, short "About" teaser and primary calls to action |
| Services | `tjanster.html` | Core service areas, vision/mission, values with descriptions and CTA |
| About Glenn | `om-glenn.html` | Bio, portrait, service-oriented focus areas and CV download |
| Experience | `erfarenheter.html` | Interactive career timeline (Gantt) with details, from 1986 to today |
| Contact | `kontakt.html` | Contact cards and a booking form with live validation |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) with the browser Play CDN (`@tailwindcss/browser`) + custom CSS |
| Scripting | Vanilla JavaScript (ES5-style IIFE, no frameworks, no build) |
| Fonts | Google Fonts: *Inter*, *Playfair Display*, *Quattrocento Sans* |
| Icons | Inline SVG |
| Hosting | Static-only, deployable to any static host |

No `package.json`, no bundler, no npm install. The site works by opening the HTML files directly in a browser.

---

## Features

### Bilingual (SV / EN)
- All UI text is driven by a **translation engine** (`js/main.js`) with a `data-i18n` attribute system and close to **130 keys**.
- A language toggle (`SV/EN`) switches every page instantly, no reload.
- The chosen language is **persisted in `localStorage`** (`sc-lang`), defaulting to Swedish.
- The **CV download link** points to the matching Swedish or English PDF automatically.
- `lang` attribute, page titles, placeholders and aria-labels update with the language.

### Experience timeline (Gantt)
- Renders the full career history as an **interactive Gantt-style timeline** (1986-2026) with employer rows, education and assignment sub-bars.
- A **view toggle** next to the filters switches between the timeline and a **list view** that shows each experience with its full, in-depth description.
- **Filter buttons** (All / Employment / Education / Assignments) rerender the active view on the fly.
- Every row opens a **detail modal** with role, place, period and the full description.
- Fully controlled from the keyboard: **Enter** opens, **Escape** closes, focus returns to the trigger.
- Decorative bars are non-interactive; the accessible control is the "Read more" button.

### Contact / booking form
- Client-side validation (name, email, and message) with inline status feedback.
- Success and error messages use accessible, **contrast-safe colours** on the dark photo background.
- Demo-ready structure — currently sends nothing; wire up any endpoint or `mailto:` service.

### Design system
- A single **brand palette** defined as Tailwind `@theme` tokens, reused across all five pages:

| Token | Color | Hex |
|---|---|---|
| `primary` / `navy` / `accentstrong` | Deep Navy | `#1B242A` |
| `accent` / `accenttext` / `teal` | Forest Teal | `#273F3E` |
| `slate` | Slate | `#394B56` |
| `accentlight` | Warm Taupe | `#AD9984` |
| `surface` / `stone` | Warm Stone | `#D9D3CB` |
| `bg` | Off White | `#F4F1EE` |
| `ochre` | Ochre Yellow * | `#C28D4B` |
| `terracotta` | Muted Terracotta * | `#B86B53` |
| `sage` | Soft Sage * | `#98A593` |
| `plum` | Charcoal Plum * | `#42363F` |

*Complementary accents used for status feedback and highlights.

- Typography hierarchy via `font-display` (Playfair Display) for headings and `font-sans` (Inter) for body text.
- Tinted photo backgrounds (`custom.css` body classes) with a navy overlay for consistent contrast across pages.

### Accessibility (WCAG 2.1 AA)
- Contrast ratios **≥ 4.5:1** on all text (verified against the real background overlays).
- Skip-to-content link, semantic landmarks (`header`/`nav`/`main`/`footer`) and a single `h1` per page.
- `aria-label`s on icon-only controls, `aria-expanded` on the mobile menu toggle.
- Visible `:focus-visible` outlines and keyboard-operable modal + mobile menu.
- `prefers-reduced-motion` respected; hover effects are purely visual lifts.
- Labeled form fields with autocomplete attributes and `aria-live` status announcements.

---

## Project Structure

```
.
├── index.html              # Home
├── tjanster.html           # Services
├── om-glenn.html           # About Glenn
├── erfarenheter.html       # Experience / Gantt
├── kontakt.html            # Contact + form
├── css/
│   └── custom.css          # Backgrounds, gantt grid, typography, focus states
├── js/
│   └── main.js             # i18n engine, Gantt renderer, nav, form, 128+ keys
├── images/                 # Logos, portraits and background photos
├── Cv länk/                # CV PDFs, Swedish and English
└── LICENSE                 # MIT
```

---

## Getting Started

There is nothing to build or install:

<!-- -->
1. Clone or download the repository.
2. Serve the folder over any static file server (or open `index.html` directly).
   ```bash
   # example: a one-line static server
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in a browser.

> Some browsers restrict ES module/CDN resources when opened via `file://`. Opening the folder through a static server (even `python -m http.server`) avoids any caching/authorization quirks with the Tailwind Play CDN.

---

## Customising

- **Text & translations**: add or edit keys in the `translations` object at the top of `js/main.js`, then reference them with `data-i18n="key.name"` in the HTML.
- **Career timeline**: edit the `ganttRowsData` and `allSubs` arrays in `js/main.js` (periods `from`/`to`, `type`, `display`, `place`, `role`, `desc`).
- **Colours**: adjust the `@theme` block in the `<style type="text/tailwindcss">` tag in each HTML page.
- **Backgrounds**: update the `body.page-*` rules in `css/custom.css`.
- **Version bumps**: when changing `main.js`, bump the cache-busting query string (`?v=`) used by every page.

---

## Browser Support

Targets modern evergreen browsers (latest Chrome, Edge, Firefox, Safari). The Tailwind v4 Play CDN and CSS features (`@theme`, `backdrop-filter`, `inset`, grid `[5fr_7fr]`, `repeating-linear-gradient`) require reasonably recent browser versions.

---

## License

[MIT](LICENSE) © 2026 Leo Malcolm Spenner