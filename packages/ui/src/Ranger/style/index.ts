import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type RangerToken = OBToken;

export const genRangerStyle: GenerateStyle<RangerToken> = (token: RangerToken): CSSObject => {
  const { componentCls, antCls } = token;

  return {
    [`${componentCls}`]: {
      [`${antCls}-space-item:nth-child(2)`]: {
        flex: 1,
        width: '100%',
        [`${antCls}-picker, ${antCls}-picker-range, ${componentCls}-range-picker`]: {
          width: '100%',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          input: {
            textAlign: 'center',
          },
        },
      },
      [`${componentCls}-date-picker`]: {
        [`${antCls}-select-selector`]: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          '&:hover': {
            zIndex: 1,
          },
        },
        [`${antCls}-select-arrow`]: {
          zIndex: 1,
        },
      },
    },
    [`${componentCls}-show-range`]: {
      [`${componentCls}-quick-picker${componentCls}-quick-picker-select`]: {
        marginRight: -1,
        [`${antCls}-select-selector`]: {
          borderTopRightRadius: '0 !important',
          borderBottomRightRadius: '0 !important',
          '&:hover': {
            zIndex: 1,
          },
        },
        [`${antCls}-select-arrow`]: {
          zIndex: 1,
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Ranger', token => {
    return [genRangerStyle(token as RangerToken)];
  });
  return useStyle(prefixCls);
};
