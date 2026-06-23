# Claude Code — Fix Bug Goal

```bash
npx @cobusgreyling/goal-init . --pattern fix-bug --tool claude
```

Copies `.claude/skills/goal-verifier/` and scaffolds `GOAL.md`.

## Session

```
/goal Fix bug per GOAL.md repro steps.
Done when: repro fails, regression test added, full suite green.
Use goal-verifier before marking complete.
```

Claude Code `/goal` can use a fresh model for the stop condition — same maker/checker split as Grok.