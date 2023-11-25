import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { TinyColor } from '@ctrl/tinycolor';

export type SelectToken = FullToken<'Select'>;

const getMultipleBorderColor = (token: SelectToken) => {
  const { componentCls, colorBorder } = token;
  return {
    [`${componentCls}-selection-item`]: {
      borderColor: new TinyColor(colorBorder).setAlpha(0.4).toHex8String(),
    },
  };
};

export const genSelectStyle: GenerateStyle<SelectToken> = (token: SelectToken): CSSObject => {
  const { componentCls } = token;

  return {
    [`${componentCls}`]: {
      ['&-multiple']: getMultipleBorderColor(token),
      ['&-multiple&-lg']: getMultipleBorderColor(token),
      ['&-multiple&-sm']: getMultipleBorderColor(token),
      ['&-single']: {
        [`${componentCls}-selection-item`]: {
          ['&:has(.ant-typography)']: {
            lineHeight: '0',
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Select', (token: SelectToken) => {
    return [genSelectStyle(token)];
  });
  return useStyle(prefixCls);
};
