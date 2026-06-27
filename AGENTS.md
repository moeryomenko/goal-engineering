# AGENTS.md — Goal Engineering Reference

## Project Purpose

Canonical public reference for Grok Build CLI `/goal` and `update_goal`. Docs-first; CLIs in `tools/`.

| Path | Contents |
|------|----------|
| `patterns/` | Six goal patterns + `registry.yaml` |
| `starters/` | `minimal-goal`, `tests-green`, `fix-bug` |
| `skills/` | `goal-verifier`, `goal-scoper`, `goal-completion-check` |
| `.grok/skills/` | Grok-native copy of skills (dogfood) |
| `.opencode/skills/` | OpenCode-native copy of skills (dogfood) |
| `tools/goal-audit` | G0–G3 readiness CLI |
| `tools/goal-init` | Scaffold patterns into projects |
| `tools/goal-cost` | Turn/token estimates |
| `docs/` | API, safety, anti-patterns, multi-goal |
| `GOAL.md` | Active repo objective + done conditions |

## Verification

```bash
npm test
npm run validate
```

Before claiming work done: run tests; use `goal-verifier` mindset on doc accuracy.

## Goal Discipline

- Mirror active `/goal` objectives in `GOAL.md`
- Never `update_goal(completed: true)` without verifier PASS
- One active goal per session
- Log outcomes in `goal-run-log.md`

## Deny List

- npm publish without version bump + release tag
- GitHub org settings or unrelated user repos
- Changing loop-engineering from this repo (cross-link only)

## Code Style

- TypeScript ESM in tools
- Markdown: clear headings, copy-paste `/goal` examples
- Match tone of [loop-engineering](https://github.com/cobusgreyling/loop-engineering)

## Commits

Conventional commits: `docs:`, `feat(goal-audit):`, `feat(goal-init):`, `chore:`.

<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tools** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them. `codegraph_node` returns one symbol's source + callers, or reads a whole file with line numbers. If the tools are listed but deferred, load them by name via tool search.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` and `codegraph node <symbol-or-file>` print the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->
