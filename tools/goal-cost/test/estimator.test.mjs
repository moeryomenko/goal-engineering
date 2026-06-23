import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateCost } from '../dist/estimator.js';

test('estimateCost returns scenarios for a pattern', () => {
  const result = estimateCost({
    pattern: {
      id: 'tests-green',
      title: 'Tests Green',
      maturity: 'G2',
      cost: { typical_turns: 20, tokens_per_turn: 80_000, max_turns: 30, verifier_turns: 3 },
    },
    level: 'G2',
  });
  assert.equal(result.patternId, 'tests-green');
  assert.ok(result.scenarios.typical.tokens > result.scenarios.optimistic.tokens);
  assert.ok(result.scenarios.worst.tokens >= result.scenarios.typical.tokens);
});