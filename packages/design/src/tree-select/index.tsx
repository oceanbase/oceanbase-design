import { TreeSelect as AntTreeSelect } from 'antd';
import type { TreeSelectProps as AntTreeSelectProps } from 'antd/es/tree-select';
import type { TreeNode as AntTreeNode } from 'rc-tree-select';
import type { BaseSelectRef } from 'rc-select';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import useStyle from './style';

export * from 'antd/es/tree-select';

export interface TreeSelectLocale {
  placeholder?: string;
}

export interface TreeSelectProps extends AntTreeSelectProps {
  locale?: TreeSelectLocale;
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  TreeSelectProps & React.RefAttributes<BaseSelectRef>
> & {
  // need to use AntTreeNode from rc-tree-select to avoid ts error
  TreeNode: typeof AntTreeNode;
  SHOW_ALL: typeof AntTreeSelect.SHOW_ALL;
  SHOW_PARENT: typeof AntTreeSelect.SHOW_PARENT;
  SHOW_CHILD: typeof AntTreeSelect.SHOW_CHILD;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntTreeSelect._InternalPanelDoNotUseOrYouWillBeFired;
};

const InternalTreeSelect = React.forwardRef<BaseSelectRef, TreeSelectProps>(
  ({ locale: customLocale, prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { locale: contextLocale, getPrefixCls } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const treeSelectLocale: TreeSelectLocale = {
      ...defaultLocale.global,
      ...contextLocale?.global,
      ...defaultLocale.TreeSelect,
      ...contextLocale?.TreeSelect,
      ...customLocale,
    };

    const prefixCls = getPrefixCls('tree-select', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const treeSelectCls = classNames(className);

    return wrapSSR(
      <AntTreeSelect
        ref={ref}
        placeholder={treeSelectLocale.placeholder}
        prefixCls={customizePrefixCls}
        className={treeSelectCls}
        {...restProps}
      />
    );
  }
);

const TreeSelect = InternalTreeSelect as CompoundedComponent;
const TreeNode = AntTreeSelect.TreeNode;

TreeSelect.TreeNode = TreeNode;
TreeSelect.SHOW_ALL = AntTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = AntTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = AntTreeSelect.SHOW_CHILD;
TreeSelect._InternalPanelDoNotUseOrYouWillBeFired =
  AntTreeSelect._InternalPanelDoNotUseOrYouWillBeFired;

export { TreeNode };

if (process.env.NODE_ENV !== 'production') {
  TreeSelect.displayName = AntTreeSelect.displayName;
}

export default TreeSelect;
