import React from 'react';
import type { BlockProps } from 'antd/es/typography/Base';
import classNames from 'classnames';

const useClassName = (
  prefixCls: string,
  className: string,
  editable?: BlockProps['editable'],
  caption?: boolean,
  block?: boolean
) => {
  const typographyCls = classNames(
    {
      [`${prefixCls}-editable-text`]:
        typeof editable === 'object' && editable?.triggerType?.includes('text'),
      [`${prefixCls}-caption`]: caption,
      [`${prefixCls}-block`]: block,
    },
    className
  );
  return typographyCls;
};

export default useClassName;
