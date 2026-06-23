# Primitives Matrix — Goal Mode Across Tools

Tool-agnostic goal design: the **capability** matters, not the product name.

| Primitive | Job in a Goal | Grok Build | Claude Code | Codex | Cursor |
|-----------|---------------|------------|-------------|-------|--------|
| **Set objective** | Define run-until-done work | `/goal <objective>` | `/goal` | `/goal` | Agent + explicit stop condition in prompt |
| **Progress telemetry** | Log without chat noise | `update_goal` tool | Goal progress APIs / state files | Goal mode + state | Hooks + state files |
| **Pause / resume** | Human control | `/goal pause` / `resume` | `/goal pause` / `resume` | Pause/resume | Manual session control |
| **Verifier** | Independent done check | `goal-verifier` skill + `Task` subagent | Reviewer agent | Verifier subagent | Review mode / second agent |
| **State** | Survive compaction | `GOAL.md` | `GOAL.md` / progress files | Markdown state | `GOAL.md` |
| **Worktrees** | Safe parallel attempts | `Task` with worktree isolation | `git worktree` | Built-in worktree | Cloud agent worktree |
| **Skills** | Scoping + verification | `.grok/skills/` | `.claude/skills/` | `.codex/skills/` | `.cursor/skills/` |

## Scheduling vs Goals

| Use case | Grok | Claude Code | Codex |
|----------|------|-------------|-------|
| Run until tests pass | `/goal all tests pass` | `/goal` | `/goal` |
| Daily triage | `/loop 1d` | `/loop` | Automations |
| Hand off triage → finish | Loop writes `STATE.md` → `/goal` top item | Same | Same |

## Recommended Grok Stack

```
/goal <objective with done condition>
  + GOAL.md (state)
  + goal-verifier skill (checker)
  + AGENTS.md (project rules)
  + npm test / pytest (objective gate)
```

Audit after setup: `npx @cobusgreyling/goal-audit . --suggest`