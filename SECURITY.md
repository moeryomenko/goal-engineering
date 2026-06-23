# Security Policy

Goal engineering runs persistent agent work against your codebase. Treat `/goal` sessions like production operators.

## Reporting vulnerabilities

Report security issues **privately** — do not open public issues for exploitable vulnerabilities.

- **Preferred:** [GitHub private vulnerability reporting](https://github.com/cobusgreyling/goal-engineering/security/advisories/new)
- **Email:** security@cobusgreyling.me (PGP on request)

For operational safety guidance, see [docs/safety.md](docs/safety.md).

## Unattended goal risks

| Risk | Mitigation |
|------|------------|
| Agent marks done without verification | `goal-verifier` skill; no `completed: true` before PASS |
| Scope creep across turns | `GOAL.md` deny list; `goal-scoper` before large `/goal` |
| Secret exfiltration via prompts | Denylist `.env`, credentials paths; never log secrets in `GOAL.md` |
| Endless turns burning budget | `goal-budget.md` turn caps; `/goal pause` kill switch |
| Destructive changes in prod paths | Deny list in `AGENTS.md` and `GOAL.md` |

## Recommended gates before G3

- [ ] `goal-verifier` runs independently of implementer
- [ ] Test command documented and run before completion
- [ ] `goal-run-log.md` or equivalent observability
- [ ] Human review for npm publish, IAM, and org settings

## Supported versions

| Package | Supported |
|---------|-----------|
| `@cobusgreyling/goal-audit` | Latest release on npm |
| `@cobusgreyling/goal-init` | Latest release on npm |
| `@cobusgreyling/goal-cost` | Latest release on npm |
| Reference repo `main` | Current HEAD |