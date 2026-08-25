import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import { mergeToken } from 'antd/es/theme/internal';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';
import { upperFirst } from 'lodash';

export type NotificationToken = FullToken<'Notification'> & {
  /**
   * @desc 提醒框堆叠层数
   * @descEN Stack layer of Notification
   */
  notificationStackLayer: number;
  /**
   * @desc 提醒框内容区域最大高度，超出后内部滚动
   * @descEN Max height of the Notification content area, scrolls inside when exceeded
   */
  maxHeight: number | string;
};

/** Figma shadow-2 on Notification; differs from token.boxShadowSecondary until aligned globally. */
const NOTIFICATION_SHADOW = '0 6px 8px rgba(19, 33, 57, 0.1)';

/** Default max height of the Notification content area before internal scrolling kicks in. */
const NOTIFICATION_MAX_HEIGHT = 320;

type NotificationVisualType = 'success' | 'info' | 'warning' | 'error' | 'loading';

const getNotificationTypeColor = (type: NotificationVisualType, token: NotificationToken) =>
  type === 'loading' ? token.colorPrimary : token[`color${upperFirst(type)}Text`];

const genNotificationTypeStyle = (
  type: NotificationVisualType,
  token: NotificationToken,
  noticeCls: string
): CSSObject => {
  const textColor = getNotificationTypeColor(type, token);
  const hoverColor =
    type === 'loading' ? token.colorPrimaryHover : token[`color${upperFirst(type)}TextHover`];
  const activeColor =
    type === 'loading' ? token.colorPrimaryActive : token[`color${upperFirst(type)}TextActive`];
  const linkStyle = {
    color: textColor,
    textDecoration: 'underline',
    '&:hover': {
      color: hoverColor,
    },
    '&:active': {
      color: activeColor,
    },
  };

  return {
    [`${noticeCls}${noticeCls}-${type}`]: {
      [`${noticeCls}-message, ${noticeCls}-error-details-action`]: {
        color: textColor,
        a: linkStyle,
        [`${token.antCls}-typography-link`]: linkStyle,
      },
      [`${noticeCls}-description`]: {
        a: linkStyle,
        [`${token.antCls}-typography-link`]: linkStyle,
      },
      [`${noticeCls}-icon`]: {
        color: textColor,
        [`${token.iconCls}`]: {
          color: textColor,
        },
      },
      [`${noticeCls}-icon-${type}`]: {
        color: textColor,
      },
    },
  };
};

const genStackChildrenStyle = (token: NotificationToken): CSSObject => {
  const childrenStyle: CSSObject = {};
  for (let i = 1; i < token.notificationStackLayer; i++) {
    childrenStyle[`&:nth-last-child(${i + 1})`] = {
      [`& > ${token.componentCls}-notice`]: {
        opacity: 1,
      },
    };
  }
  return childrenStyle;
};

export const genNotificationStyle: GenerateStyle<NotificationToken> = (
  token: NotificationToken
): CSSObject => {
  const {
    componentCls,
    calc,
    width = 350,
    maxHeight = NOTIFICATION_MAX_HEIGHT,
    paddingSM,
    padding,
    paddingXS,
    paddingXXS,
    fontSize,
    fontSizeLG,
    fontSizeHeading5,
    lineHeightHeading5,
  } = token;
  const noticeCls = `${componentCls}-notice`;
  // font-line-height-500 (20px) — fixed across locales; do not use fontHeight (22px in Cn).
  const titleLineHeight = calc(fontSizeHeading5).mul(lineHeightHeading5).equal();
  const titleCloseReserve = calc(padding).add(fontSizeLG).equal();
  const bottomRadius = unit(token.borderRadiusLG);

  const typeStyles = (
    ['success', 'info', 'warning', 'error', 'loading'] as const
  ).reduce<CSSObject>((acc, type) => {
    return {
      ...acc,
      ...genNotificationTypeStyle(type, token, noticeCls),
    };
  }, {});

  return {
    // Root selector is doubled (`${componentCls}${componentCls}`) to out-rank antd's
    // own notification styles, which otherwise override ours.
    [`${componentCls}${componentCls}`]: {
      [`${noticeCls}-wrapper`]: {
        marginBottom: paddingXS,
        width,
        maxWidth: width,
        [`${noticeCls}`]: {
          // Keep the card as the positioning containing block for the progress bar
          // and clip its square corners against the card radius.
          position: 'relative',
          overflow: 'hidden',
          borderRadius: bottomRadius,
          width,
          maxWidth: width,
          padding: `${unit(paddingSM)} ${unit(padding)}`,
          boxShadow: NOTIFICATION_SHADOW,
          [`${noticeCls}-content`]: {
            // Cap the content height and scroll inside when it overflows,
            // so the card never grows without bound (close / progress stay fixed).
            maxHeight,
            overflowY: 'auto',
            overflowX: 'hidden',
          },
          [`${noticeCls}-with-icon`]: {
            display: 'grid',
            gridTemplateColumns: `${unit(fontSizeLG)} minmax(0, 1fr)`,
            columnGap: paddingXS,
            rowGap: paddingXXS,
            alignItems: 'start',
          },
          [`${noticeCls}-icon`]: {
            position: 'static',
            gridColumn: '1',
            gridRow: '1',
            alignSelf: 'start',
            marginInlineEnd: 0,
            marginTop: 0,
            width: fontSizeLG,
            fontSize: fontSizeLG,
            lineHeight: 1,
            height: titleLineHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [`${token.iconCls}`]: {
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: fontSizeLG,
              lineHeight: 1,
            },
          },
          [`${noticeCls}-message`]: {
            gridColumn: '2',
            gridRow: '1',
            marginInlineStart: 0,
            marginBottom: 0,
            paddingInlineEnd: titleCloseReserve,
            minHeight: titleLineHeight,
            fontSize,
            fontWeight: token.fontWeightStrong,
            lineHeight: unit(titleLineHeight),
            color: token.colorText,
          },
          [`${noticeCls}-description`]: {
            gridColumn: '2',
            gridRow: '2',
            marginInlineStart: 0,
            marginTop: 0,
            fontSize,
            lineHeight: unit(titleLineHeight),
            color: token.colorText,
          },
          [`${noticeCls}-with-icon ${noticeCls}-message`]: {
            marginInlineStart: 0,
            fontSize,
          },
          [`${noticeCls}-with-icon ${noticeCls}-description`]: {
            marginInlineStart: 0,
          },
          // Close aligns to title first line: top = paddingSM, height = titleLineHeight.
          [`${noticeCls}-close`]: {
            top: paddingSM,
            insetInlineEnd: padding,
            width: fontSizeLG,
            height: titleLineHeight,
            fontSize: fontSizeLG,
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'transparent',
              color: token.colorIconHover,
            },
          },
          [`${noticeCls}-progress`]: {
            position: 'absolute',
            blockSize: 2,
            insetInlineStart: 0,
            insetInlineEnd: 0,
            inlineSize: '100%',
            left: 0,
            right: 0,
            bottom: 0,
            // The card's overflow: hidden + border-radius clips both square ends
            // to hug the card radius; clip-path is unreliable on <progress>.
            borderRadius: 0,
            '&, &::-webkit-progress-bar': {
              backgroundColor: 'transparent',
            },
            '&::-moz-progress-bar': {
              background: token.gray6,
              borderBottomLeftRadius: token.borderRadiusLG,
            },
            '&::-webkit-progress-value': {
              borderBottomLeftRadius: token.borderRadiusLG,
              background: token.gray6,
            },
          },
          [`${noticeCls}-error-details`]: {
            marginTop: token.marginXXS,
            color: token.colorTextTertiary,
            fontSize,
            lineHeight: unit(titleLineHeight),
          },
          [`${noticeCls}-error-details-line`]: {
            display: 'block',
          },
          [`${noticeCls}-error-details-collapsed`]: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          },
          [`${noticeCls}-error-details-actions`]: {
            marginTop: token.marginXXS,
            display: 'flex',
            gap: token.marginSM,
          },
          [`${noticeCls}-error-details-action`]: {
            cursor: 'pointer',
          },
        },
        ...typeStyles,
      },
    },
    [`${componentCls}-stack`]: {
      [`& > ${componentCls}-notice-wrapper`]: {
        ...genStackChildrenStyle(token),
      },
    },
    [`${componentCls}-stack${componentCls}-stack-expanded`]: {
      [`& > ${componentCls}-notice-wrapper`]: {
        '&:not(:nth-last-child(-n + 1))': {
          '&:after': {
            height: paddingXS,
            bottom: calc(paddingXS).mul(-1).equal(),
          },
        },
      },
    },
  };
};

export default genStyleHooks('Notification', token => {
  const notificationToken = mergeToken<NotificationToken>(token, {
    notificationStackLayer: 3,
  });
  return [genNotificationStyle(notificationToken)];
});
