# goal-init

Scaffold goal engineering patterns into any project.

```bash
npx @cobusgreyling/goal-init . --pattern tests-green --tool grok
npx @cobusgreyling/goal-init . -p fix-bug --dry-run
```

## Patterns

| Pattern | Starter |
|---------|---------|
| `minimal-goal` | Generic verified goal |
| `tests-green` | CI red → green |
| `fix-bug` | Repro → fix → regression test |
| `migrate-module` | Module migration |
| `implement-feature` | Scoped feature |
| `refactor-safely` | Behavior-preserving refactor |
| `coverage-target` | Coverage threshold |

## What it creates

- `GOAL.md` (pattern-specific done conditions)
- `.grok/skills/goal-verifier` (+ scoper, completion-check)
- `goal-budget.md` + `goal-run-log.md`
- `AGENTS.md` template (if missing)

Then audit: `npx @cobusgreyling/goal-audit . --suggest`