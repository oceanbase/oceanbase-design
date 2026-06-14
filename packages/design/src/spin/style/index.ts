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
  const spinDotHight = spinDotWidth;
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
  const { componentCls, fontSize, calc } = token;
  const spinDotWidth = spinDotSize;
  // oceanbase indicator lottie canvas is 360x360
  const spinDotHight = spinDotWidth;
  const dotMarginLeft = calc(spinDotWidth).div(-2).equal();
  const dotMarginTop = calc(spinDotHight).div(-2).equal();
  const textPaddingTop = calc(spinDotHight).sub(fontSize).div(2).add(2).equal();
  return {
    // only work for oceanbase indicator
    // `& > ${componentCls}-oceanbase` is compatible with double .ant-spin like Table loading
    [`&${componentCls}-oceanbase, & > ${componentCls}-oceanbase`]: {
      [`${componentCls}-dot`]: {
        marginLeft: dotMarginLeft,
        marginTop: dotMarginTop,
      },
      [`${componentCls}-text`]: {
        paddingTop: textPaddingTop,
      },
      [`&${componentCls}-show-text ${componentCls}-dot`]: {
        marginTop: calc(dotMarginTop).sub(10).equal(),
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
        spinDotSizeLG: token.controlHeight * 2.25, // 72
      } as SpinToken),
    ];
  });
  return useStyle(prefixCls);
};
