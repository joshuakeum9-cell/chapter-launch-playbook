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

Ten static pages. The six steps are numbered in the order a lead works
through them and carry a previous and next pair. Partners and the two
reference pages are not numbered: the newsletter does not depend on the
partner map. The former step 01, Is this you?, was recruitment framing and
was cut in v13; its definition of done lives on the Two-week overview page.

| Page | Path | Holds |
|---|---|---|
| Home | `/` | The numbered map, the counts, one statement |
| Overview | `/two-weeks/` | The plan table and what done looks like |
| 01 Logo | `/logo/` | The ChatGPT prompt, the five reference files, the sign-off |
| 02 Install | `/install/` | The three packages, the extension, the verify prompt |
| 03 Set up | `/set-up/` | The nine questions, the two documents |
| 04 Newsletter | `/newsletter/` | Source list (`#sources`), opportunities queue (`#opportunities`) |
| 05 Weekly cycle | `/weekly-cycle/` | Collect, cut, write, send (`#collect` `#cut` `#write` `#sample` `#send`) |
| Partners | `/partners/` | City resources, partner map, outreach. Optional |
| Help | `/help/` | Troubleshooting |
| Downloads | `/downloads/` | Packages and the nine samples |

Every anchor from the old single page (`/#setup`, `/#cycle`, and so on) is
redirected by the home page to the matching new page; `/#apply` and the
retired `/apply/` address land on the Two-week overview.

## Design

The visual language of climatetechcities.com, extracted element by element
from that site's own stylesheets into `DESIGN-climate-tech-cities.md` and
applied to the playbook's docs layout. Content on paper `#fefefd`, cream
`#f5f4e9` for bands, callouts, the city field and the footer. Headings pure
black, as in CTC's white-bold sections; prose in the olive ink `#25331a`.
Coral `#ef653a` marks Claude's work and the install screenshot annotations,
darkened to `#c24d1c` under paper text; lavender `#e2bdff` for the copy
buttons on the dark prompt bands.

Type is Catamaran, self-hosted from `assets/fonts/` under the SIL Open Font
License, standing in for Halyard Display, which is licensed to the CTC domain.
It was chosen by measuring 60 Google fonts against Halyard on CTC's own page;
its vertical metrics are overridden to Halyard's so text sits the same way.
Its figures are old-style, so the digits 0-9 come from Gantari (also OFL,
subset to ten glyphs), whose lining digits are the closest to Halyard's.
Weights: prose 400, page titles 500, section heads 600, step titles, card
titles and labels 700. Letter-spacing `.03em` on prose, `.04em` on ledes,
`.015em` on headings. No middle dots and no em dashes anywhere.

Corners come from a scale rather than CTC's literal square, which read
harsh: circles for markers (CTC's own icon vocabulary), 12px for cards and
blocks, 8px for buttons and inputs, 4px for badges, and CTC's 1px pill for
the secondary Preview buttons. Primary buttons are a 2px outline that fills
on hover. The sidebar, city field included, is identical on every page so it
never shifts. The only shadow is the one the site owner's chapter grid uses on its
cards, `0 1px 4px rgba(37,51,26,.06)`. The current step is bold and
underlined, as CTC marks its active nav item. The help accordion uses CTC's
dividers with a left chevron. Geist Mono is kept for prompts and filenames.

## Standing rules

- Nothing fake: every control either works in the browser or hands off a
  copy-ready prompt.
- Static: no backend, no accounts, no cookies, no localStorage, no analytics.
  The city typed in the sidebar travels in the URL between pages and is never
  written to the browser.
- Nothing invented: every claim about what a skill does traces to that skill's
  own `SKILL.md`. Gaps are marked TODO in the source rather than papered over.
- Required means required. A page only joins the numbered spine when a lead
  cannot send the newsletter without it. Partners is optional and is labelled
  that way in the sidebar, on the home page, in the plan, and on its own page.
- Only what helps someone run the process. Recruitment framing, slogans and
  illustrative asides come out; a line stays if a lead acts on it or checks
  against it.
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
  ten
- `DESIGN-climate-tech-cities.md`, the design system the skin follows,
  extracted from climatetechcities.com on 2026-09-26
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
