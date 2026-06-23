# GOAL.md — Goal Engineering Reference Repo

This file documents how the **goal-engineering** reference repository maintains itself using goal patterns.

## Active Objective

Keep this repo the canonical, high-signal public reference for Grok Build CLI `/goal`.

## Done Condition

- [x] README, API reference, and pattern catalog published
- [x] `goal-audit` CLI ships with G0–G3 scoring
- [x] Minimal goal starter + verifier skill included
- [x] GitHub Pages showcase + interactive pattern picker
- [x] `@cobusgreyling/goal-audit@1.0.2` live on npm
- [x] `goal-init` and `goal-cost` CLIs scaffolded
- [x] Dogfood G3: `.grok/skills/`, `goal-run-log.md`, `SECURITY.md`
- [x] Expanded docs: anti-patterns, multi-goal, adopters, stories

## Deny List

- Changing unrelated user repos from this reference
- Publishing without LICENSE and CONTRIBUTING
- npm publish without version bump + tag workflow

## Progress Log

| Date | Note |
|------|------|
| 2026-06-23 | Initial repo scaffold — docs, patterns, starters, goal-audit |
| 2026-06-23 | G3 expansion — goal-init, goal-cost, dogfooding, CI registry validation |

## Backlog

- Canonical Goal Engineering essay (Substack)
- Visual brand assets (`assets/visuals/`)
- Per-pattern starters for all six patterns
- goal-audit activity detection from run log freshness