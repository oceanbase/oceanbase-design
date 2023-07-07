import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook as antGenComponentStyleHook } from 'antd/es/theme/internal';

export type ComponentName = keyof ComponentTokenMap;

export function genComponentStyleHook(
  componentName: ComponentName,
  styleFn: GenerateStyle<FullToken<ComponentName>>
) {
  return (prefixCls: string) => {
    const useStyle = antGenComponentStyleHook(`OB-${componentName}`, token => {
      return [styleFn(token)];
    });
    const [wrapSSR, hashId] = useStyle(prefixCls);
    return {
      wrapSSR,
      hashId,
    };
  };
}

export type { CSSObject, FullToken, GenerateStyle };
