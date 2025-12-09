import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type DialogToken = OBToken;

export const genDialogStyle: GenerateStyle<DialogToken> = (token: DialogToken): CSSObject => {
  const { componentCls, boxShadowSecondary } = token;
  const header = 52;
  const footer = 40;
  const radius = 1;
  const borderColor = '#dde4ed';
  const fontColor = '#38465c';

  return {
    [`${componentCls}-container-embed`]: {
      border: `1px solid ${borderColor} !important`,
      borderRadius: `${radius}px !important`,
      boxShadow: 'none !important',
    },
    [`${componentCls}-container`]: {
      position: 'fixed',
      zIndex: 999,
      boxSizing: 'content-box',
      color: '#eee',
      backgroundColor: 'rgba(65, 74, 77, 1)',
      borderRadius: token.borderRadiusLG,
      boxShadow: boxShadowSecondary,
      transition: 'visibility 0.2s ease-in-out, opacity 0.2s linear',
      [`${componentCls}-header`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: header,
        padding: `0 25px`,
        lineHeight: header,
        backgroundColor: '#fff',
        borderRadius: radius,
        cursor: 'grab',
        userSelect: 'none',
        [`${componentCls}-title`]: {
          display: 'inline-block',
          width: '60%',
          overflow: 'hidden',
          color: fontColor,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          wordBreak: 'keep-all',
        },
        '&:active': {
          cursor: 'grabbing',
        },
        [`${componentCls}-controls`]: {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          [`${componentCls}-item`]: {
            display: 'inline-block',
            width: 15,
            marginLeft: 16,
            color: fontColor,
            fontSize: 15,
            lineHeight: 15,
            textAlign: 'center',
            cursor: 'pointer',
            transitionDuration: '0.3s',
            [`${componentCls}-item-link`]: {
              paddingTop: 2,
              color: fontColor,
            },
          },
        },
      },
      [`${componentCls}-main`]: {
        position: 'relative',
        height: `calc(100% - ${header}px)`,
        padding: '0 8px 8px 8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderTop: `1px solid ${borderColor}`,
        [`${componentCls}-mask`]: {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 9,
          width: '100%',
          height: '100%',
        },
        iframe: {
          width: '100%',
          height: '100%',
          border: 'none',
        },
      },
      [`${componentCls}-anchor`]: {
        position: 'absolute',
        zIndex: 9,
        userSelect: 'none',
      },
      '&:focus': {
        outline: 'transparent',
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('Dialog', token => {
    return [genDialogStyle(token as DialogToken)];
  });
  return useStyle(prefixCls);
};
