import type { CSSObject } from '@ant-design/cssinjs';
import type { FullToken } from 'antd/es/theme/internal';

export const genCompactStyle = (componentCls: string, subComponentCls: string = ''): CSSObject => {
  return {
    [`&${componentCls}-compact-item:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item ${subComponentCls}`]:
      {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
    [`&${componentCls}-compact-item:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item) ${subComponentCls}`]:
      {
        borderRadius: 0,
      },
    [`&${componentCls}-compact-item:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item ${subComponentCls}`]:
      {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
      },
  };
};
