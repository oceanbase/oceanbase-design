/**
 * @input antd CLI demo list / demo stdout
 * @output parsed demo id or TS source (tests only — ob_demo uses local files)
 */

/** Extract TS/TSX source from antd demo output (skips header lines). */
export function extractDemoSource(stdout) {
  const lines = stdout.split('\n');
  const importIdx = lines.findIndex((l) => /^import\s/.test(l.trim()));
  if (importIdx >= 0) return lines.slice(importIdx).join('\n').trim();
  return stdout.trim();
}

/** Parse `  basic — Title` lines from antd demo list output. */
export function parseDemoList(stdout) {
  const demos = [];
  for (const line of stdout.split('\n')) {
    const m = line.match(/^\s{2}(\S+)\s+—\s+(.+)$/);
    if (m) demos.push({ id: m[1], title: m[2].trim() });
  }
  return demos;
}
