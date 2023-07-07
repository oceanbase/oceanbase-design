import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    output: 'es',
    ignores: ['**/demo/**'],
  },
  cjs: {
    output: 'lib',
    ignores: ['**/demo/**'],
  },
  // 构建 UMD 产物: https://github.com/umijs/father/blob/master/docs/guide/umd.md
  umd: {
    output: 'dist',
    // 外置 react 相关依赖，不打包到 bundle 里
    // ref: https://github.com/ant-design/antd-tools/blob/caf0c847fd24de4619f5d9ed1d881d482eafbc6a/lib/getWebpackConfig.js#L196
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM',
    },
  },
});
