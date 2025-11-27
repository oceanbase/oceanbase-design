import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type TaskGraphToken = OBToken;

export const genTaskGraphStyle: GenerateStyle<TaskGraphToken> = (
  token: TaskGraphToken
): CSSObject => {
  const { componentCls, antCls, colorText, colorTextSecondary, fontWeight } = token;

  return {
    container: {
      position: 'relative',
      paddingBottom: '0 !important',
      [`${antCls}-page-header`]: {
        paddingTop: 12,
        paddingBottom: 12,
      },
      '.tech-page-container-header-inner': {
        backgroundColor: '#fafbff',
        [`${antCls}-page-header-heading ${antCls}-page-header-heading-title`]: {
          fontSize: 16,
        },
      },
      [`${componentCls}-split-pane`]: {
        top: 'auto !important',
        height: 'calc(100% - 36px) !important',
        minHeight: 'calc(100% - 36px) !important',
        margin: -24,
        [`${componentCls}-tabs-wrapper`]: {
          width: '100%',
        },
        [`${antCls}-tabs`]: {
          height: '100%',
          [`${antCls}-tabs-nav-container`]: {
            height: 32,
            paddingTop: 4,
          },
          [`${antCls}-tabs-bar`]: {
            marginBottom: 0,
            backgroundColor: '#fff',
            borderBottom: 'none',
          },
          [`${antCls}-tabs-tab`]: {
            minWidth: 120,
            height: 28,
            margin: 0,
            padding: 0,
            fontSize: 12,
            lineHeight: 28,
            backgroundColor: '#fff',
            border: 'none',
            borderBottom: '1px solid #e8e8e8',
            borderRadius: 0,
            transition: 'none',
            '&:hover': {
              color: colorTextSecondary,
            },
            div: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 20,
              marginTop: 4,
              padding: '0 8px',
              borderLeft: '1px solid #e8e8e8',
            },
          },
          [`${antCls}-tabs-tab:last-child`]: {
            div: {
              borderLeft: 'none',
            },
          },
          [`${antCls}-tabs-tab-active`]: {
            color: colorText,
            fontWeight: fontWeight,
            backgroundColor: '#f7f8fc',
            borderBottom: 'none',
            borderLeft: 'none',
            borderRadius: 2,
            div: {
              borderLeft: 'none',
            },
            [`& + ${antCls}-tabs-tab`]: {
              div: {
                borderLeft: 'none',
              },
            },
          },
          [`${antCls}-tabs-extra-content`]: {
            marginRight: 16,
            lineHeight: 32,
          },
          [`${antCls}-tabs-content`]: {
            height: 'calc(100% - 64px)',
            padding: 16,
            overflow: 'scroll',
            color: colorTextSecondary,
            lineHeight: 22,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            backgroundColor: '#f7f8fc',
          },
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('TaskGraph', token => {
    return [genTaskGraphStyle(token as TaskGraphToken)];
  });
  return useStyle(prefixCls);
};

