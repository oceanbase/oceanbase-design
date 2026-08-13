#!/usr/bin/env node
/**
 * Write result files for vibe-tests LLM agent runs
 * Usage: node write-agent-result.mjs <iteration> <config> <promptId> <code.tsx path>
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluate, writeResult } from './evaluate.mjs';

const [iteration, config, promptId, codePath] = process.argv.slice(2);
if (!iteration || !config || !promptId) {
  console.error('Usage: write-agent-result.mjs <iteration> <config> <promptId> [codeFile]');
  process.exit(1);
}

const vibeRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const task = JSON.parse(
  readFileSync(join(vibeRoot, 'results', iteration, 'tasks', `${promptId}.json`), 'utf8'),
);
const code = codePath && existsSync(codePath)
  ? readFileSync(codePath, 'utf8')
  : readFileSync(0, 'utf8');

const resultsDir = join(vibeRoot, 'results', iteration, 'results');
writeResult(resultsDir, task, config, code);
const ev = evaluate(code, task);
console.log(JSON.stringify({ promptId, config, success: ev.success, escapeHatches: ev.escapeHatches }));
