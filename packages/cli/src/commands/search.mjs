import { listComponents } from '../lib/metadata.mjs';

export function searchCommand(query, { dense, json }) {
  const q = query.toLowerCase();
  const hits = listComponents().filter((c) => {
    const hay = [c.name, c.package, ...(c.keywords || []), ...(c.addedProps || [])]
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  });

  if (json) {
    console.log(JSON.stringify(hits, null, 2));
    return;
  }
  if (dense) {
    hits.forEach((h) => console.log(`${h.name}\t${h.package}`));
    return;
  }
  console.log(JSON.stringify(hits, null, 2));
}
