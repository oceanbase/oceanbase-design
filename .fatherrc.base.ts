import { defineConfig } from 'father';
import path from 'path';

export default defineConfig({
  esm: {
    // 默认为 esbuild 构建，需要指定使用 babel，以便 babel 插件生效
    transformer: 'babel',
    output: 'es',
    ignores: ['**/demo/**'],
  },
  cjs: {
    // 默认为 esbuild 构建，需要指定使用 babel，以便 babel 插件生效
    transformer: 'babel',
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
    },
  },
  extraBabelPlugins: [
    'react-inline-svg-unique-id',
    path.resolve(__dirname, 'babel-plugin-add-use-client.js'),
  ],
});
