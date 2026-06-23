# Coverage Target Goal

**Objective:** Raise test coverage to a threshold on a scoped path.

## Example `/goal`

```
/goal Raise coverage on src/auth/ to 80% per GOAL.md.
Done when: coverage report shows ≥80% lines on src/auth/, goal-verifier PASS.
```

## Done Condition

- [ ] Coverage tool reports ≥ target % on scoped paths only
- [ ] New tests are meaningful (not empty asserts)
- [ ] `goal-verifier` PASS

## Verifier

Run coverage command documented in `AGENTS.md`:

```bash
npm test -- --coverage
# or
pytest --cov=src/auth --cov-fail-under=80
```

Reject tests that only touch files without assertions.