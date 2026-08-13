import { type FullToken, type GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { CSSObject } from '@ant-design/cssinjs';

export type FlexToken = FullToken<'Flex'>;

export const genFlexStyle: GenerateStyle<FlexToken> = (token: FlexToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-not-support-gap${componentCls}-horizontal`]: {
      '> *:not(:last-child)': {
        marginRight: 'var(--flex-gap-column)',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-vertical`]: {
      '> *:not(:last-child)': {
        marginBottom: 'var(--flex-gap-row)',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-wrap${componentCls}-horizontal`]: {
      '> *': {
        marginBottom: 'var(--flex-gap-row)',
      },
    },
    [`${componentCls}-not-support-gap${componentCls}-wrap${componentCls}-vertical`]: {
      '> *': {
        marginRight: 'var(--flex-gap-column)',
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Flex', token => {
    return [genFlexStyle(token as FlexToken)];
  });
  return useStyle(prefixCls);
};
