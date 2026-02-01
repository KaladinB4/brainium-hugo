# Brainium AI Agents Documentation

Operational context for AI agents working on Brainium content and development.

---

## Project Structure

**Git Repository Location:** `~/brainium/brainium.ai/` (this is the ONLY git repo)

```
brainium.ai/
├── content/              # PUBLISHED content (tracked by git)
│   ├── research/         # Deep dive articles
│   ├── essays/           # Synthesis + opinion pieces
│   ├── cognitive-tools/  # Actionable frameworks
│   ├── field-notes/      # Experiments and observations
│   ├── guides/           # Implementation guides
│   └── about/            # About pages
├── docs/                 # Documentation (tracked by git)
├── planning/             # Working docs, drafts, deliverables (GITIGNORED)
├── workspace/            # Scratch files, temporary work (GITIGNORED)
└── [hugo config files]   # Hugo site configuration
```

**IMPORTANT:** 
- Only files in `content/` are published to the site
- `planning/` contains work-in-progress and should never be committed
- `workspace/` is for temporary scratch work
- All content creation/editing happens inside `brainium.ai/` — the parent `~/brainium/` directory is NOT a git repo

---

## Project Overview

**Brainium** (brainium.ai) is a research translation site focused on "Research-backed guidance for thinking with AI." It bridges academic research on AI's impact on cognition with practical frameworks for knowledge workers.

**Content Architecture:**
- `/content/research/` — Deep dives on single research papers (1000-2000 words)
- `/content/essays/` — Research synthesis + opinion (1500-2500 words)  
- `/content/cognitive-tools/` — Actionable frameworks (800-1500 words)
- `/content/field-notes/` — Experiments and observations (600-1200 words)

---

## Critical Reference: Content Marketing Funnel

**All content must align with the funnel framework documented in:**
`/docs/content-funnel.md`

### The Formula
```
"LLM messes up X" → "Studies on X" → "Increase your X with Y"
```

### Content Clusters
Every research paper must eventually have a **complete 4-piece cluster**:
1. **Essay (TOFU)** — Problem awareness hook
2. **Research (MOFU)** — Evidence and named framework
3. **Tool (BOFU)** — Implementation solution
4. **Field Note** — Validation and proof

**Current Status:**
- MIT/Cognitive Debt: 75% complete (needs field note expansion)
- Anthropic/Coding: 66% complete (needs TOFU essay)
- Microsoft/Critical Thinking: 100% complete ✅

---

## Agent Responsibilities

### When Writing Content

1. **Check funnel alignment first** — Which stage does this piece serve?
2. **Include cross-links** — Every piece links to at least 2 others
3. **End with CTA** — Where does the reader go next?
4. **Follow length guidelines** — See `/docs/content-standards.md`
5. **Maintain tone** — Curious, not alarmist; practical, not preachy

### When Creating New Content

**Priority order:**
1. Complete existing clusters (field notes for MIT/Anthropic)
2. Build new clusters (Microsoft essay → research → tool)
3. Create velocity layer (regular field notes)

**Quality gates:**
- [ ] Maps to funnel stage
- [ ] Links to 2+ other pieces
- [ ] Has clear next-step CTA
- [ ] Follows `/docs/content-standards.md`

### When Editing Existing Content

- Verify all internal links work
- Check cross-referencing density (min 2 links per article)
- Ensure funnel progression CTAs exist
- Run `hugo server` to verify build

---

## Three Modes Framework (Non-Negotiable)

Every piece must align with one of the Three Modes:

- **Mode 1: Replacement (❌)** — AI thinks, you accept
- **Mode 2: Convenience (⚠️)** — AI helps, you don't challenge
- **Mode 3: Amplification (✅)** — You think first, AI sharpens

**Brainium only publishes Mode 3 content.**

---

## Research Requirements

**Tier 1 (Directly Applicable):**
- Anthropic coding skills study (Jan 2026)
- MIT cognitive debt study (June 2025)
- Microsoft critical thinking survey (Jan 2025)

**Tier 2 (Contextual):**
- Cognitive offloading theory (Wegner, Clark & Chalmers, Sweller)
- GPS and spatial navigation studies
- Calculator use and math skill research

**Not Applicable:**
- "LLMs Can Get Brain Rot" (about model training, not human cognition)
- Technical LLM architecture papers

---

## Technical Stack

- **Framework:** Hugo static site generator
- **Content format:** Markdown with YAML front matter
- **Package manager:** Bun (never npm/npx)
- **Build command:** `hugo --quiet` or `hugo server`
- **Deployment:** GitHub Pages via Actions

---

## Key Files to Know

- `/docs/content-funnel.md` — Funnel framework (THIS IS PRIMARY)
- `/docs/content-standards.md` — Quality and tone requirements
- `/content/research/_article-template.md` — Research article structure
- `/content/cognitive-tools/ai-assisted-learning.md` — Active Prompting Protocol
- `/about/philosophy.md` — Three Modes framework

---

## Delegation Guidelines

When delegating tasks to other agents:

1. **Specify funnel stage** — "Write a TOFU essay on..."
2. **Provide research base** — Link to source material
3. **Define cross-links** — "Link to X and Y"
4. **Set CTA requirement** — "End with link to Z"

**Example:**
> Write a TOFU essay on critical thinking erosion with AI. Base it on the Microsoft survey. Link to the existing research article. End with CTA to the Confidence Paradox framework (to be created).

---

## Session End Checklist

Before ending any session:

- [ ] New content added to appropriate index pages
- [ ] Cross-links verified
- [ ] Hugo build passes
- [ ] HANDOFF.md updated if production changes made
- [ ] Content funnel alignment verified

---

## Related

- `/docs/content-standards.md` — Full editorial standards
- `/docs/content-funnel.md` — Funnel framework details
- `HANDOFF.md` — Production deployment status
