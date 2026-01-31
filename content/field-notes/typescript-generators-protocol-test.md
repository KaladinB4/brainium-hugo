---
title: "Field Notes: Learning TypeScript Generators Without Losing My Mind (or Skills)"
description: "I tested the Active Prompting Protocol from Anthropic's coding study while learning a complex TypeScript feature. The retention difference was stark."
date: 2026-01-31
tags: ["field-notes", "coding", "skill-acquisition", "experiments", "typescript"]
related_research:
  - "Anthropic coding skills study (2026)"
  - "MIT cognitive debt study (2025)"
related_tools:
  - "AI-Assisted Learning"
  - "Active Prompting Protocol"
reading_time: "5 minutes"
---

## The Challenge

I needed to learn TypeScript generator functions and async generators for a data processing pipeline. This is exactly the kind of topic where AI shines—and exactly where skill degradation happens, according to the Anthropic study.

**The Goal:** Build a mental model of generators that persists beyond the immediate task.

**The Risk:** 17% reduction in mastery if I use AI the wrong way (copy-paste debugging being the worst offender).

**My Approach:** Apply the Active Prompting Protocol from Anthropic's high-performing "Conceptual Inquiry" group.

---

## Session 1: Conceptual Foundation (90 minutes)

Following the protocol, I started with zero code requests. Only conceptual questions.

**Prompt 1:** "What problem do generators solve that regular functions don't?"

AI gave me the standard answer: lazy evaluation, memory efficiency, infinite sequences. But then I pushed deeper with follow-ups:

**Prompt 2:** "Why would I choose a generator over an async/await pattern for data streaming?"

This surfaced the key distinction: generators maintain state across iterations without callback hell. I could feel the mental model forming.

**Prompt 3:** "What are the three most common mistakes developers make with generators?"

Gold. The AI explained: forgetting `.next()`, misunderstanding the `done` property, and trying to use generators where simple iteration suffices.

**What I Didn't Do:** Ask for code examples. Not yet.

**Instead:** I sketched out my own generator pseudocode on paper first. A simple Fibonacci generator. Then an iterator that yields chunks of a large array. The struggle was real—I got the syntax wrong three times—but that's the point.

**End of Session 1:** I had a notebook full of conceptual notes and two hand-written (buggy) generator attempts. Zero copy-pasted code.

---

## Session 2: Implementation with Guardrails (60 minutes)

Now I allowed myself to request code—but with constraints.

**The Rule:** Every code request must include "explain why this approach vs [alternative]"

**Prompt:** "Write a TypeScript generator that yields paginated API results. Explain why generator vs async iterator, and tradeoffs of yielding promises vs resolved values."

The code came back clean. But more importantly, the explanation forced me to engage with the *design decision*, not just the syntax.

**The Bug That Almost Got Me:**

I hit a real error: `Type 'Generator<number, void, unknown>' is not assignable to type...`

My instinct: paste the error into AI. 

The protocol: debug for 5 minutes first.

I spent 6 minutes reading the TypeScript error, tracing the types, and realized I'd declared the return type wrong. Fixed it myself.

**Why this mattered:** Error diagnosis is where the Anthropic study showed the biggest skill gap. By forcing myself to struggle, I preserved that learning moment.

---

## Session 3: The Teach-Back Test (30 minutes)

Before declaring myself "done," I closed all AI tools and wrote a summary:

"Generators maintain function state across multiple calls via the `yield` keyword. Unlike async functions that run to completion, generators pause at each yield, allowing the caller to control iteration flow. For data pipelines, this means processing chunks without loading everything into memory."

Then I tried to build a new use case: a generator that yields filtered database records with backpressure control.

**Result:** I got stuck on the backpressure part. Couldn't remember the pattern.

**The Revelation:** This exposed exactly what I didn't actually understand. I knew generators conceptually, but not the advanced patterns. This is the gap that would have been invisible if I'd just copy-pasted working code.

---

## The Comparison: What I Almost Did

To test the counterfactual, I tried the "wrong" way on a similar task later that week.

**Task:** Learn Deno streams (another new concept).

**Method:** Immediate code requests. "Write a Deno stream that transforms JSON lines." Copy. Paste. Modify slightly. Debug with "fix this."

**Time to working solution:** 20 minutes (vs 90+ for the generator learning).

**Time to forgetting:** By the next day, I couldn't explain how the backpressure worked without re-reading the code. A week later, I had to re-learn it from scratch.

**With the protocol:** Three weeks later, I can still explain generator internals and built a new use case without assistance.

---

## What Worked (And What Didn't)

**Definite Wins:**

1. **Conceptual-first opening.** Those initial 30 minutes of pure questions built the foundation everything else hung on. I could mentally simulate generator execution before writing any code.

2. **The 5-minute debug rule.** Every time I respected it, I learned something. Every time I cheated, I didn't.

3. **Explanation requirements.** Forcing the AI to justify design decisions made me engage with tradeoffs. I rejected one approach the AI suggested because the explanation revealed it wouldn't handle my use case.

**Partial Wins:**

1. **Hybrid mode for complex types.** TypeScript's type system required some "hybrid" prompting—requesting both code and explanation simultaneously. Pure conceptual inquiry wasn't enough for the generic constraints.

2. **Syntax lookups.** I allowed myself to ask "what's the syntax for..." without the full explanation requirement for basic language features. The protocol is for *learning*, not reference.

**What Failed:**

1. **Time pressure breaks the protocol.** When I was in a hurry, I defaulted to "fix this" mode. The skill cost is real but invisible in the moment.

2. **Some concepts need more than questions.** Complex async generator error handling required seeing examples, not just hearing explanations.

---

## Honest Assessment

**Mastery (1-10):**
- Syntax: 7/10 (can write generators from scratch)
- Debugging: 6/10 (can diagnose common errors, still struggle with edge cases)
- Architecture: 5/10 (know when to use generators, still learning advanced patterns)

**Ownership:** High. I can whiteboard generator patterns for colleagues without referencing notes.

**Time Investment:** 3 hours total vs ~1 hour for copy-paste approach.

**ROI:** Positive. The 2 extra hours bought durable understanding vs temporary solution.

---

## Protocol Adjustments for Next Time

1. **Time-box the conceptual phase:** 45 minutes max, then move to implementation. Perfect is the enemy of good.

2. **Keep a "struggle log":** Document exactly what was hard. That's your learning gold.

3. **Weekly review:** Spend 15 minutes on Friday reviewing the week's AI-assisted work. Could I explain it without the code in front of me?

4. **Permission to reference:** Basic syntax lookups don't need the full protocol. Reserve it for *learning*, not *remembering*.

---

## The Deeper Pattern

This experiment confirmed something the Anthropic study only suggested: **the struggle is the learning.** 

Every time I felt like I was wasting time wrestling with an error or sketching out pseudocode that wouldn't compile, I was actually building the neural pathways that persist.

The AI is an incredible accelerator—but only if you use it to accelerate *understanding*, not skip it.

---

## What's Next

I'm curious if this protocol scales to more complex domains. Next experiment: using the same approach to learn Rust's ownership system (notorious for being un-AI-friendly). 

The [Active Prompting Protocol](/cognitive-tools/ai-assisted-learning/) suggests it should work, but Rust might be the ultimate test. Can you learn a language designed to prevent certain classes of errors by having an AI hand you working code?

My hypothesis: the protocol will be even *more* important for Rust, because the borrow checker errors are exactly the kind of struggle that builds systems thinking. Skip the struggle, skip the skill.

---

**Related Reading:**
- [Anthropic Coding Skills Study](/research/anthropic-coding-skills-2026/) — The research behind this protocol
- [AI-Assisted Learning](/cognitive-tools/ai-assisted-learning/) — Full Active Prompting Protocol
- [Brain-First Writing Field Notes](/field-notes/brain-first-writing-experiment/) — Same principles applied to writing

**Open Questions:**
- Does the 5-minute debug rule scale to more complex distributed systems?
- How do you apply this protocol when pair programming with AI-fluent colleagues?
- Can you recover from "convenience mode" binges, or is the skill loss permanent?
