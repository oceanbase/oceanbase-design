import type { ThemeConfig as AntThemeConfig, MappingAlgorithm } from 'antd';
import type { AliasToken, OverrideToken } from '../theme/interface';

export * from 'antd/es/config-provider/context';

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

export interface ThemeConfig extends AntThemeConfig {
  token?: Partial<AliasToken>;
  components?: ComponentsConfig;
}
