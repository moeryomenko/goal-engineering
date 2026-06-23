# Goal Design Checklist

Ship-readiness rubric before enabling unattended goals.

## G0 — Ad hoc (score < 40)

- [ ] You use `/goal` manually
- [ ] No `GOAL.md` or verifier
- **Risk:** agent declares done prematurely

## G1 — Assisted (40–59)

- [ ] `GOAL.md` with objective + done condition
- [ ] Test command documented in `AGENTS.md`
- [ ] Human reviews before merge
- [ ] `/goal` objectives include verifiable done text

## G2 — Verified (60–79)

- [ ] `goal-verifier` skill (or reviewer sub-agent)
- [ ] Implementer instructed: no `completed: true` before verifier PASS
- [ ] Progress logged in `GOAL.md` each session
- [ ] `goal-budget.md` with turn/token guidance

## G3 — Production (80+)

- [ ] CI runs on goal branches / worktrees
- [ ] Deny list for high-risk paths in `AGENTS.md`
- [ ] Documented handoff from loops (`STATE.md` → `/goal`)
- [ ] `goal-run-log.md` or equivalent observability
- [ ] At least one successful goal completion recorded

Run: `npx @cobusgreyling/goal-audit .` for automated scoring.