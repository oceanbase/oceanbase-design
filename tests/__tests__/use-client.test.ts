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
    });
  });
});
