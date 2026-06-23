# Story: Mega-Goal Failure (Honest)

**Pattern:** N/A — anti-pattern  
**Maturity:** G0 → learned G1

## Objective (too broad)

```
/goal Refactor the entire API layer, add v2 endpoints, update all clients, and document everything.
```

## What went wrong

- No verifiable done condition — agent declared "mostly done" at turn 40
- No `GOAL.md` — objective lost after compaction; agent re-scoped mid-session
- No verifier — implementer self-graded
- `/goal pause` at turn 55 with partial migrations and broken tests

## Recovery

1. `/goal clear`
2. `goal-scoper` produced three sequential goals
3. Restarted with [implement-feature.md](../patterns/implement-feature.md) for **one** endpoint
4. Added `goal-verifier` — PASS on scoped goal in 12 turns

## Lesson

Split before `/goal`. One bounded objective beats one heroic prompt.