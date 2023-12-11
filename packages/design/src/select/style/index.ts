import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import { getWeakenBorderColor } from '../../_util/getWeakenBorderColor';

export type SelectToken = FullToken<'Select'>;

const getMultipleBorderColor = (token: SelectToken) => {
  const { componentCls, colorBorder } = token;
  return {
    [`${componentCls}-selection-item`]: {
      borderColor: getWeakenBorderColor(colorBorder),
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
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Select', (token: SelectToken) => {
    return [genSelectStyle(token)];
  });
  return useStyle(prefixCls);
};
