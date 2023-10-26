// some utils extract from https://github.com/reactjs/react-codemod
function insertImportAfter(j, root, { importStatement, importKind, afterModule }) {
  const firstAfterModuleImport = root
    .find(j.ImportDeclaration, {
      source: { value: afterModule },
      importKind,
    })
    .at(0);

  if (firstAfterModuleImport.paths()[0]) {
    firstAfterModuleImport.insertAfter(importStatement);
  } else {
    // 保留首行的注释
    // https://github.com/facebook/jscodeshift/blob/master/recipes/retain-first-comment.md
    const firstNode = getFirstNode(j, root);
    const { comments } = firstNode;
    if (comments) {
      delete firstNode.comments;
      importStatement.comments = comments;
    }

    // insert `import` at body(0)
    root.get().node.program.body.unshift(importStatement);
  }
}

function insertImportBefore(j, root, { importStatement, importKind, beforeModule }) {
  const firstBeforeModuleImport = root
    .find(j.ImportDeclaration, {
      source: { value: beforeModule },
      importKind,
    })
    .at(0);

  const firstNode = getFirstNode(j, root);
  if (
    (firstBeforeModuleImport.paths()[0] && firstBeforeModuleImport.paths()[0].node === firstNode) ||
    !firstBeforeModuleImport
  ) {
    // 保留首行的注释
    // https://github.com/facebook/jscodeshift/blob/master/recipes/retain-first-comment.md
    const { comments } = firstNode;
    if (comments) {
      delete firstNode.comments;
      importStatement.comments = comments;
    }
  }

  if (firstBeforeModuleImport.paths()[0]) {
    firstBeforeModuleImport.insertBefore(importStatement);
  } else {
    // insert `import` at body(0)
    root.get().node.program.body.unshift(importStatement);
  }
}

function hasSubmoduleImport(j, root, moduleName, submoduleName, importKind) {
  const collections = root
    .find(j.ImportDeclaration, {
      source: {
        value: moduleName,
      },
      importKind,
    })
    .find(j.ImportSpecifier, {
      imported: {
        name: submoduleName,
      },
    });

  const targetImport = collections.paths();

  // local 默认设置为 null
  return targetImport[0]?.value?.local?.name || targetImport[0]?.value?.imported.name;
}

function hasModuleImport(j, root, moduleName, importKind) {
  return (
    root.find(j.ImportDeclaration, {
      source: { value: moduleName },
      importKind,
    }).length > 0
  );
}

function hasModuleDefaultImport(j, root, pkgName, localModuleName) {
  let found = false;
  root
    .find(j.ImportDeclaration, {
      source: { value: pkgName },
    })
    .forEach(nodePath => {
      const defaultImport = nodePath.node.specifiers.filter(
        n => n.type === 'ImportDefaultSpecifier' && n.local.name === localModuleName
      );
      if (defaultImport.length) {
        found = true;
      }
    });
  return found;
}

function removeEmptyModuleImport(j, root, moduleName) {
  root
    .find(j.ImportDeclaration)
    .filter(path => path.node.specifiers.length === 0 && path.node.source.value === moduleName)
    .replaceWith();
}

// Program uses var keywords
function useVar(j, root) {
  return root.find(j.VariableDeclaration, { kind: 'const' }).length === 0;
}

function getFirstNode(j, root) {
  return root.find(j.Program).get('body', 0).node;
}

function addModuleImport(j, root, { pkgName, importSpecifier, importKind, before, after }) {
  // if has module imported, just import new submodule from existed
  // else just create a new import
  if (hasModuleImport(j, root, pkgName, importKind)) {
    root
      .find(j.ImportDeclaration, {
        source: { value: pkgName },
        importKind,
      })
      .at(0)
      .replaceWith(({ node }) => {
        const mergedImportSpecifiers = node.specifiers.concat(importSpecifier).sort((a, b) => {
          if (a.type === 'ImportDefaultSpecifier') {
            return -1;
          }

          if (b.type === 'ImportDefaultSpecifier') {
            return 1;
          }

          return a.imported.name.localeCompare(b.imported.name);
        });
        const importStatement = j.importDeclaration(mergedImportSpecifiers, j.literal(pkgName));
        importStatement.importKind = importKind;
        return importStatement;
      });
    return true;
  }

  const importStatement = j.importDeclaration([importSpecifier], j.literal(pkgName));
  // set importKind for importStatement
  importStatement.importKind = importKind;

  if (before) {
    insertImportBefore(j, root, { importStatement, importKind, beforeModule: before });
  } else {
    insertImportAfter(j, root, { importStatement, importKind, afterModule: after });
  }

  return true;
}

// add default import before one module
function addModuleDefaultImport(j, root, { moduleName, localName, before }) {
  if (hasModuleDefaultImport(j, root, moduleName, localName)) {
    return;
  }

  // DefaultImportSpecifier
  const importSpecifier = j.importDefaultSpecifier(j.identifier(localName));

  if (addModuleImport(j, root, { pkgName: moduleName, importSpecifier, before })) {
    return;
  }

  throw new Error(`No ${moduleName} import found!`);
}

// add submodule import before one module
function addSubmoduleImport(
  j,
  root,
  { moduleName, importedName, localName, importKind, before, after }
) {
  const importedLocalName = hasSubmoduleImport(j, root, moduleName, importedName, importKind);
  if (importedLocalName) {
    return importedLocalName;
  }

  const importSpecifier = j.importSpecifier(
    j.identifier(importedName),
    localName ? j.identifier(localName) : null
  );

  if (
    addModuleImport(j, root, { pkgName: moduleName, importSpecifier, importKind, before, after })
  ) {
    return localName || importedName;
  }

  throw new Error(`No ${moduleName} import found!`);
}

// add style import after one module
function addStyleModuleImport(j, root, { moduleName, after }) {
  if (hasModuleImport(j, root, moduleName)) {
    return;
  }

  const importStatement = j.importDeclaration([], j.literal(moduleName));
  insertImportAfter(j, root, { importStatement, afterModule: after });
}

function parseStrToArray(pkgNames) {
  return (pkgNames || '')
    .split(',')
    .filter(n => n)
    .map(n => n.trim());
}

module.exports = {
  parseStrToArray,
  addModuleDefaultImport,
  addStyleModuleImport,
  addSubmoduleImport,
  removeEmptyModuleImport,
  useVar,
};
