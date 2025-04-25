import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export const genActionStyle: GenerateStyle<OBToken> = (token: OBToken): CSSObject => {
  const { componentCls, antCls } = token;
  const paddingVertical = (token.controlHeight - token.fontSize * token.lineHeight) / 2;
  const paddingHorizontal = token.paddingSM;
  const padding = `${paddingVertical}px ${paddingHorizontal}px`;
  const margin = `-${paddingVertical}px -${paddingHorizontal}px`;
  return {
    [`${componentCls}-more-menu`]: {
      background: 'red',
      [`${antCls}-dropdown-menu-item`]: {
        [`${antCls}-typography`]: {
          display: 'block',
          margin,
          padding: `${padding} !important`,
          [`&:not(${antCls}-typography-disabled)`]: {
            color: token.colorText,
          },
        },
        [`${antCls}-btn`]: {
          padding,
          margin,
          border: 'none',
          display: 'block',
          width: `calc(100% + ${paddingHorizontal * 2}px)`,
          textAlign: 'left',
          height: 'inherit',
          background: 'transparent',
          [`&:not(:disabled):not(${antCls}-btn-disabled)`]: {
            color: token.colorText,
            [`&:hover`]: {
              background: 'transparent',
            },
          },
          // remove button click animation
          [`${antCls}-wave`]: {
            display: 'none',
          },
        },
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Action', token => {
    return [genActionStyle(token as OBToken)];
  });
  return useStyle(prefixCls);
};
