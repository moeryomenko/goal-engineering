# Refactor Safely Goal

**Objective:** Restructure code without changing behavior.

## Example `/goal`

```
/goal Refactor per GOAL.md (extract AuthService from routes).
Done when: all existing tests pass unchanged, no public API breaks, goal-verifier PASS.
```

## Done Condition

- [ ] Test suite green before and after (same count, same assertions)
- [ ] No behavior changes (diff is move/rename only where possible)
- [ ] `goal-verifier` confirms no new features snuck in

## Verifier

- Full test suite
- Optional: diff review for logic changes
- Ban new feature flags or API surface in `GOAL.md` deny list