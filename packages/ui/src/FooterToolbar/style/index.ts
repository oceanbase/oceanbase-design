import type { CSSObject } from '@ant-design/cssinjs';
import type { FooterToolBarToken } from '@ant-design/pro-layout/es/components/FooterToolbar/style';
import type { FullToken, GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';

export const genOperationStyle = (token: FullToken<any>): CSSObject => {
  const {
    antCls,
    iconCls,
    fontSize,
    lineWidth,
    borderRadiusLG,
    controlHeight,
    controlHeightSM,
    controlHeightLG,
  } = token;
  const height = controlHeightLG;
  const lineHeight = `${controlHeightLG}px`;

  return {
    // Button
    [`${antCls}-btn`]: {
      // limit min width for icon button
      minWidth: controlHeightLG,
      height,
      fontSize,
      borderRadius: borderRadiusLG,
    },
    // Radio.Button
    [`${antCls}-radio-group`]: {
      [`${antCls}-radio-button-wrapper`]: {
        height,
        lineHeight: `${height - lineWidth * 2}px`,
        fontSize,
        [`&:first-child`]: {
          borderStartStartRadius: borderRadiusLG,
          borderEndStartRadius: borderRadiusLG,
        },
        [`&:last-child`]: {
          borderStartEndRadius: borderRadiusLG,
          borderEndEndRadius: borderRadiusLG,
        },
      },
    },
    // Select
    [`${antCls}-select`]: {
      height,
      fontSize,
      [`${antCls}-select-selector`]: {
        borderRadius: borderRadiusLG,
      },
      [`${antCls}-select-selection-item`]: {
        fontSize,
      },
    },
    // Input
    [`${antCls}-input-wrapper`]: {
      fontSize,
      [`${iconCls}`]: {
        fontSize,
      },
      [`${antCls}-input-affix-wrapper`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    },
    [`${antCls}-input-affix-wrapper`]: {
      height,
      borderRadius: borderRadiusLG,
      [`&:not(${antCls}-input-affix-wrapper-lg)`]: {
        lineHeight: `${controlHeight - lineWidth * 2}px`,
      },
      // avoid to conflict with `${antCls}-input-affix-wrapper` height
      [`${antCls}-input`]: {
        height: `${controlHeight - lineWidth * 2}px`,
      },
      [`${antCls}-input-lg`]: {
        height: controlHeightSM,
      },
      [`${antCls}-input-sm`]: {
        height: `${controlHeightLG - lineWidth * 2}px`,
      },
    },
    [`${antCls}-input`]: {
      fontSize,
      borderRadius: borderRadiusLG,
    },
    [`${antCls}-input-search-button`]: {
      height,
      lineHeight,
      borderStartEndRadius: borderRadiusLG,
      borderEndEndRadius: borderRadiusLG,
    },
    [`${antCls}-input-group-addon`]: {
      fontSize,
      borderStartEndRadius: borderRadiusLG,
      borderEndEndRadius: borderRadiusLG,
    },
    // set large DatePicker, TimePicker and RangePicker style
    [`${antCls}-picker`]: {
      height,
      borderRadius: borderRadiusLG,
      [`${antCls}-picker-input>input`]: {
        fontSize,
      },
    },
  };
};

export const genFooterToolbarStyle: GenerateStyle<FooterToolBarToken> = (
  token: FooterToolBarToken
): CSSObject => {
  const { componentCls, colorBgBase, borderRadius, boxShadowSecondary, controlHeightLG } = token;

  return {
    [`${componentCls}`]: {
      width: '100%',
      backgroundColor: colorBgBase,
      borderRadius: borderRadius,
      boxShadow: boxShadowSecondary,
      borderBlockStart: 'none',
      ...genOperationStyle(token),
    },
  };
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('FooterToolbar', token => {
    return [genFooterToolbarStyle(token as FooterToolBarToken)];
  });
  return useStyle(prefixCls);
};
