# Goal Patterns

Copy-paste patterns for common run-until-done objectives. Each includes an example `/goal` line, verifier strategy, and `GOAL.md` fields.

| Pattern | File | Example `/goal` |
|---------|------|-----------------|
| Tests Green | [tests-green.md](tests-green.md) | All CI tests pass on `main` |
| Migrate Module | [migrate-module.md](migrate-module.md) | Auth module on new API, zero legacy imports |
| Implement Feature | [implement-feature.md](implement-feature.md) | Feature X per acceptance criteria in GOAL.md |
| Fix Bug | [fix-bug.md](fix-bug.md) | Bug #1234 fixed with regression test |
| Refactor Safely | [refactor-safely.md](refactor-safely.md) | Extract service layer; all tests unchanged |
| Coverage Target | [coverage-target.md](coverage-target.md) | Coverage ≥ 80% on `src/auth/` |

Pick one: [docs/pattern-picker.md](../docs/pattern-picker.md)