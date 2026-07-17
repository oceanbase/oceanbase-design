/**
 * @input component TS source with *Props interface
 * @output prop names declared on OB Props interface body
 */
import ts from 'typescript';
import { readFileSync } from 'node:fs';

const SKIP_PROPS = new Set(['columns', 'locale', 'size', 'className', 'style', 'prefixCls']);

/**
 * @param {string} filePath
 * @param {string} [preferredName] e.g. TableProps
 */
export function extractAddedProps(filePath, preferredName) {
  const content = readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.Latest,
    true,
    filePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );

  const interfaces = [];

  function visit(node) {
    if (ts.isInterfaceDeclaration(node)) {
      interfaces.push(node);
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  let target =
    interfaces.find((i) => i.name.text === preferredName) ||
    interfaces.find((i) => /Props$/.test(i.name.text) && !i.name.text.includes('Locale')) ||
    interfaces.find((i) => /Props$/.test(i.name.text));

  if (!target) return [];

  const props = [];
  for (const member of target.members) {
    if (!ts.isPropertySignature(member) || !member.name) continue;
    const name = member.name.getText(sf).replace(/^['"]|['"]$/g, '');
    if (name.startsWith('@')) continue;
    props.push(name);
  }
  return props;
}

/**
 * Filter props likely OB-specific (heuristic for diffLevel B/C validation).
 */
export function obSpecificProps(allProps, { diffLevel }) {
  if (diffLevel === 'A' || diffLevel === 'D') return allProps;
  return allProps.filter((p) => !SKIP_PROPS.has(p));
}
