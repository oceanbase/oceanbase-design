import React from 'react';
import type { CSSObject } from '@ant-design/cssinjs';
import type { ComponentTokenMap } from 'antd/es/theme/interface';
import type { GlobalToken, FullToken, GenerateStyle } from '../theme/interface';
import { genComponentStyleHook as antGenComponentStyleHook } from '../theme/internal';
import theme from '../theme';

// work for Select, TreeSelect, Cascader
export const genSelectCommonStyle = (
  token: FullToken<'Select' | 'TreeSelect' | 'Cascader'>
): CSSObject => {
  const { antCls } = token;
  const selectComponentCls = `${antCls}-select`;
  return {
    [`${selectComponentCls}${selectComponentCls}-multiple`]: {
      [`${selectComponentCls}-selection-item`]: {
        borderRadius: token.borderRadius,
      },
    },
  };
};

export type ComponentName = keyof ComponentTokenMap;

export function genComponentStyleHook(
  componentName: ComponentName,
  styleFn: GenerateStyle<FullToken<ComponentName>>,
  getDefaultToken?:
    | Partial<FullToken<ComponentName>>
    | ((token: GlobalToken) => Partial<FullToken<ComponentName>>)
) {
  return (prefixCls: string) => {
    const useStyle = antGenComponentStyleHook(
      `OB-${componentName}` as ComponentName,
      token => {
        return [
          genSelectCommonStyle(token as FullToken<'Select' | 'TreeSelect' | 'Cascader'>),
          styleFn(token as FullToken<ComponentName>),
        ];
      },
      getDefaultToken,
      {
        resetStyle: false,
        // antd style order is -999 and -998
        // ref: https://github.com/ant-design/ant-design/blob/master/components/theme/util/genComponentStyleHook.tsx#L175
        // obui style order should behind to cover it
        order: -900,
      }
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
