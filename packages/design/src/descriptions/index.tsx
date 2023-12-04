import { Descriptions as AntDescriptions } from 'antd';
import type {
  DescriptionsProps as AntDescriptionsProps,
  DescriptionsItemType as AntDescriptionsItemType,
} from 'antd/es/descriptions';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import type { TextProps } from '../typography/Text';
import DescriptionsItem from './Item';
import useItems from './hooks/useItems';
import useStyle from './style';

export * from 'antd/es/descriptions';
export type { DescriptionsItemProps } from './Item';

export interface DescriptionsItemType extends AntDescriptionsItemType {
  contentProps?: TextProps;
}

export interface DescriptionsProps extends AntDescriptionsProps {
  items?: DescriptionsItemType[];
}

type CompoundedComponent = React.FC<DescriptionsProps> & {
  Item: typeof DescriptionsItem;
};

const Descriptions: CompoundedComponent = ({
  children,
  bordered,
  layout,
  colon = layout === 'vertical' ? false : undefined,
  items,
  prefixCls: customizePrefixCls,
  className,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const typographyPrefixCls = getPrefixCls('typography', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls, typographyPrefixCls);
  const descriptionsCls = classNames(className);

  const newItems = useItems(items, children, bordered);

  return wrapSSR(
    <AntDescriptions
      layout={layout}
      colon={colon}
      bordered={bordered}
      items={newItems}
      prefixCls={customizePrefixCls}
      className={descriptionsCls}
      {...restProps}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  Descriptions.displayName = AntDescriptions.displayName;
}

Descriptions.Item = DescriptionsItem;

export default Descriptions;
