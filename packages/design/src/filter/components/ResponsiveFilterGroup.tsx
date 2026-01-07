import type { FC, ReactElement, ReactNode } from 'react';
import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { Flex } from 'antd';
import { FilterOutlined } from '@oceanbase/icons';
import Button from '../../button';
import FilterWrap from './FilterWrap';
import type { FilterButtonRef } from './FilterButton';
import ConfigProvider from '../../config-provider';
import type { Locale } from '../../locale';
import enUS from '../../locale/en-US';
import {
  FilterProvider,
  type FilterComponentName,
  type FilterValue,
  type FilterValueItem,
} from '../FilterContext';

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
  /** 容器样式 */
  style?: React.CSSProperties;
  /** 额外内容 */
  extra?: ReactNode;
  /** 是否显示计数 默认 true */
  count?: boolean;
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
  label,
  icon = <FilterOutlined />,
  onApply,
  onClearAll,
  showActions = true,
  style,
  extra,
  count: countProp = true,
}) => {
  const { locale: contextLocale } = useContext(ConfigProvider.ConfigContext);
  const filterLocale = (contextLocale as Locale)?.Filter || enUS.Filter;
  // 如果没有传入 label，使用国际化默认值
  const filterLabel = label ?? filterLocale?.filters;
  const containerRef = useRef<HTMLDivElement>(null);
  const innerFlexRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const unmeasureRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const [visibleCount, setVisibleCount] = useState<number>(-1); // -1 表示还未计算
  const [childWidths, setChildWidths] = useState<number[]>([]);
  // 不再依赖外部传入的预留宽度，初始为 0，后续通过真实 DOM 测量获得
  const [actualMoreButtonWidth, setActualMoreButtonWidth] = useState<number>(0);
  const [unCollapsibleWidth, setUnCollapsibleWidth] = useState<number>(0);
  const [measureContainer, setMeasureContainer] = useState<HTMLElement | null>(null);
  // 维护筛选值的数组
  const [filterValues, setFilterValues] = useState<FilterValueItem[]>([]);

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

    // 测量普通可收集子元素宽度
    const widths: number[] = [];
    if (measureRef.current) {
      const measureDiv = measureRef.current;
      const measureItems = measureDiv.children;
      for (let i = 0; i < measureItems.length; i++) {
        const item = measureItems[i] as HTMLElement;
        widths.push(item.offsetWidth);
      }
    }
    setChildWidths(widths);

    // 测量 more button 的宽度
    if (moreButtonRef.current) {
      setActualMoreButtonWidth(moreButtonRef.current.offsetWidth);
    }

    // 测量不可收集子元素的总宽度（使用隐藏测量容器，保证与普通可收集项的测量方式一致）
    if (unmeasureRef.current) {
      let sum = 0;
      const items = unmeasureRef.current.children;
      for (let i = 0; i < items.length; i++) {
        const it = items[i] as HTMLElement;
        sum += it.offsetWidth;
      }
      setUnCollapsibleWidth(sum || 0);
    } else {
      setUnCollapsibleWidth(0);
    }
  }, [unCollapsibleChildren.length, normalCollapsibleChildren.length, gap]);

  // 计算可见的可收集子元素数量（只计算普通可收集的，不包括始终折叠的）
  const calculateVisibleCount = useCallback(() => {
    if (!containerRef.current) return;
    // 如果没有普通可收集的子元素，显示全部（0表示全部折叠）
    if (normalCollapsibleChildren.length === 0) {
      setVisibleCount(0);
      return;
    }
    if (childWidths.length === 0) return;

    // 可用宽度 = 容器宽度 - 不可收集子元素占用的宽度 - 可能存在的间隙
    const containerWidth = containerRef.current.offsetWidth;
    const gapBetweenUncollapsibleAndCollapsible =
      unCollapsibleChildren.length > 0 && normalCollapsibleChildren.length > 0 ? gap : 0;
    const availableWidth =
      containerWidth - (unCollapsibleWidth || 0) - gapBetweenUncollapsibleAndCollapsible;

    let totalWidth = 0;
    let count = 0;

    // 如果有始终折叠的元素，需要预留 more button 的宽度
    const hasAlwaysCollapse = alwaysCollapseChildren.length > 0;
    const reservedForMoreButton = hasAlwaysCollapse ? actualMoreButtonWidth + gap : 0;

    for (let i = 0; i < childWidths.length; i++) {
      const itemWidth = childWidths[i] + (i > 0 ? gap : 0);
      // 检查是否还有空间放置当前元素
      // 如果不是最后一个元素，需要预留实际测量到的更多按钮宽度
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
    unCollapsibleWidth,
    unCollapsibleChildren.length,
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

  // 当 filterValues 改变时，more 按钮可能会显示 badge，导致宽度变化，需重新测量
  useEffect(() => {
    if (measureContainer) {
      requestAnimationFrame(() => {
        measureChildren();
      });
    }
  }, [filterValues, measureChildren, measureContainer]);

  // 当 childWidths 更新后计算可见数量
  useLayoutEffect(() => {
    calculateVisibleCount();
  }, [childWidths, unCollapsibleWidth, calculateVisibleCount]);

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

  // 递归地为子元素添加 _isCollapsed prop
  const addIsInWrapProp = (element: ReactElement): ReactElement => {
    const childProps = element.props;

    // 对当前元素添加 _isCollapsed prop
    const newProps: Record<string, unknown> = { _isCollapsed: true };

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

  // 更新筛选值的函数
  const updateFilterValue = useCallback(
    (
      id: string,
      _filterLabel: ReactNode,
      value: FilterValue,
      options?: unknown[],
      componentName?: FilterComponentName
    ) => {
      setFilterValues(prev => {
        // 如果值为空，移除该项
        // 对于 switch 组件，false 被视为未选中状态，应该被视为空值
        const isEmpty =
          value === undefined ||
          value === null ||
          value === '' ||
          (componentName === 'switch' && value === false) || // switch 组件的 false 值视为空
          (Array.isArray(value) && value.length === 0);

        if (isEmpty) {
          const filtered = prev.filter(item => item.id !== id);
          // 如果数组长度没变化，说明该项本来就不存在，直接返回原数组
          if (filtered.length === prev.length) {
            return prev;
          }
          return filtered;
        }
        // 查找是否已存在
        const existingIndex = prev.findIndex(item => item.id === id);
        if (existingIndex >= 0) {
          const existingItem = prev[existingIndex];
          // 深度比较 options 是否相等
          const optionsEqual =
            existingItem.options === options ||
            (existingItem.options === undefined && options === undefined) ||
            (existingItem.options !== undefined &&
              options !== undefined &&
              JSON.stringify(existingItem.options) === JSON.stringify(options));

          // 如果值、选项和组件名都没变化，直接返回原数组
          if (
            existingItem.value === value &&
            optionsEqual &&
            existingItem.componentName === componentName &&
            existingItem.label === _filterLabel
          ) {
            return prev;
          }
          // 更新已存在的项
          const newValues = [...prev];
          newValues[existingIndex] = { id, label: _filterLabel, value, options, componentName };
          return newValues;
        } else {
          // 添加新项
          return [...prev, { id, label: _filterLabel, value, options, componentName }];
        }
      });
    },
    []
  );

  const handleClearAll = () => {
    // 先清除所有子组件的值
    allHiddenChildren.forEach(child => {
      if (isValidElement(child)) {
        const childProps = child.props as {
          children?: ReactNode;
          onChange?: (value: unknown) => void;
        };
        // 如果是 Form.Item，需要访问其子组件
        if (childProps.children && isValidElement(childProps.children)) {
          const innerChildProps = childProps.children.props as {
            onChange?: (value: unknown) => void;
          };
          if (innerChildProps.onChange) {
            innerChildProps.onChange(undefined);
          }
        } else if (childProps.onChange) {
          childProps.onChange(undefined);
        }
      }
    });
    // 然后清除 filterValues
    setFilterValues([]);
    // 最后调用外部回调
    onClearAll();
  };

  // 渲染隐藏的可收集子元素到 FilterWrap 中（包括始终折叠和隐藏的普通可收集子元素）
  const renderHiddenChildren = () => {
    if (allHiddenChildren.length === 0) return null;

    return (
      <FilterProvider
        isCollapsed={true}
        filterValues={filterValues}
        updateFilterValue={updateFilterValue}
      >
        <FilterWrap
          collapsed
          filterButtonRef={filterButtonRef}
          icon={icon}
          label={filterLabel}
          extra={extra}
          onClearAll={handleClearAll}
          footer={
            showActions && (
              <Flex justify="space-between">
                {onApply && (
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => {
                      onApply?.();
                      filterButtonRef.current?.closePopover();
                    }}
                  >
                    Apply
                  </Button>
                )}
                {onClearAll && (
                  <Button type="link" size="small" onClick={handleClearAll}>
                    Clear All
                  </Button>
                )}
              </Flex>
            )
          }
        >
          {allHiddenChildren.map((child, index) => {
            if (isValidElement(child)) {
              // 使用 child.key 或生成稳定的 key
              const stableKey = child.key || `responsive-filter-child-${index}`;
              return <React.Fragment key={stableKey}>{addIsInWrapProp(child)}</React.Fragment>;
            }
            return child;
          })}
        </FilterWrap>
      </FilterProvider>
    );
  };

  // 测量容器内容 - 使用 Portal 渲染到 body 外部，避免影响布局计算
  // 只测量可收集的子元素
  const measureContent = measureContainer
    ? createPortal(
        <>
          {/* 不再在隐藏容器中测量不可收集子元素，优先使用实际渲染的 DOM（innerFlexRef）测量 */}

          {/* 隐藏的测量容器 - 测量不可收集与普通可收集子元素（与实际渲染保持一致的包装） */}
          <div
            ref={unmeasureRef}
            style={{
              display: 'flex',
              gap,
              whiteSpace: 'nowrap',
            }}
          >
            {unCollapsibleChildren.map((child, index) => {
              const stableKey =
                isValidElement(child) && child.key ? child.key : `measure-unc-${index}`;
              return (
                <div key={stableKey} style={{ display: 'inline-flex' }}>
                  {child}
                </div>
              );
            })}
          </div>

          <div
            ref={measureRef}
            style={{
              display: 'flex',
              gap,
              whiteSpace: 'nowrap',
            }}
          >
            {normalCollapsibleChildren.map((child, index) => {
              // 使用 child.key 或生成稳定的 key
              const stableKey =
                isValidElement(child) && child.key ? child.key : `measure-child-${index}`;
              return (
                <div key={stableKey} style={{ display: 'inline-flex' }}>
                  {child}
                </div>
              );
            })}
          </div>

          {/* 隐藏的、立即挂载的折叠子组件副本，用于在首次渲染时将 initialValue 上报到 FilterProvider */}
          <FilterProvider
            isCollapsed={true}
            filterValues={filterValues}
            updateFilterValue={updateFilterValue}
          >
            <div
              style={{
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none',
                top: -9999,
                left: -9999,
              }}
            >
              {allHiddenChildren.map((child, index) => {
                if (isValidElement(child)) {
                  return (
                    <React.Fragment key={child.key || `hidden-clone-${index}`}>
                      {addIsInWrapProp(child)}
                    </React.Fragment>
                  );
                }
                return child;
              })}
            </div>
          </FilterProvider>

          {/* 隐藏的 more button 测量容器 - 使用 FilterProvider 以便显示 badge/count */}
          <FilterProvider
            isCollapsed={true}
            filterValues={filterValues}
            updateFilterValue={updateFilterValue}
          >
            <div
              ref={moreButtonRef}
              style={{
                display: 'inline-flex',
              }}
            >
              <FilterWrap
                collapsed
                icon={icon}
                label={filterLabel}
                count={countProp}
                onClearAll={handleClearAll}
              >
                <div />
              </FilterWrap>
            </div>
          </FilterProvider>
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
