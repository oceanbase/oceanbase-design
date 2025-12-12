/**
 * Common directories to exclude when traversing files
 * These are typically build outputs, caches, dependencies, and temporary directories
 */
const EXCLUDED_DIRS = [
  'node_modules',
  '.umi',
  '.umi-production',
  '.git',
  'dist',
  'build',
  'coverage',
  '.cache',
  '.next',
  '.turbo',
  '.vite',
  '.nuxt',
  '.output',
  '.temp',
  '.tmp',
  'temp',
  'tmp',
];

/**
 * Check if a path should be excluded
 * @param {string} filePath - File path to check
 * @returns {boolean} - True if should be excluded
 */
function shouldExcludePath(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  return EXCLUDED_DIRS.some(
    dir => normalizedPath.includes(`/${dir}/`) || normalizedPath.endsWith(`/${dir}`)
  );
}

module.exports = {
  EXCLUDED_DIRS,
  shouldExcludePath,
};
