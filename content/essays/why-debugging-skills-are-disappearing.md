---
title: "My Debugging Skills Are Fading—and I Think AI Is Why"
description: "I noticed I couldn't solve bugs without help anymore. Then I found research suggesting this isn't just me."
date: 2026-02-01
tags: ["essays", "debugging", "ai-assistance", "skill-decay", "research-synthesis"]
funnel_stage: "TOFU"
---

## The Moment I Noticed

Last Tuesday, I hit a bug in a TypeScript async function. Nothing exotic—just a race condition in some promise handling. I stared at it for three minutes, then instinctively reached for the AI assistant.

"Fix this," I typed, pasting the error.

It worked. The bug vanished. But something about that moment bothered me. Not the asking—I know when I'm stuck. It was the *speed* of the reach. The automatic nature of it. Three minutes of struggle, then immediate delegation.

I tried to remember the last time I'd debugged something substantial without AI help. I couldn't.

My debugging used to be sharp. I could trace execution flows in my head, build mental models of state changes, find the needle in the haystack through sheer persistence. Now? I paste errors into AI and hope for the best. When AI is wrong, I'm worse off than if I'd never asked—because I've lost the patience for methodical debugging.

This isn't a crisis. I'm not warning about "AI destroying skills" or sounding alarms. But I noticed something shifting, and the research suggests I'm not alone.

---

## What Anthropic Researchers Discovered

In January 2026, researchers at Anthropic published a randomized trial that measured exactly what I was experiencing. They assigned 52 software engineers to learn a new Python async library—half with AI assistance, half coding by hand.

The AI group finished their tasks about two minutes faster. Not statistically significant. But their scores on a post-learning quiz? Dramatically different.

**The AI-assisted group scored 50%. The hand-coding group scored 67%.** That's nearly two letter grades of difference—what the researchers called a 17% reduction in mastery.

Here's what struck me: the biggest gap appeared in debugging questions. The very skill I noticed fading in myself.

The study found that developers who used AI for "fix this" debugging—handing over error diagnosis entirely—showed the weakest conceptual understanding. When they had to debug without AI later, they struggled most. The pattern was clear: delegating error analysis to AI preserved performance in the moment but degraded the skill that matters long-term.

This wasn't about intelligence or effort. It was about interaction patterns. The researchers identified that developers who used AI in "Conceptual Inquiry" mode—asking questions but writing their own code—performed nearly as well as the hand-coding group. The problem wasn't AI itself. It was how we use it.

---

## A Pattern We've Seen Before

This isn't the first time we've traded skill for convenience. The research on cognitive offloading spans four decades, and the pattern is remarkably consistent.

Consider GPS navigation. A 2020 study in *Scientific Reports* found that heavy GPS users showed worse spatial memory and reduced hippocampal engagement during self-guided navigation. The more they relied on turn-by-turn directions, the less they built mental maps. The brain, efficient as always, stopped investing in skills it no longer needed.

Or calculators. Meta-analyses of math education research show that while calculators reduce computational errors, they can mask deeper conceptual understanding. Students who reach for calculators too quickly sometimes struggle with relational thinking—understanding why approaches work, not just how.

The pattern across tools and domains: **immediate performance gains, long-term skill costs.**

I've written about this pattern before in [my synthesis of cognitive offloading research](/essays/cognitive-offloading-research/). The mechanism is well-understood. Our brains optimize for efficiency. When a tool handles a cognitive task reliably, we gradually stop investing energy in that skill. The neural pathways weaken from disuse. The ability doesn't disappear overnight—it atrophies.

AI is different only in degree. Calculators offloaded arithmetic. GPS offloaded spatial navigation. AI offloads higher-order cognition: debugging, reasoning, analysis, writing. The stakes are higher because the skills are more complex.

---

## The Question That Worries Me

I'm not anti-AI. I use it daily. The productivity gains are real, and I've made peace with trading some raw debugging speed for faster overall development.

But I keep thinking about junior developers entering the field now.

When I started coding, I spent hours debugging alone. Those hours were frustrating, but they built something. I learned to read stack traces, to isolate variables, to form and test hypotheses about what was going wrong. Every bug I solved alone added to a mental library of patterns. Every mistake taught me something about how code actually executes.

What happens to developers who never build that foundation? Who learn to code with AI assistance from day one, delegating debugging before they've developed the skill?

The Anthropic study tested junior engineers who were already familiar with AI tools. They showed the 17% skill reduction. But what about the next cohort—the ones who learn *through* AI assistance, not just *with* it?

And here's the scarier question: What happens when AI is wrong?

I've seen AI confidently suggest fixes that would introduce new bugs. I've watched it misinterpret error messages, propose solutions to the wrong problem, hallucinate API methods. When that happens, you need the debugging skill to catch it. But if you've delegated that skill to AI for months or years, you're vulnerable.

This isn't alarmist. It's a genuine risk worth considering.

---

## What I'm Trying Instead

The research isn't all cautionary. The Anthropic study also identified interaction patterns that *preserved* skill acquisition. The highest-performing developers used what researchers called "Conceptual Inquiry" mode—they asked AI questions about design patterns and tradeoffs, then wrote their own code and debugged independently.

I've been experimenting with this approach based on the [Active Prompting Protocol](/cognitive-tools/ai-assisted-learning/). Three principles guide my new habits:

**1. Conceptual questions first.** Before asking for code, I ask about the problem space. "What are common causes of this error type?" "What patterns work well for this kind of async handling?" The goal is building my mental model, not getting working code.

**2. Self-diagnose before delegation.** I now spend at least 10 minutes on a bug before reaching for AI. I trace the execution, add logging, form hypotheses. Sometimes I solve it. When I don't, the attempt still builds something—error-pattern recognition, patience, methodical thinking.

**3. The explanation test.** When I do use AI-generated fixes, I close the tool and explain the solution in my own words. If I can't explain why it works, I haven't learned anything.

It's slower. Week one was frustrating. But I'm noticing something shift. By day 18 of this experiment, I debugged a complex Promise.race issue without AI assistance. It took 25 minutes instead of 5. But I understood the fix deeply enough to explain it to a colleague later. That feels different than the quick AI fixes I'd been accumulating.

---

## The Real Choice

The research suggests we're not facing a binary choice between "use AI" and "don't use AI." We're choosing between three modes:

**Replacement Mode:** AI thinks, you accept. Fastest in the moment, highest long-term cost.

**Convenience Mode:** AI helps, you don't challenge. Moderate efficiency, moderate skill erosion.

**Amplification Mode:** You think first, AI sharpens. Slower initially, preserves and extends your capabilities.

I've been drifting toward Replacement Mode without realizing it. The Anthropic study made me conscious of that drift. Now I'm choosing more deliberately.

This isn't about being puritanical. Some tasks deserve Replacement Mode—routine configurations, boilerplate, things I don't need to own deeply. But debugging? Architecture decisions? Core logic? Those deserve Amplification Mode, even when it's slower.

---

## The Deeper Question

What are we optimizing for?

If the goal is shipping code as fast as possible today, Replacement Mode wins. If the goal is building expertise that compounds over a career, we need a different approach.

I think the answer is context-dependent. But I also think we need to be honest about the trade-offs. The 17% skill reduction measured by Anthropic isn't a moral failing—it's a predictable consequence of how cognition works. Our brains adapt to the tools we use. If we want to preserve certain skills, we have to use tools in ways that exercise those skills.

The good news: the research shows the effect depends entirely on *how* you interact with AI. The developers in the study who used Conceptual Inquiry mode performed nearly as well as the hand-coding group. The tool isn't the problem. Our habits are.

---

## A Personal Note

I'm not writing this from a position of authority. I'm writing it from a position of having noticed my own slippage and wanting to reverse it. The first two weeks of my experiment were painful. My debugging felt rusty. I wanted to reach for AI constantly.

But something is shifting. I'm becoming more conscious of when I need to own the thinking versus when I can safely delegate. I'm building a kind of metacognitive awareness about my own AI use that I didn't have before.

This isn't about going back to coding without AI. That's not realistic, and I'm not sure it's desirable. It's about using AI thoughtfully—preserving the skills that matter while capturing the efficiency gains.

If you code with AI assistance, I encourage you to try the same experiment. Not forever. Just for five sessions. Notice when you reach for AI. Ask whether you're building or borrowing. See if you feel a difference.

The research suggests you will.

---

## Further Reading

**The Research:**
- [Anthropic's Coding Study: When AI Helps vs When It Hurts](/research/anthropic-coding-skills-2026/) — The 17% skill reduction finding and the three interaction patterns
- [Your Brain on ChatGPT](/research/brain-on-chatgpt/) — EEG evidence of how AI changes neural engagement

**The Mechanisms:**
- [Why Debugging Skills Decay](/essays/debugging-skill-decay/) — The cognitive science behind skill atrophy with AI assistance
- [Cognitive Offloading: The 40-Year Pattern Behind AI Skill Decay](/essays/cognitive-offloading-research/) — From calculators to GPS to AI, why tools change cognition

**The Solution:**
- [AI-Assisted Learning](/cognitive-tools/ai-assisted-learning/) — The Active Prompting Protocol for coding with AI while preserving skills

**Validation:**
- [30 Days Testing Active Prompting for Coding](/field-notes/30-days-active-prompting-coding/) — My honest results, including the failures

---

## Takeaways

**One sentence:** AI coding assistance reduces skill acquisition by 17%—but only when used in certain ways; the highest-performing developers use AI as a tutor, not a replacement.

**Immediate action:** Before your next debugging session, set a 10-minute timer. Try to solve it yourself before asking AI. Notice what you learn in those 10 minutes.

**The deeper point:** The question isn't whether to use AI. It's which mode you're operating in—and whether you're choosing consciously or drifting toward convenience.
