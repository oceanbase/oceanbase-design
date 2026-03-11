import React, { useContext } from 'react';
import {
  Button,
  Dropdown,
  Menu,
  Space,
  Tooltip,
  Typography,
  ConfigProvider,
  Popconfirm,
} from '@oceanbase/design';
import type { ButtonSize } from '@oceanbase/design/es/button';
import { EllipsisOutlined, LoadingOutlined } from '@oceanbase/icons';
import { isBoolean, max, omit } from 'lodash';
import type { BaseProps } from './Item';
import useStyle from './style';

export interface GroupProps {
  prefixCls?: string;
  size?: number;
  dropDownPlacement?:
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight';
  children: React.ReactElement<BaseProps> | React.ReactElement<BaseProps>[];
  shouldVisible?: (key: string) => boolean;
  shouldDisabled?: (key: string) => boolean;
  enableLoading?: boolean;
  // 设置更多操作的文案
  moreText?: React.ReactNode;
  // 设置更多操作的元素类型
  moreType?: 'button' | 'link';
  buttonSize?: ButtonSize;
}

const getOrder = ({ type, fixed }: { type?: string; fixed?: boolean }) => {
  const ORDER_SET = { primary: 3, fixed: 2, default: 0 };
  let order = ORDER_SET.default;
  if (type === 'primary') {
    order += ORDER_SET.primary;
  }
  if (fixed) {
    order += ORDER_SET.fixed;
  }
  return order;
};

/**
 * 判断是否是 Action 组件（Action.Button 或 Action.Link）
 */
const isActionComponent = (element: React.ReactElement): boolean => {
  // @ts-ignore
  return element.type?.__DISPLAY_NAME === 'button' || element.type?.__DISPLAY_NAME === 'link';
};

/**
 * 递归查找 Action 组件（可能被 Popconfirm/Tooltip 等组件包裹）
 * 返回实际的 Action 组件和是否被包裹
 */
const findActionComponent = (
  element: React.ReactElement,
  depth = 0
): { action: React.ReactElement; hasWrapper: boolean } | null => {
  if (!React.isValidElement(element)) {
    return null;
  }

  if (isActionComponent(element)) {
    return { action: element, hasWrapper: false };
  }

  // 如果深度太深，避免无限递归
  if (depth > 10) {
    return null;
  }

  // 如果有 children，递归查找
  const elementChildren = (element.props as any)?.children;
  if (elementChildren) {
    const child = React.Children.only(elementChildren);
    if (React.isValidElement(child)) {
      const result = findActionComponent(child, depth + 1);
      if (result) {
        return { action: result.action, hasWrapper: true };
      }
    }
  }

  return null;
};

/**
 * 递归克隆元素树，将 newProps 应用到最内层的 Action 组件
 */
const cloneWithActionProps = (
  element: React.ReactElement,
  newProps: Record<string, any>
): React.ReactElement => {
  if (isActionComponent(element)) {
    return React.cloneElement(element, { ...newProps, ...element.props });
  }

  const elementChildren = (element.props as any)?.children;
  if (React.isValidElement(elementChildren)) {
    return React.cloneElement(element, {
      ...element.props,
      key: newProps.key,
      children: cloneWithActionProps(elementChildren, newProps),
    });
  }

  return element;
};

/**
 * 渲染菜单项内容，保持嵌套的 Popconfirm/Tooltip 结构
 */
const renderMenuItemContent = (
  action: React.ReactElement,
  actionProps: BaseProps,
  enableLoading?: boolean
): React.ReactNode => {
  const { loading, children, tooltip } = actionProps;
  const result = findActionComponent(action);
  const actualAction = result?.action || action;

  const content = (
    <>
      {loading && enableLoading && <LoadingOutlined />} {children || actualAction.props.children}
    </>
  );

  // 如果有 wrapper，需要重新构建包裹结构
  if (result?.hasWrapper) {
    return cloneWithActionProps(action, { ...actionProps, children: content });
  }

  // 没有包裹时，如果有 tooltip 则用 Tooltip 包裹
  return tooltip ? <Tooltip title={tooltip}>{content}</Tooltip> : content;
};

export default ({
  prefixCls: customizePrefixCls,
  size = 3,
  children,
  dropDownPlacement,
  shouldVisible,
  shouldDisabled,
  enableLoading,
  moreText,
  moreType,
  buttonSize,
}: GroupProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);

  const prefixCls = getPrefixCls('action', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const visibleActions = Array.isArray(children)
    ? children.filter(c => {
        if (isBoolean(c.props.visible) && shouldVisible)
          return c.props.visible && shouldVisible(c.key as string);
        if (isBoolean(c.props.visible)) return c.props.visible;
        else if (shouldVisible) return shouldVisible(c.key as string);
        return true;
      })
    : [children];

  const visibleActionsSort = visibleActions.slice(0);

  visibleActionsSort.sort((a, b) => {
    const orderA = getOrder(a.props);
    const orderB = getOrder(b.props);

    return orderB - orderA;
  });

  const fixedSize = visibleActionsSort.filter(
    action => action.props.type === 'primary' || action.props.fixed
  ).length;
  const realSize = max([fixedSize, size]);

  const mainActions = visibleActionsSort.slice(0, realSize);
  const ellipsisActions = visibleActionsSort.slice(realSize);

  let ellipsisType = 'link';

  // @ts-ignore
  if (visibleActionsSort.some(action => action.type.__DISPLAY_NAME === 'button')) {
    ellipsisType = 'button';
  }

  // @ts-ignore
  if (visibleActionsSort.some(action => action.type.__DISPLAY_NAME === 'link')) {
    ellipsisType = 'link';
  }

  ellipsisType = moreType ?? ellipsisType;

  const getDefaultDisabled = (key: string) => shouldDisabled?.(key as string) ?? false;

  let moreDom: string | React.ReactElement;

  if (ellipsisType === 'button') {
    moreDom = (
      <Button
        size={buttonSize}
        icon={moreText ? undefined : <EllipsisOutlined style={{ cursor: 'pointer' }} />}
      >
        {moreText}
      </Button>
    );
  } else {
    moreDom = (
      <Typography.Link>
        {moreText ?? <EllipsisOutlined style={{ cursor: 'pointer' }} />}
      </Typography.Link>
    );
  }

  return wrapSSR(
    <Space size={ellipsisType === 'button' ? 8 : 16}>
      {mainActions.map(action => {
        // 查找实际的 Action 组件（可能被 Popconfirm/Tooltip 等包裹）
        const actionResult = findActionComponent(action);
        const actualAction = actionResult?.action || action;
        const actualActionProps = actualAction.props as BaseProps;

        const newProps = {
          key: action.key,
          // size should be covered by action props
          size: buttonSize,
          enableLoading: enableLoading,
          disabled: isBoolean(actualActionProps.disabled)
            ? actualActionProps.disabled
            : getDefaultDisabled(action.key as string),
        };

        // 统一使用 cloneWithActionProps，无论是否有包裹都能正确处理
        return cloneWithActionProps(action, newProps);
      })}
      {ellipsisActions.length > 0 && (
        <Dropdown
          placement={dropDownPlacement}
          overlay={
            <Menu className={`${prefixCls}-more-menu`}>
              {ellipsisActions.map((action, index) => {
                const actionKey = action.key;
                // 查找实际的 Action 组件以获取 props
                const actionResult = findActionComponent(action);
                const actualAction = actionResult?.action || action;
                const actionProps = actualAction.props as BaseProps;

                // 当用户传入loading 或者 传入 disabled 的情况都要禁用按钮
                const actionDisabled =
                  actionProps.loading ||
                  (isBoolean(actionProps.disabled)
                    ? actionProps.disabled
                    : getDefaultDisabled(action.key as string));

                // 提取需要传递给 Menu.Item 的 props（排除 danger，单独处理）
                const menuItemProps = omit(actionProps, [
                  'disabled',
                  'loading',
                  'tooltip',
                  'visible',
                  'fixed',
                  'enableLoading',
                  'onClick',
                  'children',
                  'danger',
                ]);

                // 处理 onClick：如果 action 被 Popconfirm 包裹，Menu.Item 的 onClick 不应该直接触发 action 的 onClick
                // 而是让 Popconfirm 来处理。如果没有 Popconfirm，则正常触发。
                const handleMenuItemClick = (info: { domEvent: React.MouseEvent<HTMLElement> }) => {
                  // 如果 action 被包裹（可能是 Popconfirm 或其他组件），不直接触发 onClick
                  // 让包裹组件来处理交互
                  if (actionResult?.hasWrapper) {
                    // 包裹组件会处理点击，这里不需要做任何事
                    // 注意：Menu.Item 的点击会关闭下拉菜单，但 Popconfirm 应该能够正常显示
                    return;
                  }
                  // 如果没有包裹，正常触发 onClick
                  actionProps.onClick?.(info.domEvent);
                };

                return (
                  <>
                    <Menu.Item
                      key={(actionKey as string) ?? index.toString()}
                      // @ts-ignore
                      onClick={handleMenuItemClick}
                      disabled={actionDisabled}
                      danger={!!actionProps.danger}
                      {...menuItemProps}
                    >
                      {renderMenuItemContent(action, actionProps, enableLoading)}
                    </Menu.Item>
                    {actionProps.divider && <Menu.Divider />}
                  </>
                );
              })}
            </Menu>
          }
        >
          {moreDom}
        </Dropdown>
      )}
    </Space>
  );
};
