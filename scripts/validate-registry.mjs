#!/usr/bin/env node
/**
 * Validates patterns/registry.yaml: required fields, file/starter alignment.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ID_RE = /^[a-z][a-z0-9-]*$/;

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  process.exit(1);
}

function validatePattern(p, index) {
  const prefix = `patterns[${index}]`;
  for (const key of ['id', 'title', 'file', 'maturity', 'verifier', 'starter', 'cost']) {
    if (!(key in p)) fail(`${prefix} missing required field: ${key}`);
  }
  if (!ID_RE.test(p.id)) fail(`${prefix}.id invalid: ${p.id}`);
  if (!p.file.endsWith('.md')) fail(`${prefix}.file must be .md`);
  for (const ck of ['typical_turns', 'tokens_per_turn', 'max_turns', 'verifier_turns']) {
    if (typeof p.cost[ck] !== 'number' || p.cost[ck] < 1) {
      fail(`${prefix}.cost.${ck} must be a positive number`);
    }
  }
}

async function main() {
  const registryPath = path.join(ROOT, 'patterns', 'registry.yaml');
  const doc = yaml.parse(await readFile(registryPath, 'utf8'));
  if (!doc?.patterns?.length) fail('registry.yaml must have patterns array');

  doc.patterns.forEach(validatePattern);

  const ids = new Set();
  for (const p of doc.patterns) {
    if (ids.has(p.id)) fail(`duplicate pattern id: ${p.id}`);
    ids.add(p.id);

    const mdPath = path.join(ROOT, 'patterns', p.file);
    try {
      await readFile(mdPath, 'utf8');
    } catch {
      fail(`registry entry ${p.id} references missing file: patterns/${p.file}`);
    }

    try {
      await stat(path.join(ROOT, p.starter));
    } catch {
      fail(`registry entry ${p.id} references missing starter: ${p.starter}`);
    }
  }

  const mdFiles = (await readdir(path.join(ROOT, 'patterns')))
    .filter((f) => f.endsWith('.md') && f !== 'README.md');
  const registered = new Set(doc.patterns.map((p) => p.file.replace(/\.md$/, '')));

  for (const f of mdFiles) {
    const base = f.replace(/\.md$/, '');
    if (!registered.has(base)) fail(`pattern file not in registry: ${f}`);
  }

  console.log(`Registry valid: ${doc.patterns.length} patterns ✓`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});