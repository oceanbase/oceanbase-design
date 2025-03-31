import React, { useContext } from 'react';
import {
  Button,
  Dropdown,
  Menu,
  Space,
  Tooltip,
  Typography,
  ConfigProvider,
} from '@oceanbase/design';
import type { ButtonSize } from '@oceanbase/design/es/button';
import { EllipsisOutlined, LoadingOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
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
        return React.cloneElement(action, {
          // size should be covered by action props
          size: buttonSize,
          ...action.props,
          key: action.key,
          enableLoading: enableLoading,
          disabled: isBoolean(action.props.disabled)
            ? action.props.disabled
            : getDefaultDisabled(action.key as string),
        });
      })}
      {ellipsisActions.length > 0 && (
        <Dropdown
          placement={dropDownPlacement}
          overlay={
            <Menu className={`${prefixCls}-more-menu`}>
              {ellipsisActions.map((action, index) => {
                const actionKey = action.key;
                let disabled = false;
                if (isBoolean(action.props.disabled)) disabled = action.props.disabled;
                else if (shouldDisabled) disabled = shouldDisabled(action.key as string);
                // 当用户传入loading 或者 传入 disabled 的情况都要禁用按钮
                const actionDisabled =
                  action.props.loading ||
                  (isBoolean(action.props.disabled)
                    ? action.props.disabled
                    : getDefaultDisabled(action.key as string));
                return (
                  // @ts-ignore
                  <Menu.Item
                    key={(actionKey as string) ?? index.toString()}
                    // @ts-ignore
                    onClick={({ domEvent }) => {
                      action.props.onClick?.(domEvent as React.MouseEvent<HTMLElement, MouseEvent>);
                    }}
                    {...omit(action.props, 'disabled')}
                    disabled={actionDisabled}
                  >
                    <Tooltip title={action.props.tooltip}>
                      {action.props.loading && <LoadingOutlined />}{' '}
                      {action.props.children || action}
                    </Tooltip>
                  </Menu.Item>
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
