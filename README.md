# CTC Chapter Launch Playbook, companion site

Live: **https://joshuakeum9-cell.github.io/chapter-launch-playbook/**

This is the only live site. It replaces two earlier repositories,
`ctc-chapter-launch-workflow` and `ctc-chapter-launch-workflow-v2`, both
retired on 2026-08-17. Their URLs no longer serve.

Pages publishes from `.github/workflows/pages.yml` rather than the classic
branch builder, which removes the Jekyll build step this static site never
needed.

A static companion site for the Climate Tech Cities chapter toolkit: three
packages, nine skills, covering a new chapter lead's launch.

| Package | Kind | Contains |
|---|---|---|
| `ctc-chapter-setup` v1.5.0 | Skill | Nine-question setup interview, writes the settings file and launch plan |
| `ctc-newsletter` v2.0.0 | Plugin, 5 skills | `ctc-newsletter-cycle`, `ctc-source-map`, `ctc-harvest`, `ctc-opportunities`, `ctc-assemble` |
| `ctc-partner-map` v2.0.0 | Plugin, 3 skills | `ctc-city-resources`, `ctc-partner-list`, `ctc-partner-outreach` |

The logo phase runs in ChatGPT rather than Claude, and the site carries the
house prompt and the reference artwork for it.

**The skills do the work, inside the lead's own Claude account.** This site has
no backend, no account connection, and stores nothing.

## Pages

Eleven static pages. The eight steps are numbered in the order a lead works
through them and carry a previous and next pair; the two reference pages do
not.

| Page | Path | Holds |
|---|---|---|
| Home | `/` | The numbered map, the counts, one statement |
| 01 Apply | `/apply/` | Is this you |
| 02 Two weeks | `/two-weeks/` | The plan table |
| 03 Logo | `/logo/` | The ChatGPT prompt, the five reference files, the sign-off |
| 04 Install | `/install/` | The three packages, the extension, the verify prompt |
| 05 Set up | `/set-up/` | The nine questions, the two documents |
| 06 Newsletter | `/newsletter/` | Source list (`#sources`), opportunities queue (`#opportunities`) |
| 07 Weekly cycle | `/weekly-cycle/` | Collect, cut, write, send (`#collect` `#cut` `#write` `#sample` `#send`) |
| 08 Partners | `/partners/` | City resources, partner map, outreach |
| Help | `/help/` | Troubleshooting |
| Downloads | `/downloads/` | Packages and the nine samples |

Every anchor from the old single page (`/#setup`, `/#cycle`, and so on) is
redirected by the home page to the matching new page.

## Design

Mintlify-derived system (DESIGN-mintlify.md), laid out as documentation: a
56px top bar, a 232px sidebar carrying the numbered steps with the current
one marked in the mint tint, content in a 760px column. Inter for prose with
Geist Mono for every prompt and filename, white canvas with `#f7f7f7`
surfaces and hairline borders, black pill buttons with the mint `#00d4a4`
accent reserved for the primary CTA, checkmarks, the current step and the
input focus ring, the sky gradient only on the home hero, the orange
`#f55a3c` card for the one statement, 12px card radius, 8px code blocks in
`#1c1c1e` with header-bar copy buttons, uppercase 11px eyebrows. Orange marks
Claude's work, white marks the lead's, the tint marks both.

## Standing rules

- Nothing fake: every control either works in the browser or hands off a
  copy-ready prompt.
- Static: no backend, no accounts, no cookies, no localStorage, no analytics.
  The city typed in the sidebar travels in the URL between pages and is never
  written to the browser.
- Nothing invented: every claim about what a skill does traces to that skill's
  own `SKILL.md`. Gaps are marked TODO in the source rather than papered over.
- Every step that produces a file shows a What you get back card built from
  the real sample in `downloads/samples/`, with Preview and Download beside it.
  Preview renders the whole file, page by page, from the same document the
  Download button hands over.
- Less: say it once. Verified facts stay; restatement, reassurance and hedging
  do not. Longer reasoning goes in a collapsed details block, not in the way.
- US English, no em dashes, no time estimates, no day names in the weekly
  cycle. The one allowed framing is "two weeks of setup, then about one
  sitting a week".

## Contents

- `index.html` and one `index.html` per page directory, listed above. No
  framework, no build step: the shell (top bar, sidebar, footer, viewer) is
  written into each file, so a change to the navigation is a change to all
  eleven
- `assets/site.css`, `assets/site.js`, shared by every page. Each page sets
  `window.ROOT` (`""` at the root, `"../"` one level down) before loading the
  script so asset paths resolve
- `downloads/guide/`, six screenshots of claude.ai used on the Install and
  Set up pages, cropped to the panel and marked with what to click. Taken
  2026-09-11; Claude's settings screens move, so re-take these when a step
  stops matching what a lead sees
- `downloads/`, the three package zips, the five brand PNGs, and `samples/`
  with the nine sample files plus `samples/previews/`, one render per page of
  each sample (`<name>-p1.png`, `-p2.png`, and so on) and one screenshot of
  that file open in Excel or Word (`<name>-open.png`)
- `version.json`, version and date
- `playbook/newsletter-chapter.md`, Chapter 8 draft for the CTC Operational Playbook
- `TODO.md`, open items
