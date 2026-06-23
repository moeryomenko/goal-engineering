# Grok Build — Tests Green Goal

```bash
npx @cobusgreyling/goal-init . --pattern tests-green --tool grok
npx @cobusgreyling/goal-audit . --suggest
```

## Session

```
/goal Read GOAL.md. Fix all failing tests in the Failing Tests section.
Done when: npm test exits 0 and goal-verifier returns PASS.
Use update_goal for milestones. Do not mark completed until verifier passes.
```

## Verifier handoff

```
Read goal-verifier skill. Verify GOAL.md done conditions. Return PASS or REJECT.
```

## Budget

```
npx @cobusgreyling/goal-cost --pattern tests-green --level G2
```