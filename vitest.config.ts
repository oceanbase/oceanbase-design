import { defineConfig } from 'vitest/config';
import fs from 'fs';
import path from 'path';

const pkgList = fs
  .readdirSync(path.join(__dirname, './packages'))
  .filter((pkg: string) => pkg.charAt(0) !== '.');

const alias = {};

pkgList.forEach((shortName: string) => {
  const name = `@oceanbase/${shortName}`;
  alias[name] = path.join(__dirname, `./packages/${shortName}/src`);
});

export default defineConfig({
  resolve: {
    alias,
    mainFields: ['module'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      path.join(__dirname, 'tests/vitest.setup.ts'),
      path.join(__dirname, 'tests/setupTests.ts'),
    ],
    // ref: https://github.com/vitest-dev/vitest/issues/1575#issuecomment-1439286286
    globalSetup: [path.join(__dirname, 'tests/globalSetup.ts')],
    // exclude part of charts tests for now
    // ref: https://github.com/antvis/L7/issues/2332
    exclude: [
      '**/Area/__tests__/ref.test.tsx',
      '**/DualAxes/__tests__/ref.test.tsx',
      '**/Line/__tests__/ref.test.tsx',
      '**/Pie/__tests__/donut.test.tsx',
      '**/ChartProvider/__tests__/theme.test.tsx',
    ],
    deps: {
      optimizer: {
        web: {
          // ref: https://github.com/wobsoriano/vitest-canvas-mock
          include: ['vitest-canvas-mock'],
        },
      },
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    sequence: {
      // 按顺序调用钩子，和 jest 行为保持一致
      // ref: https://cn.vitest.dev/guide/migration.html#%E9%92%A9%E5%AD%90
      hooks: 'list',
    },
  },
});
