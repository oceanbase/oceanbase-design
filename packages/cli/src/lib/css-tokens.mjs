import { readFileSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdirSync, statSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

let _cssVarsData;
let _migrationHints;

function metadataPath(name) {
  return join(__dirname, '../metadata', name);
}

export function loadCssVarsData() {
  if (!_cssVarsData) {
    _cssVarsData = JSON.parse(readFileSync(metadataPath('obToken.css-vars.json'), 'utf8'));
  }
  return _cssVarsData;
}

export function loadValidCssTokens() {
  return new Set(loadCssVarsData().tokens);
}

/** Minimal parser for css-token-migration-hints.yaml */
export function loadMigrationHints() {
  if (!_migrationHints) {
    const raw = readFileSync(metadataPath('css-token-migration-hints.yaml'), 'utf8');
    const hints = {};
    const rules = [];
    let section = null;
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      if (trimmed === 'hints:') {
        section = 'hints';
        continue;
      }
      if (trimmed === 'rules:') {
        section = 'rules';
        continue;
      }
      if (section === 'hints') {
        const match = trimmed.match(/^(--ob-[a-z0-9-]+):\s*(--ob-[a-z0-9-]+)\s*$/);
        if (match) hints[match[1]] = match[2];
      } else if (section === 'rules' && trimmed.startsWith('- ')) {
        rules.push(trimmed.slice(2).replace(/^"|"$/g, ''));
      }
    }
    _migrationHints = { hints, rules };
  }
  return _migrationHints;
}

export function normalizeTokenName(input) {
  if (!input) return null;
  const trimmed = input.trim();
  const varMatch = trimmed.match(/^var\(\s*(--ob-[a-z0-9-]+)/);
  if (varMatch) return varMatch[1];
  if (trimmed.startsWith('--ob-')) return trimmed.split(/[\s,)]/)[0];
  return null;
}

export function checkCssToken(name) {
  const token = normalizeTokenName(name) || name;
  const valid = loadValidCssTokens();
  const { hints, rules } = loadMigrationHints();

  if (valid.has(token)) {
    return { valid: true, token, rules };
  }

  return {
    valid: false,
    token,
    hint: hints[token] ?? null,
    rules,
  };
}

const OB_VAR_RE = /var\(\s*(--ob-[a-z0-9-]+)/g;
const ANT_VAR_RE = /var\(\s*(--ant-[a-z0-9-]+)/g;

function formatIssue({ file, line, column, ruleId, message, token, hint }) {
  return { file, line, column, ruleId, message, token, hint: hint ?? null };
}

export function scanCssVarUsage(content, file) {
  const issues = [];
  const valid = loadValidCssTokens();
  const { hints } = loadMigrationHints();
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNo = i + 1;

    for (const match of line.matchAll(ANT_VAR_RE)) {
      const token = match[1];
      const column = match.index + 1;
      issues.push(
        formatIssue({
          file,
          line: lineNo,
          column,
          ruleId: 'ob-token-not-antd',
          token,
          message: `${token} — use obToken or var(--ob-*), not antd CSS variables`,
        }),
      );
    }

    for (const match of line.matchAll(OB_VAR_RE)) {
      const token = match[1];
      const column = match.index + 1;

      if (/^--ob-(padding|margin)-/.test(token)) {
        const hint = hints[token] ?? null;
        issues.push(
          formatIssue({
            file,
            line: lineNo,
            column,
            ruleId: 'ob-space-not-padding',
            token,
            hint,
            message: hint
              ? `${token} — use --ob-space-* for spacing → ${hint}`
              : `${token} — use --ob-space-* for spacing, not --ob-padding-* / --ob-margin-*`,
          }),
        );
        continue;
      }

      if (!valid.has(token)) {
        const hint = hints[token] ?? null;
        issues.push(
          formatIssue({
            file,
            line: lineNo,
            column,
            ruleId: 'ob-css-var-valid',
            token,
            hint,
            message: hint
              ? `var(${token}) is not a runtime token → use ${hint}`
              : `var(${token}) is not a runtime token — run ob-design token --check ${token}`,
          }),
        );
      }
    }
  }

  return issues;
}

export const STYLE_EXTENSIONS = new Set(['.scss', '.css', '.less']);
export const JS_EXTENSIONS = new Set(['.tsx', '.ts', '.jsx', '.js']);

export function walkFiles(dir, extensions, files = []) {
  if (!statSync(dir).isDirectory()) return files;
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (entry !== 'node_modules' && entry !== 'dist' && entry !== 'es' && entry !== 'lib') {
        walkFiles(p, extensions, files);
      }
    } else if (extensions.has(extname(p))) {
      files.push(p);
    }
  }
  return files;
}

export function buildTokenPayload({ dense = false } = {}) {
  const data = loadCssVarsData();
  const { hints, rules } = loadMigrationHints();
  return {
    source: data.source,
    metaSource: data.metaSource,
    count: data.count,
    tokens: data.tokens,
    categories: data.categories,
    entries: data.entries,
    migrationHints: hints,
    rules,
    usage: 'Prefer obToken or var(--ob-*) over hardcoded values; run ob-design token --check <name>',
  };
}
