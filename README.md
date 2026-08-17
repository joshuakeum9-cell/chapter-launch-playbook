# CTC Chapter Launch Playbook, companion site

Live: **https://joshuakeum9-cell.github.io/chapter-launch-playbook/**

This is the only live site. It replaces two earlier repositories,
`ctc-chapter-launch-workflow` and `ctc-chapter-launch-workflow-v2`, both
retired on 2026-08-17. Their URLs no longer serve.

Pages publishes from `.github/workflows/pages.yml` rather than the classic
branch builder, which removes the Jekyll build step this static site never
needed.

A static companion page for the Climate Tech Cities chapter toolkit: three
packages, nine skills, covering a new chapter lead's launch.

| Package | Kind | Contains |
|---|---|---|
| `ctc-chapter-setup` v1.4.3 | Skill | Eight-question setup interview, writes the settings file and launch plan |
| `ctc-newsletter` v1.18.1 | Plugin, 5 skills | `ctc-newsletter-cycle`, `ctc-source-map`, `ctc-harvest`, `ctc-opportunities`, `ctc-assemble` |
| `ctc-partner-map` v1.3.0 | Plugin, 3 skills | `ctc-city-resources`, `ctc-partner-list`, `ctc-partner-outreach` |

The logo phase runs in ChatGPT rather than Claude, and the page carries the
house prompt and the reference artwork for it.

**The skills do the work, inside the lead's own Claude account.** This page has
no backend, no account connection, and stores nothing.

## Page order

| # | Section | Anchor |
|---|---|---|
| 0 | Hero, with the city field inline | `#top` |
| 1 | Is this you? | `#apply` |
| 2 | Your first two weeks | `#plan` |
| 3 | Your chapter logo, made in ChatGPT | `#logo` |
| 4 | What you install | `#install` |
| 5 | Set up | `#setup` |
| 6 | Build your source list | `#newsletter` |
| 7 | The weekly cycle | `#cycle`, then `#collect` `#cut` `#write` `#sample` `#send` |
| 8 | Refresh your opportunities, monthly | `#monthly` |
| 9 | Partners | `#partners` |
| 10 | Troubleshooting | `#help` |
| 11 | Downloads | `#downloads` |
| 12 | Footer | |

## Design

Mintlify-derived system (DESIGN-mintlify.md): Inter for prose with Geist Mono
for every prompt, white canvas with `#f7f7f7` section bands and hairline
borders, black pill buttons with the mint `#00d4a4` accent reserved for the
primary CTA, checkmarks, active states and the input focus ring, a sky-gradient
hero (`#87a8c8` to `#f5e9d8`) with the city field in a deep-shadow mockup card,
a dark teal gradient band (`#1a3d4a` to `#2d5a4f`) for the newsletter thesis,
the orange `#f55a3c` testimonial card for the one statement, 12px card radius,
8px code blocks in `#1c1c1e` with header-bar copy buttons, and uppercase 11px
micro labels as eyebrows.

## Standing rules

- Nothing fake: every control either works in the browser or hands off a
  copy-ready prompt.
- Static: no backend, no accounts, no cookies, no localStorage, no analytics.
- Nothing invented: every claim about what a skill does traces to that skill's
  own `SKILL.md`. Gaps are marked TODO in the source rather than papered over.
- US English, no em dashes, no time estimates, no day names in the weekly
  cycle. The one allowed framing is "two weeks of setup, then about one
  sitting a week".

## Contents

- `index.html`, the whole site. No framework, no build step
- `downloads/`, the three package zips and the five brand PNGs
- `version.json`, version and date
- `playbook/newsletter-chapter.md`, Chapter 8 draft for the CTC Operational Playbook
- `TODO.md`, open items
