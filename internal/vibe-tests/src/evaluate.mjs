/**
 * Shared evaluation + result I/O for vibe-tests
 */
import { writeFileSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export function evaluate(code, prompt) {
  const escapeHatches = [];
  const componentsUsed = [];
  let success = true;

  if (/from\s+['"]antd['"]/.test(code)) {
    escapeHatches.push('antd-import');
    success = false;
  }
  if (/from\s+['"]@ant-design\/icons/.test(code)) {
    escapeHatches.push('antd-icons');
    success = false;
  }
  if (/from\s+['"]@ant-design\/pro-components['"]/.test(code)) {
    escapeHatches.push('pro-components-import');
    success = false;
  }
  if (/Filter/.test(code)) componentsUsed.push('Filter');
  if (/innerBordered/.test(code)) componentsUsed.push('innerBordered');
  if (/ConfigProvider/.test(code)) componentsUsed.push('ConfigProvider');
  if (/@oceanbase\/design/.test(code)) componentsUsed.push('@oceanbase/design');
  if (/@oceanbase\/icons/.test(code)) componentsUsed.push('@oceanbase/icons');
  if (/toolOptionsRender/.test(code)) componentsUsed.push('toolOptionsRender');
  if (/isAliyun/.test(code)) componentsUsed.push('isAliyun');

  if (prompt.category === 'filter' && !/Filter/.test(code) && prompt.id !== 'light-filter-bar') {
    escapeHatches.push('missing-filter');
    success = false;
  }
  if (prompt.id === 'light-filter-bar' && !/LightFilter/.test(code)) {
    escapeHatches.push('missing-light-filter');
    success = false;
  }
  if (prompt.category === 'card-table' && /<Table/.test(code) && !/innerBordered/.test(code)) {
    escapeHatches.push('missing-inner-bordered');
    success = false;
  }
  if (prompt.category === 'config' && !/ConfigProvider/.test(code)) {
    escapeHatches.push('missing-config-provider');
    success = false;
  }
  if (prompt.id === 'ob-icons-button' && !/@oceanbase\/icons/.test(code)) {
    escapeHatches.push('wrong-icon-package');
    success = false;
  }
  if (prompt.id === 'protable-vs-table' && /<ProTable/.test(code)) {
    escapeHatches.push('protable-overuse');
    success = false;
  }
  if (prompt.id === 'table-batch-actions' && !/toolOptionsRender/.test(code)) {
    escapeHatches.push('missing-tool-options');
    success = false;
  }
  if (prompt.id === 'config-aliyun-theme' && !/isAliyun/.test(code)) {
    escapeHatches.push('missing-isAliyun');
    success = false;
  }

  return { success, componentsUsed, escapeHatches };
}

export function writeResult(outDir, prompt, config, code) {
  const evaluation = evaluate(code, prompt);
  const meta = {
    id: `${config}-${prompt.id}`,
    timestamp: new Date().toISOString(),
    config,
    promptId: prompt.id,
    promptCategory: prompt.category,
    prompt: prompt.prompt,
    evaluation,
    response: code,
  };
  writeFileSync(join(outDir, `${config}-${prompt.id}.json`), JSON.stringify(meta, null, 2));
  writeFileSync(join(outDir, `${config}-${prompt.id}.tsx`), code);
  return evaluation;
}

export function aggregateDir(resultsDir) {
  const summary = {
    total: 0,
    success: 0,
    byConfig: {},
    byCategory: {},
    failures: [],
  };
  const files = readdirSync(resultsDir).filter((f) => f.endsWith('.json'));
  for (const f of files) {
    const r = JSON.parse(readFileSync(join(resultsDir, f), 'utf8'));
    summary.total++;
    if (r.evaluation?.success) summary.success++;
    else {
      summary.failures.push({
        id: r.id,
        config: r.config,
        promptId: r.promptId,
        escapeHatches: r.evaluation?.escapeHatches,
      });
    }
    const cfg = r.config || 'unknown';
    summary.byConfig[cfg] = summary.byConfig[cfg] || { total: 0, success: 0 };
    summary.byConfig[cfg].total++;
    if (r.evaluation?.success) summary.byConfig[cfg].success++;
    const cat = r.promptCategory || 'unknown';
    summary.byCategory[cat] = summary.byCategory[cat] || { total: 0, success: 0 };
    summary.byCategory[cat].total++;
    if (r.evaluation?.success) summary.byCategory[cat].success++;
  }
  return summary;
}

export function compareConfigs(summary, baseKey = 'baseline-antd', obKey = 'ob-mcp-only') {
  const base = summary.byConfig[baseKey];
  const ob = summary.byConfig[obKey];
  if (!base || !ob) return null;
  const baseRate = base.total ? base.success / base.total : 0;
  const obRate = ob.total ? ob.success / ob.total : 0;
  const lift = baseRate === 0 ? (obRate > 0 ? 100 : 0) : ((obRate - baseRate) / baseRate) * 100;
  return { baseKey, obKey, baseRate, obRate, lift };
}
