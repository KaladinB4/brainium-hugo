# Funnel Alignment Audit Checklist

## Microsoft Critical Thinking Cluster Status

### Current State
| Piece | Status | Location |
|-------|--------|----------|
| TOFU Essay | ✅ Complete | /content/essays/why-you-trust-ai-more-than-yourself.md |
| MOFU Research | ✅ Complete | /content/research/microsoft-critical-thinking-2025.md |
| BOFU Tool | ⚠️ To Create | /content/frameworks/confidence-calibration-protocol.md |
| Field Note | ⚠️ To Create | /content/field-notes/confidence-calibration-experiment.md |

### Target State (100% Complete)
- Essay links to Research and Tool
- Research links to Essay and Tool  
- Tool links to Research and Field Note
- Field Note links to Tool and Research
- All pieces have funnel_stage front matter
- All pieces reference cluster: "microsoft-critical-thinking"

---

## Cross-Link Audit

### Forward Links (New Content → Existing)

**From Confidence Calibration Protocol (BOFU):**
- [ ] Link to `/research/microsoft-critical-thinking-2025/` (Research foundation)
- [ ] Link to `/field-notes/confidence-calibration-experiment/` (Validation - CTA at end)
- [ ] Link to `/frameworks/think-first-protocol/` (Integration)
- [ ] Link to `/cognitive-tools/ai-assisted-learning/` (Coding domain)
- [ ] Link to `/essays/why-you-trust-ai-more-than-yourself/` (TOFU upstream)

**From Field Note (Retention):**
- [ ] Link to `/frameworks/confidence-calibration-protocol/` (Framework tested)
- [ ] Link to `/research/microsoft-critical-thinking-2025/` (Research foundation)
- [ ] Link to `/essays/why-you-trust-ai-more-than-yourself/` (TOFU awareness)

### Backward Links (Existing → New Content)

**In /essays/why-you-trust-ai-more-than-yourself.md:**
- [ ] Update line 127 CTA to point to actual tool: `[Learn the Confidence Calibration Protocol →](/frameworks/confidence-calibration-protocol/)`

**In /research/microsoft-critical-thinking-2025.md:**
- [ ] Add link in "Four Tactics" section: "See the full Confidence Calibration Protocol for implementation templates →"
- [ ] Add to "Further Reading" section

**In /frameworks/_index.md:**
- [ ] Add new framework entry:
```markdown
**[Confidence Calibration Protocol](/frameworks/confidence-calibration-protocol/)** — *New*
A four-tactic system for maintaining critical thinking through confidence tracking and task-type matching. Based on Microsoft's research showing confidence mismatch drives analytical engagement.
```

**In /field-notes/_index.md:**
- [ ] Add new field note entry:
```markdown
**[2 Weeks of Confidence Calibration](/field-notes/confidence-calibration-experiment/)** — *New*
Real data from testing the Confidence Calibration Protocol: 47 AI-assisted tasks logged, 3 errors caught, and the surprising finding about which tasks had the highest confidence gaps.
```

---

## Index Page Updates

### /frameworks/_index.md
Current frameworks listed:
1. Think First Protocol
2. Retrieval Practice Guide
3. Teach-Back Method

Add:
4. **Confidence Calibration Protocol** — *New* — "Four-tactic system for confidence tracking"

### /field-notes/_index.md
Current field notes:
1. AI-Assisted Learning Experiments
2. 30 Days of Brain-First Writing
3. Learning TypeScript Generators

Add:
4. **2 Weeks of Confidence Calibration** — *New* — "Testing the Confidence Calibration Protocol with real data"

---

## AGENTS.md Updates Required

### Update Content Clusters Table
Current:
```
**Current Status:**
- MIT/Cognitive Debt: 75% complete (needs field note expansion)
- Anthropic/Coding: 66% complete (needs TOFU essay)
- Microsoft/Critical Thinking: 0% complete (needs all 4 pieces)
```

Change to:
```
**Current Status:**
- MIT/Cognitive Debt: 100% complete ✅
- Anthropic/Coding: 75% complete (needs TOFU essay expansion)
- Microsoft/Critical Thinking: 100% complete ✅
```

### Add to Key Files to Know
Add:
- `/content/frameworks/confidence-calibration-protocol.md` — Confidence Calibration Protocol (BOFU tool)
- `/content/field-notes/confidence-calibration-experiment.md` — Field note validating the protocol

---

## CLAUDE.md Updates Required

### Update Content Clusters Status
Current:
```
**Current Status:**
- MIT/Cognitive Debt: ✅ Essay, ✅ Research, ⚠️ Tool, ✅ Field Note (NEW)
- Anthropic/Coding: ⚠️ Essay, ✅ Research, ✅ Tool, ✅ Field Note (NEW)
- Microsoft/Critical Thinking: ❌ Essay, ✅ Research, ❌ Tool, ❌ Field Note
```

Change to:
```
**Current Status:**
- MIT/Cognitive Debt: ✅ Essay, ✅ Research, ✅ Tool, ✅ Field Note — 100% Complete
- Anthropic/Coding: ⚠️ Essay, ✅ Research, ✅ Tool, ✅ Field Note — 75% Complete
- Microsoft/Critical Thinking: ✅ Essay, ✅ Research, ✅ Tool, ✅ Field Note — 100% Complete
```

### Update Next Priorities Section
Current:
```
**Priority:** Complete Microsoft cluster (essay + tool + field note).
```

Change to:
```
**Priority:** Complete Anthropic cluster (expand TOFU essay coverage).
```

---

## Final Verification

### Build Check
- [ ] Run `hugo --quiet` and verify no errors
- [ ] Verify all internal links resolve
- [ ] Check front matter is valid YAML

### Content Standards Check
- [ ] All new pieces have funnel_stage tag
- [ ] All new pieces have cluster tag
- [ ] Minimum 2 internal links per new piece
- [ ] Clear CTAs in each piece
- [ ] Reading times: 5-10 minutes (research/tools), 5-8 minutes (field notes)

### Documentation Update
- [ ] HANDOFF.md updated with new content status
- [ ] AGENTS.md cluster status table updated
- [ ] CLAUDE.md cluster status and priorities updated
