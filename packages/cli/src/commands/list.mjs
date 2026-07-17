import { listComponents } from '../lib/metadata.mjs';

export function listCommand({ dense, json }) {
  const items = listComponents().sort((a, b) => a.name.localeCompare(b.name));

  if (json) {
    console.log(JSON.stringify(items, null, 2));
    return;
  }

  if (dense) {
    for (const c of items) {
      console.log(`${c.name}\t${c.package}\t${c.diffLevel}`);
    }
    return;
  }

  const byPackage = {};
  for (const c of items) {
    byPackage[c.package] = byPackage[c.package] || [];
    byPackage[c.package].push(c);
  }

  for (const [pkg, comps] of Object.entries(byPackage)) {
    console.log(`\n${pkg}`);
    for (const c of comps) {
      console.log(`  ${c.name} (${c.diffLevel})`);
    }
  }
}
