import type { ProAliasToken } from '@ant-design/pro-components';
import { useStyle } from '@ant-design/pro-components';
import type { GenerateStyle } from 'antd/es/theme/internal';
import React from 'react';
import { ConfigProvider } from '@oceanbase/design';

export interface OBToken extends ProAliasToken {
  /** Wrap component class with `.` prefix */
  componentCls: string;
  /** Origin prefix which do not have `.` prefix */
  prefixCls: string;
  /** Wrap icon class with `.` prefix */
  iconCls: string;
  /** Wrap ant prefixCls class with `.` prefix */
  antCls: string;
  // TODO: 部分组件存在 zIndexPopup token，为了避免 TS 类型报错，先定义成全局的 token
  zIndexPopup: number;
}

export function genComponentStyleHook(componentName: string, styleFn: GenerateStyle<OBToken>) {
  return (prefixCls: string) => {
    return useStyle(componentName, token => {
      const { getPrefixCls, iconPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
      const rootPrefixCls = getPrefixCls();
      const componentCls = `.${prefixCls}`;
      const mergedToken: OBToken = {
        ...token,
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`,
      };
      return [styleFn(mergedToken)];
    });
  };
}
