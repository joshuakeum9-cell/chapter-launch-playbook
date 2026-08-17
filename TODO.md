# Open items

## The 17 Aug chapter-setup build is withdrawn, v1.4 is shipping

Resolved 2026-08-17: Joshua reverted to v1.4 after seeing what the 17 Aug build
had lost. The site ships `ctc-chapter-setup-v1.4.zip` again, restored from git
history byte for byte, and question two no longer asks for a reply-to email.

The 17 Aug build is not in this repository. It is in Joshua's Downloads as
`ctc-chapter-setup.skill` if it is ever wanted. What follows is the record of
why it was withdrawn.

## Why: the 17 Aug build was rebuilt from the v1.2 base, losing v1.4 work

Timestamps confirm the supplied `.skill` is the newest build (SKILL.md dated
2026-08-17 14:13, against v1.4's 2026-08-13 01:53). But its
`references/interview.md` and `scripts/chapter_data_TEMPLATE.json` are
byte-identical to v1.2, so two v1.4 improvements are gone:

1. **The context-file wording.** v1.4 said "Create a project in Claude, then add
   Chapter_Settings_<City>.docx to that project as a context file. Project
   settings, then add files. Not attached to a chat", and carried a failure-mode
   entry calling "saying upload instead of add to your project as a context
   file" the most consequential wording failure in the skill. The 17 Aug build
   reverts to plain "Upload the settings file to your Claude project."

   With v1.4 restored, the site and the skill agree on this wording again.

2. **Question 2 asked for a reply-to email again.** v1.4 had removed it,
   reasoning that Substack sets the sending address and no skill in the toolkit
   uses it. The 17 Aug build re-added the question and the `replyEmail` template
   field. Both are gone again with the revert.

**If the 17 Aug build is ever rebased onto v1.4**, the two things worth keeping
from it are the description saying eight questions rather than seven, and the
house rule that the source list is refreshed once every three months.

## The v1.4 description still says seven questions

v1.4's SKILL.md description says "seven plain questions" while its own
`references/interview.md` runs eight, the eighth optional. The page shows
eight, which is what the interview actually does. The 17 Aug build had fixed
the description; that fix is not in v1.4.

## Resolved: the opportunities cadence

The page briefly said opportunities was quarterly. It is not. `ctc-opportunities`
runs monthly, and `ctc-chapter-setup` v1.4.3 now states in the plan it generates
that re-running `ctc-source-map` is the quarterly job and that nothing else in
the toolkit runs on a quarterly cadence. The Refresh your opportunities section
was removed and Build your source list carries the quarterly callout instead.

The page no longer documents `ctc-opportunities` anywhere. It is still installed
as part of the `ctc-newsletter` plugin, and `ctc-assemble` reads its queue when
one is in the project. Worth deciding whether the monthly job deserves a mention
somewhere, or whether leaving it to the skills is right.

## Superseded: the opportunities cadence conflict

The page was changed to quarterly on request. The 17 Aug chapter-setup build
then added a house rule that says the opposite in as many words:

> **The source list is refreshed once every three months.** Quarterly, never
> monthly. [...] Two other cadences in this skill are separate and unchanged:
> `ctc-opportunities` runs monthly, and reporting is monthly.

So the quarterly rule was written about the **source list**, which the page
already described as quarterly. `ctc-opportunities` is monthly in both its own
SKILL.md and now this one. Decide whether the page reverts to monthly.

## Two claims in the brief contradict the skill files, resolved toward the files

1. The brief says the launch plan is two weeks. `ctc-chapter-setup` v1.4
   describes "a 90 day launch plan with their real dates in it". The page
   avoids claiming either number: it says "your launch plan, with real dates
   in it". The "Your first two weeks" section describes the site's onboarding
   sequence, not the plan document. Worth aligning the skill and the brief.
2. Resolved 2026-08-17: the brief and the skill's own description say seven
   questions, but the interview file runs eight, the eighth optional. Joshua
   confirmed the page should show all eight, so it does, with the eighth
   marked skippable. The skill description still says seven; worth aligning.

## The opportunities cadence on the page is quarterly, the skill is monthly

Joshua asked for "every three months" on 2026-08-17, so the section, the plan
table, and the prompt now say quarterly. `ctc-opportunities` is built monthly
throughout: it says "Runs once a month", its delivery line is "replacing last
month's", said every run, and one of its two trigger phrases is "run the
monthly opportunities". The page uses its other documented trigger,
"refresh the opportunities", so the copy button still works.

Two consequences worth deciding on:

1. The 15-opportunity floor was sized for a monthly sweep. Over a quarter more
   entries reach their deadline and move to the Closed sheet, so the block
   thins out in months two and three.
2. The skill will keep telling the lead to come back next month, which
   contradicts the page.

Fix by changing the cadence inside `ctc-opportunities` itself, or revert the
page to monthly.

## No written guide

The brief's Downloads section lists "the written guide" and the no-paid-account
troubleshooting entry leans on it. No current guide was supplied, and the old
one documented the superseded workflow, so nothing links to a guide. Two places
would take the link when one exists: the Downloads card, and that FAQ entry.

## No release dates

The zips and plugin manifests carry versions but no dates, so the Downloads
section shows versions only.

## One design-system gap

The Mintlify design file calls for atmospheric hero illustrations (clouds on
the sky gradient). No illustration assets were supplied, so the hero uses the
gradient alone.

## The logo section keeps one time estimate

"Getting the confirmation takes a day." The brief says change nothing in the
logo section, and separately says no time estimates anywhere. Keep-as-is won.

## v1 repository

Pages is unpublished and the source branch is None, so nothing serves, but the
repository itself is not archived: the archive confirmation has to be typed by
the account owner. Settings, Danger Zone, Archive this repository, if wanted.
