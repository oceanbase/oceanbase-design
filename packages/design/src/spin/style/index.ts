import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type SpinToken = FullToken<'Spin'> & {
  spinDotSize: number;
  spinDotSizeSM: number;
  spinDotSizeLG: number;
};

const genSizeStyle = (spinDotSize: number, token: SpinToken): CSSObject => {
  const { componentCls, colorText, calc } = token;
  const spinDotWidth = spinDotSize;
  const spinDotHight = calc(spinDotWidth).mul(295).div(397).equal();
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
  // oceanbase indicator is rectangle instead of square, should calculate actual height by ratio
  // width: 295px
  // height: 397px
  const spinDotHight = calc(spinDotWidth).mul(295).div(397).equal();
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

export default genStyleHooks('Spin', token => {
  // should expand by 2x for oceanbase indicator
  // because it's inner padding is smaller than antd default indicator
  // const ratio = 3;
  const { calc } = token;
  return [
    genSpinStyle({
      ...token,
      // https://github.com/ant-design/ant-design/blob/master/components/spin/style/index.tsx#L238
      // spinDotSize: (token.controlHeightLG / 2) * ratio,
      // spinDotSizeSM: token.controlHeightLG * 0.35 * ratio,
      // spinDotSizeLG: token.controlHeight * ratio,
      spinDotSize: calc(token.controlHeight).mul(1.75).equal(), // 56,
      spinDotSizeSM: calc(token.controlHeight).mul(1.125).equal(), // 36
      spinDotSizeLG: calc(token.controlHeight).mul(2.25).equal(), // 72
    } as SpinToken),
  ];
});
