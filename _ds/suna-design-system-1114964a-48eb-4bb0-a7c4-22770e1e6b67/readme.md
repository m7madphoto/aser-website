# Suna Design System

**صُنع** — Made. A Saudi creative agency producing world-class social media content.

Suna specializes in premium social media design, branding, creative direction, photography, video production, and visual storytelling. This design system exists **exclusively for social media content creation** — not websites, apps, dashboards, or product UI.

---

## Sources

- **Font files:** Thmanyah Serif Display (5 weights: Light, Regular, Medium, Bold, Black) — provided as OTF
- **Brand wordmark:** Arabic calligraphic mark `صُنع` — `assets/images/suna-wordmark.jpg`
- **Reference images:** Editorial and cinematic social media examples — `assets/images/ref-*.{jpg,png}`
- **Brand brief:** SUNA Social Media Design System document (provided as pasted text)

No Figma link or codebase was provided. The system was built from the brand brief and uploaded visual references.

---

## Content Fundamentals

**Language:** Arabic-first, bilingual. Arabic copy is the primary creative voice. English appears as labels, eyebrows, data, and technical elements.

**Tone:** Confident. Strategic. Premium. No fluff.
- Say it in 2–5 words. If you need more, rewrite.
- Questions create tension: *"سايت موجود — وين البيع؟"*
- Numbers are power: *"+23 مشروع"*, *"98%"*
- Commands land hard: *"اصنع بإتقان."*, *"STOP SCROLLING."*

**Casing:**
- Arabic: natural case always
- English headlines: ALL CAPS for maximum impact
- English labels/eyebrows: ALL CAPS + wide tracking
- English body: sentence case

**No emoji.** No clichés. No inspirational platitudes. No fill copy.

**Voice examples:**
- ✓ "التصميم رسالة"
- ✓ "MADE WITH PURPOSE."
- ✓ "+50 successful campaigns"
- ✗ "We are passionate about creativity and delivering results that matter"

---

## Visual Foundations

**Colors:**
- Black `#0A0A0A` — primary canvas for 70% of posts
- White `#F8F7F4` — clean canvas; dramatic negative space
- Orange `#E05500` — the only accent; used to direct the eye, never to fill space
- No gradients. No other hues. Ever.

**Typography:**
- **Arabic display:** Thmanyah Serif Display — calligraphic, editorial, powerful. Use Black (900) and Bold (700) for headlines. Regular and Light for body.
- **Latin display:** Space Grotesk (Google Fonts substitute — see Caveats). Bold and Black weights for impact. Regular for body.
- Headlines are the design. They must stop scrolling alone.
- Minimum 56px for any headline element in a 1080px post.

**Backgrounds:**
- Full-bleed solid: black or white. No textures, no patterns, no gradients.
- Orange as a full-bleed block only for ultra-high-impact pieces.
- Images: cinematic, high-contrast AI/photography used as full-bleed bg with type overlaid.

**Composition:**
- One focal point per post — always.
- Poster-style: type anchors the bottom or a bold vertical split.
- Generous negative space is the luxury. Never fill it.
- Corner radii: 0 for post frames. Small (4–8px) only for UI micro-elements like badges.

**Imagery:**
- Photorealistic AI or premium photography only.
- Cinematic lighting: dramatic directional light, deep shadows, single subject.
- Color mood: warm (orange/amber) or cold-neutral (black-and-white, cool gray).
- No stock photography. No flat illustrations. No generic visuals.

**Hover / press states:** Not applicable to social content. For any interactive viewer tool: `opacity: 0.85` hover, `opacity: 0.7` press.

**Animation:** Clean cross-fade for carousels. No bounces. No decorative loops. If motion, it must have purpose.

**Borders:** None on posts. Sharp edges everywhere.

**Shadows:** None. The contrast between elements creates depth.

**Transparency/blur:** Protection gradient (black to transparent) over imagery for text legibility.

---

## Iconography

No icon system. Suna does not use icon libraries.

Graphic accents used instead:
- `×` — cross/intersection mark (editorial tension)
- `→` — directional arrow (forward, CTA)
- `◆` / `◇` — diamond (premium, precision)
- Thin horizontal rules (1–2px) in orange or white

No emoji. No unicode icon hacks. No CDN icon fonts.

---

## File Index

```
styles.css                    — global CSS entry (import this one file)
tokens/
  fonts.css                   — @font-face for Thmanyah Serif Display
  colors.css                  — full color system (CSS custom properties)
  typography.css              — type scale, font families, tracking, leading
  spacing.css                 — spacing scale + post safe areas
assets/
  fonts/                      — Thmanyah OTF files (Light → Black)
  images/                     — wordmark + reference imagery
guidelines/                   — foundation specimen cards (Design System tab)
components/
  social/                     — PostFrame, Headline, Caption, Eyebrow, Badge, StatBlock
ui_kits/
  instagram/                  — Instagram post template gallery
readme.md                     — this file
SKILL.md                      — Claude Code skill definition
```

### Components

| Component | Purpose |
|-----------|---------|
| `PostFrame` | Base canvas — sets aspect ratio + background |
| `Headline` | Display headline — Arabic or Latin, multiple sizes |
| `Caption` | Supporting body text — minimal, 1–2 lines |
| `Eyebrow` | Small uppercase label above headlines |
| `Badge` | Pill label — services, categories, tags |
| `StatBlock` | Oversized number + descriptor |

---

## Caveats

- **No Latin font was provided.** Space Grotesk (Google Fonts) is used as a substitute. It is a strong editorial match. Provide a custom Latin typeface file to replace it.
- **No logo vector file.** The wordmark appears only as `assets/images/suna-wordmark.jpg` (raster). A vector SVG logo is recommended for production use.
- **No Figma or codebase.** System built entirely from brand brief and visual references.
