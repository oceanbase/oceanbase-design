import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook as antGenComponentStyleHook } from 'antd/es/theme/internal';
import type { GlobalToken } from 'antd/es/theme/interface';
import type { OverrideTokenWithoutDerivative } from 'antd/es/theme/util/genComponentStyleHook';

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
    const [wrapSSR, hashId] = useStyle(prefixCls);
    return {
      wrapSSR,
      hashId,
    };
  };
}

export type { CSSObject, FullToken, GenerateStyle };
