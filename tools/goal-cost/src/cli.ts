#!/usr/bin/env node
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  estimateCost,
  formatEstimateHuman,
  type MaturityLevel,
  type RegistryDoc,
} from './estimator.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(__dirname, '..');

function parseArgs(argv: string[]) {
  let pattern = 'tests-green';
  let level: MaturityLevel = 'G2';
  let json = false;
  let list = false;

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--pattern' || a === '-p') pattern = argv[++i];
    else if (a === '--level' || a === '-l') level = argv[++i] as MaturityLevel;
    else if (a === '--json') json = true;
    else if (a === '--list') list = true;
    else if (a === '--help' || a === '-h') return { help: true as const };
  }

  return { help: false as const, pattern, level, json, list };
}

async function loadRegistry(): Promise<RegistryDoc> {
  const candidates = [
    path.join(PACKAGE_ROOT, 'registry.json'),
    path.resolve(PACKAGE_ROOT, '../../patterns/registry.yaml'),
  ];

  for (const p of candidates) {
    try {
      await access(p);
      const raw = await readFile(p, 'utf8');
      if (p.endsWith('.json')) return JSON.parse(raw) as RegistryDoc;
      const { parse } = await import('yaml');
      return parse(raw) as RegistryDoc;
    } catch {
      /* try next */
    }
  }
  throw new Error('Pattern registry not found. Install @cobusgreyling/goal-cost or run from goal-engineering repo.');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log(`goal-cost — estimate token spend for /goal sessions

Usage:
  goal-cost --pattern <id> [options]

Options:
  -p, --pattern <id>     Pattern id (default: tests-green)
  -l, --level <G1|G2|G3> Assumed maturity (default: G2)
  --json                 Machine-readable output
  --list                 List pattern ids
  -h, --help             This help

Examples:
  goal-cost --pattern fix-bug --level G2
  goal-cost --pattern migrate-module --level G1 --json
  goal-cost --list
`);
    process.exit(0);
  }

  const registry = await loadRegistry();

  if (args.list) {
    for (const p of registry.patterns) {
      console.log(`${p.id}\t${p.maturity}\t${p.title}`);
    }
    return;
  }

  const pattern = registry.patterns.find((p) => p.id === args.pattern);
  if (!pattern) {
    console.error(`Unknown pattern: ${args.pattern}. Use --list for ids.`);
    process.exit(1);
  }

  const result = estimateCost({ pattern, level: args.level });
  if (args.json) console.log(JSON.stringify(result, null, 2));
  else console.log(formatEstimateHuman(result));
}

main().catch((err: unknown) => {
  const msg = err instanceof Error ? err.message : String(err);
  console.error('goal-cost failed:', msg);
  process.exit(1);
});