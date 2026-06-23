# Tests Green Goal

**Objective:** Get CI green on a failing branch or `main`.

## Example `/goal`

```
/goal Read GOAL.md. Fix all failing tests listed in the Progress section.
Done when: full test suite passes locally and goal-verifier returns PASS.
Use update_goal for milestones. Do not mark completed until verifier passes.
```

## Done Condition

- [ ] `npm test` / `pytest` / project test command exits 0
- [ ] No new `@ts-ignore` or skipped tests without documented reason
- [ ] `goal-verifier` skill PASS

## Verifier

1. Run full test suite (not subset)
2. `goal-verifier` confirms done checklist in `GOAL.md`

## GOAL.md Fields

```markdown
## Failing Tests (start)
- auth.test.ts — token refresh timeout
- api.test.ts — 500 on /health

## Fix Strategy
- Fix root cause, not symptoms
- One logical fix per commit when possible
```

## Budget

Cap at 30 turns. If still red, `blocked_reason` with failing test names + last error output.