# Minimal Goal Starter

Clone this into your project to run your first **verified goal** (G1–G2 readiness).

## Quick Start

```bash
cp -r starters/minimal-goal/.grok/skills/goal-verifier .grok/skills/
cp starters/minimal-goal/GOAL.md.example GOAL.md
# Edit GOAL.md with your objective
```

In Grok Build:

```
/goal Read GOAL.md. Work the active objective. update_goal for milestones.
Run tests after changes. goal-verifier before completed: true.
```

## What's Included

| File | Purpose |
|------|---------|
| `GOAL.md.example` | State spine template |
| `.grok/skills/goal-verifier/SKILL.md` | Independent verifier |

## Next Steps

- [Goal Design Checklist](../../docs/goal-design-checklist.md)
- [Pattern Picker](../../docs/pattern-picker.md)
- `npx @cobusgreyling/goal-audit . --suggest`