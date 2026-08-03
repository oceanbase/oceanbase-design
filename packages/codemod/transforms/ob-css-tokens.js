const path = require('path');
const fs = require('fs');
const isDirectory = require('is-directory');
const { shouldExcludePath } = require('./utils/path-utils');

const STYLE_EXTS = new Set(['.scss', '.css', '.less']);
const CODE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx']);

function findHintsFile() {
  const names = ['metadata/css-token-migration-hints.yaml', 'css-token-migration-hints.yaml'];
  let dir = process.cwd();
  while (true) {
    for (const name of names) {
      const candidate = path.join(dir, name);
      if (fs.existsSync(candidate)) return candidate;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  const fallback = path.join(__dirname, '../../../metadata/css-token-migration-hints.yaml');
  if (fs.existsSync(fallback)) return fallback;
  throw new Error('css-token-migration-hints.yaml not found');
}

function loadMigrationHints() {
  const hintsFile = findHintsFile();

  const raw = fs.readFileSync(hintsFile, 'utf8');
  const hints = {};
  let inHints = false;
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (trimmed === 'hints:') {
      inHints = true;
      continue;
    }
    if (trimmed === 'rules:') break;
    if (!inHints || !trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^(--ob-[a-z0-9-]+):\s*(--ob-[a-z0-9-]+)\s*$/);
    if (match) hints[match[1]] = match[2];
  }
  return hints;
}

function transformContent(content, hints) {
  let next = content;
  let changed = false;
  const entries = Object.entries(hints).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of entries) {
    const re = new RegExp(
      `var\\(\\s*${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=[\\s,)])`,
      'g'
    );
    if (re.test(next)) {
      next = next.replace(re, `var(${to}`);
      changed = true;
    }
  }
  return { content: next, changed };
}

function collectFiles(dir) {
  const files = [];
  const walk = current => {
    if (shouldExcludePath(current)) return;
    if (isDirectory.sync(current)) {
      for (const entry of fs.readdirSync(current)) {
        walk(path.join(current, entry));
      }
      return;
    }
    const ext = path.extname(current);
    if (STYLE_EXTS.has(ext) || CODE_EXTS.has(ext)) {
      files.push(current);
    }
  };
  walk(dir);
  return files;
}

async function obCssTokens(filePath, { dry } = {}) {
  const hints = loadMigrationHints();
  const targets = isDirectory.sync(filePath) ? collectFiles(filePath) : [filePath];
  let changedFiles = 0;

  for (const file of targets) {
    const original = fs.readFileSync(file, 'utf8');
    const { content, changed } = transformContent(original, hints);
    if (changed) {
      changedFiles += 1;
      if (!dry) {
        fs.writeFileSync(file, content, 'utf8');
      }
      console.log(`${dry ? '[dry] ' : ''}updated ${file}`);
    }
  }

  console.log(`ob-css-tokens: ${changedFiles} file(s) ${dry ? 'would be ' : ''}updated`);
}

module.exports = { obCssTokens, loadMigrationHints, transformContent };
