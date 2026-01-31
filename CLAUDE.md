# Brainium Project Context

Instructions for Claude Code when working on Brainium content and development.

---

## Project Identity

**Brainium** (brainium.ai) translates research on AI's impact on cognition into practical frameworks for knowledge workers.

**Core Mission:** Help people use AI as cognitive leverage without losing thinking skills.

**Tagline:** "We're not anti-AI. We're pro-intelligence."

---

## Content Architecture

Brainium uses a **4-tier content taxonomy**:

| Tier | Format | Purpose | Length |
|------|--------|---------|--------|
| TOFU | Essays | Problem awareness | 1500-2500 words |
| MOFU | Research | Evidence + frameworks | 1000-2000 words |
| BOFU | Cognitive Tools | Actionable solutions | 800-1500 words |
| Retention | Field Notes | Proof + validation | 600-1200 words |

**The Funnel:** `/docs/content-funnel.md`

This is the **primary strategic document**. All content must map to a funnel stage and link to other stages.

**The Formula:** `"LLM messes up X" → "Studies on X" → "Increase your X with Y"`

---

## Critical Framework: Three Modes

Every piece must align with Brainium's Three Modes:

- **Mode 1: Replacement (❌)** — AI thinks, you accept
- **Mode 2: Convenience (⚠️)** — AI helps, you don't challenge  
- **Mode 3: Amplification (✅)** — You think first, AI sharpens

**Brainium only publishes Mode 3 content.**

This is enforced via the Philosophy Alignment Check (see `/docs/content-standards.md`):
1. Does this increase agency?
2. Does this train reasoning?
3. Would someone using this improve without AI later?

---

## Content Clusters (Priority System)

Every research paper requires a **complete 4-piece cluster**:

```
Essay (TOFU) → Research (MOFU) → Tool (BOFU) → Field Note
```

**Current Status:**
- MIT/Cognitive Debt: ✅ Essay, ✅ Research, ⚠️ Tool, ✅ Field Note (NEW)
- Anthropic/Coding: ⚠️ Essay, ✅ Research, ✅ Tool, ✅ Field Note (NEW)
- Microsoft/Critical Thinking: ✅ Essay, ✅ Research, ✅ Tool, ✅ Field Note — 100% Complete ✅

**Priority:** Complete Anthropic cluster (expand TOFU essay coverage).

---

## Research Base

**Tier 1 Papers (Anchor Content):**
- Anthropic coding study (Jan 2026) — 17% skill reduction
- MIT cognitive debt study (June 2025) — EEG evidence
- Microsoft critical thinking survey (Jan 2025) — Confidence Paradox

**Tier 2 (Contextual):**
- Cognitive offloading theory (Wegner, Clark & Chalmers, Sweller)
- GPS spatial navigation studies
- Calculator and skill research

---

## Writing Tone (Non-Negotiable)

**DO:**
- Lead with findings, not judgments
- Use "the study found" not "research proves"
- Acknowledge uncertainty: "suggests," "indicates," "correlates"
- Frame as opportunity: "Those who learn to... gain advantage"

**DON'T:**
- Moralize or preach
- Use fear-based language ("crisis," "epidemic")
- Overclaim ("destroys skills," "makes us stupid")
- Ignore limitations

---

## Technical Details

- **Site:** Hugo static site generator
- **Content:** Markdown + YAML front matter
- **Build:** `hugo server` (dev) or `hugo --quiet` (production)
- **Package Manager:** Bun (never npm/npx)
- **Deploy:** GitHub Pages via Actions

---

## Cross-Linking Requirements

**Every piece must answer: Where does the reader go next?**

| From | To | CTA Pattern |
|------|-----|-------------|
| Essay | Research | "The [Institution] study measured exactly this →" |
| Research | Tool | "The solution: [Named Framework]. See it here →" |
| Tool | Field Notes | "I tested this for 30 days. Here's what happened →" |

**Minimum density:** 2 internal links per article.

---

## Key Reference Files

- `/docs/content-funnel.md` — **START HERE for content strategy**
- `/docs/content-standards.md` — Quality gates and tone
- `/content/research/_article-template.md` — Research structure
- `/about/philosophy.md` — Three Modes framework
- `/AGENTS.md` — Agent delegation guidelines

---

## New Content Workflow

1. **Identify funnel stage** — What job does this piece serve?
2. **Check cluster status** — Does the research base have all 4 pieces?
3. **Review existing content** — Read related pieces for cross-linking
4. **Write with CTAs** — Every piece ends with "where next"
5. **Verify build** — `hugo server` must pass
6. **Update indices** — Add to section `_index.md` files

---

## Delegation Guidelines

When asking Claude to create content, always specify:

1. **Funnel stage** — "Write a TOFU essay..."
2. **Research base** — "Based on the Microsoft survey..."
3. **Required cross-links** — "Link to X and Y"
4. **CTA target** — "End with link to Z"

**Example Request:**
> Write a TOFU essay titled "Why You Trust AI More Than Yourself" based on the Microsoft critical thinking survey. Link to the existing research article and the Anthropic coding study (cross-domain parallel). End with a CTA to the upcoming Confidence Calibration Protocol tool.

---

## Quality Check Before Commit

- [ ] Content maps to funnel stage
- [ ] Links to 2+ other pieces
- [ ] Has explicit next-step CTA
- [ ] Tone: curious, not alarmist
- [ ] Effect sizes reported (if research)
- [ ] Framework named and actionable (if tool)
- [ ] Hugo build passes
- [ ] HANDOFF.md updated (if production)

---

## Session End Protocol

1. Verify all new content builds
2. Update HANDOFF.md with changes
3. Cross-link audit: click every link
4. Content funnel check: does every piece have a job?

---

## Related

- `/docs/content-funnel.md` — Strategic framework
- `/docs/content-standards.md` — Editorial standards
- `/AGENTS.md` — Agent-specific guidance
- `HANDOFF.md` — Production status
