import type { ProAliasToken } from '@ant-design/pro-components';
import { useStyle } from '@ant-design/pro-components';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
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
    const { getPrefixCls, iconPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const componentCls = `.${prefixCls}`;

    return useStyle(`OB-${componentName}`, token => {
      const mergedToken = {
        ...token,
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`,
      } as OBToken;
      return [styleFn(mergedToken)];
    });
  };
}
