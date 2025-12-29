import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Flex } from 'antd';
import theme from '../../theme';
import Tooltip from '../../tooltip';

export interface UseFilterTooltipOptions {
  /** 是否有选中的值 */
  hasValue: boolean;
  /** Tooltip 显示的内容 */
  label?: ReactNode;
  content: ReactNode;
  /** 是否禁用 Tooltip，默认 false */
  disabled?: boolean;
  /** Popover 关闭后的延迟时间（毫秒），用于防止 Tooltip 立即显示，默认 100 */
  closeDelay?: number;
}

export interface UseFilterTooltipReturn {
  /** Popover 状态变化时调用，用于同步状态 */
  onPopoverOpenChange: (open: boolean) => void;
  /** 用 Tooltip 包裹 children */
  wrapWithTooltip: (children: ReactNode) => ReactNode;
}

/**
 * 用于管理 Filter 组件的 Tooltip 显示逻辑
 *
 * 功能：
 * 1. 在有选中值时，hover 显示 Tooltip
 * 2. 当 Popover 打开时，自动关闭 Tooltip
 * 3. 当 Popover 关闭后，需要鼠标移出再移入才会显示 Tooltip
 * 4. 没有值时不显示 Tooltip
 */
export function useFilterTooltip({
  hasValue,
  label,
  content,
  disabled = false,
  closeDelay = 100,
}: UseFilterTooltipOptions): UseFilterTooltipReturn {
  const { token } = theme.useToken();
  // Tooltip 是否可见
  const [tooltipVisible, setTooltipVisible] = useState(false);
  // Popover 是否打开
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  // 标记 Popover 是否刚刚关闭
  const justClosedRef = useRef(false);
  // 标记 Popover 是否曾经打开过，用于区分初始状态和关闭状态
  const hasEverOpenedRef = useRef(false);

  // Popover 状态变化时处理
  useEffect(() => {
    if (isPopoverOpen) {
      // Popover 打开时，记录已打开过，并关闭 Tooltip
      hasEverOpenedRef.current = true;
      setTooltipVisible(false);
      justClosedRef.current = false;
    } else if (hasEverOpenedRef.current) {
      // 只有在 Popover 曾经打开过的情况下，才执行关闭逻辑
      // 避免初始化时触发这个逻辑
      justClosedRef.current = true;
      setTooltipVisible(false);

      const timer = setTimeout(() => {
        justClosedRef.current = false;
      }, closeDelay);

      return () => clearTimeout(timer);
    }
  }, [isPopoverOpen, closeDelay]);

  // 当没有值时，关闭 Tooltip
  useEffect(() => {
    if (!hasValue) {
      setTooltipVisible(false);
    }
  }, [hasValue]);

  // Popover 状态变化时调用
  const onPopoverOpenChange = useCallback((open: boolean) => {
    setIsPopoverOpen(open);
  }, []);

  // Tooltip 状态变化时调用
  const handleTooltipOpenChange = useCallback(
    (open: boolean) => {
      // 如果禁用或没有值，不显示
      if (disabled || !hasValue) {
        setTooltipVisible(false);
        return;
      }

      // 如果 Popover 打开或刚刚关闭，不显示
      if (isPopoverOpen || justClosedRef.current) {
        setTooltipVisible(false);
        return;
      }

      setTooltipVisible(open);
    },
    [disabled, hasValue, isPopoverOpen]
  );

  // 用 Tooltip 包裹 children
  const wrapWithTooltip = useCallback(
    (children: ReactNode): ReactNode => {
      if (disabled) {
        return children;
      }

      return (
        <Tooltip
          mouseEnterDelay={0.8}
          title={
            hasValue ? (
              <Flex gap={4}>
                {label && (
                  <div style={{ color: token.colorTextLabel, whiteSpace: 'nowrap' }}>{label}: </div>
                )}
                <Flex wrap="wrap">{content}</Flex>
              </Flex>
            ) : null
          }
          open={tooltipVisible}
          onOpenChange={handleTooltipOpenChange}
        >
          {children}
        </Tooltip>
      );
    },
    [disabled, hasValue, label, content, tooltipVisible, handleTooltipOpenChange, token]
  );

  return {
    onPopoverOpenChange,
    wrapWithTooltip,
  };
}

export default useFilterTooltip;
