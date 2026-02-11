---
title: "Content Templates"
description: "Standardized templates for consistent content creation across all funnel stages."
date: 2026-01-31
type: "docs"
---

# Brainium Content Templates

---

## Research Article Template

Use for: Deep dives on single research papers (MOFU content)
Target length: 1000-2000 words

```markdown
---
title: "[Institution]'s [Topic] Study: [Specific Finding]"
description: "[One sentence with effect size and sample size]"
date: YYYY-MM-DD
tags: ["research", "tag1", "tag2", "institution"]
research_papers:
  - "Citation (Year). Title. Source."
---

## Problem Statement

**Trigger:** [Current trend that motivated study]

**Stakes:** [Why this matters]

**Gap:** [What wasn't known]

**Thesis:** [One sentence summarizing finding]

---

## Research Core

### Paper Summary

| Attribute | Value |
|-----------|-------|
| **Authors** | Names |
| **Institution** | Name |
| **Date** | Date |
| **Method** | Methodology |
| **N** | Sample size |

### Key Findings

- [Bullet with effect size]
- [Bullet with p-value if relevant]

### Critical Analysis

**Strengths:**
- [List]

**Limitations:**
- [List]

**Generalizability:**
- [Context]

### Related Work

- [Links to other Brainium articles]

---

## Practical Framework: [Named Framework]

[Extract 2-4 word framework name]

[Explain the mechanism]

---

## Tactics: [Number] [Actionable tactics with format below]

### Tactic 1: [Name]

**When:** [Context]

**How:** [Steps]

**Why:** [Mechanism]

**Evidence:** [Link to study finding]

### Tactic 2: [Name]
...

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails | Alternative |
|-------------|--------------|-------------|
| [Pattern] | [Reason] | [Better approach] |

---

## Takeaways

**One Sentence:** [Summary]

**Immediate Action:** [Concrete next step]

**Further Reading:** [Links]

**Open Questions:** [What's unknown]

---

## Research Quality Check

- [ ] Full-text reviewed
- [ ] Effect sizes accurate
- [ ] Limitations stated
- [ ] Claims limited to evidence
```

---

## Essay Template

Use for: Problem awareness, research synthesis (TOFU content)
Target length: 1500-2000 words

```markdown
---
title: "[Problem] is [Getting Worse/Changing] with AI"
description: "[Personal stake + research reference]"
date: YYYY-MM-DD
tags: ["essays", "topic", "research-synthesis"]
---

## The Moment of [Doubt/Realization/Change]

[Personal hook, 100-150 words]

---

## What [Institution] Researchers Discovered

[Research summary in plain language, 200-250 words]

[Reference study within first 200 words per funnel requirements]

---

## [Key Concept/Pattern]

[Analysis connecting to broader context]

---

## Practical Implications: [Number] Principles

[Numbered list of principles]

---

## The Deeper Question

[Philosophical/forward-looking section]

---

## A Personal Note

[First-person reflection, 100 words]

---

## Further Reading

[Links to Research and Tools]

---

## Takeaways

**One sentence:** [Summary]

**Immediate action:** [Concrete step]

**The deeper point:** [Philosophical takeaway]
```

---

## Framework/Tool Template

Use for: Actionable systems and protocols (BOFU content)
Target length: 800-1500 words

```markdown
---
title: "[Name] [Protocol/Method/Guide]"
description: "[Time investment] [Outcome] using [research base]"
date: YYYY-MM-DD
tags: ["frameworks", "topic", "actionable"]
---

## The Problem

[Specific failure mode, 100 words]

---

## Core Principle

**[One sentence principle]**

---

## The [Number]-Phase Structure

### Phase 1: [Name]

**Duration:** [Time]

**Steps:**
1. [Action]
2. [Action]

**Success metric:** [How to know you're done]

### Phase 2: [Name]
...

### Phase 3: [Name]
...

---

## Why This Matters

[Reference research findings]

---

## Tactical [Prompts/Checklists/Templates]

### For [Scenario 1]

❌ **Anti-pattern:** [What not to do]

✅ **Protocol:** [Steps or prompt]

### For [Scenario 2]
...

---

## Session Structure

[Optional: Table showing time breakdown]

| Time | Activity | Mode |
|------|----------|------|
| 0-X min | [Activity] | AI: [Role] |

---

## Indicators You're Doing It Right

- [List of positive signals]

## Indicators You're Drifting

- [List of warning signs]

---

## Integration with Other [Tools/Frameworks]

- [Cross-links]

---

## Further Reading

- [Research links]
- [Related tools]

---

## Version

**Source:** [Research citation]

**Tested:** [Contexts]

**Feedback:** [Contact]
```

---

## Field Note Template

Use for: Experiments, observations, validation (Retention content)
Target length: 600-1000 words

```markdown
---
title: "[Timeframe] [Framework] Test: [Outcome]"
description: "[Honest summary including failures]"
date: YYYY-MM-DD
tags: ["field-notes", "framework", "experiment"]
---

## The Experiment

[What you tried and why, 100 words]

---

## Week 1: [Phase/Theme]

[What happened, including specific metrics or observations]

---

## Week 2: [Phase/Theme]

...

## Week 3: [Phase/Theme]

...

---

## What Worked (And What Didn't)

**What worked:**
- [List]

**What failed:**
- [List]

**What surprised me:**
- [List]

**Honest limitation:** [n=1, sample size, scope limitations]

---

## The Real Test

[Discussion of sustainability, long-term implications]

---

## Next Experiment

[CTA to next framework or follow-up]

---

## Quick-Start for Your Own Test

[Practical steps for readers to replicate]

---

**Related:**
- [Framework tested]
- [Research foundation]
- [Previous related field note]
- [Essay that motivated experiment]

---

**Have you tested a Brainium framework?** [Share your results]
```

---

## Template Usage Guidelines

### Always Include:

1. **Front matter** with all required fields
2. **Clear funnel stage indication** (in tags or metadata)
3. **Minimum 2 internal links** to related content
4. **Clear CTA** for next step in funnel
5. **Takeaways section** with one-sentence summary

### Tone Consistency:

- **Curious, not alarmist**: Use "the research suggests" not "AI destroys"
- **Practical, not preachy**: Offer tactics, not lectures
- **Honest about limitations**: Acknowledge sample sizes, n=1 experiments, uncertainty
- **Specific over general**: "Debugging async code" not "programming"

### Cross-Link Requirements:

| From | To |
|------|-----|
| Essay (TOFU) | Research (MOFU) |
| Research (MOFU) | Tool (BOFU) |
| Tool (BOFU) | Field Note (Retention) |
| Field Note | Next topic cluster |

---

## Quick Reference: Content by Funnel Stage

| Stage | Format | Length | Hook | Must Include |
|-------|--------|--------|------|--------------|
| TOFU | Essay | 1500-2000 words | Personal observation | Research reference in first 200 words |
| MOFU | Research | 1000-2000 words | Surprising finding | Named framework, methodology section |
| BOFU | Tool | 800-1500 words | Common failure mode | Anti-patterns, 30-min implementable |
| Retention | Field Note | 600-1000 words | What you tried | Honest results including failures |

---

## Related

- [Content Standards](/docs/content-standards/) — Quality and tone requirements
- [Content Funnel](/docs/content-funnel/) — Strategic framework
- [Research Article Structure](/docs/content-standards/#research-articles) — MOFU format guidelines
