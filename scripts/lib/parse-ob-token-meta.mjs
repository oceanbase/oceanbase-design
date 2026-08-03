/**
 * Parse obTokenMeta array from obTokenMeta.ts (same AST source as ObTokenTable import).
 */
import ts from 'typescript';
import { readFileSync } from 'node:fs';

function readStringLiteral(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  return undefined;
}

/**
 * @param {string} filePath
 * @returns {Array<{ name: string, desc: string, descEn?: string, category: string }>}
 */
export function parseObTokenMeta(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const sf = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const entries = [];

  function parseObjectLiteral(obj) {
    const entry = {};
    for (const prop of obj.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const key = prop.name.getText(sf);
      const value = readStringLiteral(prop.initializer);
      if (value !== undefined) entry[key] = value;
    }
    if (entry.name && entry.category) entries.push(entry);
  }

  function visit(node) {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (decl.name.getText(sf) !== 'obTokenMeta') continue;
        if (!decl.initializer || !ts.isArrayLiteralExpression(decl.initializer)) continue;
        for (const el of decl.initializer.elements) {
          if (ts.isObjectLiteralExpression(el)) parseObjectLiteral(el);
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sf);
  return entries;
}
