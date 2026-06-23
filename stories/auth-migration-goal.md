# Story: Auth Module Migration Goal

**Pattern:** [migrate-module.md](../patterns/migrate-module.md)  
**Maturity:** G2 (verified)

## Objective

```
/goal Migrate legacy/auth to lib/auth/v2. Done when auth tests pass, zero legacy/auth imports, goal-verifier PASS.
```

## What worked

- `GOAL.md` phases (strangler → switch → delete) survived context compaction
- `update_goal(message: ...)` kept chat clean across ~15 turns
- `rg 'legacy/auth'` as objective gate caught one missed re-export

## What we'd change

- Started with too broad a `/goal` — narrowed to `tests/auth/` only on retry
- Should have set deny list on `migrations/` earlier

## Outcome

Completed in one session. Verifier PASS after import scan + full test run.