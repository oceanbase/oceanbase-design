import { Button, Flex } from '@oceanbase/design';
import type { FC, ReactElement, ReactNode } from 'react';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import FilterWrap from './FilterWrap';
import { FilterOutlined } from '@oceanbase/icons';

export interface ResponsiveFilterGroupProps {
  children: ReactNode;
  /** 容器间距 */
  gap?: number;
  /** FilterWrap 的 label */
  label?: ReactNode;
  /** FilterWrap 的图标 */
  icon?: ReactNode;
  /** 点击 Apply 按钮时的回调 */
  onApply?: () => void;
  /** 点击 Clear All 按钮时的回调 */
  onClearAll?: () => void;
  /** 是否显示 Apply 和 Clear All 按钮 */
  showActions?: boolean;
  /** 预留给 "更多" 按钮的宽度 */
  moreButtonWidth?: number;
  /** 容器样式 */
  style?: React.CSSProperties;
  /** 额外内容 */
  extra?: ReactNode;
}

/**
 * ResponsiveFilterGroup 组件
 *
 * 响应式 Filter 容器，当宽度不足时自动将后面的 Filter 收起到 FilterWrap 中
 *
 * @example
 * ```tsx
 * <ResponsiveFilterGroup onApply={handleSearch} onClearAll={handleReset}>
 *   <Filter.Select label="操作者" ... />
 *   <Filter.Cascader label="事件操作" ... />
 *   <Filter.Select label="执行结果" ... />
 * </ResponsiveFilterGroup>
 * ```
 */
// 检查子元素是否可以被收集
const isCollapsible = (child: ReactElement): boolean => {
  // 检查子元素的 props 中是否有 collapsible 属性
  // 如果子元素是 Form.Item，需要检查其子元素的 props
  const childProps = child.props;

  // 直接检查 collapsible 属性
  if (childProps?.collapsible !== undefined) {
    return childProps.collapsible !== false;
  }

  // 如果是 Form.Item 等包装组件，检查其 children 的 collapsible
  if (childProps?.children && isValidElement(childProps.children)) {
    const innerChild = childProps.children as ReactElement;
    if (innerChild.props?.collapsible !== undefined) {
      return innerChild.props.collapsible !== false;
    }
  }

  // 默认可以被收集
  return true;
};

// 检查子元素是否应该始终折叠
const isAlwaysCollapse = (child: ReactElement): boolean => {
  const childProps = child.props;

  // 直接检查 alwaysCollapse 属性
  if (childProps?.alwaysCollapse !== undefined) {
    return childProps.alwaysCollapse === true;
  }

  // 如果是 Form.Item 等包装组件，检查其 children 的 alwaysCollapse
  if (childProps?.children && isValidElement(childProps.children)) {
    const innerChild = childProps.children as ReactElement;
    if (innerChild.props?.alwaysCollapse !== undefined) {
      return innerChild.props.alwaysCollapse === true;
    }
  }

  // 默认不始终折叠
  return false;
};

const ResponsiveFilterGroup: FC<ResponsiveFilterGroupProps> = ({
  children,
  gap = 8,
  label = 'Filters',
  icon = <FilterOutlined />,
  onApply,
  onClearAll,
  showActions = true,
  moreButtonWidth = 100,
  style,
  extra,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerFlexRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(-1); // -1 表示还未计算
  const [childWidths, setChildWidths] = useState<number[]>([]);
  const [actualMoreButtonWidth, setActualMoreButtonWidth] = useState<number>(moreButtonWidth);
  const [measureContainer, setMeasureContainer] = useState<HTMLElement | null>(null);
  const childrenArray = Children.toArray(children).filter(isValidElement) as ReactElement[];

  // 分离不可收集和可收集的子元素
  const unCollapsibleChildren = childrenArray.filter(child => !isCollapsible(child));
  const collapsibleChildren = childrenArray.filter(child => isCollapsible(child));

  // 分离始终折叠和普通可收集的子元素
  const alwaysCollapseChildren = collapsibleChildren.filter(child => isAlwaysCollapse(child));
  const normalCollapsibleChildren = collapsibleChildren.filter(child => !isAlwaysCollapse(child));

  // 创建测量容器
  useEffect(() => {
    const container = document.createElement('div');
    container.style.cssText =
      'position: absolute; visibility: hidden; pointer-events: none; top: -9999px; left: -9999px;';
    document.body.appendChild(container);
    setMeasureContainer(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  // 测量每个可收集子元素的宽度（只测量普通可收集的，不包括始终折叠的）
  const measureChildren = useCallback(() => {
    if (!measureRef.current) return;

    const measureDiv = measureRef.current;
    const widths: number[] = [];

    // 遍历测量容器中的子元素（只测量普通可收集的）
    const measureItems = measureDiv.children;
    for (let i = 0; i < measureItems.length; i++) {
      const item = measureItems[i] as HTMLElement;
      widths.push(item.offsetWidth);
    }

    setChildWidths(widths);

    // 测量 more button 的宽度
    if (moreButtonRef.current) {
      setActualMoreButtonWidth(moreButtonRef.current.offsetWidth);
    }
  }, []);

  // 计算可见的可收集子元素数量（只计算普通可收集的，不包括始终折叠的）
  const calculateVisibleCount = useCallback(() => {
    if (!containerRef.current) return;
    // 如果没有普通可收集的子元素，显示全部（0表示全部折叠）
    if (normalCollapsibleChildren.length === 0) {
      setVisibleCount(0);
      return;
    }
    if (childWidths.length === 0) return;

    // 直接使用当前容器的宽度作为可用宽度
    const availableWidth = containerRef.current.offsetWidth;

    let totalWidth = 0;
    let count = 0;

    // 如果有始终折叠的元素，需要预留 more button 的宽度
    const hasAlwaysCollapse = alwaysCollapseChildren.length > 0;
    const reservedForMoreButton = hasAlwaysCollapse ? actualMoreButtonWidth + gap : 0;

    for (let i = 0; i < childWidths.length; i++) {
      const itemWidth = childWidths[i] + (i > 0 ? gap : 0);
      // 检查是否还有空间放置当前元素
      // 如果不是最后一个元素，需要预留 moreButtonWidth 给 "更多" 按钮
      const needMoreButton = i < childWidths.length - 1;
      const reservedWidth = needMoreButton ? actualMoreButtonWidth + gap : reservedForMoreButton;

      if (totalWidth + itemWidth + reservedWidth <= availableWidth) {
        totalWidth += itemWidth;
        count++;
      } else {
        break;
      }
    }

    // 如果所有元素都能显示，就显示全部
    if (count === childWidths.length) {
      setVisibleCount(childWidths.length);
    } else if (count === 0) {
      // 如果一个都放不下，只显示 more button
      setVisibleCount(0);
    } else {
      setVisibleCount(count);
    }
  }, [
    childWidths,
    gap,
    actualMoreButtonWidth,
    normalCollapsibleChildren.length,
    alwaysCollapseChildren.length,
  ]);

  // 初始测量 - 使用 useLayoutEffect 确保在绘制前完成
  useLayoutEffect(() => {
    if (measureContainer) {
      // 延迟一帧确保 portal 已渲染
      requestAnimationFrame(() => {
        measureChildren();
      });
    }
  }, [children, measureChildren, measureContainer, normalCollapsibleChildren]);

  // 当 childWidths 更新后计算可见数量
  useLayoutEffect(() => {
    calculateVisibleCount();
  }, [childWidths, calculateVisibleCount]);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      calculateVisibleCount();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateVisibleCount]);

  // 监听容器大小变化
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleCount();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [calculateVisibleCount]);

  // 分离可见和隐藏的普通可收集子元素（始终折叠的不参与计算）
  const visibleCollapsibleChildren =
    visibleCount === -1
      ? normalCollapsibleChildren
      : normalCollapsibleChildren.slice(0, visibleCount);
  const hiddenCollapsibleChildren =
    visibleCount === -1 ? [] : normalCollapsibleChildren.slice(visibleCount);

  // 合并始终折叠和隐藏的普通可收集子元素
  const allHiddenChildren = [...alwaysCollapseChildren, ...hiddenCollapsibleChildren];

  // 递归地为子元素添加 _isInWrap prop
  const addIsInWrapProp = (element: ReactElement): ReactElement => {
    const childProps = element.props;

    // 对当前元素添加 _isInWrap prop
    const newProps: Record<string, unknown> = { _isInWrap: true };

    // 如果有 children，递归处理
    if (childProps?.children) {
      if (isValidElement(childProps.children)) {
        // 单个子元素
        newProps.children = addIsInWrapProp(childProps.children as ReactElement);
      } else if (Array.isArray(childProps.children)) {
        // 多个子元素
        newProps.children = childProps.children.map((child: ReactNode) => {
          if (isValidElement(child)) {
            return addIsInWrapProp(child as ReactElement);
          }
          return child;
        });
      }
    }

    return cloneElement(element, newProps);
  };

  // 渲染隐藏的可收集子元素到 FilterWrap 中（包括始终折叠和隐藏的普通可收集子元素）
  const renderHiddenChildren = () => {
    if (allHiddenChildren.length === 0) return null;

    return (
      <FilterWrap
        collapsed
        icon={icon}
        label={label}
        extra={extra}
        footer={
          showActions && (
            <Flex justify="space-between">
              {onApply && (
                <Button type="primary" size="small" onClick={onApply}>
                  Apply
                </Button>
              )}
              {onClearAll && (
                <Button type="link" size="small" onClick={onClearAll}>
                  Clear All
                </Button>
              )}
            </Flex>
          )
        }
      >
        {allHiddenChildren.map((child, index) => {
          if (isValidElement(child)) {
            return <React.Fragment key={index}>{addIsInWrapProp(child)}</React.Fragment>;
          }
          return child;
        })}
      </FilterWrap>
    );
  };

  // 测量容器内容 - 使用 Portal 渲染到 body 外部，避免影响布局计算
  // 只测量可收集的子元素
  const measureContent = measureContainer
    ? createPortal(
        <>
          {/* 隐藏的测量容器 - 只测量普通可收集的子元素（不包括始终折叠的） */}
          <div
            ref={measureRef}
            style={{
              display: 'flex',
              gap,
              whiteSpace: 'nowrap',
            }}
          >
            {normalCollapsibleChildren.map((child, index) => (
              <div key={index} style={{ display: 'inline-flex' }}>
                {child}
              </div>
            ))}
          </div>

          {/* 隐藏的 more button 测量容器 */}
          <div
            ref={moreButtonRef}
            style={{
              display: 'inline-flex',
            }}
          >
            <FilterWrap collapsed icon={icon} label={label}>
              <div />
            </FilterWrap>
          </div>
        </>,
        measureContainer
      )
    : null;

  return (
    <>
      {measureContent}

      {/* 实际渲染的容器 */}
      <div
        ref={containerRef}
        style={{ flex: '1 1 auto', minWidth: 0, overflow: 'hidden', ...style }}
      >
        <Flex ref={innerFlexRef} gap={gap} align="center" wrap="nowrap">
          {/* 先渲染不可收集的子元素 */}
          {unCollapsibleChildren}
          {/* 再渲染可见的可收集子元素 */}
          {visibleCollapsibleChildren}
          {/* 最后渲染收起的子元素 */}
          {renderHiddenChildren()}
        </Flex>
      </div>
    </>
  );
};

export default ResponsiveFilterGroup;
