# AGENTS.md — Goal Engineering Reference

## Project Purpose

Canonical public reference for Grok Build CLI `/goal` and `update_goal`. Docs-first; `goal-audit` CLI in `tools/goal-audit/`.

## Verification

```bash
cd tools/goal-audit && npm install && npm test
```

Before claiming work done: run tests; use `goal-verifier` mindset on doc accuracy.

## Goal Discipline

- Mirror active `/goal` objectives in `GOAL.md`
- Never `update_goal(completed: true)` without verifier PASS
- One active goal per session

## Code Style

- TypeScript ESM in tools
- Markdown: clear headings, copy-paste `/goal` examples
- Match tone of [loop-engineering](https://github.com/cobusgreyling/loop-engineering)

## Commits

Conventional commits: `docs:`, `feat(goal-audit):`, `chore:`.