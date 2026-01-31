---
title: "30 Days Testing Active Prompting for Coding"
description: "I applied the Active Prompting Protocol to learning Rust async patterns. The first two weeks were brutal. By day 18, something clicked."
date: 2026-02-01
tags: ["field-notes", "active-prompting", "coding", "rust", "skill-retention"]
funnel_stage: "Retention"
---

## The Experiment

After my [30-day writing experiment](/field-notes/30-days-brain-first-writing/), I wanted to test whether the same principle applied to coding. Writing and programming feel different—syntax is less forgiving than prose, and the cost of errors is higher. I was skeptical.

The research was compelling. Anthropic's study showed developers using "Conceptual Inquiry" mode (asking questions, writing their own code) performed nearly as well as hand-coders, while those delegating debugging scored 17% lower on mastery tests. Could I feel that difference? Could I recover debugging skills I'd been outsourcing to AI?

I committed to 30 days using the [Active Prompting Protocol](/cognitive-tools/ai-assisted-learning/) for all new code. Three rules:

1. **Conceptual questions first:** Ask AI about abstractions and tradeoffs, not code
2. **Self-code for 15+ minutes:** Attempt implementation before any AI help
3. **The explanation test:** After any AI interaction, close it and explain what I learned

I chose Rust for this test—not because I'm masochistic, but because its ownership and async model require genuine understanding. You can't fake it with trial and error.

---

## Week 1: The Syntax Wall

Day 1, I started learning Rust's async/await patterns. I opened with a conceptual query: "What mental model should I have for Rust's Future trait? What are the most common misconceptions?"

The AI gave a solid explanation. Then I tried to write a simple async function that spawned two tasks and waited for both.

Twenty minutes later, I had 47 compiler errors. The borrow checker rejected everything. I wanted to paste the errors into AI and say "fix this."

I didn't. I read the error messages, looked up the specific lifetime rules, tried three different approaches. After 45 minutes, it compiled. I understood exactly why—something that wouldn't have happened if AI had handed me working code.

That night, I documented the session: frustration level 8/10, but I could explain the borrow checker's reasoning.

Week 1 stats:
- **Average frustration:** 7.5/10
- **Lines of code per hour:** 12 (vs my usual ~40 with AI)
- **Protocol breaks:** 1 (Day 5, deadline pressure)
- **Compiler errors solved independently:** 23

The break on Day 5 was honest. I had production code to ship and a borrowed lifetime issue I couldn't resolve. I used AI to explain the specific error, then self-coded the fix. It was a hybrid approach—still more engaged than full delegation, but not pure protocol.

---

## Week 2: Patterns Emerging

Something shifted around Day 10. The borrow checker errors stopped feeling random. I started recognizing patterns: "This is a lifetime elision issue," "That's a Send bound problem," "I need to pin this future."

Day 12, I hit an async trait method issue. Previously, I would have immediately asked AI. Instead, I spent 20 minutes reading the actual trait definitions, understanding why async traits require boxing in Rust. When I finally solved it, I owned the solution completely.

The protocol was working, but differently than I expected. I wasn't writing code faster. I was building error-pattern recognition. When the compiler complained, I had a growing library of "oh, this again" responses instead of "what now?" confusion.

Week 2 metrics:
- **Average frustration:** 5/10 (down from 7.5)
- **Lines of code per hour:** 19 (improving)
- **Protocol breaks:** 0
- **Mental model confidence:** 6/10

Day 14, I had a moment of clarity. I was explaining Rust's async executor to a colleague—without notes, without AI, without hesitation. The concepts had become mine in a way that copy-paste coding never achieves.

---

## Week 3: The Tipping Point

Day 16 brought the test I'd been waiting for. A genuine bug in async code—a race condition between two spawned tasks accessing shared state. The kind of bug that used to trigger immediate AI delegation.

I spent 10 minutes reading the code. Added some debug logging. Traced the execution flow in my head. Spotted the issue: a missing await on a cleanup task that allowed the shared reference to outlive its safe lifetime.

Fixed it. No AI. Twenty-three minutes total.

That wouldn't be remarkable for an experienced Rust developer. For me, after years of instinctively reaching for AI help, it felt like recovering something I'd lost.

By Day 18, I wasn't checking the timer before asking questions. I was genuinely trying things first. The 15-minute minimum had become natural—sometimes I went longer, sometimes shorter, but always with genuine effort first.

Week 3 was when the "Active Prompting" habit solidified. I noticed I was asking better conceptual questions too. Instead of "how do I do X," I was asking "what are the tradeoffs between approach A and B for my specific use case?" The questions assumed more knowledge because I had more knowledge.

---

## Week 4: Integration and Honest Limits

By the final week, I'd developed a nuanced view. The protocol wasn't a religion—it was a tool I could apply selectively.

**What remained strict:**
- Core logic and architecture decisions: Always self-code first
- Debugging: Minimum 10 minutes of independent analysis
- New concepts: Conceptual questions before any implementation help

**What I relaxed:**
- Boilerplate and ceremony: AI generation acceptable with explanation
- Well-understood patterns: Hybrid mode (I write, AI critiques) for efficiency
- Syntax reminders: Quick "what's the syntax for X again?" queries

Day 25, I tested my retention. I reviewed code I'd written on Day 8—complex async stream processing. I could trace the flow, explain the ownership transfers, identify the potential deadlock risks. Then I reviewed AI-assisted code from a pre-experiment project of similar complexity. I remembered maybe 30% of the logic.

The skill retention was real.

---

## What Worked (And What Didn't)

**What worked:**
- The 15-minute self-coding minimum forced engagement that paid off
- Conceptual-first questions built better mental models than code-first
- The explanation test (close AI, teach it back) was the best retention signal
- Error-pattern recognition developed faster than I expected

**What failed:**
- Pure protocol was too slow for deadline-driven work
- The first week was genuinely demoralizing—I almost quit on Day 7
- Some Rust specifics (macro syntax, certain lifetime edge cases) needed direct AI help regardless
- I couldn't maintain 100% protocol adherence in production contexts

**What surprised me:**
- Recovery from "AI dependency" took about 18 days—sharper than my writing experiment's 20-day tipping point
- The quality improvement wasn't in fewer bugs (I still had plenty) but in faster debugging of those bugs
- I became *more* willing to use AI for appropriate tasks, not less—because I could distinguish appropriate from dependency-creating

**Honest limitation:** This is n=1. Thirty days. One language. One person. Rust's strict compiler might make the protocol more effective than in looser languages. Your results will vary.

---

## The Real Test

Day 30 was interesting, but Day 60 will matter more. Can I maintain this habit when the novelty wears off?

I'm tracking weekly now. If I notice more than 20% of my sessions skipping the self-coding minimum, I do a reset week. So far, I'm averaging 12% protocol breaks—mostly for legitimate boilerplate, not core logic.

The [Anthropic research](/research/anthropic-coding-skills-2026/) suggested that skill degradation from AI assistance persists even after stopping. I believe that now—I felt it in Week 1. But I also believe it can be reversed. I felt that in Week 3.

---

## Next Experiment

Coding validated the pattern. Now I'm curious about critical thinking in knowledge work.

The [Microsoft critical thinking study](/research/microsoft-critical-thinking-2025/) found that AI use correlates with reduced self-reported critical thinking—especially when people trust AI more than themselves. This creates a "confidence paradox" where the most helpful AI assistance might be eroding the very judgment needed to evaluate that assistance.

I'm designing an experiment to test confidence calibration protocols in decision-making. Can we maintain analytical rigor while still benefiting from AI efficiency?

I'll document that experiment in 30 days. The pattern seems consistent across domains: think first, automate second, verify always.

---

## Quick-Start for Your Own Test

Don't commit to 30 days. Commit to 5.

1. Pick a small coding task in a language you know
2. Set a 15-minute timer
3. No AI until the timer ends (conceptual questions only)
4. Document: frustration level, whether you solved it, what you learned
5. After 5 sessions, decide if you feel a difference in ownership

The Anthropic study showed the effect in 52 developers. This field note shows recovery in one. Your brain might be different—but you'll never know until you test it.

---

**Related:**
- [Active Prompting Protocol](/cognitive-tools/ai-assisted-learning/) — The framework I tested
- [Anthropic's Coding Skills Study](/research/anthropic-coding-skills-2026/) — The research foundation
- [30 Days of Brain-First Writing](/field-notes/30-days-brain-first-writing/) — My previous experiment with the same principle
- [Why Debugging Skills Are Disappearing](/essays/why-debugging-skills-are-disappearing/) — The essay that motivated this test

---

**Have you tested a Brainium framework?** [Share your results](/about/) — we want the honest truth, including the parts where you broke the protocol.
