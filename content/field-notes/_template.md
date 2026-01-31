---
title: "Field Note Template: Experiment Documentation"
description: "Structure for documenting real-world experiments with Brainium frameworks."
draft: true
---

## Purpose

Field notes bridge the gap between theory and practice. They document honest experiments with Brainium frameworks—including failures, deviations, and unexpected results.

**Key Principle:** Field notes are not testimonials. They're controlled experiments with methodology, results, and analysis.

---

## Template Structure

```markdown
---
title: "[What I tried] for [Duration]"
description: "[One-line summary of experiment and key finding]"
date: YYYY-MM-DD
tags: ["field-notes", "<framework-name>", "<domain>", "experiment"]
related_framework: "[Link to cognitive tool]"
related_research: "[Link to research article]"
---

## Hypothesis

Based on [framework name] and [research finding], I predicted that [specific outcome] would occur when [intervention].

---

## Method

### Context
- **What I was trying to improve:** [Specific skill or task]
- **Baseline measurement:** [How I measured before]
- **Timeframe:** [Duration of experiment]
- **Frequency:** [How often I applied the framework]

### Intervention
What I actually did (be specific):
- [Step 1 with concrete example]
- [Step 2 with concrete example]
- [Step 3 with concrete example]

### Controls
What I kept constant:
- [Control variable 1]
- [Control variable 2]

---

## Results

### Quantitative Measures
- **Before:** [Baseline measurement]
- **After:** [Post-experiment measurement]
- **Change:** [Delta with direction]

### Qualitative Observations
- [Specific observation 1 with context]
- [Specific observation 2 with context]
- [Specific observation 3 with context]

---

## Analysis

### What Worked
[Specific elements that produced results and why]

### What Didn't
[Elements that failed or underperformed—be honest]

### Deviations from Framework
Where reality required adjustment:
- [Deviation 1 and why]
- [Deviation 2 and why]

### Unexpected Findings
[Surprises that emerged during the experiment]

---

## Lessons Learned

1. [Key insight about the framework]
2. [Key insight about implementation]
3. [Key insight about context/conditions]

---

## Next Experiment

Based on these results, I'm testing:
- **Framework:** [Next framework to try]
- **Hypothesis:** [What I expect to happen]
- **Duration:** [Planned timeframe]

---

## Related

- [Framework I tested]
- [Research that informed this]
- [Previous/next field note in series]
```

---

## Quality Standards

### Required Elements:
- [ ] Specific, measurable hypothesis
- [ ] Concrete methodology (what you actually did)
- [ ] Honest results (including failures)
- [ ] Quantitative data where possible
- [ ] Links to related framework and research
- [ ] Suggested next experiment

### Tone Guidelines:
- **DO:** Report results factually, acknowledge limitations, share deviations
- **DON'T:** Hype results, omit failures, generalize from single experiment

### Length:
600-1000 words (focused and specific)

---

## Example Opening

**Weak:**
> "I tried the Active Prompting Protocol and it really helped me code better."

**Strong:**
> "I applied the Active Prompting Protocol to learning Rust's async patterns for 2 weeks. Baseline: needed AI assistance for 80% of compiler errors. After: resolved 60% independently. Here's what worked and what didn't."

---

## Publishing Checklist

- [ ] Experiment completed (minimum 1 week)
- [ ] Results documented honestly
- [ ] Framework links added
- [ ] Research links added
- [ ] Next experiment suggested
- [ ] Hugo build passes
