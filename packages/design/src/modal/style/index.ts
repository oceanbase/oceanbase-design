import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ModalToken = FullToken<'Modal'>;

export const genModalStyle: GenerateStyle<ModalToken> = (token: ModalToken): CSSObject => {
  const { componentCls, marginLG } = token;
  return {
    [`${componentCls}:not(${componentCls}-confirm)`]: {
      [`${componentCls}-header`]: {
        marginBottom: marginLG,
      },
      [`${componentCls}-footer`]: {
        marginTop: marginLG,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Modal', token => {
    return [genModalStyle(token)];
  });
  return useStyle(prefixCls);
};
