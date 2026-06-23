# Failure Modes

| Symptom | Likely cause | Recovery |
|---------|--------------|----------|
| Agent marks done too early | Weak done condition | Add tests + goal-verifier; tighten `/goal` text |
| Goal "forgets" objective after compact | No `GOAL.md` | Mirror `/goal` in `GOAL.md`; agent reads each turn |
| Endless turns, no progress | Objective too large | Split into smaller goals; use Plan mode first |
| `blocked_reason` on first error | Agent too eager to block | Instruct: try 3+ approaches before blocking |
| Chat flooded with progress | Not using `update_goal` | Remind agent: milestones → `update_goal(message)` only |
| Loop and goal fight | Same file, two automations | Loop triages only; goal executes one item |
| `/goal` not in command list | Feature disabled or tool missing | Ensure goal feature enabled; `update_goal` in toolset |

## Incident Playbook

1. `/goal pause`
2. Read `GOAL.md` + last agent diff
3. Fix environment (credentials, flaky test, deny list)
4. Update `GOAL.md` with human decision
5. `/goal resume` or `/goal clear` + new narrower objective