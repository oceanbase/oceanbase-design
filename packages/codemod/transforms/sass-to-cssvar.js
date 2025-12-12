const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const postcssScss = require('postcss-scss');
const isDirectory = require('is-directory');
const { shouldExcludePath } = require('./utils/path-utils');

/**
 * Get SASS/SCSS tokens from @oceanbase/design theme Less file
 * Since we're converting SASS variables to CSS variables based on the same design tokens,
 * we can reuse the Less token list
 */
function getSassTokensFromTheme() {
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

// Get SASS variable tokens dynamically from @oceanbase/design theme
const SASS_TOKENS = getSassTokensFromTheme();

/**
 * Convert camelCase to kebab-case
 * @param {string} str - camelCase string
 * @returns {string} - kebab-case string
 */
function camelToKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Find all sass/scss files in the directory
 * @param {string} dir - Directory or file path
 * @returns {string[]} - Array of file paths
 */
const findAllSassFiles = dir => {
  const sassFiles = [];
  const isDir = isDirectory.sync(dir);
  if (isDir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (isDirectory.sync(filePath)) {
        if (shouldExcludePath(filePath)) {
          return;
        }
        sassFiles.push(...findAllSassFiles(filePath));
      } else if (file.endsWith('.sass') || file.endsWith('.scss')) {
        sassFiles.push(filePath);
      }
    });
  } else if (dir.endsWith('.sass') || dir.endsWith('.scss')) {
    sassFiles.push(dir);
  }
  return sassFiles;
};

/**
 * Transform SASS variable to CSS variable
 * @param {string} value - CSS value that may contain SASS variables
 * @param {string} prefix - CSS variable prefix (default: 'ant')
 * @returns {string} - Transformed value with CSS variables
 */
function transformSassVarToCssVar(value, prefix = 'ant') {
  if (!value || typeof value !== 'string') {
    return value;
  }

  let result = value;

  // Match SASS variables like $colorPrimary, $fontSize, etc.
  // Support both $tokenName and #{tokenName} syntax
  const sassVarRegex = /\$([a-zA-Z][a-zA-Z0-9]*)/g;

  result = result.replace(sassVarRegex, (match, varName) => {
    // Check if this is a known token
    if (SASS_TOKENS.includes(varName)) {
      const kebabName = camelToKebab(varName);
      return `var(--${prefix}-${kebabName})`;
    }
    // Return original if not a known token
    return match;
  });

  return result;
}

/**
 * Transform a single SASS/SCSS file to use CSS variables
 * @param {string} file - File path
 * @param {object} options - Transform options
 * @param {string} options.prefix - CSS variable prefix (default: 'ant')
 * @returns {Promise<{content: string, hasTransformations: boolean}>} - Transformed content
 */
async function transform(file, options = {}) {
  const { prefix = 'ant' } = options;
  const content = fs.readFileSync(file, 'utf-8');
  const { root: ast } = await postcss([]).process(content, {
    syntax: postcssScss,
    from: file,
  });

  // Track whether any transformations were made
  let hasTransformations = false;

  // Traverse AST
  ast.walk(node => {
    if (node.type === 'decl') {
      // Transform property values that contain SASS variables
      const newValue = transformSassVarToCssVar(node.value, prefix);
      if (newValue !== node.value) {
        node.value = newValue;
        hasTransformations = true;
      }
    } else if (node.type === 'atrule') {
      // Transform SASS variables in at-rule params (e.g., media queries)
      if (node.params) {
        const newParams = transformSassVarToCssVar(node.params, prefix);
        if (newParams !== node.params) {
          node.params = newParams;
          hasTransformations = true;
        }
      }
    }
  });

  return {
    content: ast.toString(postcssScss.stringify),
    hasTransformations,
  };
}

/**
 * Run the sass-to-cssvar transformation
 * @param {string} file - File or directory path
 * @param {object} options - Transform options
 * @param {string} options.prefix - CSS variable prefix (default: 'ant')
 */
async function sassToCssvar(file, options = {}) {
  const { prefix = 'ant' } = options;
  const allSassFiles = findAllSassFiles(file);

  for (const item of allSassFiles) {
    const { content, hasTransformations } = await transform(item, { prefix });

    if (hasTransformations) {
      fs.writeFileSync(item, content);
      console.log(`  Transformed: ${item}`);
    }
  }
}

module.exports = {
  transform,
  sassToCssvar,
  transformSassVarToCssVar,
  getSassTokensFromTheme,
  camelToKebab,
  SASS_TOKENS,
};
