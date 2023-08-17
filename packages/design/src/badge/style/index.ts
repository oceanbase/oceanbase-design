import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type badgeToken = FullToken<'Badge'> & {
  badgeDotSize: number;
  badgeDotSizeSM: number;
  badgeDotSizeLG: number;
};

const genSizeStyle = (badgeDotSize: number, token: badgeToken): CSSObject => {
  const { componentCls, colorText } = token;
  const badgeDotWidth = 8;
  const badgeDotHight = 8;
  return {
    [`${componentCls}-status-dot`]: {
      width: badgeDotWidth,
      height: badgeDotHight,
    },
  };
};

const genIconStyle = ( token: badgeToken): CSSObject => {
  const { componentCls } = token;
  return {
    [`${componentCls}-status-icon`]: {
      width: 12,
      color: token.colorSuccess,
    },
    [`${componentCls}-status-success`]: {
      color: token.colorSuccess,
    },
    [`${componentCls}-status-processing`]: {
      color: token.colorPrimary,
    },
    [`${componentCls}-status-default`]: {
      color: token.colorTextPlaceholder,
    },
    [`${componentCls}-status-error`]: {
      color: token.colorError,
    },
    [`${componentCls}-status-warning`]: {
      color: token.colorWarning,
    },
  };
};

export const genBadgeStyle: GenerateStyle<badgeToken> = (token: badgeToken): CSSObject => {
  const { componentCls, badgeDotSize, badgeDotSizeSM, badgeDotSizeLG } = token;
  return {
    [`${componentCls}`]: {
      [`&-oceanbase${componentCls}-status`]: genSizeStyle(badgeDotSize, token),
      [`&-oceanbase`]: genIconStyle(token)
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Badge', token => {
    return [
      genBadgeStyle({
        ...token,
      } as badgeToken),
    ];
  });
  return useStyle(prefixCls);
};
