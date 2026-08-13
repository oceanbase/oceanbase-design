import { loadConstraintsYaml } from '../lib/metadata.mjs';

export function constraintCommand({ dense, json }) {
  const yaml = loadConstraintsYaml();
  if (json) {
    console.log(JSON.stringify({ constraints: yaml }, null, 2));
    return;
  }
  if (dense) {
    console.log(yaml);
    return;
  }
  console.log(yaml);
}
