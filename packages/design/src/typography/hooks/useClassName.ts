import React from 'react';
import type { BlockProps } from 'antd/es/typography/Base';
import classNames from 'classnames';

const useClassName = (
  prefixCls: string,
  className: string,
  editable?: BlockProps['editable'],
  caption?: boolean
) => {
  const typographyCls = classNames(
    {
      [`${prefixCls}-editable-text`]:
        typeof editable === 'object' && editable?.triggerType?.includes('text'),
      [`${prefixCls}-caption`]: caption,
    },
    className
  );
  return typographyCls;
};

export default useClassName;
