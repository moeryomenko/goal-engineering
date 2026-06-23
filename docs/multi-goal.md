# Multi-Goal Coordination

When more than one objective competes for agent attention.

## One active goal per session

Grok Build goal mode tracks **one** persistent objective. Queue others in `GOAL.md` Backlog or separate branches.

## Sequential goals

```
/goal Phase 1: migrate auth module per GOAL.md phase-1 section.
```

After verifier PASS and `/goal clear`:

```
/goal Phase 2: delete legacy/auth per GOAL.md phase-2 section.
```

## Parallel goals (different worktrees)

| Goal | Worktree | State file |
|------|----------|------------|
| Fix bug #12 | `wt-bug-12` | `GOAL-bug-12.md` |
| Tests green on `feat/x` | `wt-feat-x` | `GOAL-feat-x.md` |

Use isolated worktrees so goals do not stomp the same files.

## Loop discovers, goal finishes

```
/loop 1d Run loop-triage. Update STATE.md. No auto-fix.
```

When `STATE.md` has a bounded fix:

```
/goal Read STATE.md top priority. Complete using patterns/fix-bug.md. goal-verifier before done.
```

## Conflicts

| Conflict | Resolution |
|----------|------------|
| Two goals same file | Serialize; or worktrees |
| Goal + human editing | `/goal pause` until human commits |
| Goal + scheduled loop | Loop report-only while goal active |

See [goal-vs-loop.md](goal-vs-loop.md) and [loop-engineering multi-loop](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/multi-loop.md).