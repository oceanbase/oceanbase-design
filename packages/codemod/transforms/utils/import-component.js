const { addSubmoduleImport, removeEmptyModuleImport, parseStrToArray } = require('./index');
const { printOptions } = require('./config');

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
        const toPkgByComponents = toPkgList.find(toPkg =>
          toPkg.components?.includes(specifier.imported.name)
        );
        const toPkgByTypes = toPkgList.find(toPkg =>
          toPkg.types?.includes(specifier.imported.name)
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
            // add new imports
            addSubmoduleImport(j, root, {
              moduleName: toPkg.name,
              importedName: specifier.imported.name,
              importKind: toPkgByTypes ? 'type' : 'value',
              after: fromPkgName,
            });
          }
        }
      });
      if (path.value.specifiers.length > 0) {
        // replace to toPkg when specifiers still not empty
        const toPkg = toPkgList.find(toPkg => !toPkg.components);
        if (toPkg) {
          path.value.source.value = path.value.source.value?.replace(fromPkgName, toPkg.name);
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
