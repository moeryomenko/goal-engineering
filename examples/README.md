# Examples

## Grok Build — minimal goal session

```bash
cp starters/minimal-goal/GOAL.md.example GOAL.md
cp -r starters/minimal-goal/.grok/skills/goal-verifier .grok/skills/
```

```
/goal Read GOAL.md. Fix the active objective. update_goal for progress.
goal-verifier before completed: true.
```

## Handoff from loop engineering

```
/goal Read STATE.md top priority. Complete using patterns/fix-bug.md.
Update GOAL.md. Verifier required.
```

See [loop-engineering](https://github.com/cobusgreyling/loop-engineering) for the loop side.