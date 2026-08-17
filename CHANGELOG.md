# Changelog

All toolkit releases. The site reads `version.json`; this file is the human-readable record.

## 8.0.2 - 2026-08-17

The Substack formatting troubleshooting entry now walks through the actual
steps: open the HTML file, click at the top, drag to the bottom, copy, paste,
with the keyboard shortcuts, rather than describing the method in one sentence.

## 8.0.1 - 2026-08-17

Moved to a clean repository, `chapter-launch-playbook`. Content is unchanged
and was verified byte for byte against the repository it replaced. The two
earlier repositories, `ctc-chapter-launch-workflow` and its `-v2` successor,
are retired.

Commit history was not carried across. This file is the record of what changed
and why.

## 8.0.0 - 2026-08-17

The logo comes first, the opportunities section is gone, and the source list
section is cut down.

**The logo section moved above install and set up.** The two week table says
week one is the logo, and the page now reads in that order instead of opening
with two sections of Claude setup. The logo runs in ChatGPT and needs nothing
from the toolkit, so there is nothing to install first.

**Refresh your opportunities is removed.** The quarterly job is the source
list, not the opportunities queue, which runs monthly. `ctc-chapter-setup`
v1.4.3 settles it: the plan it generates now carries an Every quarter section
saying to re-run `ctc-source-map` every three months and that nothing else in
the toolkit runs on a quarterly cadence. Build your source list carries a
callout saying the same, and the two week table lists only the source list
under Every three months.

**The source list section is shorter.** Two dense paragraphs became one line
about what Claude searches, the five checks as a scannable list rather than a
run-on sentence, and two short lines about reading the list before approving
it. The detail about the registry recording each row's origin was cut; it did
not change what the lead does.

**`ctc-chapter-setup` v1.4.3** replaces v1.4. The consent regime field and its
GDPR branch are gone from the skill, the data file, and the plan notes.

## 7.4.0 - 2026-08-17

Revert `ctc-chapter-setup` to v1.4, and make the send step specific.

The 17 Aug build is withdrawn at Joshua's request. v1.4 is restored from git
history, byte for byte, so the context-file wording and the decision not to ask
for a reply-to email are both back. Question two on the page drops the email
again. The Eight questions heading stays: v1.4's interview has eight questions,
which is why the page said eight before the 17 Aug build existed.

The send step now names the HTML file rather than offering a choice, and says
to select it by clicking and dragging rather than using a copy button, because
that is what actually carries the formatting into Substack. The assemble
section and the formatting troubleshooting entry say the same.

## 7.3.0 - 2026-08-17

Regroup the quarterly work and cut two blocks.

Refresh your opportunities now sits directly after Build your source list, so
the two jobs that run once every three months are read together rather than
separated by the whole weekly cycle. Band backgrounds were reflowed so no two
identical bands touch after the move.

Removed: the "Three things you can ask for later" block from Set up, and the
combined toolkit download. The three packages are downloaded individually.

The logo section now says plainly that it is the one step that runs in ChatGPT
rather than Claude, in the eyebrow, in a callout under the heading, and in the
two week table.

## 7.2.0 - 2026-08-17

Ship the 17 Aug `ctc-chapter-setup` build and follow its interview.

Question two asks for a reply-to email again, so the page asks for it. The
package is repackaged from the supplied `.skill` into a zip matching the other
two, and it carries no version, so Downloads shows its build date.

The page keeps the context-file wording for the settings file even though this
build reverted to plain "upload", because the site brief mandates that wording
and a file attached to a chat does not carry to the next one. Recorded in
TODO.md along with the reply-email reversal, both traceable to the build having
been made from the v1.2 base rather than v1.4.

## 7.1.0 - 2026-08-17

Re-skin from the Climate Tech Cities system to the Mintlify system, at Joshua's
request, hours after 7.0.0. Content unchanged.

Inter and Geist Mono, white canvas with soft grey section bands and hairline
borders, black pill buttons with the mint accent held back for the primary CTA
and active states, a sky-gradient hero carrying the city field in a
deep-shadow card, a dark teal gradient band for the newsletter thesis, the
orange statement card, and every prompt restyled as a dark code block with the
copy button in its header bar. The scallops, blob, and Jost are gone.

## 7.0.0 - 2026-08-17

Full rebuild on the Climate Tech Cities design system, and a content update to
the three-package toolkit. The v1 site was taken dark; this repository is now
the only live site.

**Design.** Replaced the Starbucks-derived system with the organisation's own:
18px root, Jost 300 throughout, cream and warm-white bands separated by scallop
dividers, one deep green, lavender only on dark bands, square wipe-fill
buttons, the blob, left-aligned asymmetric layout, sentence case everywhere.

**Toolkit.** Three packages now: ctc-chapter-setup v1.4 (skill),
ctc-newsletter v1.18.1 (plugin, five skills, adding ctc-newsletter-cycle and
ctc-opportunities), ctc-partner-map v1.3.0 (plugin, three skills, adding
ctc-partner-outreach). The event kit is gone from the toolkit; event logistics
stay manual on purpose.

**Content.** New sections: Every month (the opportunities queue) and a
three-stage Partners section ending in drafted outreach. The source list moved
out of setup into its own section fronted by the one orchestrator prompt. All
day names and time estimates removed from the weekly cycle; the cycle is four
steps, harvest, cut, assemble, send. Setup now documents the seven-question
interview. Install lists three zips plus the Chrome extension. The sample
issue is carried over untouched.

## 6.0.0 - 2026-08-10 (v2 repository)

Restructure and expansion. The site documented two phases and three loose
skills. The toolkit is now four packages and eight skills across five phases,
and the manual configuration step has been replaced by an interview.

**New sections.** Is this you, a three-card honest account of the commitment
with the apply link. Your first 90 days, a six-row phase strip that doubles as
the page's table of contents. Day one set up, built around `ctc-chapter-setup`,
its eight questions, its two documents, and the three follow-up phrases.
Partners, built from the two `ctc-partner-map` skills. Your first event, built
from `ctc-event-kit`. Downloads, closing the page.

**Reordered** into the sequence a lead actually works: set up, logo, newsletter
setup, the weekly loop, partners, first event. The logo section moved from part
one to week one and is otherwise unchanged.

**Newsletter split in two.** One-time setup, which now covers Substack and the
source map, is separated from the weekly loop. A first-time reader used to meet
the weekly rhythm before they had a source list.

**Install replaced.** Four packages as zips rather than three `.skill` files. A
line explaining the difference between a skill and a plugin. The hand-filled
settings template and its upload step are gone, because the setup skill does
that job now.

**The city field moved into the hero** and its orphaned grey band was deleted.
The primary call to action is now the application form.

**Removed:** the hand-filled settings template, the old written guide, the
three `.skill` files, and the stale combined zip. A fresh combined zip carries
the four current packages.

Sample issue, one-rule band, weekly diagram, and troubleshooting accordion are
carried over unchanged apart from four new troubleshooting entries and a
settings-file rewording.

## 1.0.0 - 2026-07-31

- First release of the three skills: `ctc-source-map`, `ctc-harvest`, `ctc-assemble`
- START-HERE setup and weekly guide; city config template
- Companion site: setup section, per-city source registry, harvest and assemble
  prompt generators, event-sheet triage with PICK/DUPE/CUT, browser-side sheet
  checks, Substack send guide, per-city issue log. All state lives in the
  browser (localStorage); no backend, no tracking.

## 1.1.0 - 2026-07-31

- Site redesign for clarity: hero workflow diagram (Claude lane vs you lane), weekly rhythm cards, plainer copy, Cohere-inspired visual system (white canvas, deep green, coral accents, pill buttons, mono labels)
- No em or en dashes anywhere in site copy
- Skills unchanged from 1.0.0

## 1.2.0 - 2026-07-31

- Import a backup: load a previously exported .json file to restore sources, sheets, drafts and the issue log, e.g. after clearing browser data or moving to a new computer

## 2.0.0 - 2026-07-31

- Restructured around the four weekdays: Thursday Collect, Friday Cut, Monday Write (assemble folded in), Tuesday Send (checks folded in). Source registry moved into Set up; Log is a thin bar
- Setup is expanded on first visit and collapses to a one-line summary once a city is saved
- New install verification step: ask Claude which newsletter skills it has
- Browser triage table removed; cutting happens in the spreadsheet, guidance kept as prose
- localStorage reduced to city, week, sources, and log. Writing blocks replaced with copy-the-scaffold buttons
- Troubleshooting section added
- The page is now the current guide; START-HERE.md is the offline reference
- Accessibility and mobile pass: focus rings, aria-expanded on collapsibles, text alternative for the diagram, shape plus colour in the legend, reduced-motion support

## 2.1.0 - 2026-08-01

- Re-skinned to the Climate Tech Cities design system: one olive green ink (#25331a) for text, borders and fills; cream (#f5f4e9) paper canvas alternating with warm white in full-width bands; Jost Light 300 with positive letter-spacing as the substitute for Halyard Display; square outlined buttons with no radius; no shadows anywhere
- Accents rationed to one home each: lavender on the one-rule green band, pale blue behind the workflow diagram
- Structure, copy and behaviour unchanged from 2.0.0

## 3.0.0 - 2026-08-01

- The page is now setup, workflow and prompts only. Removed the source registry table, the issue log, backup export and import, and the workspace, along with everything they stored. The page saves nothing and clears anything earlier versions left in the browser
- Removed the three writing scaffolds: the assemble skill already produces them, with the gaps marked, inside the document it hands back
- Setup is open by default and no longer collapses
- One city field fills all three prompts. Nothing is stored

## 4.0.0 - 2026-08-01

- Skills updated to the latest account versions (American spelling pass across all three) and repackaged
- Prompts now include the skill reference, e.g. /ctc-harvest Harvest this week's events for Boston
- START-HERE is now a PDF that opens in a new tab to read on screen instead of downloading
- city-config-template is now .docx, and setup states it must be added to the Claude project's knowledge as context
- Added a sample finished issue with shading showing which blocks Claude builds and which the lead writes
- Removed the changelog section, the zip line from the download list, and the third legend item
- Rebuilt the UI on the Starbucks-inspired design system: warm cream canvas, four-tier green, pill buttons, 12px cards, layered soft shadows, sticky nav

## 4.1.0 - 2026-08-01

- ctc-assemble updated from the account: it now asks three questions before building (which events are the picks, any opportunities this week, anything the sheet cannot know) and waits for the answer. Picks come from the lead's answer rather than the skill's own ranking, and the opportunities block is omitted rather than padded when there are none
- Monday section documents the three questions so leads can have answers ready
- Friday flag guidance updated to four to six picks, and notes that marking PICK makes Monday's first question a one-line answer
- ctc-harvest and ctc-source-map unchanged; repackaged alongside for consistency

## 4.2.0 - 2026-08-01

- Sample issue now shows three categories instead of two. Picks and opportunities are marked as collaborative: the lead chooses the events and adds the asides while the skill writes the framing around them, and the lead supplies each opportunity while the skill drafts the description
- The remaining human blocks state what the skill does contribute, so no block overstates either side

## 4.3.0 - 2026-08-03

- ctc-source-map updated from the account: a new Step 0 asks whether the lead already has calendar links before any searching, and presents all three routes in full rather than a yes or no question. Paste and research on top, paste only, or research from scratch
- User-supplied links are candidates, not registered sources: they go through the same five verification gates, and a failure names the gate rather than dropping the link quietly
- The registry gains an origin column recording whether each row came from the user or from research, which makes the quarterly refresh easier to judge
- Setup step 6 documents the three options, the checks applying to your own links, and the origin column
- ctc-harvest and ctc-assemble unchanged; repackaged alongside

## 4.3.1 - 2026-08-03

- City config template now says to create a new Claude project and upload the file to it as a context file, with context file bolded. It previously said project file, which is the wrong term and did not say which project
- Site aligned to the same wording in setup step 4, the download list, and troubleshooting
- Both the document and the site warn against attaching it to a single chat, where it is forgotten on the next conversation

## 5.0.0 - 2026-08-04

- The site is now a chapter launch playbook rather than a newsletter toolkit. Two parts: branding first, then the newsletter
- New branding section: the house logo prompt with the city filled in, reference logos to attach, guidance on picking among the ten concepts, and an explicit gate that nothing ships until the CTC founders sign it off
- Reference images are the real Chicago and London chapter logos, served as full lockups and icon-only crops
- The city field moved above both parts and now fills four prompts instead of three
- Nav, page title, hero and footer renamed. The newsletter half is unchanged

## 5.1.0 - 2026-08-04

- Brand reference logos are now cropped tight to the artwork with no white margin, using the alpha channel on the transparent sources
- Icon crops are located by the icon's own palette and a contiguous column walk, instead of assuming a square at the left edge, which had produced off-centre crops
- Added the two canonical marks from the logo generator skill: the Climate Tech Cities parent mark and Climate Tech New York. Four chapters shown, six files to download
- Chicago and London are high resolution and carry the proportions; Cities and New York exist only at small size and render at native size rather than upscaling

## 5.2.0 - 2026-08-04

- Fixed the brand reference resolution. The previous set was palette quantised to 32 colours with dithering, which speckles anti-aliased edges on flat vector marks and reads as low resolution. Quantisation removed
- Icons now come from the Climate Tech Cities CDN, the files the live site serves: Chicago and London at 2500px, New York at 964px, replacing a 231px New York
- Added a denoise pass that snaps compression noise onto the mark's real colours, restoring flat colour fields and cutting the icons from 922KB to 36KB
- Set is now three chapters with no repeats: Chicago and London lockups, plus Chicago, London and New York icons. The Cities parent mark is dropped
- New York is icon only, because no New York lockup is published

## 5.3.0 - 2026-08-04

- Removed the assigned days from the weekly run. Harvest on Thursday, cut on Friday, write on Monday and send on Tuesday are now simply steps one to four, run back to back or spread out as the lead prefers. Only the send day is worth keeping fixed, and that is their choice
- Section ids renamed from days to collect, cut, write and send. Overview cards, headings, lane diagram and prose all updated
- Cut the time estimate to match reality: per step now 10, 15, 20 and 10 minutes instead of 15, 30, 45 and 15, and the headline reads thirty minutes to an hour rather than two hours a week
- Day names inside the sample issue are untouched, since those are event dates rather than instructions

## 5.4.0 - 2026-08-05

- Put the days back. Thursday Collect, Friday Cut, Monday Assemble and write, Tuesday Send return to the overview cards, the section headings and the lane diagram. A named day is easier to hold onto than "step two", and it makes the handoffs concrete: you cut yesterday's sheet, Claude assembles it on Monday
- The days now read as the recommended rhythm rather than a rule. Leads are told to shift them if their week runs differently, but to keep the order and keep the send day the same every week
- The shorter time estimate from 5.3.0 stays: 10, 15, 20 and 10 minutes per sitting, thirty minutes to an hour for the whole run
- Section ids stay as collect, cut, write and send, so links shared since 5.3.0 keep working
