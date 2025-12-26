import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTooltipWithPopoverOptions {
  /** Popover 是否开启 */
  isPopoverOpen: boolean;
  /** 是否启用 Tooltip（默认 true） */
  enabled?: boolean;
  /** Popover 关闭后的延迟时间（毫秒），用于防止 Tooltip 立即显示，默认 100 */
  closeDelay?: number;
  /** 是否有值，当没有值时强制关闭 Tooltip（避免显示空的 Tooltip） */
  hasValue?: boolean;
}

export interface UseTooltipWithPopoverReturn {
  /** Tooltip 的 open 属性值 */
  tooltipOpen: boolean | undefined;
  /** Tooltip 的 onOpenChange 回调 */
  onTooltipOpenChange: (open: boolean) => void;
}

/**
 * Hook 用于管理 Tooltip 与 Popover 的交互逻辑
 *
 * 功能：
 * 1. 当 Popover 打开时，强制关闭 Tooltip
 * 2. 当 Popover 关闭时，防止 Tooltip 立即显示（即使鼠标还在元素上）
 * 3. 需要鼠标移出再移入才会显示 Tooltip
 * 4. 当没有值时，强制关闭 Tooltip（避免显示空的 Tooltip）
 *
 * @param options 配置选项
 * @returns Tooltip 的 open 和 onOpenChange 属性
 *
 * @example
 * ```tsx
 * const [isPopoverOpen, setIsPopoverOpen] = useState(false);
 * const [selectedValues, setSelectedValues] = useState([]);
 * const { tooltipOpen, onTooltipOpenChange } = useTooltipWithPopover({
 *   isPopoverOpen,
 *   enabled: true,
 *   hasValue: selectedValues.length > 0,
 * });
 *
 * <Tooltip
 *   open={tooltipOpen}
 *   onOpenChange={onTooltipOpenChange}
 *   title={selectedValues.length > 0 ? "Tooltip content" : null}
 * >
 *   <Button onClick={() => setIsPopoverOpen(true)}>Click me</Button>
 * </Tooltip>
 * ```
 */
export function useTooltipWithPopover({
  isPopoverOpen,
  enabled = true,
  closeDelay = 100,
  hasValue = true,
}: UseTooltipWithPopoverOptions): UseTooltipWithPopoverReturn {
  // 用于控制 Tooltip 的显示状态
  const [tooltipOpen, setTooltipOpen] = useState<boolean | undefined>(undefined);
  // 标记 Popover 是否刚刚关闭，用于防止关闭后立即显示 Tooltip
  const justClosedPopoverRef = useRef(false);

  // 当 Popover 状态变化时，更新 Tooltip 状态
  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (isPopoverOpen) {
      // Popover 打开时，强制关闭 Tooltip 并清除标记
      setTooltipOpen(false);
      justClosedPopoverRef.current = false;
    } else {
      // Popover 关闭时，标记刚刚关闭，并强制关闭 Tooltip
      justClosedPopoverRef.current = true;
      setTooltipOpen(false);
      // 清除标记，允许下次鼠标移入时显示 Tooltip
      const timer = setTimeout(() => {
        justClosedPopoverRef.current = false;
      }, closeDelay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isPopoverOpen, enabled, closeDelay]);

  // 当没有值时，强制关闭 Tooltip（避免显示空的 Tooltip）
  useEffect(() => {
    if (!enabled) {
      return;
    }

    if (!hasValue && tooltipOpen !== false) {
      setTooltipOpen(false);
    }
  }, [hasValue, enabled, tooltipOpen]);

  // 处理 Tooltip 的显示变化
  const onTooltipOpenChange = useCallback(
    (open: boolean) => {
      if (!enabled) {
        return;
      }

      // 如果 Popover 是打开的，不允许 Tooltip 显示
      if (isPopoverOpen) {
        setTooltipOpen(false);
        return;
      }

      // 如果 Popover 刚刚关闭，不允许 Tooltip 显示（避免鼠标还在元素上时自动显示）
      if (justClosedPopoverRef.current) {
        setTooltipOpen(false);
        return;
      }

      // 正常情况下的 Tooltip 显示控制
      if (open) {
        setTooltipOpen(true);
      } else {
        // 鼠标移出时，设置为 undefined，允许下次 hover 时显示
        setTooltipOpen(undefined);
      }
    },
    [enabled, isPopoverOpen]
  );

  // 计算最终的 tooltipOpen 值：如果没有值，强制返回 false
  const finalTooltipOpen = enabled ? (hasValue ? tooltipOpen : false) : undefined;

  return {
    tooltipOpen: finalTooltipOpen,
    onTooltipOpenChange,
  };
}
