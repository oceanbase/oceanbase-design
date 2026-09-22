import React from 'react';
import type { BlockProps } from 'antd/es/typography/Base';
import classNames from 'classnames';

export interface UseClassNameOptions {
  prefixCls: string;
  className?: string;
  editable?: BlockProps['editable'];
  caption?: boolean;
  block?: boolean;
  copyableHover?: boolean;
}

const useClassName = ({
  prefixCls,
  className,
  editable,
  caption,
  block,
  copyableHover,
}: UseClassNameOptions) => {
  const typographyCls = classNames(
    {
      [`${prefixCls}-editable-text`]:
        typeof editable === 'object' && editable?.triggerType?.includes('text'),
      [`${prefixCls}-caption`]: caption,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-copyable-hover`]: copyableHover,
    },
    className
  );
  return typographyCls;
};

export default useClassName;
