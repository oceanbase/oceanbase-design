/**
 * @input antd CLI stdout, OB metadata, optional extracted props index
 * @output merged OB-perspective component spec
 */
export function mergeObInfo(meta, antdBase, extractedProps) {
  const base = {
    name: meta.name,
    package: meta.package,
    importFrom: meta.importFrom,
    diffLevel: meta.diffLevel,
    extendsAntd: meta.extendsAntd ?? null,
    antdMerge: antdBase ? 'merged' : 'ob-metadata-only',
  };

  const obExtension = {
    addedProps: meta.addedProps || [],
    constraints: meta.constraints || [],
    keywords: meta.keywords || [],
    ...(extractedProps?.length ? { extractedFromSource: extractedProps } : {}),
  };

  if (!antdBase && meta.delegateAntd) {
    obExtension.note =
      'Full antd v5 API unavailable. Install @ant-design/cli for ob_info merge. OB addedProps below are authoritative.';
  }

  switch (meta.diffLevel) {
    case 'D':
      return {
        ...base,
        obOnly: true,
        ...obExtension,
        props: meta.addedProps || [],
      };
    case 'C':
      return {
        ...base,
        ...obExtension,
        antdReference: meta.extendsAntd
          ? `See antd ${meta.extendsAntd} for base API; OB behavior differs — prefer ob_doc.`
          : undefined,
        ...(antdBase ? { antdBase } : {}),
      };
    case 'B':
      return {
        ...base,
        ...obExtension,
        ...(antdBase || {}),
        importFrom: meta.importFrom,
        iconsFrom: '@oceanbase/icons',
      };
    case 'A':
    default:
      return {
        ...base,
        constraints: meta.constraints || [],
        ...(antdBase || {}),
        importFrom: meta.importFrom,
        iconsFrom: '@oceanbase/icons',
        overlay: {
          importFrom: meta.importFrom,
          iconsFrom: '@oceanbase/icons',
        },
      };
  }
}

export function mergeObDoc(meta, obDocContent) {
  const header = [
    `# ${meta.name}`,
    '',
    `> Package: \`${meta.importFrom}\` | diffLevel: **${meta.diffLevel}**`,
    '',
  ];

  if (meta.constraints?.length) {
    header.push('## OB constraints', '', meta.constraints.map((c) => `- ${c}`).join('\n'), '');
  }

  const body = obDocContent || '(no local doc found)';
  if (meta.extendsAntd && meta.diffLevel !== 'D') {
    header.push(
      `> antd base: \`${meta.extendsAntd}\` — full antd prose/API: use \`ob_info\` or ant.design link in doc below.`,
      '',
    );
  }

  return [...header, body].join('\n');
}
