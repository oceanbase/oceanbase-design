import type { FullToken, GenerateStyle } from 'antd/lib/theme/internal';
import type { CSSObject } from '@ant-design/cssinjs';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export type TypographyToken = FullToken<'Typography'>;

export const genTypographyStyle: GenerateStyle<TypographyToken> = (
  token: TypographyToken
): CSSObject => {
  const { componentCls, controlHeight, fontSize, lineHeight } = token;
  const marginOffset = (controlHeight - fontSize * lineHeight) / 2;

  return {
    // inherit color and lineHeight from parent instead of fixed colorText
    [`span${componentCls}`]: {
      lineHeight: 'inherit',
      color: 'inherit',
      fontSize: 'inherit',
    },
    [`div${componentCls}`]: {
      lineHeight: 'inherit',
      color: 'inherit',
      fontSize: 'inherit',
    },
    [`${componentCls}`]: {
      [`${componentCls}-edit`]: {
        fontSize: token.fontSize,
      },
    },
    [`${componentCls}${componentCls}-editable-text:not(${componentCls}-edit-content)`]: {
      '&:hover': {
        background: token.colorBgContainer,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        position: 'relative',
        insetInlineStart: -token.paddingSM,
        padding: `${marginOffset - token.lineWidth}px ${token.paddingSM - token.lineWidth}px`,
      },
      'div&:hover': {
        height: token.controlHeight,
        marginTop: -marginOffset,
        marginBottom: `calc(1em - ${marginOffset}px)`,
      },
      'span&:hover': {
        display: 'inline-block',
        height: token.controlHeight,
        marginTop: -marginOffset,
        marginBottom: -marginOffset,
      },
      'h1&:hover, h2&:hover, h3&:hover, h4&:hover, h5&:hover': {
        marginTop: `${-marginOffset}px !important`,
        marginBottom: `${-marginOffset}px !important`,
      },
    },
    [`${componentCls}${componentCls}-edit-content`]: {
      [`${componentCls}-div&`]: {
        insetInlineStart: -token.paddingSM,
        marginTop: -marginOffset,
        marginBottom: `calc(1em - ${marginOffset}px)`,
      },
      [`${componentCls}-span&`]: {
        insetInlineStart: -token.paddingSM,
        marginTop: -marginOffset,
        marginBottom: -marginOffset,
      },
      [`${componentCls}-h1&, ${componentCls}-h2&, ${componentCls}-h3&, ${componentCls}-h4&, ${componentCls}-h5&`]:
        {
          insetInlineStart: -token.paddingSM,
          marginTop: `${-marginOffset}px !important`,
          marginBottom: `${-marginOffset}px !important`,
        },
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Typography', token => {
    return [genTypographyStyle(token as TypographyToken)];
  });
  return useStyle(prefixCls);
};
