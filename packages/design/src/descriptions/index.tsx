import { Descriptions as AntDescriptions } from 'antd';
import type {
  DescriptionsProps as AntDescriptionsProps,
  DescriptionsItemType as AntDescriptionsItemType,
} from 'antd/es/descriptions';
import classNames from 'classnames';
import React, { useContext, useState, useCallback, useMemo } from 'react';
import { CaretRightFilled } from '@oceanbase/icons';
import ConfigProvider from '../config-provider';
import theme from '../theme';
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
  /** Whether the descriptions is collapsible */
  collapsible?: boolean;
  /** Whether the descriptions is collapsed (controlled mode) */
  collapsed?: boolean;
  /** Default collapsed state (uncontrolled mode) */
  defaultCollapsed?: boolean;
  /** Callback when collapsed state changes */
  onCollapse?: (collapsed: boolean) => void;
  /** Content alignment, when set to 'left', all content values will be aligned to the left based on the longest label width */
  contentAlign?: 'left';
}

type CompoundedComponent = React.FC<DescriptionsProps> & {
  Item: typeof DescriptionsItem;
};

const Descriptions: CompoundedComponent = ({
  children,
  bordered,
  layout = 'horizontal',
  colon = layout === 'vertical' ? false : undefined,
  items,
  title,
  prefixCls: customizePrefixCls,
  className,
  column = 3,
  collapsible,
  collapsed: outerCollapsed,
  defaultCollapsed,
  onCollapse,
  contentAlign,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const { token } = theme.useToken();
  const prefixCls = getPrefixCls('descriptions', customizePrefixCls);
  const typographyPrefixCls = getPrefixCls('typography', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls, typographyPrefixCls);

  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed ?? false);
  const collapsed = outerCollapsed !== undefined ? outerCollapsed : internalCollapsed;

  const handleCollapse = useCallback(() => {
    const newCollapsed = !collapsed;
    if (outerCollapsed === undefined) {
      setInternalCollapsed(newCollapsed);
    }
    onCollapse?.(newCollapsed);
  }, [collapsed, outerCollapsed, onCollapse]);

  const newItems = useItems(items, children, bordered);

  const descriptionsTitle = useMemo(() => {
    if (!collapsible) {
      return title;
    }
    if (!title) {
      return null;
    }
    return (
      <div className={`${prefixCls}-title-wrapper`} onClick={handleCollapse}>
        <CaretRightFilled
          className={`${prefixCls}-collapsible-icon`}
          style={{
            transition: `transform ${token.motionDurationMid}`,
            transform: collapsed ? undefined : 'rotate(90deg)',
            color: token.colorIcon,
            marginRight: token.marginXS,
          }}
        />
        <span>{title}</span>
      </div>
    );
  }, [collapsible, title, collapsed, prefixCls, token, handleCollapse]);

  const descriptionsCls = classNames(className, {
    [`${prefixCls}-vertical`]: layout === 'vertical',
    [`${prefixCls}-horizontal`]: layout === 'horizontal',
    [`${prefixCls}-collapsible`]: collapsible,
    [`${prefixCls}-collapsed`]: collapsible && collapsed,
    [`${prefixCls}-content-align-left`]: contentAlign === 'left',
  });

  return wrapSSR(
    <AntDescriptions
      layout={layout}
      colon={colon}
      bordered={bordered}
      column={column}
      items={newItems}
      title={descriptionsTitle}
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
