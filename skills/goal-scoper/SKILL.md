---
name: goal-scoper
description: >
  Break a large request into a bounded, goal-ready objective with verifiable done
  conditions. Use before /goal when the task is vague, too large, or missing
  acceptance criteria. Produces GOAL.md draft content.
---

# Goal Scoper

Turn ambiguous work into one `/goal`-ready objective.

## Steps

1. Read the user request and relevant codebase areas.
2. Identify if the work should be **one goal** or **multiple sequential goals**.
3. Write:
   - **Objective** (one sentence)
   - **Done condition** (checklist, objectively verifiable)
   - **Deny list** (paths agent must not touch)
   - **Verifier** (tests, skill, sub-agent)
4. Output markdown suitable for `GOAL.md`.
5. Suggest the exact `/goal ...` line the user should run.

## Principles

- Smaller goals finish faster and verify cleaner.
- Every done item must be checkable by the verifier without human judgment.
- If exploration is needed first, recommend Plan mode — not `/goal`.