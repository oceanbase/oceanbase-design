import fs from 'fs';
import type { IApi } from 'dumi';
import { isNil, omitBy } from 'lodash';
// umi 插件只能 import 支持 CommonJS 语法库和文件，因此需要使用 lib 产物
import formatToken from 'antd/lib/theme/util/alias';
// @ts-ignore
import theme from './.dumi/tmp/plugin-theme-less/index.js';
// @ts-ignore
import defaultTheme from './.dumi/tmp/plugin-theme-less/default.js';
// @ts-ignore
import darkTheme from './.dumi/tmp/plugin-theme-less/dark.js';
// @ts-ignore
import aliyunTheme from './.dumi/tmp/plugin-theme-less/aliyun.js';

export default (api: IApi) => {
  // 生成 default.less、dark.less 和 compact.less 主题文件
  api.onGenerateFiles(() => {
    const { defaultAlgorithm, darkAlgorithm, compactAlgorithm, defaultSeed } = theme;
    const themeList = [
      {
        theme: 'default',
        algorithm: defaultAlgorithm,
        token: defaultTheme.token,
      },
      {
        theme: 'dark',
        algorithm: darkAlgorithm,
        token: darkTheme.token,
      },
      {
        theme: 'compact',
        algorithm: compactAlgorithm,
        // 使用 defaultTheme token
        token: defaultTheme.token,
      },
      {
        theme: 'aliyun',
        algorithm: defaultAlgorithm,
        token: aliyunTheme.token,
      },
    ];

    themeList.forEach(item => {
      let mapToken =
        item.theme === 'dark'
          ? {
              // 对于暗色主题，优先级: 算法生成的 Token > 自定义 token
              ...item.token,
              ...item.algorithm(defaultSeed),
            }
          : {
              // 对于非暗色主题，优先级: 自定义 token > 算法生成的 Token
              ...item.algorithm(defaultSeed),
              ...item.token,
            };
      mapToken = {
        ...mapToken,
        // 以下四种预设颜色和语义色保持一致
        blue: mapToken.colorInfo,
        green: mapToken.colorSuccess,
        yellow: mapToken.colorWarning,
        red: mapToken.colorError,
        // override token
        override:
          item.theme === 'dark'
            ? {}
            : // 对于非暗色主题，需要覆盖部分 Alias Token 的值
              omitBy(
                {
                  boxShadow: item.token.boxShadow,
                  boxShadowSecondary: item.token.boxShadowSecondary,
                },
                isNil
              ),
      };
      const aliasToken = formatToken(mapToken);

      let lessString = '';
      Object.keys(aliasToken).forEach(key => {
        const value = aliasToken[key];
        lessString += `@${key}: ${value};\n`;
      });

      fs.writeFileSync(`packages/design/src/theme/style/${item.theme}.less`, lessString);
    });
  });
};
