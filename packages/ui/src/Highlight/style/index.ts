import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type HighlightToken = OBToken;

export const genHighlightStyle: GenerateStyle<HighlightToken> = (
  token: HighlightToken
): CSSObject => {
  const { componentCls, borderRadius, fontWeightStrong, colorBgLayout } = token;

  return {
    [`${componentCls}`]: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: 'rgba(0, 0, 0, 0.88)',
      fontSize: token.fontSize,
      lineHeight: 1.5714285714285714,
      listStyle: 'none',
      borderRadius: borderRadius,
      [`&:not(:hover) ${componentCls}-copy`]: {
        visibility: 'hidden',
        opacity: 0,
      },
      '@keyframes copy-button-trans': {
        '0%': {
          opacity: 0.8,
          marginBlockStart: 0,
        },
        '10%': {
          opacity: 0.8,
          marginBlockStart: -16,
        },
        '90%': {
          opacity: 0.8,
          marginBlockStart: -16,
        },
        '100%': {
          opacity: 0.8,
          marginBlockStart: 0,
        },
      },
      [`${componentCls}-json-view`]: {
        padding: 0,
        '.react-json-view': {
          padding: '0.5em',
          overflow: 'auto',
          '.icon-container svg': {
            transform: 'translateY(5px)',
          },
        },
      },
      [`&.${componentCls}-light`]: {
        '.react-json-view': {
          background: colorBgLayout,
        },
        [`${componentCls}-light-index`]: {
          borderInlineEnd: '1px solid rgba(0, 0, 0, 0.05)',
        },
        display: 'block',
        padding: '0.5em',
        overflowX: 'auto',
        color: '#383a42',
        background: colorBgLayout,
        '.hljs-comment, .hljs-quote': {
          color: '#a0a1a7',
          fontStyle: 'italic',
        },
        '.hljs-doctag, .hljs-keyword, .hljs-formula': {
          color: '#a626a4',
        },
        '.hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst': {
          color: '#e45649',
        },
        '.hljs-literal': {
          color: '#0184bb',
        },
        '.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string': {
          color: '#50a14f',
        },
        '.hljs-built_in, .hljs-class, .hljs-title': {
          color: '#c18401',
        },
        '.hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-type, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-number':
          {
            color: '#986801',
          },
        '.hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-title': {
          color: '#4078f2',
        },
        '.hljs-emphasis': {
          fontStyle: 'italic',
        },
        '.hljs-strong': {
          fontWeight: fontWeightStrong,
        },
        '.hljs-link': {
          textDecoration: 'underline',
        },
      },
      [`${componentCls}-index`]: {
        boxSizing: 'border-box',
        width: 40,
        minWidth: 40,
        color: '#aaa',
        textAlign: 'end',
        background: 'rgba(255, 255, 255, 0.03)',
        userSelect: 'none',
        paddingBlock: 2,
        paddingInline: 8,
      },
      [`${componentCls}-content`]: {
        paddingBlock: 2,
        paddingInline: 8,
      },
      [`${componentCls}-copy`]: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: 16,
        height: 16,
        padding: 0,
        overflow: 'hidden',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        opacity: 0.6,
        transition: 'opacity 0.2s',
        insetBlockStart: 16,
        insetInlineEnd: 16,
        '&:hover': {
          opacity: 0.8,
        },
      },
      [`&:not(:hover) &.${componentCls}-copy`]: {
        visibility: 'hidden',
        opacity: 0,
      },
      [`${componentCls}-copy-icon`]: {
        width: 16,
        height: 16,
        fontSize: 16,
        '&.scoll': {
          animation: 'copy-button-trans 2s',
          animationPlayState: 'running',
        },
      },
      [`${componentCls}-dark`]: {
        display: 'block',
        padding: '0.5em',
        overflowX: 'auto',
        color: '#c0c5ce',
        background: '#2b303b',
        borderRadius: borderRadius,
        [`&.${componentCls}-index`]: {
          borderInlineEnd: '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.hljs-comment, .hljs-quote': {
          color: '#65737e',
        },
        '.hljs-variable, .hljs-template-variable, .hljs-tag, .hljs-name, .hljs-selector-id, .hljs-selector-class, .hljs-regexp, .hljs-deletion':
          {
            color: '#bf616a',
          },
        '.hljs-number, .hljs-built_in, .hljs-builtin-name, .hljs-literal, .hljs-type, .hljs-params, .hljs-meta, .hljs-link':
          {
            color: '#d08770',
          },
        '.hljs-attribute': {
          color: '#ebcb8b',
        },
        '.hljs-string, .hljs-symbol, .hljs-bullet, .hljs-addition': {
          color: '#a3be8c',
        },
        '.hljs-title, .hljs-section': {
          color: '#8fa1b3',
        },
        '.hljs-keyword, .hljs-selector-tag': {
          color: '#b48ead',
        },
        '.hljs-emphasis': {
          fontStyle: 'italic',
        },
        '.hljs-strong': {
          fontWeight: fontWeightStrong,
        },
      },
      [`&.${componentCls}-diff`]: {
        overflowY: 'auto',
        table: {
          width: '100%',
          fontFamily: "'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace'",
          borderCollapse: 'collapse',
          borderSpacing: 0,
          td: {
            verticalAlign: 'top',
          },
        },
        [`${componentCls}-diff-index, ${componentCls}-diff-mark, ${componentCls}-diff-code`]: {
          paddingBlock: 2,
          paddingInline: 8,
        },
        [`${componentCls}-diff-index, ${componentCls}-diff-mark`]: {
          userSelect: 'none',
        },
        [`${componentCls}-diff-index`]: {
          width: 40,
          minWidth: 40,
          textAlign: 'end',
          fontVariantNumeric: 'tabular-nums',
        },
        [`${componentCls}-diff-mark`]: {
          width: 10,
          minWidth: 10,
          textAlign: 'center',
        },
        [`${componentCls}-diff-code`]: {
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        },
        [`&.${componentCls}-light`]: {
          [`${componentCls}-diff-index, ${componentCls}-diff-mark`]: {
            color: '#aaa',
          },
          [`${componentCls}-diff-index`]: {
            background: 'rgba(0, 0, 0, 0.01)',
            borderInlineEnd: '1px solid rgba(0, 0, 0, 0.05)',
            borderInlineStart: '1px solid rgba(0, 0, 0, 0.1)',
            '&:first-child': {
              borderInlineStart: 'none',
            },
          },
          [`${componentCls}-diff-cell-add`]: {
            background: '#e7f1e2',
          },
          [`${componentCls}-diff-cell-remove`]: {
            background: '#f6e3e4',
          },
          [`${componentCls}-diff-cell-empty`]: {
            background: 'rgba(0, 0, 0, 0.03)',
          },
        },
        [`&.${componentCls}-dark`]: {
          [`${componentCls}-diff-index, ${componentCls}-diff-mark`]: {
            color: '#aaa',
          },
          [`${componentCls}-diff-index`]: {
            background: 'rgba(255, 255, 255, 0.01)',
            borderInlineEnd: '1px solid rgba(255, 255, 255, 0.05)',
            borderInlineStart: '1px solid rgba(255, 255, 255, 0.1)',
            '&:first-child': {
              borderInlineStart: 'none',
            },
          },
          [`${componentCls}-diff-cell-add`]: {
            background: '#305c29',
          },
          [`${componentCls}-diff-cell-remove`]: {
            background: '#6d2431',
          },
          [`${componentCls}-diff-cell-empty`]: {
            background: 'rgba(255, 255, 255, 0.03)',
          },
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Highlight', token => {
    return [genHighlightStyle(token as HighlightToken)];
  });
  return useStyle(prefixCls);
};
