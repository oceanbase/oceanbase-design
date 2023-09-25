import fs from 'fs';
import type { IApi } from 'dumi';
// umi 插件只能 import 支持 CommonJS 语法库和文件，因此需要使用 lib 产物
import formatToken from 'antd/lib/theme/util/alias';
import defaultThemeToken from './packages/design/src/theme/default';
// @ts-ignore
import theme from './.dumi/tmp/plugin-theme-less/index.js';

export default (api: IApi) => {
  // 生成 default.less、dark.less 和 compact.less 主题文件
  api.onGenerateFiles(() => {
    const { defaultAlgorithm, darkAlgorithm, compactAlgorithm, defaultSeed } = theme;
    const themeList = [
      {
        theme: 'default',
        algorithm: defaultAlgorithm,
      },
      {
        theme: 'dark',
        algorithm: darkAlgorithm,
      },
      {
        theme: 'compact',
        algorithm: compactAlgorithm,
      },
    ];

    themeList.forEach(item => {
      let mapToken =
        item.theme === 'dark'
          ? // 由于目前设计侧只定义了浅色主题的 Token，因此需要针对不同主题做差异化处理
            // 对于暗色主题，算法生成的 Token 优先级高于自定义 token
            {
              ...defaultThemeToken,
              ...item.algorithm(defaultSeed),
            }
          : {
              // 对于非暗色主题，自定义 token 的优先级高于算法生成的 Token
              ...item.algorithm(defaultSeed),
              ...defaultThemeToken,
            };
      mapToken = {
        ...mapToken,
        // 以下四种预设颜色和语义色保持一致
        blue: mapToken.colorInfo,
        green: mapToken.colorSuccess,
        yellow: mapToken.colorWarning,
        red: mapToken.colorError,
      };
      const aliasToken = formatToken(mapToken);

      let lessString = '';
      Object.keys(aliasToken).forEach(key => {
        const value = aliasToken[key];
        lessString += `@${key}: ${value};\n`;
      });

      fs.writeFileSync(`src/theme/style/${item.theme}.less`, lessString);
    });
  });
};
