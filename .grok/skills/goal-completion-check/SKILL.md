---
name: goal-completion-check
description: >
  Pre-flight check before calling update_goal(completed: true). Ensures verifier
  ran, tests passed, and GOAL.md checklist is complete. Use when implementer
  believes work is done, or when asked "can I mark goal complete?"
---

# Goal Completion Check

Gate before `update_goal(completed: true)`.

## Steps

1. Read `GOAL.md` done condition — count unchecked items.
2. Confirm `goal-verifier` (or equivalent) returned **PASS** this session.
3. Confirm test command was run and output captured in progress log.
4. If any gap → do **not** complete; list remaining work and call `update_goal(message: ...)`.
5. If all clear → call `update_goal(completed: true, message: "<summary>")`.

## Never

- Complete on "should work" or partial test runs.
- Complete when deny-listed files were modified without human approval.
- Complete when verifier was skipped.