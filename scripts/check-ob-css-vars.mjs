#!/usr/bin/env node
/**
 * @input git-tracked style/script files, or an explicit file list (lint-staged)
 * @output exit 0 when every var(--ob-*) name exists in the runtime token list
 * @position lint-staged + CI guard for ob-css-var-valid, ob-space-not-padding, ob-token-not-antd
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JS_EXTENSIONS, STYLE_EXTENSIONS, scanCssVarUsage } from '../packages/cli/src/lib/css-tokens.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const EXTENSIONS = [...STYLE_EXTENSIONS, ...JS_EXTENSIONS];
// The codemod swaps antd variables for --ob-* ones, so it legitimately mentions var(--ant-*).
const IGNORED_PREFIXES = ['packages/codemod/'];
const MAX_REPORTED = 50;

function gitTrackedFiles() {
  const out = execFileSync('git', ['ls-files', '-z', ...EXTENSIONS.map((ext) => `*${ext}`)], {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  return out.split('\0').filter(Boolean);
}

function toRepoPath(file) {
  return relative(root, resolve(file)).split(sep).join('/');
}

function isScannable(relPath) {
  if (IGNORED_PREFIXES.some((prefix) => relPath.startsWith(prefix))) return false;
  const ext = relPath.slice(relPath.lastIndexOf('.'));
  return EXTENSIONS.includes(ext) && existsSync(join(root, relPath));
}

const targets = (process.argv.slice(2).length ? process.argv.slice(2).map(toRepoPath) : gitTrackedFiles()).filter(
  isScannable,
);

const issues = [];
for (const relPath of targets) {
  issues.push(...scanCssVarUsage(readFileSync(join(root, relPath), 'utf8'), relPath));
}

if (issues.length > 0) {
  console.error('check:ob-css-vars failed:\n');
  for (const issue of issues.slice(0, MAX_REPORTED)) {
    console.error(`  - ${issue.file}:${issue.line}: ${issue.message}`);
  }
  if (issues.length > MAX_REPORTED) {
    console.error(`  ... and ${issues.length - MAX_REPORTED} more`);
  }
  process.exit(1);
}

console.log(`check:ob-css-vars passed (${targets.length} files)`);
