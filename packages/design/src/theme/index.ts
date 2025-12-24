import { theme } from 'antd';
import type { Theme } from '@ant-design/cssinjs';
import { pick } from 'lodash';
// umi 插件只能 import 支持 CommonJS 语法库和文件，因此需要使用 lib 产物
import type { SeedToken } from 'antd/lib/theme/interface';
import defaultTheme from './default';
import type { GlobalToken, AliasToken } from './interface';
import { genObToken } from './obToken';

export * from 'antd/lib/theme/internal';
export * from 'antd/lib/theme';

const seedTokenKeys = Object.keys(theme.defaultSeed);
const seedToken = {
  ...pick(defaultTheme.token, seedTokenKeys),
  // some special seed token should set to ''
  // ref: https://github.com/ant-design/ant-design/blob/master/components/theme/themes/seed.ts#L32
  colorBgBase: '',
  colorTextBase: '',
  colorLink: '',
} as SeedToken;

const defaultSeed = {
  ...theme.defaultSeed,
  ...seedToken,
};

// should use reference assign instead of clone assign
const defaultConfig = theme.defaultConfig;
defaultConfig.token = defaultSeed;

// 包装 useToken 以添加 obToken
const useToken = () => {
  const result = theme.useToken();
  const obToken = genObToken(result.token as GlobalToken);
  return {
    ...result,
    obToken,
  };
};

export default {
  ...theme,
  defaultSeed,
  defaultConfig,
  useToken,
} as Omit<typeof theme, 'useToken'> & {
  useToken: () => {
    theme: Theme<SeedToken, AliasToken>;
    token: GlobalToken;
    hashId: string;
    obToken: ReturnType<typeof genObToken>;
  };
};
