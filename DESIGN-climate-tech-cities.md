---
version: alpha
name: Climate-Tech-Cities-design-analysis
description: A warm, paper-and-ink documentary system. Cream #f5f4e9 canvas with near-white sections, one dark olive ink #25331a doing the work of both text and structure, Halyard Display set almost entirely at weight 300 with generous positive tracking, and a strict square-cornered shape language with no shadows. Lavender #e2bdff and coral #ef653a arrive only as small accents. The signature move is the light weight: even 47px headings are thin, so the page reads as a printed field guide rather than a tech product.

colors:
  primary: "#25331a"            # olive ink: text, borders, dark bands, the theme's own "black"
  olive-ink: "#25331a"
  cream: "#f5f4e9"              # site background, the theme's lightAccent
  paper: "#fefefd"              # alternate sections, text on dark; the theme's "white"
  panel: "#fcfcf9"              # card panels in the owner's grid blocks
  lavender: "#e2bdff"           # the theme accent: newsletter button, feature tiles
  coral: "#ef653a"              # the theme darkAccent: icon glyphs, image overlays, map pins
  leaf: "#d1ecbc"               # light green in icon glyphs
  meadow: "#afd98f"             # green wash on the chapter map
  water: "#cfe3ec"              # water on the chapter map
  slate-text: "#55554e"         # secondary text inside cards
  hairline: "#e4e4dc"           # the one border colour that is not ink
  stone: "#9b9b94"              # map boundary lines
  stone-tag: "#9a9a92"          # uppercase tag above a card title
  true-black: "#000000"         # Squarespace safeDarkAccent: button text and border on primary buttons
  true-white: "#ffffff"
  overlay-ink: "rgba(37, 51, 26, 0.5)"   # image overlay on photo blocks
  on-dark: "#fefefd"

typography:
  display-xl:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 47.5px
    fontWeight: 300
    lineHeight: 1.13
    letterSpacing: 0.02em
  display-lg:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 37.7px
    fontWeight: 300
    lineHeight: 1.17
    letterSpacing: 0.02em
  heading-md:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 27.8px
    fontWeight: 300
    lineHeight: 1.21
    letterSpacing: 0.02em
  heading-md-bold:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 27.8px
    fontWeight: 700
    lineHeight: 1.21
    letterSpacing: 0.02em
  card-title:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 28.8px
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: 0
  body-lg:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 21.7px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.05em
  body-md:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 20.5px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.05em
  body-card:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 19.8px
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: 0.05em
  body-base:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0
  label-bold:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 21.7px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0.05em
  nav-link:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 21.7px
    fontWeight: 300
    lineHeight: 1.4
    letterSpacing: 0.05em
  button:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 21.1px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: 0.02em
  button-pill:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 0
  micro:
    fontFamily: "halyard-display, Mulish, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 13.5px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0.05em

rounded:
  none: 0px            # the brand default, everything
  xs: 4px              # one instance, a map control
  pill: 300px          # secondary pill buttons only

spacing:
  base: 18px           # 1rem; --base-font-size
  xs: 10px
  sm: 22px             # icon to title inside a card
  md: 28px             # grid gap
  lg: 36px             # card padding top
  xl: 42px             # button horizontal padding
  section: 1.8vw       # header vertical padding; sections use 6vw mobile gutter
  page: 5vw            # pagePadding
  container: 1280px    # maxPageWidth

components:
  top-nav:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.olive-ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: 1.8vw 5vw
    height: 121px
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.olive-ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: 2px 0
    border: "0 0 1px 0 solid {colors.olive-ink}"
  hero-band:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.olive-ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 6vw 5vw
  paper-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.olive-ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: 6vw 5vw
  dark-band:
    backgroundColor: "{colors.olive-ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 6vw 5vw
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.true-black}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 25px 42px
    border: "2px solid {colors.true-black}"
  button-primary-filled:
    backgroundColor: "{colors.olive-ink}"
    textColor: "{colors.true-white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 20px 33px
    border: "2px solid {colors.olive-ink}"
  button-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.lavender}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 25px 36px
    border: "2px solid {colors.lavender}"
  button-pill-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.olive-ink}"
    typography: "{typography.button-pill}"
    rounded: "{rounded.pill}"
    padding: 0 9px
    border: "1px solid {colors.olive-ink}"
    height: 52px
  card-panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.olive-ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.none}"
    padding: 36px 32px 40px
    shadow: "0 1px 4px rgba(37, 51, 26, 0.06)"
  card-panel-body:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.slate-text}"
    typography: "{typography.body-card}"
    rounded: "{rounded.none}"
    padding: 0
  feature-tile:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.olive-ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.true-white}"
    textColor: "{colors.true-black}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: 25px 36px
    border: "1px solid rgba(0, 0, 0, 0.12)"
    height: 81px
  image-overlay:
    backgroundColor: "{colors.overlay-ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 0
  footer:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.olive-ink}"
    typography: "{typography.body-base}"
    rounded: "{rounded.none}"
    padding: 6vw 5vw
    height: 181px
  inline-link:
    backgroundColor: "transparent"
    textColor: "{colors.olive-ink}"
    typography: "{typography.body-base}"
    rounded: "{rounded.none}"
    padding: 0
    border: "0 0 1px 0 solid currentColor"
---

## Overview

Climate Tech Cities reads like a printed field guide, not a software product. The canvas is a warm cream, `#f5f4e9`, and everything set on it is one dark olive, `#25331a`: the body text, the headings, the borders on buttons, the solid bands that break the page. That single ink is also the theme's "black" in Squarespace's own token file, which is the tell: the site never uses a neutral grey scale at all. Where it needs a quieter voice it drops to `#55554e` inside cards or to a 45% alpha of the same olive, and where it needs a lift it goes to one of two accents that appear only in small doses, a pale lavender `#e2bdff` and a coral `#ef653a`.

The typography does most of the atmospheric work. Halyard Display is loaded in three weights but used almost entirely at 300: the 47px section headings are thin, the 21.7px body copy is thin, the nav is thin. Tracking is positive everywhere, `.05em` on body and `.02em` on headings, so text sits airily on the cream. The only bold is a 700 used sparingly for card titles and inline labels, and the only 400 is on buttons. That 300/700 contrast, plus the unusually large body size (the base is 18px and running copy is 21.7px), is the editorial signature.

Shape is strictly rectangular. Buttons are 2px-bordered boxes with no fill and no radius, cards are square, the header is a flat band. The theme declares no shadows; the one shadow on the site, `0 1px 4px rgba(37,51,26,.06)`, was added by the site owner's own card grid and is barely visible. Depth comes from alternating cream and near-white `#fefefd` sections and from the occasional full dark-olive band with paper-white text. Squarespace's global fade animation (0.8s, 1s delay) runs on every block.

**Key Characteristics:**
- One ink, `#25331a`, for text, borders and dark surfaces alike; no grey ramp
- Cream `#f5f4e9` canvas alternating with paper `#fefefd` sections
- Halyard Display at weight 300 for nearly everything, including 47px headings
- Large type: 18px base, 21.7px running copy, `.05em` tracking
- Square corners throughout; the pill is reserved for one secondary button style
- No shadows in the theme; depth is done with section colour changes
- Lavender and coral as the only accents, each used in a handful of places
- Outline buttons: 2px border, transparent fill, generous 25/42px padding

## Colors

### Brand & Accent
- **olive-ink** `#25331a`: the brand colour and the theme's declared black. Text, headings, button borders, dark bands, map pins. HSL 93.6, 32%, 15%.
- **lavender** `#e2bdff`: the theme accent (`--accent-hsl` 273.6, 100%, 87%). Newsletter sign-up button border and text on the dark band; the "Discover, Subscribe, Engage" feature tiles.
- **coral** `#ef653a`: the theme darkAccent (14.25, 85%, 58%). Icon glyphs in the chapter grid, image overlays, the map's hover glyph.
- **leaf** `#d1ecbc` and **meadow** `#afd98f`: light greens confined to icon glyphs and the chapter map wash.

### Surface & Background
- **cream** `#f5f4e9`: `--siteBackgroundColor`, the theme's lightAccent. The page itself and most sections.
- **paper** `#fefefd`: the theme's white (60, 33%, 99.4%). Alternate sections and text on dark bands.
- **panel** `#fcfcf9`: the card panel colour in the owner's chapter grid, a hair whiter than cream so cards lift off it without a shadow.
- **water** `#cfe3ec`: the chapter map's water fill.
- **overlay-ink** `rgba(37,51,26,.5)`: laid over photographs behind text.

### Text
- **olive-ink** `#25331a` for everything primary.
- **true-black** `#000000` on primary buttons and some section headings, where Squarespace's safeDarkAccent resolves to pure black.
- **slate-text** `#55554e` for card descriptions.
- **stone-tag** `#9a9a92` for the small uppercase tag above a card title; **stone** `#9b9b94` for map lines.
- **hairline** `#e4e4dc`: the only non-ink border observed.

### Semantic
None observed. The site has no error, success or warning states in view.

## Typography

### Font Family
`halyard-display` from Adobe Fonts, loaded through a Typekit kit locked to the climatetechcities.com domain. Weights present: 300, 400, 700. Fallback stack in the theme is the generic sans-serif.

### Note on Font Substitutes
Halyard Display is licensed and cannot be loaded on another domain. **Mulish** (Google Fonts, weights 300, 400, 700) is the closest open substitute: a geometric-humanist sans with a similar x-height, open apertures and a genuinely thin 300. Set it with the same `.05em` body tracking and `.02em` heading tracking and the rhythm holds.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| display-xl | 47.5px | 300 | 1.13 | .02em | Section headings (Squarespace h2, multiplier 3.4) |
| display-lg | 37.7px | 300 | 1.17 | .02em | Statement paragraphs, newsletter title (h3, 2.6) |
| heading-md | 27.8px | 300 | 1.21 | .02em | Chapter names, program titles (h4, 1.8) |
| heading-md-bold | 27.8px | 700 | 1.21 | .02em | Emphasised titles on the chapters page |
| card-title | 28.8px | 300 | 1.3 | 0 | Owner's card grid h2 (1.6rem) |
| body-lg | 21.7px | 300 | 1.4 | .05em | Running copy, nav links |
| body-md | 20.5px | 300 | 1.4 | .05em | Secondary paragraphs, text on dark |
| body-card | 19.8px | 300 | 1.6 | .05em | Card descriptions in `#55554e` |
| body-base | 18px | 300 | 1.2 | 0 | `--base-font-size`, inline links |
| label-bold | 21.7px | 700 | 1.4 | .05em | Bold inline labels |
| button | 21.1px | 400 | 1.0 | .02em | Primary outline buttons |
| button-pill | 18px | 300 | 1.0 | 0 | Secondary pills |
| micro | 13.5px | 300 | 1.5 | .05em | Map labels, attribution (down to 9px) |

Squarespace derives the heading sizes from four multipliers on the 18px base, `--heading-1-size-value: 5.9`, `2: 3.4`, `3: 2.6`, `4: 1.8`; the px values above are the computed results at a 1280px viewport. No page in view uses an h1.

### Principles
- Weight 300 is the default for every role including display; 700 is a spice, 400 is for buttons only.
- Type is large: the base is 18px and body copy runs at 21.7px, so line length stays short and the page breathes.
- Positive tracking everywhere, tighter on headings (.02em) than on body (.05em).
- Headings and body share one family; hierarchy is size and space, never a second face.
- No uppercase transforms in the theme; the one uppercase tag is the owner's addition.

## Layout

### Spacing System
Base 18px. Observed steps: 10, 22, 28, 36, 42px, then viewport-relative: header padding `1.8vw`, page padding `5vw`, mobile gutter `6vw`. Content is capped at `maxPageWidth: 1280px`.

### Grid & Container
Single-column editorial sections with an occasional two-column split (image left, copy right) on the home and chapters pages. The owner's chapter grid is a 3-column CSS grid with 28px gaps, collapsing to 2 at 900px and 1 at 580px. Squarespace's fluid engine positions blocks on a 24-column grid behind the scenes.

### Whitespace Philosophy
The site trusts space over decoration. The 121px header, the `6vw` section padding and the 1.4 body leading make each section feel like a page in a printed guide. Sections are separated by a change of ground colour rather than a rule, and the dark olive band is used once per page as a rest.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Ground colour change, cream to paper | Every section boundary |
| 0 | Dark olive band with paper text | One statement or sign-up section per page |
| 0.5 | `0 1px 4px rgba(37,51,26,.06)` on `#fcfcf9` | Owner's card grid only |
| 1 | 2px olive border, no fill | Buttons |

The theme itself declares no shadows. Depth is a matter of which paper you are standing on.

## Shapes

### Radius Scale
| Step | Value | Use |
|---|---|---|
| none | 0px | Buttons, cards, inputs, sections, images: the brand default |
| xs | 4px | One map control |
| pill | 300px | Secondary buttons only |

Images sit square-cornered in their blocks; one hero uses a large organic blob shape (a Squarespace shape block in dark olive) as a decorative mass, not a mask.

## Components

### Navigation
The header is a flat cream band, 121px tall, logo left and five links right in `body-lg` weight 300 with `.05em` tracking. The active link carries a 1px underline in the ink. Below 767px the links collapse into a burger and the logo drops to 50px.

### Bands
`hero-band` and `paper-band` alternate cream and paper; `dark-band` is solid olive with paper text and lavender-bordered buttons. Section padding is viewport-relative.

### Buttons
`button-primary` is an outline: 2px border in true black or olive, transparent fill, 25px by 42px padding, weight 400. `button-primary-filled` (the skip link) inverts to olive fill with white text. `button-on-dark` swaps the border and text to lavender. `button-pill-secondary` is the one rounded element, a 1px olive outline at 300px radius, 52px tall, weight 300.

### Cards & Containers
`card-panel` is a `#fcfcf9` panel, square, 36/32/40px padding, a 54px glyph above a 28.8px weight-300 title and a 19.8px `#55554e` description at 1.6 leading. `feature-tile` is a lavender square holding a small green building glyph.

### Inputs & Forms
`text-input` is white, square, 81px tall with 25/36px padding and a 12% black hairline; the submit beside it follows `button-on-dark`.

### Links
`inline-link` is a 1px `currentColor` underline; the owner's custom CSS animates it in from the centre on hover (`underlineSlideIn`, 0.6s cubic-bezier).

## Do's and Don'ts

### Do
- Set everything in weight 300 by default, including large headings.
- Keep body copy large, 18px base and 20 to 22px running text, with `.05em` tracking.
- Use olive `#25331a` for text, borders and dark surfaces alike; it is the whole neutral scale.
- Alternate cream and paper sections; use one dark olive band per page.
- Keep buttons as 2px outlines with square corners and generous padding.
- Spend lavender and coral in small amounts, on one control or one glyph.

### Don't
- Don't round corners; 0px is the brand, and the pill exists for one secondary button only.
- Don't add drop shadows; a paler panel on cream is how a card lifts.
- Don't introduce a grey text ramp; drop to `#55554e` or an alpha of the ink instead.
- Don't set headings bold; 700 is for a card title or a label, never a section heading.
- Don't fill primary buttons; the outline is the primary.
- Don't use uppercase for headings or nav.

## Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| mobile | up to 767px | Nav collapses to a burger; logo 50px; heading 47.5 to 39.4px; body 21.7 to 18.9px; mobile header padding 6vw; card grid 1 column |
| tablet | 768 to 900px | Card grid 2 columns |
| desktop | 901 to 1280px | Full layout, content capped at 1280px |

### Touch Targets
Buttons are 52 to 111px tall at desktop and stay large on mobile; nav links are 35px tall in the header and full-width in the burger overlay.

### Collapsing Strategy
Two-column sections stack image over copy. Section padding scales with the viewport (`6vw`), so the rhythm compresses proportionally rather than snapping.

## Iteration Guide

1. Reference tokens, never hex. New surfaces pick from cream, paper, panel or olive.
2. A new text role gets weight 300 unless it is a label (700) or a button (400).
3. Keep letter-spacing: `.05em` for anything body-sized, `.02em` for anything heading-sized.
4. A new control is a 2px olive outline, square. If it must be secondary, use the 1px pill.
5. Accents are one-per-section: one lavender control, or one coral glyph, not both.
6. No shadows and no radii are non-negotiable; if a card needs lift, use `#fcfcf9` on cream.
7. Sections change ground colour to separate; never add a rule line.

## Known Gaps

- Halyard Display is an Adobe Fonts kit locked to the site's domain and could not be loaded; Mulish is documented as the substitute.
- Squarespace's CSS is cross-origin, so the harvester could not read `cssRules` in the browser; tokens and multipliers were taken by fetching `site.css` directly instead. The full 1.27MB theme was not read end to end.
- The home hero's dark organic blob is a Squarespace shape block; its path was not extracted.
- Global fade animations run at 0.8s with a 1s delay; hover and scroll timings beyond that were not measured.
- Chapter detail pages and the About and Partners pages were not harvested; the home, chapters and programs pages were.
- Some primary buttons compute to pure black `#000000` for text and border while others use the olive; the theme's safeDarkAccent decides, and no rule for which is which was found.
