# Implement Feature Goal

**Objective:** Ship a scoped feature with explicit acceptance criteria.

## Example `/goal`

```
/goal Implement feature described in GOAL.md (user export CSV).
Done when: all acceptance criteria checked, new tests pass, goal-verifier PASS.
```

## Done Condition

- [ ] Each acceptance criterion in `GOAL.md` checked
- [ ] New tests cover happy path + one edge case
- [ ] No scope creep beyond GOAL.md

## Verifier

- `goal-verifier` walks acceptance checklist
- Tests for new behavior

## Tip

Keep features small enough for one goal. If > 5 acceptance criteria, split into multiple goals.