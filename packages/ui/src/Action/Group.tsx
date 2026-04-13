import React, { useContext } from 'react';
import {
  Button,
  Dropdown,
  Drawer,
  Menu,
  Modal,
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
  children: React.ReactNode;
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
const getActionDisplayName = (element: React.ReactElement): string | undefined =>
  (element.type as { __DISPLAY_NAME?: string } | undefined)?.__DISPLAY_NAME;

const isActionComponent = (element: React.ReactElement): boolean => {
  const name = getActionDisplayName(element);
  return name === 'button' || name === 'link';
};

/** 不向内部查找 Action：与操作列同级的 Modal/Drawer 等应整体忽略 */
const isOpaqueToActionSearch = (element: React.ReactElement): boolean => {
  const t = element.type as unknown;
  return t === Modal || t === Drawer;
};

const REACT_HOOKS_IN_SOURCE =
  /\buse(?:State|Effect|Reducer|Ref|Context|Memo|Callback|LayoutEffect|ImperativeHandle|DeferredValue|SyncExternalStore|Insertion|Id)\b/;

/**
 * 粗略判断函数组件是否可能使用 Hooks。含 Hooks 的不能在 Group 渲染阶段同步调用，需按「函数子树」整体参与折叠。
 */
const isLikelyUsingReactHooks = (fn: Function): boolean =>
  REACT_HOOKS_IN_SOURCE.test(Function.prototype.toString.call(fn));

const isClassComponent = (type: unknown): boolean => {
  if (typeof type !== 'function') {
    return false;
  }
  const proto = (type as { prototype?: { isReactComponent?: boolean; render?: unknown } })
    .prototype;
  return !!(proto && (proto.isReactComponent || proto.render));
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

  if (isOpaqueToActionSearch(element)) {
    return null;
  }

  if (isActionComponent(element)) {
    return { action: element, hasWrapper: false };
  }

  // 如果深度太深，避免无限递归
  if (depth > 10) {
    return null;
  }

  const elementChildren = (element.props as any)?.children;
  if (elementChildren == null) {
    return null;
  }

  const childArray = React.Children.toArray(elementChildren).filter(
    React.isValidElement
  ) as React.ReactElement[];
  for (const child of childArray) {
    const result = findActionComponent(child, depth + 1);
    if (result) {
      return { action: result.action, hasWrapper: true };
    }
  }

  return null;
};

type NormalizedChildPiece =
  | { kind: 'action'; el: React.ReactElement }
  /** 含 Hooks 的函数组件等：整体占 1 个折叠位，由 React 正常挂载 */
  | { kind: 'function-child'; el: React.ReactElement }
  | { kind: 'passthrough'; el: React.ReactElement };

/**
 * 扁平化 Fragment，过滤 null / false。
 * - Action（及可解析的外包）→ 操作位
 * - 无 Hooks 的函数组件 → 同步求值后递归展开（如 () => <Action.Button />）
 * - 含 Hooks 的函数组件 → 整体占 1 位
 * - Modal / Drawer → 透传挂载，不占折叠位
 */
const normalizeActionGroupPieces = (node: React.ReactNode): NormalizedChildPiece[] => {
  const out: NormalizedChildPiece[] = [];
  React.Children.forEach(node, child => {
    if (child == null || typeof child === 'boolean') {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }
    if (child.type === React.Fragment) {
      normalizeActionGroupPieces((child.props as { children?: React.ReactNode }).children).forEach(
        p => out.push(p)
      );
      return;
    }
    if (findActionComponent(child)) {
      out.push({ kind: 'action', el: child });
      return;
    }
    if (isOpaqueToActionSearch(child)) {
      out.push({ kind: 'passthrough', el: child });
      return;
    }

    const t = child.type;
    if (typeof t === 'function' && !isClassComponent(t)) {
      if (isLikelyUsingReactHooks(t)) {
        out.push({ kind: 'function-child', el: child });
        return;
      }
      try {
        const rendered = (t as React.FC<Record<string, unknown>>)(
          child.props as Record<string, unknown>
        );
        if (rendered == null) {
          return;
        }
        normalizeActionGroupPieces(rendered).forEach(p => out.push(p));
      } catch {
        out.push({ kind: 'function-child', el: child });
      }
      return;
    }

    out.push({ kind: 'function-child', el: child });
  });
  return out;
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

  const childPieces = normalizeActionGroupPieces(children);
  const passthroughChildren = childPieces.filter(p => p.kind === 'passthrough').map(p => p.el);
  const slotPieces = childPieces.filter(
    (
      p
    ): p is
      | { kind: 'action'; el: React.ReactElement }
      | { kind: 'function-child'; el: React.ReactElement } =>
      p.kind === 'action' || p.kind === 'function-child'
  );

  const visibleSlots = slotPieces.filter(p => {
    if (p.kind === 'function-child') {
      return true;
    }
    const c = p.el;
    const inner = findActionComponent(c)?.action;
    if (!inner) {
      return false;
    }
    const bp = inner.props as BaseProps;
    if (isBoolean(bp.visible) && shouldVisible) {
      return bp.visible && shouldVisible(c.key as string);
    }
    if (isBoolean(bp.visible)) {
      return bp.visible;
    }
    if (shouldVisible) {
      return shouldVisible(c.key as string);
    }
    return true;
  });

  const visibleSlotsWithOrder = visibleSlots.map((p, sourceIdx) => ({
    piece: p,
    sourceIdx,
    sortOrder:
      p.kind === 'action'
        ? getOrder((findActionComponent(p.el)?.action ?? p.el).props as BaseProps)
        : getOrder({ type: undefined, fixed: false }),
  }));

  visibleSlotsWithOrder.sort((a, b) => {
    const d = b.sortOrder - a.sortOrder;
    if (d !== 0) {
      return d;
    }
    return a.sourceIdx - b.sourceIdx;
  });

  const visibleOrderedSlots = visibleSlotsWithOrder.map(x => x.piece);

  const fixedSize = visibleOrderedSlots.filter(p => {
    if (p.kind !== 'action') {
      return false;
    }
    const props = (findActionComponent(p.el)?.action ?? p.el).props as BaseProps;
    return props.type === 'primary' || props.fixed;
  }).length;
  const realSize = max([fixedSize, size]);

  const mainSlots = visibleOrderedSlots.slice(0, realSize);
  const ellipsisSlots = visibleOrderedSlots.slice(realSize);

  let ellipsisType = 'link';

  if (
    visibleOrderedSlots.some(
      p =>
        p.kind === 'action' &&
        getActionDisplayName(findActionComponent(p.el)?.action ?? p.el) === 'button'
    )
  ) {
    ellipsisType = 'button';
  }

  if (
    visibleOrderedSlots.some(
      p =>
        p.kind === 'action' &&
        getActionDisplayName(findActionComponent(p.el)?.action ?? p.el) === 'link'
    )
  ) {
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
    <>
      <Space size={ellipsisType === 'button' ? 8 : 16}>
        {mainSlots.map((slot, slotIndex) => {
          if (slot.kind === 'function-child') {
            return (
              <React.Fragment key={(slot.el.key as React.Key) ?? `fn-main-${slotIndex}`}>
                {slot.el}
              </React.Fragment>
            );
          }
          const action = slot.el;
          const actionResult = findActionComponent(action);
          const actualAction = actionResult?.action || action;
          const actualActionProps = actualAction.props as BaseProps;

          const newProps = {
            key: action.key,
            size: buttonSize,
            enableLoading: enableLoading,
            disabled: isBoolean(actualActionProps.disabled)
              ? actualActionProps.disabled
              : getDefaultDisabled(action.key as string),
          };

          return cloneWithActionProps(action, newProps);
        })}
        {ellipsisSlots.length > 0 && (
          <Dropdown
            placement={dropDownPlacement}
            overlay={
              <Menu className={`${prefixCls}-more-menu`}>
                {ellipsisSlots.map((slot, index) => {
                  if (slot.kind === 'function-child') {
                    const fcKey = (slot.el.key as string | number | undefined) ?? `fn-${index}`;
                    return (
                      <Menu.Item
                        key={fcKey}
                        className={`${prefixCls}-more-menu-fn`}
                        style={{ height: 'auto', lineHeight: 'normal', paddingBlock: 4 }}
                      >
                        {React.cloneElement(slot.el, { key: fcKey })}
                      </Menu.Item>
                    );
                  }

                  const action = slot.el;
                  const actionKey = action.key;
                  const actionResult = findActionComponent(action);
                  const actualAction = actionResult?.action || action;
                  const actionProps = actualAction.props as BaseProps;

                  const actionDisabled =
                    actionProps.loading ||
                    (isBoolean(actionProps.disabled)
                      ? actionProps.disabled
                      : getDefaultDisabled(action.key as string));

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

                  const handleMenuItemClick = (info: {
                    domEvent: React.MouseEvent<HTMLElement>;
                  }) => {
                    if (actionResult?.hasWrapper) {
                      return;
                    }
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
      {passthroughChildren.map((el, index) =>
        React.cloneElement(el, {
          key: (el.key as string | number | undefined) ?? `action-group-extra-${index}`,
        })
      )}
    </>
  );
};
