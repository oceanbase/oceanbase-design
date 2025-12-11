const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssLess = require('postcss-less');
const isDirectory = require('is-directory');
const { glob } = require('glob');

/**
 * Get Less tokens from @oceanbase/design theme Less file
 * This reads all @variableName definitions from the theme file
 */
function getLessTokensFromTheme() {
  try {
    // Try to find the Less theme file from @oceanbase/design
    const themeLessPath = require.resolve('@oceanbase/design/es/theme/style/default.less');
    const content = fs.readFileSync(themeLessPath, 'utf-8');

    // Extract all @variableName: definitions
    const tokenRegex = /@([a-zA-Z][a-zA-Z0-9]*):/g;
    const tokens = new Set();
    let match;
    while ((match = tokenRegex.exec(content)) !== null) {
      tokens.add(match[1]);
    }
    return Array.from(tokens);
  } catch (e) {
    // Fallback: try lib path
    try {
      const themeLessPath = require.resolve('@oceanbase/design/lib/theme/style/default.less');
      const content = fs.readFileSync(themeLessPath, 'utf-8');

      const tokenRegex = /@([a-zA-Z][a-zA-Z0-9]*):/g;
      const tokens = new Set();
      let match;
      while ((match = tokenRegex.exec(content)) !== null) {
        tokens.add(match[1]);
      }
      return Array.from(tokens);
    } catch (e2) {
      // Final fallback: use theme token object
      try {
        const { default: defaultTheme } = require('@oceanbase/design/lib/theme/default');
        return Object.keys(defaultTheme.token || {});
      } catch (e3) {
        console.warn('Warning: Could not load tokens from @oceanbase/design, using empty list');
        return [];
      }
    }
  }
}

// Get Less variable tokens dynamically from @oceanbase/design theme
const LESS_TOKENS = getLessTokensFromTheme();

/**
 * Convert camelCase to kebab-case
 * @param {string} str - camelCase string
 * @returns {string} - kebab-case string
 */
function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Find all less files in the directory
 * @param dir
 * @returns
 */
const findAllLessFiles = dir => {
  const lessFiles = [];
  const isDir = isDirectory.sync(dir);
  if (isDir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (isDirectory.sync(filePath)) {
        if (filePath.includes('.umi') || filePath.includes('.umi-production')) {
          return;
        }
        lessFiles.push(...findAllLessFiles(filePath));
      } else if (file.endsWith('.less')) {
        lessFiles.push(filePath);
      }
    });
  } else if (dir.endsWith('.less')) {
    lessFiles.push(dir);
  }
  return lessFiles;
};

/**
 * Transform Less variable to CSS variable
 * @param {string} value - CSS value that may contain Less variables
 * @param {string} prefix - CSS variable prefix (default: 'ant')
 * @returns {string} - Transformed value with CSS variables
 */
function transformLessVarToCssVar(value, prefix = 'ant') {
  if (!value || typeof value !== 'string') {
    return value;
  }

  let result = value;

  // Match Less variables like @colorPrimary, @fontSize, etc.
  // Support both @tokenName and @{tokenName} syntax
  const lessVarRegex = /@\{?([a-zA-Z][a-zA-Z0-9]*)\}?/g;

  result = result.replace(lessVarRegex, (match, varName) => {
    // Check if this is a known token
    if (LESS_TOKENS.includes(varName)) {
      const kebabName = camelToKebab(varName);
      return `var(--${prefix}-${kebabName})`;
    }
    // Return original if not a known token
    return match;
  });

  return result;
}

/**
 * Transform a single Less file to use CSS variables
 * @param {string} file - File path
 * @param {object} options - Transform options
 * @param {string} options.prefix - CSS variable prefix (default: 'ant')
 * @returns {Promise<string>} - Transformed content
 */
async function transform(file, options = {}) {
  const { prefix = 'ant' } = options;
  const content = fs.readFileSync(file, 'utf-8');
  const { root: ast } = await postcss([]).process(content, {
    syntax: postcssLess,
    from: file,
  });

  // Track whether any transformations were made
  let hasTransformations = false;

  // Traverse AST
  ast.walk(node => {
    if (node.type === 'decl') {
      // Transform property values that contain Less variables
      const newValue = transformLessVarToCssVar(node.value, prefix);
      if (newValue !== node.value) {
        node.value = newValue;
        hasTransformations = true;
      }
    } else if (node.type === 'atrule') {
      // Remove the theme import
      if (node.name === 'import') {
        if (
          node.params?.includes("'~@oceanbase/design/es/theme/index.less'") ||
          node.params?.includes('"~@oceanbase/design/es/theme/index.less"') ||
          node.params?.includes("'~@alipay/ob-ui/es/theme/index.less'") ||
          node.params?.includes('"~@alipay/ob-ui/es/theme/index.less"')
        ) {
          node.remove();
          hasTransformations = true;
        }
      }
      // Transform Less variables in at-rule params (e.g., media queries)
      if (node.params) {
        const newParams = transformLessVarToCssVar(node.params, prefix);
        if (newParams !== node.params) {
          node.params = newParams;
          hasTransformations = true;
        }
      }
    }
  });

  return {
    content: ast.toString(postcssLess.stringify),
    hasTransformations,
  };
}

/**
 * Convert Less single-line comments (//) to CSS block comments
 * @param {string} content - File content
 * @returns {string} - Content with converted comments
 */
function convertLessCommentsToCss(content) {
  // Convert // comments to /* */ comments
  // Match // at the start of a line or after whitespace, but not inside strings or existing block comments
  const lines = content.split('\n');
  const result = lines.map(line => {
    // Skip if line is inside a block comment or contains a URL
    if (line.includes('://')) {
      // Handle URLs - only convert comments that are not part of URLs
      return line.replace(/(?<!:)\/\/(.*)$/gm, (match, comment) => {
        // Check if this is really a comment (not a URL protocol)
        const beforeMatch = line.substring(0, line.lastIndexOf(match));
        if (beforeMatch.match(/https?:$/) || beforeMatch.match(/url\([^)]*$/)) {
          return match; // Keep as is for URLs
        }
        return `/* ${comment.trim()} */`;
      });
    }
    // Convert standalone // comments
    return line.replace(/^(\s*)\/\/(.*)$/, '$1/* $2 */').replace(/(\s)\/\/(.*)$/, '$1/* $2 */');
  });
  return result.join('\n');
}

/**
 * Update import references in JS/TS files
 * @param {string} baseDir - Base directory to search for JS/TS files
 * @param {Array<{oldPath: string, newPath: string}>} renamedFiles - List of renamed files
 */
async function updateImportReferences(baseDir, renamedFiles) {
  if (renamedFiles.length === 0) return;

  // Find all JS/TS/JSX/TSX files
  const jsFiles = await glob('**/*.{js,jsx,ts,tsx}', {
    cwd: baseDir,
    absolute: true,
    ignore: ['**/node_modules/**', '**/.umi/**', '**/.umi-production/**'],
  });

  for (const jsFile of jsFiles) {
    let content = fs.readFileSync(jsFile, 'utf-8');
    let hasChanges = false;

    for (const { oldPath, newPath } of renamedFiles) {
      // Calculate relative paths from the JS file to the Less/CSS files
      const jsFileDir = path.dirname(jsFile);

      // Get the relative path from the JS file to the old Less file
      let relativeOldPath = path.relative(jsFileDir, oldPath);
      let relativeNewPath = path.relative(jsFileDir, newPath);

      // Normalize path separators for the regex
      relativeOldPath = relativeOldPath.replace(/\\/g, '/');
      relativeNewPath = relativeNewPath.replace(/\\/g, '/');

      // Add ./ prefix if needed
      if (!relativeOldPath.startsWith('.') && !relativeOldPath.startsWith('/')) {
        relativeOldPath = './' + relativeOldPath;
      }
      if (!relativeNewPath.startsWith('.') && !relativeNewPath.startsWith('/')) {
        relativeNewPath = './' + relativeNewPath;
      }

      // Also handle the case without ./ prefix
      const relativeOldPathNoDot = relativeOldPath.replace(/^\.\//, '');
      const relativeNewPathNoDot = relativeNewPath.replace(/^\.\//, '');

      // Create regex patterns to match import statements
      // Match: import './style.less', import "./style.less", require('./style.less'), require("./style.less")
      const patterns = [
        // With ./ prefix
        new RegExp(`(['"])${escapeRegExp(relativeOldPath)}\\1`, 'g'),
        // Without ./ prefix (for some bundler configurations)
        new RegExp(`(['"])${escapeRegExp(relativeOldPathNoDot)}\\1`, 'g'),
      ];

      for (const pattern of patterns) {
        const newContent = content.replace(pattern, (match, quote) => {
          return `${quote}${relativeNewPath}${quote}`;
        });
        if (newContent !== content) {
          content = newContent;
          hasChanges = true;
        }
      }
    }

    if (hasChanges) {
      fs.writeFileSync(jsFile, content);
      console.log(`  Updated imports: ${jsFile}`);
    }
  }
}

/**
 * Escape special regex characters in a string
 * @param {string} string - String to escape
 * @returns {string} - Escaped string
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Common global style file name patterns (case insensitive)
const GLOBAL_STYLE_PATTERNS = [
  /^global\.less$/i,
  /^globals\.less$/i,
  /^reset\.less$/i,
  /^normalize\.less$/i,
  /^base\.less$/i,
  /^common\.less$/i,
  /^app\.less$/i,
  /^index\.less$/i,
  /^main\.less$/i,
  /^style\.less$/i,
  /^styles\.less$/i,
  /^variables\.less$/i,
  /^mixins\.less$/i,
  /^theme\.less$/i,
];

/**
 * Check if a Less file is imported as a CSS Module in any JS/TS file
 * CSS Module import: import styles from './xxx.less'
 * Global import: import './xxx.less'
 * @param {string} lessFilePath - Path to the Less file
 * @param {string} baseDir - Base directory to search for JS/TS files
 * @returns {Promise<boolean>} - True if imported as CSS Module, false if global or not found
 */
async function isImportedAsCssModule(lessFilePath, baseDir) {
  const fileName = path.basename(lessFilePath);

  // Check if file name matches common global style patterns
  for (const pattern of GLOBAL_STYLE_PATTERNS) {
    if (pattern.test(fileName)) {
      return false;
    }
  }

  // Check if file already has .module in the name
  if (/\.module\.less$/.test(lessFilePath)) {
    return true;
  }

  try {
    // Find all JS/TS/JSX/TSX files
    const jsFiles = await glob('**/*.{js,jsx,ts,tsx}', {
      cwd: baseDir,
      absolute: true,
      ignore: ['**/node_modules/**', '**/.umi/**', '**/.umi-production/**'],
    });

    for (const jsFile of jsFiles) {
      const content = fs.readFileSync(jsFile, 'utf-8');
      const jsFileDir = path.dirname(jsFile);

      // Calculate relative path from JS file to Less file
      let relativePath = path.relative(jsFileDir, lessFilePath).replace(/\\/g, '/');
      if (!relativePath.startsWith('.') && !relativePath.startsWith('/')) {
        relativePath = './' + relativePath;
      }
      const relativePathNoDot = relativePath.replace(/^\.\//, '');

      // Escape for regex
      const escapedPath = escapeRegExp(relativePath);
      const escapedPathNoDot = escapeRegExp(relativePathNoDot);

      // Check for CSS Module import pattern: import xxx from './xxx.less'
      // Match: import styles from './xxx.less', import * as styles from './xxx.less'
      const cssModuleImportRegex = new RegExp(
        `import\\s+(?:\\*\\s+as\\s+)?\\w+\\s+from\\s+(['"])(?:${escapedPath}|${escapedPathNoDot})\\1`,
        'm'
      );

      // Check for global import pattern: import './xxx.less'
      const globalImportRegex = new RegExp(
        `import\\s+(['"])(?:${escapedPath}|${escapedPathNoDot})\\1`,
        'm'
      );

      // Check for require with assignment: const styles = require('./xxx.less')
      const cssModuleRequireRegex = new RegExp(
        `(?:const|let|var)\\s+\\w+\\s*=\\s*require\\s*\\(\\s*(['"])(?:${escapedPath}|${escapedPathNoDot})\\1\\s*\\)`,
        'm'
      );

      // Check for require without assignment: require('./xxx.less')
      const globalRequireRegex = new RegExp(
        `(?<!(?:const|let|var)\\s+\\w+\\s*=\\s*)require\\s*\\(\\s*(['"])(?:${escapedPath}|${escapedPathNoDot})\\1\\s*\\)`,
        'm'
      );

      if (cssModuleImportRegex.test(content) || cssModuleRequireRegex.test(content)) {
        return true;
      }

      if (globalImportRegex.test(content) || globalRequireRegex.test(content)) {
        // Found as global import, but continue checking other files
        // in case it's also imported as CSS Module elsewhere
        continue;
      }
    }

    // Default to false (treat as global) if not found or only found as global import
    return false;
  } catch (e) {
    // If scanning fails, default to user's preference
    return true;
  }
}

/**
 * Get the new file path when renaming from .less to .css
 * @param {string} filePath - Original file path
 * @param {boolean} shouldAddModule - Whether to add .module suffix
 * @returns {string} - New file path
 */
function getNewCssPath(filePath, shouldAddModule) {
  // Check if file already has .module in the name
  const hasModule = /\.module\.less$/.test(filePath);

  if (hasModule) {
    // Already has .module, just change extension
    return filePath.replace(/\.less$/, '.css');
  } else if (shouldAddModule) {
    // Add .module before .css
    return filePath.replace(/\.less$/, '.module.css');
  } else {
    // Just change extension
    return filePath.replace(/\.less$/, '.css');
  }
}

/**
 * Run the less-to-cssvar transformation
 * @param {string} file - File or directory path
 * @param {object} options - Transform options
 * @param {string} options.prefix - CSS variable prefix (default: 'ant')
 * @param {boolean} options.renameToCss - Whether to rename .less to .css (default: true)
 * @param {boolean} options.addModule - Whether to add .module suffix when renaming (default: true)
 *   - true (default): Auto-detect based on import style (CSS Module import → .module.css, global import → .css)
 *   - false: Skip detection, never add .module suffix
 */
async function lessToCssvar(file, options = {}) {
  const { prefix = 'ant', renameToCss = true, addModule = true } = options;
  const allLessFiles = findAllLessFiles(file);
  const renamedFiles = [];
  const baseDir = isDirectory.sync(file) ? file : path.dirname(file);

  for await (const item of allLessFiles) {
    let { content, hasTransformations } = await transform(item, { prefix });

    // If renaming to CSS, convert Less comments to CSS comments
    if (renameToCss) {
      const convertedContent = convertLessCommentsToCss(content);
      if (convertedContent !== content) {
        content = convertedContent;
        hasTransformations = true;
      }
    }

    fs.writeFileSync(item, content);

    // Rename .less to .css if option is enabled
    if (renameToCss && hasTransformations) {
      // Determine whether to add .module suffix
      let shouldAddModule;
      if (addModule) {
        // Auto-detect based on import style
        shouldAddModule = await isImportedAsCssModule(item, baseDir);
      } else {
        // Skip detection, never add .module
        shouldAddModule = false;
      }

      const newPath = getNewCssPath(item, shouldAddModule);
      if (newPath !== item) {
        fs.renameSync(item, newPath);
        console.log(`  Renamed: ${item} -> ${newPath}`);
        renamedFiles.push({ oldPath: item, newPath });
      }
    }
  }

  // Update import references in JS/TS files
  if (renameToCss && renamedFiles.length > 0) {
    console.log(`\n  Updating import references...`);
    await updateImportReferences(baseDir, renamedFiles);
  }
}

module.exports = {
  transform,
  lessToCssvar,
  transformLessVarToCssVar,
  convertLessCommentsToCss,
  updateImportReferences,
  getLessTokensFromTheme,
  camelToKebab,
  LESS_TOKENS,
};
