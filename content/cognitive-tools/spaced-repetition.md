---
title: "Spaced Repetition: The 10-20% Rule for Permanent Memory"
description: "Why spacing beats cramming and how to implement evidence-based review schedules. Based on Cepeda's 1,350-person study and Duolingo's algorithm research."
date: 2026-01-30
tags: ["cognitive-tools", "memory", "retention", "spacing-effect"]
research_papers:
  - "Ebbinghaus (1885). Memory: A contribution to experimental psychology"
  - "Cepeda et al. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. Psychological Science 19(11):1095-1102"
  - "Settles & Meeder (2016). Enhancing human learning via spaced repetition optimization. PNAS 113(13):3219-3224"
  - "Kang (2016). The right time to learn: mechanisms and optimization of spaced learning. Nature Reviews Neuroscience 17:77-88"
---

## The Problem

Cramming works—until it doesn't.

The night-before-the-exam marathon feels productive. You recognize every term. The concepts flow. You walk into the test confident. Three weeks later, it's as if you never studied.

This is the **fluency illusion**: massed practice creates short-term familiarity that masquerades as learning. Your brain recognizes information quickly because you just saw it, not because it's encoded for long-term retrieval. The forgetting curve is steep—Ebbinghaus documented 70% loss within 24 hours of massed study, with most of it happening in the first few hours.

The spacing effect is the counterintuitive alternative. Study the same material for the same total time, but distribute it across days or weeks, and retention can double or triple. Each review requires effortful retrieval, strengthening memory traces more than passive re-reading. But the *timing* of that effort matters enormously.

## The Science

**Ebbinghaus (1885)** established the baseline. Spacing is a [desirable difficulty](/essays/desirable-difficulties/)—the temporal gap requires effortful reconstruction that strengthens long-term retention. His forgetting curves showed memory decay follows a power law, not a straight line. The rate of loss slows over time, but the initial drop is brutal. More critically, he observed that distributed practice—spacing out sessions—flattened the curve dramatically. This wasn't just slowing decay; it was changing how the memory was stored.

**Cepeda et al. (2008)** quantified the optimal gap. In a study with 1,354 participants learning obscure facts, they tested gaps ranging from same-day reviews to 3.5 months, with final tests up to a year later. The results produced a "temporal ridgeline":

- At any given test delay, there's an optimal gap between study sessions
- That optimal gap is roughly **10-20% of the retention interval**
- Gaps shorter than optimal produce cramming-level retention; gaps longer produce excessive forgetting

The formula is simple in theory: if you need to remember something for 30 days, review it around day 3. For 6 months, first review at 2-3 weeks. The spacing adapts to your goals.

**Settles & Meeder (2016)** proved this works at scale. Using Duolingo's dataset of millions of language learning sessions, they developed MEMORIZE, a computational framework using marked temporal point processes. The algorithm optimizes review timing based on individual performance, moving beyond the fixed intervals of earlier systems like SuperMemo. The result: significantly better retention than both uniform and naive threshold-based schedules.

The debate about **expanding versus uniform intervals** has a practical answer. Expanding schedules (reviews at 1 day, 3 days, 7 days, etc.) have theoretical appeal—you review when memory is weakest but retrievable. But meta-analytic evidence shows expanding and uniform schedules perform similarly for 1-2 reviews. Expanding shows slight advantages only when you have 3+ reviews and long retention intervals. For most practical purposes, either works; consistency matters more than perfection.

## The Tool

The 10-20% rule is your operating principle. Calculate your target retention horizon, take 10-20% of that for your first interval, then space subsequent reviews using similar ratios.

**Implementation options:**

| Tool | Best For | Setup | Tradeoff |
|------|----------|-------|----------|
| **Anki + FSRS** | Serious learners | Install addon, set target retention 0.85-0.90 | Steep initial curve, maximum control |
| **RemNote** | Note-first workflows | Sign up, import notes | Locked platform, seamless integration |
| **Manual** | Minimalists / testing | Calendar alerts, 10-20% rule | Full control, requires discipline |

**Anki with FSRS** (Free Spaced Repetition Scheduler) is the strongest option. FSRS replaces Anki's default SM-2 algorithm with one based on modern research, modeling memory with three parameters: difficulty, stability, and retrievability. Set your target retention to 0.85-0.90—higher values create excessive review load with diminishing returns.

The manual approach works if you're disciplined. Create calendar events at 10-20% intervals. Review by attempting to recall from memory, then checking your notes. The mechanism is identical; only the automation differs.

## Anti-Patterns

**The new card death spiral.** Adding 50 cards daily feels ambitious. Within two weeks, you're drowning in 300+ daily reviews. The system collapses. Limit new cards to 10-20 per day, maximum. Sustainability beats intensity.

**Perfectionist editing.** Spending five minutes polishing a card's wording is five minutes not spent reviewing. Cards are retrieval cues, not encyclopedia entries. A slightly imperfect card reviewed 10 times outperforms a perfect card reviewed twice.

**Leeches.** Cards you fail 8+ times aren't learning opportunities—they're design failures. Delete or rewrite them. Break complex cards into atomic components. A card asking for "three causes of the French Revolution" should become three separate cards.

**The "Again" button stigma.** In Anki, hitting "Again" feels like failure. It's not—it's data. The algorithm learns from lapses and schedules accordingly. Clicking "Good" when you didn't actually recall undermines the entire system.

## Integration with AI-Assisted Learning

Spaced repetition and AI tools form a natural pair: AI handles the generation and explanation; spaced repetition handles the retention.

After an AI-assisted learning session, run the [explanation test](/cognitive-tools/ai-assisted-learning/#phase-3-verification-after-code). Turn the explanation into 2-3 cards:

- **Concept cards:** "What problem does [abstraction] solve?"
- **Anti-pattern cards:** "What's the common mistake with [approach]?"
- **Tradeoff cards:** "Why choose [A] over [B] in [scenario]?"

Don't create cards for code snippets you can look up. Create cards for mental models, error patterns, and decision criteria—the things that change how you think.

The workflow: AI session → explanation test → card creation → spaced review. The AI provides the initial encoding; spaced repetition makes it permanent.

## Quick Start

1. **Install Anki** and the FSRS addon. Set target retention to 0.85.

2. **Create 10 cards** from material you learned yesterday. Not today—yesterday. The slight forgetting makes the retrieval more effective.

3. **Review daily** for 10-15 minutes. Do not skip days. The algorithm assumes continuity.

4. **Limit new cards** to 10 per day. This is non-negotiable for the first month.

5. **Trust the intervals.** When Anki says "3.2 months," don't second-guess it. The 10-20% rule is built into the algorithm.

After one month: 300 cards, 15 minutes daily, retention rate 85%+. After six months: the material is functionally permanent.

## Agent Prompt Guide

Paste your notes into an AI chat with this prompt to generate Anki-ready cards:

```
Convert the following notes into Anki flashcards. Use cloze deletions for definitions and basic cards for concepts. Follow these rules:
- One idea per card
- Cloze format: {{c1::answer}} for key terms
- Keep prompts under 20 words
- Include context in the card

Notes:
[PASTE YOUR NOTES HERE]
```

**Input:** Your study notes or explanation of a concept
**Output:** Markdown-formatted cards ready for Anki import

**Example:**
Input: "Python list comprehensions are a concise way to create lists. Syntax: [expression for item in iterable if condition]"
Output: `{{c1::List comprehensions}} provide a {{c2::concise}} way to create lists in Python.`

## Further Reading

- **Cepeda et al. (2008)** — The 1,350-person temporal ridgeline study establishing the 10-20% rule
- **Settles & Meeder (2016)** — Computational optimization using Duolingo's dataset
- **Kang (2016)** — Mechanisms review covering cellular and molecular evidence for spacing
- **Gwern's spaced repetition literature review** — Comprehensive synthesis at gwern.net
- **FSRS documentation** — Algorithm details at github.com/open-spaced-repetition

---

**Related:**
- [Desirable Difficulties](/essays/desirable-difficulties/) — The keystone framework: spacing is a difficulty that strengthens retention
- [AI-Assisted Learning](/cognitive-tools/ai-assisted-learning/) — How to use AI tools without cognitive offloading, with spaced repetition integration for retention
- [Active Recall](/cognitive-tools/active-recall/) — The retrieval practice method that maximizes spaced repetition effectiveness
- [Interleaving](/cognitive-tools/interleaving/) — Mixing problem types to complete the spaced interleaved retrieval practice system
- [Deep Work](/cognitive-tools/deep-work/) — Protecting focus for effective spaced repetition sessions
- [Diffused Mode](/cognitive-tools/diffused-mode/) — Natural incubation through spaced intervals
