import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * Test to ensure 'use client' directive is added to all build outputs
 * Similar to antd's approach: https://github.com/ant-design/ant-design/blob/master/tests/dekko/use-client.test.ts
 */

const includeUseClient = (filePath: string): boolean => {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content.includes('"use client"') || content.includes("'use client'");
};

describe("'use client' directive in build outputs", () => {
  const packagesDir = path.join(__dirname, '../../packages');
  // Only test design, ui, and charts packages
  const targetPackages = ['design', 'ui', 'charts'];
  const packages = fs.readdirSync(packagesDir).filter(pkg => {
    const pkgPath = path.join(packagesDir, pkg);
    return (
      fs.statSync(pkgPath).isDirectory() && pkg.charAt(0) !== '.' && targetPackages.includes(pkg)
    );
  });

  packages.forEach(packageName => {
    describe(`@oceanbase/${packageName}`, () => {
      const esDir = path.join(packagesDir, packageName, 'es');
      const libDir = path.join(packagesDir, packageName, 'lib');

      // Test es/index.js
      it('should contain "use client" in es/index.js', () => {
        const indexPath = path.join(esDir, 'index.js');
        expect(fs.existsSync(indexPath)).toBe(true);
        expect(includeUseClient(indexPath)).toBe(true);
      });

      // Test lib/index.js
      it('should contain "use client" in lib/index.js', () => {
        const indexPath = path.join(libDir, 'index.js');
        expect(fs.existsSync(indexPath)).toBe(true);
        expect(includeUseClient(indexPath)).toBe(true);
      });

      // Test all component index.js files in es/
      it('should contain "use client" in all es/*/index.js files', async () => {
        expect(fs.existsSync(esDir)).toBe(true);

        const pattern = path.join(esDir, '*/index.js');
        const files = await glob(pattern, { absolute: true });

        expect(files.length).toBeGreaterThan(0);

        files.forEach(file => {
          expect(includeUseClient(file)).toBe(true);
        });
      });

      // Test all component index.js files in lib/
      it('should contain "use client" in all lib/*/index.js files', async () => {
        expect(fs.existsSync(libDir)).toBe(true);

        const pattern = path.join(libDir, '*/index.js');
        const files = await glob(pattern, { absolute: true });

        expect(files.length).toBeGreaterThan(0);

        files.forEach(file => {
          expect(includeUseClient(file)).toBe(true);
        });
      });

      // Test that dist files don't contain "use client" (UMD bundles shouldn't have it)
      it('should not contain "use client" in dist/*.js files (UMD bundles)', async () => {
        const distDir = path.join(packagesDir, packageName, 'dist');
        expect(fs.existsSync(distDir)).toBe(true);

        const pattern = path.join(distDir, '*.js');
        const files = await glob(pattern, { absolute: true });

        expect(files.length).toBeGreaterThan(0);

        files.forEach(file => {
          // UMD bundles shouldn't have "use client"
          expect(includeUseClient(file)).toBe(false);
        });
      });

      // Test that "use client" appears after "use strict" in CommonJS builds (lib/)
      it('should have "use client" immediately after "use strict" in lib/*.js files (no blank line)', async () => {
        expect(fs.existsSync(libDir)).toBe(true);

        // Only test a specific example file based on package
        // For design package, test alert/index.js
        // For other packages, test Action/index.js
        const testFile =
          packageName === 'design'
            ? path.join(libDir, 'alert', 'index.js')
            : path.join(libDir, 'Action', 'index.js');
        if (!fs.existsSync(testFile)) {
          return; // Skip if file doesn't exist
        }

        const content = fs.readFileSync(testFile, 'utf-8');
        const lines = content.split('\n');

        // Find "use strict" and "use client" positions
        let useStrictIndex = -1;
        let useClientIndex = -1;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line === '"use strict";' || line === "'use strict';") {
            useStrictIndex = i;
          }
          if (line === '"use client";' || line === "'use client';") {
            useClientIndex = i;
          }
        }

        // CommonJS files should have "use strict"
        expect(useStrictIndex).not.toBe(-1);
        // "use client" must be immediately after "use strict" (no blank line)
        expect(useClientIndex).not.toBe(-1);
        expect(useClientIndex).toBe(useStrictIndex + 1);
        // Verify no blank line between them
        if (useStrictIndex + 1 < lines.length) {
          expect(lines[useStrictIndex + 1].trim()).not.toBe('');
        }
      });

      // Test that "use client" appears at the beginning in ESM builds (es/)
      it('should have "use client" at the beginning in es/*.js files (before helper functions)', async () => {
        expect(fs.existsSync(esDir)).toBe(true);

        // Only test a specific example file based on package
        // For design package, test alert/index.js
        // For other packages, test Action/index.js
        const testFile =
          packageName === 'design'
            ? path.join(esDir, 'alert', 'index.js')
            : path.join(esDir, 'Action', 'index.js');
        if (!fs.existsSync(testFile)) {
          return; // Skip if file doesn't exist
        }

        const content = fs.readFileSync(testFile, 'utf-8');
        const lines = content.split('\n');

        // Find "use client" position
        let useClientIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line === '"use client";' || line === "'use client';") {
            useClientIndex = i;
            break;
          }
        }

        // "use client" should be at the beginning (index 0)
        expect(useClientIndex).toBe(0);
      });

      // Test that "use client" appears before helper functions in ESM builds
      it('should have "use client" before helper functions in es/*.js files', async () => {
        expect(fs.existsSync(esDir)).toBe(true);

        // Only test a specific example file based on package
        // For design package, test alert/index.js (if it has helper functions)
        // For other packages, test Action/Item.js (which has helper functions)
        const testFile =
          packageName === 'design'
            ? path.join(esDir, 'alert', 'index.js')
            : path.join(esDir, 'Action', 'Item.js');
        if (!fs.existsSync(testFile)) {
          return; // Skip if file doesn't exist
        }

        const content = fs.readFileSync(testFile, 'utf-8');
        const lines = content.split('\n');

        // Find "use client" position
        let useClientIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line === '"use client";' || line === "'use client';") {
            useClientIndex = i;
            break;
          }
        }

        // Find first helper function (starts with "function _" or "var _" or "const _")
        let firstHelperIndex = -1;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (
            line.startsWith('function _') ||
            line.startsWith('var _') ||
            line.startsWith('const _') ||
            line.startsWith('let _')
          ) {
            firstHelperIndex = i;
            break;
          }
        }

        // If there are helper functions, "use client" should be before them
        if (firstHelperIndex !== -1) {
          expect(useClientIndex).not.toBe(-1);
          expect(useClientIndex).toBeLessThan(firstHelperIndex);
        }
      });
    });
  });
});
