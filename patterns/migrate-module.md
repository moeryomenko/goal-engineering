# Migrate Module Goal

**Objective:** Move a module to a new API or package with compatibility checks.

## Example `/goal`

```
/goal Migrate legacy/auth to lib/auth/v2 per GOAL.md migration plan.
Done when: all auth tests pass, ripgrep shows zero imports from legacy/auth, goal-verifier PASS.
```

## Done Condition

- [ ] New module wired and old paths removed
- [ ] All module-specific tests green
- [ ] `rg 'legacy/auth'` returns no matches in `src/` and `tests/`
- [ ] `goal-verifier` PASS

## Verifier

- Test suite for affected module
- Import scan (`rg` / `grep`)
- Optional: reviewer sub-agent for public API changes

## Phases (log in GOAL.md)

1. Add new implementation alongside old (strangler)
2. Switch consumers
3. Delete legacy
4. Verifier pass