---
title: "Field Notes: 2 Weeks of Confidence Calibration"
description: "I tested the Confidence Calibration Protocol on my daily AI use. Here's the data on confidence drift, what triggered critical thinking, and the verification habit that stuck."
date: 2026-01-31
tags: ["field-notes", "confidence-calibration", "experiments", "microsoft-study"]
related_framework: "/frameworks/confidence-calibration-protocol"
related_research: "/research/microsoft-critical-thinking-2025"
reading_time: "5 minutes"
---

## Hypothesis

Based on Microsoft's critical thinking survey, I predicted that:
1. Tracking confidence ratings would reveal a drift toward over-reliance on AI
2. The Confidence Check (rating AI-confidence vs self-confidence) would trigger verification when the gap exceeded 2 points
3. Task-type matching would prevent over-investment in low-stakes verification

The study found that 40% of AI-assisted tasks involved no self-reported critical thinking—primarily when workers had high confidence in AI and low confidence in themselves. I wanted to see if making this gap visible would change my behavior.

---

## Method

### Context
- **What I was trying to improve:** Maintain critical thinking while using AI for coding and writing tasks
- **Baseline measurement:** Pre-experiment self-assessment showed I verified "important" tasks but had no systematic approach
- **Timeframe:** 2 weeks (10 working days)
- **Frequency:** Applied the protocol to every AI-assisted task

### Intervention

**Daily Confidence Log**: For each AI-assisted task, I recorded:
- Task description and type (Advice/Creation/Information/Transformation)
- AI-confidence rating (1-5)
- Self-confidence rating (1-5)
- Gap calculation
- Action taken (Accepted/Verified/Challenged)

**Task-Type Matching**: Different verification intensity based on risk:
- Advice tasks (code review feedback, strategic recommendations): 5-minute minimum verification
- Creation tasks (drafts, code generation): Structural review
- Information tasks (summaries, research): Spot-checking
- Transformation tasks (formatting, editing): Minimal verification

**Weekly Confidence Audit**: Friday afternoon review:
- Three tasks from the week (one high/medium/low stakes each)
- Verification assessment
- Confidence trend tracking
- One adjustment for next week

### Controls
- Same AI tools throughout (ChatGPT for general tasks, Claude for coding)
- Similar mix of task types each week
- No other new productivity systems introduced during the experiment

---

## Results

### Quantitative Measures

| Metric | Week 1 | Week 2 | Total |
|--------|--------|--------|-------|
| Tasks logged | 22 | 25 | **47** |
| Avg AI-confidence | 4.3/5 | 4.1/5 | **4.2/5** |
| Avg self-confidence | 2.6/5 | 3.0/5 | **2.8/5** |
| Average gap | 1.7 | 1.1 | **1.4** |
| Tasks with gap ≥2 (triggered verification) | 11 (50%) | 7 (28%) | **18 (38%)** |
| Weekly audit time | 18 min | 12 min | **15 min avg** |

**Change in gap over time**: -0.6 points (narrowing trend)

### Qualitative Observations

**Week 1: The Friction Phase**
- Logging felt intrusive and slowed me down
- Forgot to rate confidence about 30% of the time, had to reconstruct from memory
- Noticed I was accepting code suggestions without understanding them—especially in areas where I felt less competent
- The 5-minute verification for advice tasks felt excessive for "simple" recommendations

**Week 2: The Pattern Recognition Phase**
- Logging became automatic—started doing it in real-time rather than batching
- Began noticing confidence gaps *before* accepting AI output (pre-checking)
- Surprising finding: My highest confidence gaps appeared on creative writing tasks I enjoyed, not on difficult coding tasks I feared
- The weekly audit revealed my self-confidence dropped on Fridays (decision fatigue pattern)

**Critical Finding**: On the 18 tasks where the gap triggered verification, I caught **3 significant errors** I would have otherwise missed:
- One code suggestion that would have introduced a race condition
- One strategic recommendation based on outdated market data
- One summary that conflated two different research findings

---

## Analysis

### What Worked

**The Confidence Check was the MVP.**
Forced rating made gaps visible in real-time. By Week 2, I was calibrating automatically—"This AI output looks great, but I only rate my understanding at 2/5, so let me check..."

**Task-Type Matching prevented verification fatigue.**
Knowing that Transformation tasks (formatting, minor edits) required minimal scrutiny freed up mental energy for high-stakes Advice tasks. Without this distinction, I would have abandoned the protocol.

**The Weekly Audit revealed invisible patterns.**
I wouldn't have noticed the Friday confidence drop or the creative-writing gaps from daily logging alone. The retrospective pattern detection was more valuable than the real-time tracking.

### What Didn't

**The Explanation Requirement was too heavy for routine work.**
Asking AI to explain reasoning for every output added 2-3 minutes per task. For routine transformations, this was overkill. I reduced it to only high-stakes Advice and Creation tasks.

**Daily logging had a high initial friction cost.**
First week: 3-4 minutes per task. Second week: 1-2 minutes. The habit formation curve was steeper than expected.

**Forced verification felt wasteful on obvious outputs.**
Some AI suggestions were genuinely simple ("fix this typo"). The protocol doesn't need to apply to trivial tasks.

### Deviations from Framework

**Streamlined the protocol after Week 1:**
- Reduced Explanation Requirement to Advice and high-stakes Creation only
- Created a "quick check" version for routine tasks (1-minute: "Does this make sense?" rather than full verification)
- Skipped logging for obvious transformations (formatting, copy-editing)
- Focused on tracking gaps ≥2 points, not every task

**These deviations improved adherence without reducing effectiveness.**

### Unexpected Findings

**Confidence gaps were highest on enjoyable tasks.**
I assumed difficult coding tasks would show the biggest gaps. Instead, creative writing—where AI suggestions felt "inspired"—showed the highest AI-confidence (4.8 avg) relative to my understanding. The eloquence created false confidence.

**The audit was more valuable than daily tracking.**
Daily logs captured data; weekly audits captured insight. If doing this again, I would log fewer tasks but audit more deeply.

**Self-confidence improved over the two weeks.**
Week 1 avg: 2.6/5. Week 2 avg: 3.0/5. The act of verification built confidence—catching those 3 errors proved I *could* evaluate AI output effectively.

---

## Lessons Learned

1. **Drift is real and measurable.** My 1.4-point average gap would have widened without the protocol. The 50% → 28% reduction in high-gap tasks suggests the protocol was working.

2. **Verification catches errors that matter.** Three errors in 47 tasks (6.4%) might seem small, but one was a race condition that would have caused production issues.

3. **Time investment has ROI.** 2-3 minutes per task × 47 tasks = ~2 hours total. Catching 3 significant errors saved an estimated 4-6 hours of debugging and rework.

4. **Context determines protocol intensity.** The full 4-tactic protocol is overkill for routine tasks. A "light" version (Tactics 1 + 3) works for 80% of daily work.

---

## Next Experiment

Based on these results, I'm testing the streamlined protocol (Tactics 1, 3, 4) in a team environment:

**Framework**: Team-wide confidence calibration for code reviews

**Hypothesis**: Shared confidence ratings will reduce bug introduction rate and improve review thoroughness

**Duration**: 1-month sprint

**Metrics**:
- Pre/post bug rates in reviewed code
- Developer self-confidence trends (weekly survey)
- Code review time and thoroughness scores

**Question to answer**: Does confidence calibration work at team scale, or is it an individual practice?

---

## Further Reading

- **[Confidence Calibration Protocol](/frameworks/confidence-calibration-protocol/)** — The full framework with all 4 tactics and implementation templates
- **[Microsoft Critical Thinking Survey](/research/microsoft-critical-thinking-2025/)** — The research foundation: 319 knowledge workers, confidence dynamics, and the 40% finding
- **[Why You Trust AI More Than Yourself](/essays/why-you-trust-ai-more-than-yourself/)** — The TOFU essay introducing the Confidence Paradox

---

*This field note documents a controlled experiment following Brainium's field note standards: pre-registered hypothesis, specific methodology, honest results including failures, and suggested next steps.*
