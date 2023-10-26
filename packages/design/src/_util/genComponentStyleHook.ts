import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook as antGenComponentStyleHook } from 'antd/es/theme/internal';
import type { GlobalToken } from 'antd/es/theme/interface';
import type { OverrideTokenWithoutDerivative } from 'antd/es/theme/util/genComponentStyleHook';
import { useContext } from 'react';
import theme from '../theme';

export type ComponentName = keyof ComponentTokenMap;

export function genComponentStyleHook(
  componentName: ComponentName,
  styleFn: GenerateStyle<FullToken<ComponentName>>,
  getDefaultToken?:
    | OverrideTokenWithoutDerivative[ComponentName]
    | ((token: GlobalToken) => OverrideTokenWithoutDerivative[ComponentName])
) {
  return (prefixCls: string) => {
    const useStyle = antGenComponentStyleHook(
      `OB-${componentName}` as ComponentName,
      token => {
        return [styleFn(token)];
      },
      getDefaultToken
    );
    const [wrapSSR] = useStyle(prefixCls);
    // use hashId from useToken, as hashId is '' when hashed is false
    // ref: https://github.com/ant-design/ant-design/blob/master/components/theme/useToken.ts#L80
    const { hashId } = theme.useToken();
    return {
      wrapSSR,
      hashId,
    };
  };
}

export type { CSSObject, FullToken, GenerateStyle };
