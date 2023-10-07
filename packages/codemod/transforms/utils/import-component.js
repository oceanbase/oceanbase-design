const { addSubmoduleImport, removeEmptyModuleImport, parseStrToArray } = require('./index');
const { markDependency } = require('./marker');
const { printOptions } = require('./config');
const { isPlainObject } = require('lodash');
const { flatten } = require('lodash');

function importComponent(j, root, options) {
  const { fromPkgNames, toPkgList } = options;
  let hasChanged = false;

  root.find(j.ImportDeclaration).forEach(path => {
    hasChanged = true;
    const fromPkgName = fromPkgNames.find(
      fromPkgName =>
        fromPkgName === path.value.source.value ||
        new RegExp(`${fromPkgName}/(es|lib|locale)/`).test(path.value.source.value)
    );
    if (fromPkgName) {
      path.value.specifiers.forEach(specifier => {
        const toPkgByComponents = toPkgList.find(
          toPkg =>
            toPkg.components?.includes(specifier.imported.name) ||
            toPkg.components?.find(component => component[specifier.imported.name])
        );
        const toPkgByTypes = toPkgList.find(
          toPkg =>
            toPkg.types?.includes(specifier.imported.name) ||
            toPkg.types?.find(type => type[specifier.imported.name])
        );
        const toPkg = toPkgByComponents || toPkgByTypes;
        if (toPkg) {
          // replace to toPkg for xxx/es/xxx、xxx/lib/xxx
          if (new RegExp(`${fromPkgName}/(es|lib|locale)/`).test(path.value.source.value)) {
            path.value.source.value = path.value.source.value?.replace(fromPkgName, toPkg.name);
          } else {
            // remove old imports
            path.value.specifiers = path.value.specifiers.filter(
              item => !item.imported || item.imported.name !== specifier.imported.name
            );
            const renameComponent = toPkg.components?.find(
              component => component[specifier.imported.name]
            );
            const renameType = toPkg.types?.find(type => type[specifier.imported.name]);
            const rename = renameComponent || renameType;
            // add and rename new imports
            addSubmoduleImport(j, root, {
              moduleName: toPkg.name,
              importedName: rename ? rename[specifier.imported.name] : specifier.imported.name,
              importKind: toPkgByTypes ? 'type' : 'value',
              after: fromPkgName,
            });
            // rename used part
            if (rename) {
              root
                .find(j.Identifier, {
                  name: specifier.imported.name,
                })
                .forEach(path => {
                  path.node.name = rename[specifier.imported.name];
                });
            }
          }
          markDependency(toPkg.name);
        }
      });
      if (path.value.specifiers.length > 0) {
        // replace to toPkg when specifiers still not empty
        const toPkg = toPkgList.find(toPkg => !toPkg.components);
        if (toPkg) {
          path.value.source.value = path.value.source.value?.replace(fromPkgName, toPkg.name);
          markDependency(toPkg.name);
        }
      }
    }
  });

  return hasChanged;
}

module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);
  const fromPkgNames = parseStrToArray(options.fromPkgNames || 'antd');

  let hasChanged = false;
  hasChanged = importComponent(j, root, { ...options, fromPkgNames }) || hasChanged;

  if (hasChanged) {
    fromPkgNames.forEach(fromPkgName => {
      removeEmptyModuleImport(j, root, fromPkgName);
    });
  }

  return hasChanged ? root.toSource(options.printOptions || printOptions) : null;
};
