---
title: "Article Template: Research-to-Practice Pipeline"
description: "Pseudocode structure and deliverables for Brainium research articles."
draft: true
---

## Article Structure (Pseudocode)

```
ARTICLE := {
  metadata: HEADER,
  hook: PROBLEM_STATEMENT,
  research_core: RESEARCH_SECTION,
  translation: PRACTICAL_FRAMEWORK,
  application: FIELD_NOTES,
  conclusion: TAKEAWAYS
}

HEADER := {
  title: "<Specific, research-backed claim>",
  date: YYYY-MM-DD,
  description: "<One-line summary for index pages>",
  tags: ["research", "<domain>", "<skill>"],
  research_papers: [CITATION_LIST]
}

PROBLEM_STATEMENT := {
  trigger: "<Observable phenomenon readers notice>",
  stakes: "<Why this matters to their work/learning>",
  gap: "<What existing advice gets wrong>",
  thesis: "<What the research actually shows>"
}

RESEARCH_SECTION := {
  paper_summary: {
    authors: STRING,
    institution: STRING,
    date: DATE,
    methodology: "<RCT|Observational|Meta-analysis|Review>",
    n_size: INTEGER,
    key_finding: "<Effect size + direction>",
    confidence: "<p-value or confidence interval>"
  },
  
  critical_analysis: {
    strengths: [STRING],
    limitations: [STRING],
    generalizability: "<Who does/doesn't this apply to>"
  },
  
  related_work: [
    {paper: CITATION, relationship: "<confirms|extends|contradicts>"}
  ]
}

PRACTICAL_FRAMEWORK := {
  named_concept: "<2-4 word memorable name>",
  
  principles: [
    {name: STRING, description: STRING, evidence: STRING}
  ],
  
  tactics: [
    {
      name: STRING,
      when: "<Situation to use>",
      how: "<Specific steps>",
      why: "<Cognitive mechanism>",
      example: "<Concrete scenario>"
    }
  ],
  
  anti_patterns: [
    {pattern: STRING, why_it_fails: STRING, alternative: STRING}
  ]
}

FIELD_NOTES := {
  personal_experiment: {
    context: "<What you tried>",
    duration: STRING,
    setup: "<How you controlled variables>",
    results: "<What actually happened>",
    deviation_from_framework: "<Where reality diverged>"
  }
}

TAKEAWAYS := {
  one_sentence_summary: STRING,
  immediate_action: "<What to try today>",
  further_reading: [LINK],
  open_questions: [STRING]
}
```

## Deliverables Checklist

**Before Writing:**
- [ ] Full-text PDF of primary research paper(s)
- [ ] At least 2 corroborating or contextual papers
- [ ] Clear thesis statement (1 sentence)
- [ ] Named framework concept
- [ ] 3+ specific tactics with examples

**During Writing:**
- [ ] Direct quotes from papers (with context)
- [ ] Effect sizes reported accurately
- [ ] Limitations acknowledged explicitly
- [ ] No claims beyond what evidence supports
- [ ] Tone: curious, not alarmist; practical, not preachy

**Quality Gates:**
- [ ] Can a reader implement the framework in 30 minutes?
- [ ] Does every claim trace back to research?
- [ ] Would someone using this retain skills without AI?
- [ ] Is the tone appropriate for broad appeal?

## Content Categories

**ESSAYS**: Opinion + research synthesis
- Hook: Personal observation or industry trend
- Mix multiple papers into coherent narrative
- End with open questions
- Length: 1500-2500 words

**RESEARCH**: Deep dive on single paper
- Hook: Specific surprising finding
- Full methodology section
- Critical limitations analysis
- Practical extraction (even if limited)
- Length: 1000-2000 words

**FRAMEWORKS**: Actionable systems
- Hook: Common failure mode
- Minimal research citation (linked in footnotes)
- Step-by-step implementation
- Anti-patterns included
- Length: 800-1500 words

**FIELD NOTES**: Experiments & observations
- Hook: What you tried and why
- Methods (what you actually did)
- Results (honest, including failures)
- Lessons learned
- Length: 600-1200 words

## Research Paper Priorities (Human-AI Cognition)

**Tier 1 (Directly applicable):**
- Anthropic coding skills study (Jan 2026)
- MIT cognitive debt study (June 2025)
- Microsoft critical thinking survey (Jan 2025)

**Tier 2 (Contextual):**
- LLM impact on essay writing (multiple studies)
- AI assistance and work engagement studies
- Skill acquisition with intelligent tutoring systems

**NOT APPLICABLE:**
- "LLMs Can Get Brain Rot" (about model training, not human cognition)
- Technical LLM architecture papers
- General AI productivity studies without learning component

## Example Thesis Statements

STRONG:
- "Anthropic's RCT shows developers using AI assistance scored 17% lower on mastery tests—debugging skills degraded most significantly."
- "Three distinct interaction patterns predict learning outcomes; the highest-performing mode involved zero code generation requests."

WEAK (too broad):
- "AI is making us worse programmers."
- "We need to be careful with AI tools."

## Writing Tone Guidelines

**DO:**
- Lead with findings, not judgments
- Use "the study found" not "research proves"
- Acknowledge uncertainty: "suggests," "indicates," "correlates with"
- Frame as opportunity: "Those who learn to... gain advantage"
- Specific over general: "debugging asynchronous code" not "coding"

**DON'T:**
- Moralize or preach
- Use fear-based language ("crisis," "epidemic")
- Overclaim ("destroys skills," "makes us stupid")
- Ignore limitations
- Prescribe without evidence

## Output Format

All articles should be valid Hugo markdown with:
- Front matter (title, date, description, tags)
- Subheadings for scannability
- Code blocks for specific tactics
- Bullet lists for frameworks
- Links to papers (arXiv, DOI, or project pages)
- Reading time: 5-10 minutes
