import type { CSSObject } from '@ant-design/cssinjs';
import type { GenerateStyle } from '@oceanbase/design/es/theme';
import { genComponentStyleHook } from '../../../_util/genComponentStyleHook';
import type { OBToken } from '../../../_util/genComponentStyleHook';

export type TaskGraphItemToken = OBToken;

export const genTaskGraphItemStyle: GenerateStyle<TaskGraphItemToken> = (
  token: TaskGraphItemToken
): CSSObject => {
  const { componentCls, antCls, colorTextTertiary } = token;

  return {
    [`${componentCls}-menu`]: {
      position: 'fixed',
      [`${componentCls}-task-id-wrapper`]: {
        padding: '5px 12px',
        [`${antCls}-typography`]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: colorTextTertiary,
          [`${antCls}-typography-copy`]: {
            color: colorTextTertiary,
          },
        },
      },
    },
  } as CSSObject;
};

export default (prefixCls: string) => {
  const useStyle = genComponentStyleHook('TaskGraphItem', token => {
    return [genTaskGraphItemStyle(token as TaskGraphItemToken)];
  });
  return useStyle(prefixCls);
};

