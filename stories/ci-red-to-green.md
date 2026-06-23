# Story: CI Red to Green Goal

**Pattern:** [tests-green.md](../patterns/tests-green.md)  
**Maturity:** G2

## Objective

```
/goal Read GOAL.md. Fix failing auth and api tests on main.
Done when: npm test exits 0 and goal-verifier PASS.
```

## What worked

- Listing failing tests in `GOAL.md` gave the agent a concrete punch list
- `update_goal(message: "auth tests green")` after first cluster — chat stayed readable
- Verifier caught a skipped test the implementer added without documenting

## What we'd change

- Should have run `goal-scoper` first — initial `/goal` included lint cleanup (scope creep)
- Set `goal-budget.md` to 25 turns upfront; used 31 before PASS

## Outcome

Green in one evening session. One retry after verifier REJECT on skipped test.