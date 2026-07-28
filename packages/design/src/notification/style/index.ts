import type { CSSObject } from '@ant-design/cssinjs';
import { unit } from '@ant-design/cssinjs';
import type { FullToken, GenerateStyle } from '../../theme/interface';
import { genStyleHooks } from '../../_util/genComponentStyleHook';
import { upperFirst } from 'lodash';

export type NotificationToken = FullToken<'Notification'>;

const NOTIFICATION_WIDTH = 350;
const NOTIFICATION_ICON_SIZE = 16;
const NOTIFICATION_TITLE_FONT_SIZE = 14;
const NOTIFICATION_TITLE_LINE_HEIGHT = 20;
const NOTIFICATION_PADDING_BLOCK = 12;
const NOTIFICATION_PADDING_INLINE = 16;
const NOTIFICATION_ICON_GAP = 8;
const NOTIFICATION_TITLE_CLOSE_GAP = 16;
const NOTIFICATION_CONTENT_GAP = 4;
const STACK_GAP = 8;
const NOTIFICATION_SHADOW = '0 6px 8px rgba(19, 33, 57, 0.1)';

type NotificationVisualType = 'success' | 'info' | 'warning' | 'error' | 'processing';

const getNotificationTypeColor = (type: NotificationVisualType, token: NotificationToken) =>
  type === 'processing' ? token.colorPrimary : token[`color${upperFirst(type)}Text`];

const genNotificationTypeStyle = (
  type: NotificationVisualType,
  token: NotificationToken,
  noticeCls: string
): CSSObject => {
  const textColor = getNotificationTypeColor(type, token);
  const hoverColor =
    type === 'processing' ? token.colorPrimaryHover : token[`color${upperFirst(type)}TextHover`];
  const activeColor =
    type === 'processing' ? token.colorPrimaryActive : token[`color${upperFirst(type)}TextActive`];
  const typeNoticeSelector = `${noticeCls}-wrapper ${noticeCls}-${type}`;
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
    [typeNoticeSelector]: {
      [`${noticeCls}-message`]: {
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

export const genNotificationStyle: GenerateStyle<NotificationToken> = (
  token: NotificationToken
): CSSObject => {
  const { componentCls, calc } = token;
  const noticeCls = `${componentCls}-notice`;
  const titleCloseReserve = calc(NOTIFICATION_TITLE_CLOSE_GAP).add(NOTIFICATION_ICON_SIZE).equal();
  const bottomRadius = unit(token.borderRadiusLG);
  const progressBottomRadius = `0 0 ${bottomRadius} ${bottomRadius}`;

  const typeStyles = (
    ['success', 'info', 'warning', 'error', 'processing'] as const
  ).reduce<CSSObject>((acc, type) => {
    return {
      ...acc,
      ...genNotificationTypeStyle(type, token, noticeCls),
    };
  }, {});

  return {
    [componentCls]: {
      ...typeStyles,
      [`${noticeCls}-wrapper`]: {
        marginBottom: STACK_GAP,
        width: NOTIFICATION_WIDTH,
        maxWidth: NOTIFICATION_WIDTH,
        [`${noticeCls}`]: {
          position: 'relative',
          width: NOTIFICATION_WIDTH,
          maxWidth: NOTIFICATION_WIDTH,
          padding: `${unit(NOTIFICATION_PADDING_BLOCK)} ${unit(NOTIFICATION_PADDING_INLINE)}`,
          borderRadius: token.borderRadiusLG,
          boxShadow: NOTIFICATION_SHADOW,
          background: token.colorBgElevated,
          overflow: 'hidden',
        },
        [`${noticeCls}-with-icon`]: {
          display: 'grid',
          gridTemplateColumns: `${unit(NOTIFICATION_ICON_SIZE)} minmax(0, 1fr)`,
          columnGap: NOTIFICATION_ICON_GAP,
          rowGap: NOTIFICATION_CONTENT_GAP,
          alignItems: 'start',
        },
        [`${noticeCls}-icon`]: {
          position: 'static',
          gridColumn: '1',
          gridRow: '1',
          alignSelf: 'start',
          marginInlineEnd: 0,
          marginTop: 0,
          width: NOTIFICATION_ICON_SIZE,
          fontSize: NOTIFICATION_ICON_SIZE,
          lineHeight: 1,
          height: NOTIFICATION_TITLE_LINE_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          [`${token.iconCls}`]: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: NOTIFICATION_ICON_SIZE,
            lineHeight: 1,
          },
        },
        [`${noticeCls}-message`]: {
          gridColumn: '2',
          gridRow: '1',
          marginInlineStart: 0,
          marginBottom: 0,
          paddingInlineEnd: titleCloseReserve,
          minHeight: NOTIFICATION_TITLE_LINE_HEIGHT,
          fontSize: NOTIFICATION_TITLE_FONT_SIZE,
          fontWeight: token.fontWeightStrong,
          lineHeight: unit(NOTIFICATION_TITLE_LINE_HEIGHT),
          color: token.colorText,
          wordBreak: 'break-word',
          a: {
            textDecoration: 'underline',
          },
        },
        [`${noticeCls}-description`]: {
          gridColumn: '2',
          gridRow: '2',
          marginInlineStart: 0,
          marginTop: 0,
          fontSize: token.fontSize,
          lineHeight: unit(NOTIFICATION_TITLE_LINE_HEIGHT),
          color: token.colorText,
          wordBreak: 'break-word',
          a: {
            textDecoration: 'underline',
          },
        },
        [`${noticeCls}-with-icon ${noticeCls}-message`]: {
          marginInlineStart: 0,
          fontSize: NOTIFICATION_TITLE_FONT_SIZE,
        },
        [`${noticeCls}-with-icon ${noticeCls}-description`]: {
          marginInlineStart: 0,
          fontSize: token.fontSize,
        },
        [`${noticeCls}-closable ${noticeCls}-message`]: {
          paddingInlineEnd: titleCloseReserve,
        },
        [`${noticeCls}-close`]: {
          top: NOTIFICATION_PADDING_BLOCK,
          insetInlineEnd: NOTIFICATION_PADDING_INLINE,
          width: NOTIFICATION_ICON_SIZE,
          height: NOTIFICATION_ICON_SIZE,
          fontSize: NOTIFICATION_ICON_SIZE,
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            color: token.colorIconHover,
          },
        },
        [`${noticeCls}-progress`]: {
          position: 'absolute',
          display: 'block',
          blockSize: 2,
          insetInlineStart: 0,
          insetInlineEnd: 0,
          inlineSize: '100%',
          left: 0,
          right: 0,
          bottom: 0,
          appearance: 'none',
          backgroundColor: 'transparent',
          border: 0,
          borderRadius: progressBottomRadius,
          overflow: 'hidden',
          clipPath: `inset(0 round 0 0 ${bottomRadius} ${bottomRadius})`,
          '&, &::-webkit-progress-bar': {
            backgroundColor: 'transparent',
            borderRadius: progressBottomRadius,
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
      },
      [`${componentCls}-stack${componentCls}-stack-expanded`]: {
        [`& > ${componentCls}-notice-wrapper`]: {
          '&:not(:nth-last-child(-n + 1))': {
            '&:after': {
              height: STACK_GAP,
              bottom: calc(STACK_GAP).mul(-1).equal(),
            },
          },
        },
      },
      [`${noticeCls}-error-details`]: {
        marginTop: token.marginXXS,
        color: token.colorTextTertiary,
        fontSize: token.fontSize,
        lineHeight: unit(NOTIFICATION_TITLE_LINE_HEIGHT),
        wordBreak: 'break-word',
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
        color: token.colorPrimary,
        cursor: 'pointer',
        '&:hover': {
          color: token.colorPrimaryHover,
        },
      },
    },
  };
};

export default genStyleHooks('Notification', token => {
  return [genNotificationStyle(token as NotificationToken)];
});
