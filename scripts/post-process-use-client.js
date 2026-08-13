/**
 * Post-process script to fix 'use client' directive position
 * This runs after Babel transformation to ensure 'use client' is in the correct position
 * - For CommonJS: after 'use strict'
 * - For ESM: at the beginning (before helper functions)
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const targetPackages = ['design', 'ui', 'charts'];

/**
 * Check if file should be processed
 */
function shouldProcessFile(filePath) {
  const normalized = filePath.replace(/\\/g, '/');

  // Only process files in es/ or lib/ directories
  if (!normalized.includes('/es/') && !normalized.includes('/lib/')) {
    return false;
  }

  // Only process files in target packages
  const isTargetPackage = targetPackages.some(pkg => normalized.includes(`/packages/${pkg}/`));

  if (!isTargetPackage) {
    return false;
  }

  // Only process .js files (not .d.ts, .map, etc.)
  if (!normalized.endsWith('.js')) {
    return false;
  }

  // Check if file should have 'use client' (same logic as Babel plugin)
  const isJsxOrTsx = /\.(j|t)sx$/.test(normalized);
  const isIndexTs = /src(\/[\w-]+)?\/index\.ts$/.test(normalized);

  // For es/ and lib/ builds, check if original source matches
  // We'll check if the file contains 'use client' as a heuristic
  return true; // Process all .js files in es/ and lib/ that might have 'use client'
}

/**
 * Check if a line is a helper function
 */
function isHelperFunction(line) {
  // Helper functions typically start with 'function _' or 'var _' or 'const _'
  return /^\s*(function|var|const|let)\s+_/.test(line);
}

/**
 * Check if a line is 'use strict'
 */
function isUseStrict(line) {
  return /^\s*"use strict"\s*;?\s*$/.test(line);
}

/**
 * Check if a line is 'use client'
 */
function isUseClient(line) {
  return /^\s*"use client"\s*;?\s*$/.test(line);
}

/**
 * Process a single file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Find 'use client' line
  let useClientIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (isUseClient(lines[i])) {
      useClientIndex = i;
      break;
    }
  }

  // If no 'use client' found, skip
  if (useClientIndex === -1) {
    return false;
  }

  const isLibBuild = filePath.includes('/lib/');
  const isEsBuild = filePath.includes('/es/');

  // Find 'use strict' line (for CommonJS)
  let useStrictIndex = -1;
  if (isLibBuild) {
    for (let i = 0; i < lines.length; i++) {
      if (isUseStrict(lines[i])) {
        useStrictIndex = i;
        break;
      }
    }
  }

  // Find first non-helper statement (for ESM)
  let firstNonHelperIndex = -1;
  if (isEsBuild) {
    for (let i = 0; i < lines.length; i++) {
      if (!isHelperFunction(lines[i]) && !isUseClient(lines[i])) {
        firstNonHelperIndex = i;
        break;
      }
    }
  }

  // Determine correct position
  let correctIndex = -1;
  let needsMove = false;

  if (isLibBuild && useStrictIndex !== -1) {
    // CommonJS: should be right after 'use strict' (no blank line)
    correctIndex = useStrictIndex + 1;

    // Check if 'use client' is already in correct position
    if (useClientIndex === correctIndex) {
      // Already in correct position, no move needed
      return false;
    }

    // Check if 'use client' is after a blank line (useStrictIndex + 1 is blank, useClientIndex is useStrictIndex + 2)
    const hasBlankLineBetween =
      lines[useStrictIndex + 1]?.trim() === '' && useClientIndex === useStrictIndex + 2;

    // If 'use client' is after a blank line, we need to move it and remove the blank line
    needsMove = useClientIndex !== correctIndex;
  } else if (isEsBuild) {
    // ESM: should be at the beginning (before helper functions)
    correctIndex = 0;
    needsMove = useClientIndex !== 0;
  } else {
    // Unknown build type, skip
    return false;
  }

  if (!needsMove) {
    return false; // Already in correct position
  }

  // Remove 'use client' from current position
  const useClientLine = lines[useClientIndex];
  lines.splice(useClientIndex, 1);

  // Adjust correctIndex if it was after the removed line
  if (useClientIndex < correctIndex) {
    correctIndex--;
  }

  // For CommonJS, check if we need to remove blank line after 'use strict'
  if (isLibBuild && useStrictIndex !== -1 && correctIndex === useStrictIndex + 1) {
    // If there's a blank line after 'use strict', remove it
    if (lines[correctIndex]?.trim() === '') {
      lines.splice(correctIndex, 1);
      // correctIndex stays the same since we removed the blank line
      // But if useClientIndex was after the blank line, we need to adjust
      if (useClientIndex > correctIndex) {
        // Already adjusted by the splice above
      }
    }
  }

  // Insert 'use client' at correct position
  lines.splice(correctIndex, 0, useClientLine);

  // Write back to file
  const newContent = lines.join('\n');
  fs.writeFileSync(filePath, newContent, 'utf8');

  return true;
}

/**
 * Process a specific package
 */
function processPackage(packageName) {
  const packageDir = path.join(__dirname, '../packages', packageName);

  if (!fs.existsSync(packageDir)) {
    console.error(`Package directory not found: ${packageDir}`);
    return 0;
  }

  // Find all .js files in es/ and lib/ directories
  const pattern = path.join(packageDir, '+(es|lib)/**/*.js');
  const files = glob.sync(pattern, {
    ignore: ['**/node_modules/**', '**/dist/**', '**/demo/**'],
  });

  let processedCount = 0;

  for (const file of files) {
    if (shouldProcessFile(file)) {
      try {
        if (processFile(file)) {
          processedCount++;
        }
      } catch (error) {
        console.error(`[post-process] Error processing ${file}:`, error.message);
      }
    }
  }

  return processedCount;
}

/**
 * Main function
 */
function main() {
  // If package name is provided as argument, process only that package
  const packageName = process.argv[2];

  if (packageName) {
    processPackage(packageName);
    return;
  }

  // Otherwise, process all packages
  const packagesDir = path.join(__dirname, '../packages');

  if (!fs.existsSync(packagesDir)) {
    console.error('packages directory not found');
    process.exit(1);
  }

  // Find all .js files in es/ and lib/ directories
  const pattern = path.join(packagesDir, '**/+(es|lib)/**/*.js');
  const files = glob.sync(pattern, {
    ignore: ['**/node_modules/**', '**/dist/**', '**/demo/**'],
  });

  let processedCount = 0;

  for (const file of files) {
    if (shouldProcessFile(file)) {
      try {
        if (processFile(file)) {
          processedCount++;
        }
      } catch (error) {
        console.error(`[post-process] Error processing ${file}:`, error.message);
      }
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { processFile, shouldProcessFile, processPackage };
