import { getComponent, loadExtractedProps } from '../lib/metadata.mjs';
import { mergeObInfo } from '../normalize/merge.mjs';
import { antdInfo } from '../delegate/antd-cli.mjs';

export async function infoCommand(name, { dense, json }) {
  const meta = getComponent(name);
  if (!meta) {
    throw new Error(`Unknown component: ${name}. Run "ob-design list".`);
  }

  let antdBase = null;
  if (meta.delegateAntd && meta.extendsAntd) {
    antdBase = await antdInfo(meta.extendsAntd, { cwd: process.cwd() });
  }

  const extracted = loadExtractedProps();
  const extractedProps = extracted[meta.name]?.props;

  const merged = mergeObInfo(meta, antdBase, extractedProps);

  if (json) {
    console.log(JSON.stringify(merged, null, 2));
    return;
  }

  if (dense) {
    const lines = [
      `${merged.name} | ${merged.package} | diffLevel ${merged.diffLevel} | import ${merged.importFrom}`,
    ];
    if (merged.addedProps?.length) lines.push(`added: ${merged.addedProps.join(', ')}`);
    if (merged.constraints?.length) lines.push(`constraints: ${merged.constraints.join(', ')}`);
    console.log(lines.join('\n'));
    return;
  }

  console.log(JSON.stringify(merged, null, 2));
}
