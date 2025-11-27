import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../_util/genComponentStyleHook';
import type { OBToken } from '../../_util/genComponentStyleHook';

export type BatchOperationBarToken = OBToken;

export const genBatchOperationBarStyle: GenerateStyle<BatchOperationBarToken> = (
  token: BatchOperationBarToken
): CSSObject => {
  const { componentCls, colorBgBase, boxShadowSecondary, fontWeightStrong } = token;

  return {
    [`${componentCls}`]: {
      position: 'fixed',
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      color: 'rgba(0, 0, 0, 1)',
      backgroundColor: colorBgBase,
      boxShadow: boxShadowSecondary,
      [`${componentCls}-header`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        margin: '0 24px',
        [`${componentCls}-title`]: {
          fontWeight: fontWeightStrong,
        },
        [`${componentCls}-cancel, ${componentCls}-display-btn`]: {
          color: token.colorPrimary,
          cursor: 'pointer',
        },
        [`${componentCls}-display-text`]: {
          marginRight: 4,
        },
      },
      [`${componentCls}-content`]: {
        maxHeight: 328,
        padding: '0 24px 24px',
        overflow: 'auto',
      },
      [`${componentCls}-content-active`]: {
        maxHeight: 328,
        transition: 'max-height 0.25s',
      },
      [`${componentCls}-content-hidden`]: {
        maxHeight: 0,
        padding: 0,
        transition: 'max-height 0.25s',
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('BatchOperationBar', token => {
    return [genBatchOperationBarStyle(token as BatchOperationBarToken)];
  });
  return useStyle(prefixCls);
};
