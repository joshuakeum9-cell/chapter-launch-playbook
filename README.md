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
was cut in v13; its definition of done lives on the Two weeks page.

| Page | Path | Holds |
|---|---|---|
| Home | `/` | The numbered map, the counts, one statement |
| 01 Two weeks | `/two-weeks/` | The plan table and what done looks like |
| 02 Logo | `/logo/` | The ChatGPT prompt, the five reference files, the sign-off |
| 03 Install | `/install/` | The three packages, the extension, the verify prompt |
| 04 Set up | `/set-up/` | The nine questions, the two documents |
| 05 Newsletter | `/newsletter/` | Source list (`#sources`), opportunities queue (`#opportunities`) |
| 06 Weekly cycle | `/weekly-cycle/` | Collect, cut, write, send (`#collect` `#cut` `#write` `#sample` `#send`) |
| Partners | `/partners/` | City resources, partner map, outreach. Optional |
| Help | `/help/` | Troubleshooting |
| Downloads | `/downloads/` | Packages and the nine samples |

Every anchor from the old single page (`/#setup`, `/#cycle`, and so on) is
redirected by the home page to the matching new page; `/#apply` and the
retired `/apply/` address land on Two weeks.

## Design

The visual language of climatetechcities.com, extracted from that site's own
stylesheets into `DESIGN-climate-tech-cities.md` and applied to the playbook's
docs layout. One olive ink `#25331a` for text, borders and dark surfaces; cream
`#f5f4e9` ground with paper `#fefefd` and panel `#fcfcf9` surfaces; lavender
`#e2bdff` for the current step and the copy buttons; coral `#ef653a` for
Claude's work, darkened to `#c24d1c` under paper text. Mulish at 300, 400 and
700 stands in for Halyard Display, which is licensed to the CTC domain: 18px
base, weight 300 for prose and headings, `.05em` tracking on ledes and `.02em`
on headings. Square corners everywhere (every `--r-*` token is `0`) and no
shadows (every `--shadow-*` token is `none`); depth is a change of ground
colour. Buttons are 2px olive outlines that fill on hover. Geist Mono is kept
for prompts and filenames only. Layout: a 64px top bar, a 236px sidebar with
the numbered steps, the current one on a lavender tint with an olive rule,
content in a 780px column.

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
