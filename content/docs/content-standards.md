---
title: "Content Standards"
description: "Documentation for editors and contributors. Every article must pass these gates before publication."
date: 2026-01-31
type: "docs"
---

# Brainium Content Standards

---

## Philosophy Alignment Check

Before writing, ensure your article answers **yes** to all three questions:

1. **Does this increase agency, or reduce it?**
   - Does the reader gain decision-making ability, or just receive instructions?
   - Are they learning *how* to think, or just *what* to do?

2. **Does this train reasoning, not just output?**
   - Will the reader be able to solve similar problems without AI later?
   - Does the framework develop transferable cognitive skills?

3. **Would someone using this still improve without AI later?**
   - Is the skill being developed intrinsic to the human, or dependent on the tool?
   - Can the reader continue learning if the AI tool becomes unavailable?

If any answer is no, the content does not belong on Brainium.

---

## Research Requirements

### Before Writing

- [ ] Full-text PDF of primary research paper(s) reviewed
- [ ] At least 2 corroborating or contextual papers identified
- [ ] Clear thesis statement (1 sentence)
- [ ] Named framework concept (2-4 words)
- [ ] 3+ specific tactics with concrete examples
- [ ] Effect sizes and confidence intervals noted

### During Writing

- [ ] Direct quotes from papers (with page/section context)
- [ ] Effect sizes reported accurately
- [ ] Limitations acknowledged explicitly
- [ ] No claims beyond what evidence supports
- [ ] Tone: curious, not alarmist; practical, not preachy

### Quality Gates

- [ ] Can a reader implement the framework in 30 minutes?
- [ ] Does every claim trace back to research?
- [ ] Would someone using this retain skills without AI?
- [ ] Is the tone appropriate for broad appeal?

---

## Content Categories

### ESSAYS: Opinion + Research Synthesis

- **Hook**: Personal observation or industry trend
- **Mix multiple papers** into coherent narrative
- **End with open questions**
- **Length**: 1500-2500 words
- **Example**: *[Cognitive Offloading: From Calculators to AI](/essays/cognitive-offloading-research/)*

### RESEARCH: Deep Dive on Single Paper

- **Hook**: Specific surprising finding
- **Full methodology section**
- **Critical limitations analysis**
- **Practical extraction** (even if limited)
- **Length**: 1000-2000 words
- **Example**: *Anthropic's Coding Skills Study*

### FRAMEWORKS: Actionable Systems

- **Hook**: Common failure mode
- **Minimal research citation** (linked in footnotes)
- **Step-by-step implementation**
- **Anti-patterns included**
- **Length**: 800-1500 words
- **Example**: *Active Prompting Protocol*

### FIELD NOTES: Experiments & Observations

- **Hook**: What you tried and why
- **Methods** (what you actually did)
- **Results** (honest, including failures)
- **Lessons learned**
- **Length**: 600-1200 words

---

## Writing Tone Guidelines

### DO

- Lead with findings, not judgments
- Use "the study found" not "research proves"
- Acknowledge uncertainty: "suggests," "indicates," "correlates with"
- Frame as opportunity: "Those who learn to... gain advantage"
- Specific over general: "debugging asynchronous code" not "coding"

### DON'T

- Moralize or preach
- Use fear-based language ("crisis," "epidemic")
- Overclaim ("destroys skills," "makes us stupid")
- Ignore limitations
- Prescribe without evidence

---

## Research Paper Tiers

### Tier 1 (Directly Applicable)

- Anthropic coding skills study (Jan 2026)
- MIT cognitive debt study (June 2025)
- Microsoft critical thinking survey (Jan 2025)

### Tier 2 (Contextual)

- LLM impact on essay writing (multiple studies)
- AI assistance and work engagement studies
- Skill acquisition with intelligent tutoring systems
- Cognitive offloading theory (Wegner, Clark & Chalmers, Sweller)
- GPS and spatial navigation studies
- Calculator use and math skill research

### NOT APPLICABLE

- "LLMs Can Get Brain Rot" (about model training, not human cognition)
- Technical LLM architecture papers
- General AI productivity studies without learning component

---

## Output Format

All articles must be valid Hugo markdown with:

- Front matter (title, date, description, tags)
- Subheadings for scannability
- Code blocks for specific tactics
- Bullet lists for frameworks
- Links to papers (arXiv, DOI, or project pages)
- Reading time: 5-10 minutes

---

## Thesis Statement Quality

### STRONG

- "Anthropic's RCT shows developers using AI assistance scored 17% lower on mastery tests—debugging skills degraded most significantly."
- "Three distinct interaction patterns predict learning outcomes; the highest-performing mode involved zero code generation requests."

### WEAK (too broad)

- "AI is making us worse programmers."
- "We need to be careful with AI tools."

---

## Cross-Referencing Standards

Every research article should:

- Link to related Brainium articles in "Related Work" section
- Connect findings to the Three Modes framework
- Reference foundational cognitive theory when applicable
- Update the `content/research/_index.md` with new entries

---

## Review Checklist

Before marking any article complete:

- [ ] Run site build: `hugo server` or equivalent
- [ ] Check all internal links work
- [ ] Verify front matter is complete
- [ ] Confirm reading time is 5-10 minutes
- [ ] Proofread for tone consistency
- [ ] Ensure all research citations are accurate
- [ ] Add to appropriate index pages

---

## Related

- [Core Philosophy](/about/philosophy/)
- [Content Templates](/docs/content-templates/) — Article structure templates
