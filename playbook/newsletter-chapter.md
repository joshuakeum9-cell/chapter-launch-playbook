# Chapter 8 — City Newsletters

> Draft for the CTC Operational Playbook. Part A covers launching a newsletter in
> a new chapter city; Part B covers the weekly production cycle. Validated
> against the New York newsletter before submission.

The weekly newsletter is CTC's flagship programme. This chapter exists so that
producing an issue is cheap enough that a busy month doesn't kill it, and so a
new chapter can run one without a founder's time.

---

## Part A — Launching a City Newsletter

### A.1 What you need before starting

- A chapter lead (or interim editor) who owns the newsletter — budget ~2–3 hours/week
- A Substack publication for the chapter
- The three CTC skills from the shared Drive folder (take the latest version number): `ctc-source-map`, `ctc-harvest`, `ctc-assemble`

### A.2 Build the source registry (`ctc-source-map`)

Run `ctc-source-map` with your city name. Run it **once at launch, refresh quarterly**.

It researches nine source categories — Luma first (highest yield), then
Eventbrite organisers, universities, incubators, government and utilities,
professional groups, adjacent newsletters, climate orgs, and arts/civic venues —
and outputs a registry CSV: `name, url, platform, method, tier, category,
cadence, last_event, confidence, notes`.

Every source passes five verification gates: the page loads; it has been active
within 90 days; past events show a repeating pattern; it's a real organisation
with genuinely climate-relevant events; the URL is stable. Syndicated commercial
training spam — the most common junk on ticketing platforms — is rejected
aggressively. CTC's own properties are never registered.

**The registry sets your ceiling.** Issue size is an output, not a target: a
mature issue carries 40–55 listings, and thin issues mean a weak registry, not a
reason to pad. If harvest keeps coming back light, the fix is here, not downstream.

### A.3 Pilot before you announce

Run the full weekly cycle (Part B) once with no public send. Expect fetch
friction — this run is where you learn which sources need the browser tier and
which need paste. Fix registry problems, run once more, then announce the first
issue in chapter channels.

---

## Part B — The Weekly Cycle

```
harvest (skill) → events .xlsx → YOU cut rows in Excel → assemble (skill)
→ Substack markdown → YOU write the 3 editorial blocks → send
```

Collection and judgment are separate stages by design: harvest sweeps wide with
no quality filtering, and the human triage pass is where issue size is decided.

### B.1 Harvest (`ctc-harvest`)

Run weekly with the registry and the date window: next 7 days = `this_week`,
days 8–56 = `upcoming`. Output is an `.xlsx` (sheet `Events`) with the 14
standard columns plus `Block`:

`Event Name` · `Date` · `Start Time (TZ)` · `End Time (TZ)` · `Registration Link` · `Event Type` · `Access` · `Location` · `City / Neighborhood` · `Google Maps` · `Format` · `Host Organization(s)` · `Description` · `Categories`

Controlled vocabularies — do not invent values:

- **Event Type:** `In-person` / `Hybrid` / `Online`
- **Access:** `Free` / `Free — register to view address` / `Ticketed (Paid)` / `Ticketed (Paid) — register to view address`
- **Categories (22):** Adaptation, AI & Data, Arts & Culture, Biodiversity & Nature, Buildings, Circular Economy & Waste Management, Cities, Climate Tech & Startups, Communications, Corporate Sustainability, Energy, Environmental Justice, Finance, Food & Agriculture, Fun for Kids, Get Outside, Health, Mobility & Logistics, Philanthropy, Policy, Social, Water

`Google Maps` is derived from the Location, never looked up. Fetching is
three-tier: plain fetch → browser (when a page blocks or renders via JavaScript)
→ paste fallback. **CAPTCHA is a hard stop** — never solved, never bypassed, no
credentials ever entered. The skill dedupes on date + fuzzy name and surfaces
collisions rather than resolving them silently; it leaves cells blank rather
than guessing and never fabricates an event, time, or venue.

### B.2 Triage — you, in Excel

The judgment stage, never automated. Working the harvest sheet:

1. Resolve flagged collisions — keep the row with the best link
2. Cut off-topic rows, low-quality listings, and anything that slipped past the spam gates
3. Fill or cut rows with blanks the skill left (missing date or link = cut unless worth chasing)
4. Choose your picks — the 2–4 events the picks block will feature

What survives is the issue. Save the edited `.xlsx`.

### B.3 Assemble (`ctc-assemble`)

Run on the edited sheet. Output is Substack-ready markdown, nine blocks in
publication order — **note the sign-off sits mid-document, not at the end**:

| # | Block | Who |
|---|---|---|
| 1 | Title | skill |
| 2 | Subtitle | skill |
| 3 | Opening note | **scaffold — you write** |
| 4 | Picks of the week | **scaffold — you write** |
| 5 | Housekeeping + sign-off | fixed convention |
| 6 | Opportunities | **scaffold — you write** |
| 7 | This Week's Events | skill |
| 8 | Upcoming Events | skill |
| 9 | Events in Detail (optional) → standing footer | skill |

### B.4 The three editorial blocks — never generated

House position: the models can't write, and everything they produce reads like a
computer. A 3,000-word issue contains roughly 80 words of human prose, and those
80 words are why anyone subscribes. The skill drafts scaffolds so nobody faces a
blank page — it does not write the voice.

The tool cannot know, and must mark rather than invent: the weather, local news,
how the last event went, why the chapter is excited, internal scheduling decisions.
Those markers are your writing prompts.

Voice conventions (measured from 190 NYC archive issues):

- Greeting: `Hi all,` or `Hi friends,`
- Sign-off: `Til next week!` then `[Names], and the Climate Tech Cities team` (variant: `As always,`)
- Picks: bold day → verb → place or reason → linked title with emoji; multiple events joined with `or`, never `and`
- Day words: `Today`, `Tomorrow`, weekday names, `Next Tuesday` for just past the window
- Sentence case throughout; contractions; no marketing register
- Acknowledge quiet weeks plainly rather than inflating them

Emoji: propose semantically from title and category, override freely, fall back
to 🌱 or 🌍. There is no lookup table — the archive uses 251 distinct emoji.

### B.5 Checks before send

There is no separate QA tool: link checks, duplicate detection, past-date
filtering, and block-mismatch checks live inside harvest and assemble. Before
sending, do one human read top-to-bottom in the Substack preview — you are
checking voice and picks, not links.

### B.6 Send, and cadence

Weekly is the standard. Write it as the target.

**If you miss a week — and chapters do — resume without ceremony.** No apology
paragraph, no explanation owed. The house answer to a gap is the next issue:
New York went dark for seven months in 2025 and restarted with "Hi friends,"
and carried on. A missed week is a scheduling fact, not a crisis; a dead
newsletter is the only failure mode that matters.

---

## Skill versions and distribution

Skills live as `.skill` files in the versioned Google Drive folder with a
changelog alongside; updates are announced in Slack. The version number is in
the filename — always take the latest, and never edit a skill locally without
versioning it back, or chapters drift.

Excel is the interchange format on purpose: either skill can be rebuilt without
touching the other, and the week the tooling breaks, a human can take over
mid-pipeline with nothing but a spreadsheet.
