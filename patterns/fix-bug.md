# Fix Bug Goal

**Objective:** Reproduce, fix, and regression-test a specific bug.

## Example `/goal`

```
/goal Fix bug #1234 per GOAL.md repro steps.
Done when: repro fails (bug gone), regression test added, full suite green, goal-verifier PASS.
```

## Done Condition

- [ ] Repro steps no longer trigger bug
- [ ] Regression test committed
- [ ] No unrelated changes
- [ ] `goal-verifier` PASS

## Verifier

1. Run repro steps manually or via test
2. Confirm regression test fails on old code, passes on fix
3. Full test suite green