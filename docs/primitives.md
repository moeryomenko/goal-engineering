# The Four Primitives of Goal Engineering

Every reliable goal run needs these four capabilities.

## 1. Objective

A single sentence the agent can hold across turns, plus a **verifiable done condition**.

**Good:**

> Migrate auth to `lib/auth/v2`. Done when: (1) all tests in `tests/auth/` pass, (2) zero imports from `legacy/auth`, (3) `GOAL.md` checklist complete.

**Bad:**

> Make auth better.

Write objectives in `/goal` and mirror them in `GOAL.md` for compaction resilience.

## 2. Verifier

An independent check that the implementer did not grade its own homework.

Options (pick at least one):

| Verifier | When |
|----------|------|
| Test suite | Code changes with existing tests |
| `goal-verifier` skill | Custom acceptance criteria |
| Reviewer sub-agent | Complex or architectural work |
| CI workflow | Team gate before merge |

Rule: **never** call `update_goal(completed: true)` before the verifier passes.

## 3. State (External Memory)

The model forgets; the repo doesn't. Minimum viable state:

```markdown
# GOAL.md

## Active Objective
Migrate auth module to v2 API.

## Done Condition
- [ ] tests/auth/* green
- [ ] no legacy/auth imports
- [ ] verifier skill PASS

## Progress Log
- 2026-06-23 — Started migration; 8/18 tests passing
```

Update every meaningful milestone. The agent should read `GOAL.md` at the start of each goal session.

## 4. Budget

Goals can run many turns. Set guardrails:

| Guardrail | Example |
|-----------|---------|
| Turn cap | "Max 40 agent turns before human review" |
| Token budget | Document in `goal-budget.md` |
| Kill switch | `/goal pause` or flag in `GOAL.md` |
| Deny list | No edits to `prod/`, `migrations/` without human |

See [safety.md](./safety.md) and [templates/goal-budget.md.template](../templates/goal-budget.md.template).

## Primitive Checklist

Before `/goal`:

- [ ] Objective is one bounded task
- [ ] Done condition is objectively checkable
- [ ] Verifier exists and is not the implementer
- [ ] `GOAL.md` (or equivalent) is ready
- [ ] Budget and deny list documented for unattended runs