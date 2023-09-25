import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from 'antd/es/theme/internal';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type SpinToken = FullToken<'Spin'> & {
  spinDotSize: number;
  spinDotSizeSM: number;
  spinDotSizeLG: number;
};

const genSizeStyle = (spinDotSize: number, token: SpinToken): CSSObject => {
  const { componentCls, colorText } = token;
  const spinDotWidth = spinDotSize;
  const spinDotHight = spinDotWidth * (295 / 397);
  return {
    // only work for oceanbase indicator
    [`&${componentCls}-oceanbase`]: {
      [`${componentCls}-dot`]: {
        width: spinDotWidth,
        height: spinDotHight,
      },
      [`${componentCls}-text`]: {
        width: spinDotWidth,
        color: colorText,
      },
    },
  };
};

const genNestedSizeStyle = (spinDotSize: number, token: SpinToken): CSSObject => {
  const { componentCls, fontSize } = token;
  const spinDotWidth = spinDotSize;
  // oceanbase indicator is rectangle instead of square, should calculate actual height by ratio
  // width: 295px
  // height: 397px
  const spinDotHight = spinDotWidth * (295 / 397);
  const dotMarginLeft = -spinDotWidth / 2;
  const dotMarginTop = -spinDotHight / 2;
  const textPaddingTop = (spinDotHight - fontSize) / 2 + 2;
  return {
    // only work for oceanbase indicator
    [`&${componentCls}-oceanbase`]: {
      [`${componentCls}-dot`]: {
        marginLeft: dotMarginLeft,
        marginTop: dotMarginTop,
      },
      [`${componentCls}-text`]: {
        paddingTop: textPaddingTop,
      },
      [`&${componentCls}-show-text ${componentCls}-dot`]: {
        marginTop: dotMarginTop - 10,
      },
    },
  };
};

export const genSpinStyle: GenerateStyle<SpinToken> = (token: SpinToken): CSSObject => {
  const { componentCls, spinDotSize, spinDotSizeSM, spinDotSizeLG } = token;
  return {
    [`${componentCls}`]: {
      [`&`]: genSizeStyle(spinDotSize, token),
      [`&-sm`]: genSizeStyle(spinDotSizeSM, token),
      [`&-lg`]: genSizeStyle(spinDotSizeLG, token),
    },
    [`${componentCls}-nested-loading`]: {
      [`> div > ${componentCls}`]: {
        [`&`]: genNestedSizeStyle(spinDotSize, token),
        [`&-sm`]: genNestedSizeStyle(spinDotSizeSM, token),
        [`&-lg`]: genNestedSizeStyle(spinDotSizeLG, token),
      },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Spin', token => {
    // should expand by 2x for oceanbase indicator
    // because it's inner padding is smaller than antd default indicator
    // const ratio = 3;
    return [
      genSpinStyle({
        ...token,
        // https://github.com/ant-design/ant-design/blob/master/components/spin/style/index.tsx#L238
        // spinDotSize: (token.controlHeightLG / 2) * ratio,
        // spinDotSizeSM: token.controlHeightLG * 0.35 * ratio,
        // spinDotSizeLG: token.controlHeight * ratio,
        spinDotSize: token.controlHeight * 1.75, // 56,
        spinDotSizeSM: token.controlHeight * 1.125, // 36
        spinDotSizeLG: token.controlHeight * 2.5, // 80
      } as SpinToken),
    ];
  });
  return useStyle(prefixCls);
};
