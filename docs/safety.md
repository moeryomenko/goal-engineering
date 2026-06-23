# Safety

Goals run longer than single prompts. Encode judgment in files, not hope.

## Deny Lists

In `AGENTS.md` or `GOAL.md`:

```markdown
## Deny List (goal must not edit without human approval)
- infra/terraform/**
- migrations/**
- .github/workflows/**
- production config / secrets
```

## Human Gates

Require human approval when:

- Goal touches deny-listed paths
- Verifier returns REJECT twice on same approach
- `update_goal(blocked_reason: ...)` fires
- Budget threshold exceeded

## Kill Switches

| Switch | How |
|--------|-----|
| Pause | `/goal pause` |
| Clear | `/goal clear` |
| Flag | `GOAL.md` → `status: PAUSED_BY_HUMAN` |
| Budget | Document max turns in `goal-budget.md` |

## Verifier Non-Negotiables

1. Implementer never calls `completed: true` without verifier PASS
2. Verifier reads diff + runs tests — does not trust agent summary
3. Blocked ≠ failed once — use `blocked_reason` only after 3+ failed attempts on same blocker

## Unattended Goals (G3)

Only enable when:

- Test suite is trustworthy
- Deny list covers blast radius
- Worktree isolation for experiments
- CI catches regressions on the branch