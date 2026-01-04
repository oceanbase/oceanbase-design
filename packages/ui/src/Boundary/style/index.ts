import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type BoundaryToken = OBToken;

export const genBoundaryStyle: GenerateStyle<BoundaryToken> = (token: BoundaryToken): CSSObject => {
  const { colorTextTertiary } = token;

  return {
    [`.boundary-container`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      backgroundColor: token.colorBgContainer,
      paddingBlock: token.paddingLG,
      paddingInline: token.paddingXL,
      '.boundary-empty': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '> img': {
          height: 102,
          marginBottom: 24,
        },
        '> h4': {
          margin: 0,
          fontSize: 18,
        },
        '> span': {
          marginTop: 8,
          color: colorTextTertiary,
          fontSize: token.fontSize,
          textAlign: 'center',
        },
        '> button': {
          marginTop: 24,
        },
      },
    },
    [`.boundary-code`]: {
      minHeight: 'calc(100vh - 120px)',
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Boundary', token => {
    return [genBoundaryStyle(token as BoundaryToken)];
  });
  return useStyle(prefixCls);
};
