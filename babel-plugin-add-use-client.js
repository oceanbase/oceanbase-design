/**
 * Babel plugin to add 'use client' directive at the top of files
 * Only applies to design, ui, and charts packages
 * Works for both ESM and CommonJS builds
 *
 * Reference: https://github.com/ant-design/ant-design
 */

module.exports = function ({ types: t }) {
  const targetPackages = ['design', 'ui', 'charts'];

  /**
   * Normalize path separators
   */
  function normalizePath(path) {
    return path ? path.replace(/\\/g, '/') : '';
  }

  /**
   * Check if path contains a target package
   * Simplified logic: check if path includes any target package name
   */
  function isTargetPackage(filename, cwd) {
    const normalizedFilename = normalizePath(filename || '');
    const normalizedCwd = normalizePath(cwd || process.cwd());
    const currentWorkingDir = normalizePath(process.cwd());

    // Simple check: if any path contains a target package name
    const checkPath = path => {
      if (!path) return false;
      return targetPackages.some(pkg => {
        return path.includes(`/${pkg}/`) || path.includes(`\\${pkg}\\`);
      });
    };

    return (
      checkPath(normalizedFilename) || checkPath(normalizedCwd) || checkPath(currentWorkingDir)
    );
  }

  /**
   * Check if file should have 'use client' added
   * Only add to:
   * 1. .jsx or .tsx files
   * 2. src/index.ts or src/xxx/index.ts files (including component index files)
   */
  function shouldAddUseClient(filename) {
    if (!filename) return false;

    const normalized = normalizePath(filename);

    // Match .jsx or .tsx files
    // Match src/index.ts or src/xxx/index.ts
    return /\.(j|t)sx$/.test(normalized) || /src(\/[\w-]+)?\/index\.ts$/.test(normalized);
  }

  return {
    visitor: {
      Program(path, state) {
        // Get file path from state - try all possible sources
        const filename =
          state.file?.opts?.filename ||
          state.file?.opts?.sourceFileName ||
          state.file?.opts?.sourceFilePath ||
          state.file?.opts?.sourceRoot ||
          state.filename ||
          '';

        const cwd = state.file?.opts?.cwd || process.cwd();

        // Check if this is a target package
        const isTarget = isTargetPackage(filename, cwd);
        if (!isTarget) {
          return;
        }

        // Check if file should have 'use client' added
        const shouldAdd = shouldAddUseClient(filename);
        if (!shouldAdd) {
          return;
        }

        // Check if 'use client' already exists
        const body = path.node.body;
        let hasUseClient = false;
        let useStrictIndex = -1;

        // Find if 'use client' already exists and locate 'use strict' if present
        for (let i = 0; i < body.length; i++) {
          const statement = body[i];
          if (t.isExpressionStatement(statement) && t.isStringLiteral(statement.expression)) {
            const value = statement.expression.value;
            if (value === 'use client') {
              hasUseClient = true;
              break;
            }
            if (value === 'use strict' && useStrictIndex === -1) {
              useStrictIndex = i;
            }
          }
        }

        if (hasUseClient) {
          return; // Already has 'use client'
        }

        // Add 'use client' directive
        // Insert after 'use strict' if it exists, otherwise at the beginning
        const useClientDirective = t.expressionStatement(t.stringLiteral('use client'));

        if (useStrictIndex !== -1) {
          // Insert after 'use strict'
          body.splice(useStrictIndex + 1, 0, useClientDirective);
        } else {
          // Insert at the very beginning
          body.unshift(useClientDirective);
        }
      },
    },
  };
};
