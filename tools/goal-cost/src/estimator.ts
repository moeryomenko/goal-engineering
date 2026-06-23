export type MaturityLevel = 'G1' | 'G2' | 'G3';

export interface PatternCost {
  typical_turns: number;
  tokens_per_turn: number;
  max_turns: number;
  verifier_turns: number;
}

export interface RegistryPattern {
  id: string;
  title: string;
  maturity: string;
  cost?: PatternCost;
}

export interface RegistryDoc {
  version: number;
  patterns: RegistryPattern[];
}

export interface EstimateInput {
  pattern: RegistryPattern;
  level: MaturityLevel;
}

export interface EstimateResult {
  patternId: string;
  patternTitle: string;
  maturity: string;
  level: MaturityLevel;
  typicalTurns: number;
  maxTurns: number;
  tokensPerTurn: number;
  verifierTurns: number;
  scenarios: {
    optimistic: { turns: number; tokens: number };
    typical: { turns: number; tokens: number };
    worst: { turns: number; tokens: number };
  };
  warnings: string[];
}

const LEVEL_MULTIPLIER: Record<MaturityLevel, number> = {
  G1: 1.3,
  G2: 1.0,
  G3: 0.85,
};

export function estimateCost(input: EstimateInput): EstimateResult {
  const { pattern, level } = input;
  const cost = pattern.cost ?? {
    typical_turns: 15,
    tokens_per_turn: 80_000,
    max_turns: 30,
    verifier_turns: 3,
  };

  const mult = LEVEL_MULTIPLIER[level];
  const typicalTurns = Math.round(cost.typical_turns * mult);
  const maxTurns = cost.max_turns;
  const tokensPerTurn = cost.tokens_per_turn;
  const verifierTurns = cost.verifier_turns;

  const turnTokens = (turns: number) => turns * tokensPerTurn + verifierTurns * tokensPerTurn * 0.5;

  const warnings: string[] = [];
  if (maxTurns > 40) warnings.push('High turn cap — set /goal pause and goal-budget.md kill switch');
  if (tokensPerTurn > 100_000) warnings.push('Large context per turn — narrow scope with goal-scoper first');

  return {
    patternId: pattern.id,
    patternTitle: pattern.title,
    maturity: pattern.maturity,
    level,
    typicalTurns,
    maxTurns,
    tokensPerTurn,
    verifierTurns,
    scenarios: {
      optimistic: { turns: Math.max(3, Math.round(typicalTurns * 0.5)), tokens: turnTokens(Math.max(3, Math.round(typicalTurns * 0.5))) },
      typical: { turns: typicalTurns, tokens: turnTokens(typicalTurns) },
      worst: { turns: maxTurns, tokens: turnTokens(maxTurns) },
    },
    warnings,
  };
}

export function formatEstimateHuman(result: EstimateResult): string {
  const fmt = (n: number) => (n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1000 ? `${Math.round(n / 1000)}k` : String(n));
  const lines = [
    `Goal cost estimate: ${result.patternTitle} (${result.patternId})`,
    `Registry maturity: ${result.maturity} · Assumed level: ${result.level}`,
    '',
    `Typical turns: ${result.typicalTurns} (max ${result.maxTurns})`,
    `~${fmt(result.tokensPerTurn)} tokens/turn + ${result.verifierTurns} verifier passes`,
    '',
    'Scenarios:',
    `  Optimistic: ${result.scenarios.optimistic.turns} turns → ~${fmt(result.scenarios.optimistic.tokens)} tokens`,
    `  Typical:    ${result.scenarios.typical.turns} turns → ~${fmt(result.scenarios.typical.tokens)} tokens`,
    `  Worst case: ${result.scenarios.worst.turns} turns → ~${fmt(result.scenarios.worst.tokens)} tokens`,
  ];
  if (result.warnings.length) {
    lines.push('', 'Warnings:', ...result.warnings.map((w) => `  ⚠ ${w}`));
  }
  return lines.join('\n');
}