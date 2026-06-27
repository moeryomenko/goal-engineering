# Operating Goals

Day-to-day playbook for goal mode. These commands work in Grok Build, OpenCode, and other tools that support the goal lifecycle.

## Starting a Goal

1. Write or update `GOAL.md` with objective, done condition, deny list
2. Run `npx @cobusgreyling/goal-audit .` if first time
3. Set the goal:

```
/goal Read GOAL.md. Work toward the active objective. Log progress with update_goal.
Run tests after each meaningful change. Use goal-verifier before completed: true.
```

## During Execution

| Action | Command / practice |
|--------|------------------|
| Check status | `/goal status` |
| Pause for meeting | `/goal pause` |
| Resume | `/goal resume` |
| Agent stuck (needs you) | Read `blocked_reason` from status; fix; `/goal resume` |
| Abort | `/goal clear` |

## Ending a Goal

**Success:** agent calls `update_goal(completed: true, message: "...")` after verifier PASS.

**Human wrap-up:**

1. Review diff
2. Append final note to `GOAL.md` progress log
3. `/goal clear` if still active
4. Optional: log in `goal-run-log.md`

## Handoff from Loops

When [loop engineering](https://github.com/cobusgreyling/loop-engineering) surfaces work:

```
/goal Read STATE.md item "[title]". Complete per patterns/fix-bug.md.
Update GOAL.md. Verifier required.
```

## Multi-goal Discipline

One active `/goal` per session. Finish or clear before starting another. Queue next objectives in `GOAL.md` under `## Backlog`.