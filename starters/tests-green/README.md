# Tests Green Starter

Scaffold with:

```bash
npx @cobusgreyling/goal-init . --pattern tests-green --tool grok
```

Or manually:

```bash
cp -r starters/tests-green/.grok/skills/goal-verifier .grok/skills/
cp starters/tests-green/GOAL.md.example GOAL.md
```

```
/goal Read GOAL.md. Fix all failing tests. Done when full suite passes and goal-verifier PASS.
```