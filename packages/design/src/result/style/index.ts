import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type ResultToken = FullToken<'Result'>;

export const genResultStyle: GenerateStyle<ResultToken> = (token: ResultToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}`]: {
      [`${componentCls}-content`]: {
        padding: token.paddingLG,
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Result', token => {
    return [genResultStyle(token as ResultToken)];
  });
  return useStyle(prefixCls);
};
