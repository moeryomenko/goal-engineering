# Anti-Patterns

Design mistakes that cause goals to fail silently or burn budget.

## Self-grading

**Symptom:** Agent calls `update_goal(completed: true)` without running tests or verifier.

**Do instead:** `goal-verifier` skill (or reviewer sub-agent). Verifier default stance: REJECT.

## Vague done conditions

**Symptom:** `/goal make auth better` or done checklist with subjective items ("code is clean").

**Do instead:** Objective gates: `npm test` exits 0, `rg 'legacy/auth'` returns empty, coverage ≥ 80%.

## Mega-goals

**Symptom:** One `/goal` spans refactor + feature + migration; endless turns.

**Do instead:** Run `goal-scoper` first. Split into sequential goals with separate `GOAL.md` phases.

## No external state

**Symptom:** Objective only in chat; lost after compaction.

**Do instead:** Mirror `/goal` in `GOAL.md`. Agent reads it every turn.

## Chat progress spam

**Symptom:** Long status paragraphs every turn.

**Do instead:** Milestones → `update_goal(message: "...")` only. User-facing summary at end.

## Loop + goal collision

**Symptom:** Daily loop and active goal both edit the same files.

**Do instead:** Loop triages → writes `STATE.md` → hand off **one item** to `/goal`. Pause loop during goal if needed.

## Premature blocking

**Symptom:** `blocked_reason` on first flaky test or missing credential.

**Do instead:** Instruct: try 3+ approaches, check deny list, then block with evidence.

## Skipping budget

**Symptom:** 80+ turns on a 15-turn objective.

**Do instead:** `goal-budget.md` turn cap, `/goal pause`, log in `goal-run-log.md`.