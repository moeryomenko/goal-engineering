---
name: goal-verifier
description: >
  Independently verify a Grok Build goal is truly complete. Checks GOAL.md done
  conditions, runs tests, and returns PASS or REJECT. Use before
  update_goal(completed: true).
---

# Goal Verifier

Checker role only — do not implement fixes.

## Steps

1. Read `GOAL.md`.
2. Verify each done-condition checkbox with evidence.
3. Run project test command.
4. Return `VERDICT: PASS` or `VERDICT: REJECT` with gaps.