#!/usr/bin/env bash
# Demonstrates goal readiness scores: empty → starter → verifier + budget.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AUDIT="$ROOT/tools/goal-audit/dist/cli.js"
INIT="$ROOT/tools/goal-init/dist/cli.js"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [[ ! -f "$AUDIT" ]]; then
  echo "Building goal-audit..."
  (cd "$ROOT/tools/goal-audit" && npm ci --silent && npm run build --silent)
fi
if [[ ! -f "$INIT" ]]; then
  echo "Building goal-init..."
  (cd "$ROOT/tools/goal-init" && npm ci --silent && npm run build --silent)
fi

run_audit() {
  local label="$1"
  local path="$2"
  echo ""
  echo "══════════════════════════════════════════════════"
  echo "$label"
  echo "══════════════════════════════════════════════════"
  node "$AUDIT" "$path" --suggest || true
}

echo "Goal Readiness — before/after demo"
echo "Temp project: $TMP"

run_audit "Stage 0 — empty project (baseline)" "$TMP"

node "$INIT" --pattern tests-green --tool grok "$TMP" >/dev/null
run_audit "Stage 1 — after goal-init tests-green" "$TMP"

echo ""
echo "Done. Scaffold your project:"
echo "  npx @cobusgreyling/goal-init . --pattern tests-green --tool grok"
echo "  npx @cobusgreyling/goal-audit . --suggest"