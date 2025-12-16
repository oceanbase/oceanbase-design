import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import { genStyleHooks } from '../../_util/genComponentStyleHook';

export type TypographyToken = FullToken<'Typography'>;

export const genTypographyStyle: GenerateStyle<TypographyToken> = (
  token: TypographyToken
): CSSObject => {
  const { componentCls, controlHeight, fontSize, lineHeight, calc } = token;
  const marginOffset = calc(controlHeight)
    .sub(calc(fontSize).mul(lineHeight).equal())
    .div(2)
    .equal();
  const paddingTop = calc(marginOffset).sub(token.lineWidth).equal();
  const paddingInline = calc(token.paddingSM).sub(token.lineWidth).equal();
  const negativeMarginOffset = calc(marginOffset).mul(-1).equal();

  return {
    // inherit color and lineHeight from parent instead of fixed colorText
    [`${componentCls}`]: {
      lineHeight: 'inherit',
      color: 'inherit',
      fontSize: 'inherit',
      [`${componentCls}-edit`]: {
        fontSize: token.fontSize,
      },
    },
    [`${componentCls}${componentCls}-editable-text:not(${componentCls}-edit-content)`]: {
      '&:hover': {
        background: token.colorBgContainer,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        position: 'relative',
        insetInlineStart: calc(token.paddingSM).mul(-1).equal(),
        padding: `${paddingTop} ${paddingInline}`,
      },
      'div&:hover': {
        height: token.controlHeight,
        marginTop: negativeMarginOffset,
        marginBottom: calc('1em').sub(marginOffset).equal(),
      },
      'span&:hover': {
        display: 'inline-block',
        height: token.controlHeight,
        marginTop: negativeMarginOffset,
        marginBottom: negativeMarginOffset,
      },
      'h1&:hover, h2&:hover, h3&:hover, h4&:hover, h5&:hover': {
        marginTop: `${negativeMarginOffset} !important`,
        marginBottom: `${negativeMarginOffset} !important`,
      },
    },
    [`${componentCls}${componentCls}-edit-content`]: {
      [`${componentCls}-div&`]: {
        insetInlineStart: calc(token.paddingSM).mul(-1).equal(),
        insetBlockStart: 0,
        marginTop: negativeMarginOffset,
        marginBottom: calc('1em').sub(marginOffset).equal(),
      },
      [`${componentCls}-span&`]: {
        insetInlineStart: calc(token.paddingSM).mul(-1).equal(),
        insetBlockStart: 0,
        marginTop: negativeMarginOffset,
        marginBottom: negativeMarginOffset,
      },
      [`${componentCls}-h1&, ${componentCls}-h2&, ${componentCls}-h3&, ${componentCls}-h4&, ${componentCls}-h5&`]:
        {
          insetInlineStart: calc(token.paddingSM).mul(-1).equal(),
          insetBlockStart: 0,
          marginTop: `${negativeMarginOffset} !important`,
          marginBottom: `${negativeMarginOffset} !important`,
        },
    },
  };
};

export default genStyleHooks('Typography', token => {
  return [genTypographyStyle(token as TypographyToken)];
});
