---
title: "Agent Delegation Framework"
description: "Workflow patterns for using AI agents to scale content production."
date: 2026-01-31
type: "docs"
---

# Agent Delegation Framework

---

## Research Agent

**Tasks:**
- Extract quotes from academic papers
- Summarize study findings
- Gather related research

**Prompt:**
```
Summarize findings, list limitations, avoid claims beyond evidence.
```

**Quality Gate:** All effect sizes verified against original papers

---

## Drafting Agent

**Tasks:**
- Expand outlines into prose
- Create multiple tone versions
- Draft content sections

**Prompt:**
```
Write clearly, avoid hype, preserve nuance, cite sources.
```

**Quality Gate:** Tone check—curious, not alarmist

---

## Workflow Agent

**Tasks:**
- Convert principles into checklists
- Create templates and frameworks
- Structure implementation steps

**Prompt:**
```
Turn each principle into actionable steps.
```

**Quality Gate:** 30-minute implementation maximum

---

## Editor Agent

**Tasks:**
- Simplify language
- Reduce sentence length
- Make content audio-friendly

**Prompt:**
```
Rewrite for spoken clarity.
```

**Quality Gate:** 12th grade reading level or below

---

## SEO Agent

**Tasks:**
- Identify keywords
- Optimize headings
- Write meta descriptions

**Prompt:**
```
Optimize without clickbait.
```

**Quality Gate:** No sensationalist headlines

---

## Final Rule for All Agents

Never generate full answers without requiring user input first.

This mirrors the Brainium product philosophy: **AI should provoke thinking, not replace it.**

---

## Agent Handoff Checklist

When delegating tasks to agents:

- [ ] Specify funnel stage — "Write a TOFU essay on..."
- [ ] Provide research base — Link to source material
- [ ] Define cross-links — "Link to X and Y"
- [ ] Set CTA requirement — "End with link to Z"
- [ ] Include quality gate — Specific metric or standard

**Example:**
> Write a TOFU essay on critical thinking erosion with AI. Base it on the Microsoft survey. Link to the existing research article. End with CTA to the Confidence Paradox framework. Tone check: curious, not alarmist.

---

## Related

- [Content Funnel](/docs/content-funnel/) — Editorial framework
- [Content Standards](/docs/content-standards/) — Quality requirements
