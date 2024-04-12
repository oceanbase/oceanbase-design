import type { CSSObject } from '@ant-design/cssinjs';
import type { LightFilterToken } from '@ant-design/pro-form/es/layouts/LightFilter/style';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genLightFilterStyle: GenerateStyle<LightFilterToken> = (
  token: LightFilterToken
): CSSObject => {
  const { componentCls, proComponentsCls } = token;

  return {
    [`${componentCls}`]: {
      [`${proComponentsCls}-core-field-label`]: {
        '&-active, &:hover': {
          backgroundColor: token.controlItemBgActive,
        },
      },
    },
    [`${componentCls}-middle`]: {
      [`${proComponentsCls}-core-field-label`]: {
        paddingInline: token.paddingSM,
        borderRadius: token.borderRadius,
      },
    },
    [`${componentCls}${componentCls}-small`]: {
      [`${proComponentsCls}-core-field-label`]: {
        paddingInline: token.paddingXS,
        borderRadius: token.borderRadiusSM,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('LightFilter', token => {
    return [genLightFilterStyle(token as LightFilterToken)];
  });
  return useStyle(prefixCls);
};
