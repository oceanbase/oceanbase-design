import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../../_util/genComponentStyleHook';
import type { OBToken } from '../../../_util/genComponentStyleHook';

export type WelcomeStepToken = OBToken;

export const genWelcomeStepStyle: GenerateStyle<WelcomeStepToken> = (
  token: WelcomeStepToken
): CSSObject => {
  const { componentCls, colorText, colorTextTertiary, colorPrimary } = token;

  return {
    [`${componentCls}`]: {
      display: 'flex',
      marginBottom: 30,
      padding: '20px 30px 20px 0',
      background: token.colorBgContainer,
      border: '1px solid rgba(0, 0, 0, 0.06)',
      borderRadius: 2,
      '&:hover': {
        boxShadow: '0 4px 16px 0',
        cursor: 'pointer',
      },
      '&:nth-child(even)': {
        marginRight: 0,
      },
      [`${componentCls}-left`]: {
        padding: '0 20px',
      },
      [`${componentCls}-right`]: {
        [`${componentCls}-title`]: {
          color: colorText,
          fontSize: 16,
          lineHeight: 24,
        },
        [`${componentCls}-description`]: {
          color: colorTextTertiary,
        },
      },
      [`${componentCls}-operations`]: {
        color: colorPrimary,
        fontSize: 14,
        lineHeight: 22,
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('WelcomeStep', token => {
    return [genWelcomeStepStyle(token as WelcomeStepToken)];
  });
  return useStyle(prefixCls);
};
