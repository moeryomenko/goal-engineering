# Pattern Picker

Answer three questions to pick your first goal pattern.

## 1. What kind of work?

| Work type | Start here |
|-----------|------------|
| CI is red | [Tests Green](../patterns/tests-green.md) |
| API or module migration | [Migrate Module](../patterns/migrate-module.md) |
| New feature with acceptance criteria | [Implement Feature](../patterns/implement-feature.md) |
| Bug with repro | [Fix Bug](../patterns/fix-bug.md) |
| Refactor without behavior change | [Refactor Safely](../patterns/refactor-safely.md) |
| Raise test coverage | [Coverage Target](../patterns/coverage-target.md) |

## 2. How much autonomy?

| Level | Description | Verifier |
|-------|-------------|----------|
| **G1 — assisted** | Agent proposes; human approves each commit | Human + tests |
| **G2 — verified** | Agent commits in worktree; verifier gates merge | Tests + goal-verifier skill |
| **G3 — unattended** | Agent runs until done or blocked | Full test suite + deny list + budget |

Start at G1 for one week. Graduate when verifier catches real mistakes.

## 3. First-time setup?

```bash
npx @cobusgreyling/goal-audit . --suggest
cp -r starters/minimal-goal/.grok/skills/goal-verifier .grok/skills/
cp starters/minimal-goal/GOAL.md.example GOAL.md
```

Then:

```
/goal <paste pattern's example objective from patterns/*.md>
```