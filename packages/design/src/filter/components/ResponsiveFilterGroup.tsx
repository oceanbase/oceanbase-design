import type { FC, ReactElement, ReactNode } from 'react';
import React, {
  Children,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Flex } from 'antd';
import { FilterOutlined } from '@oceanbase/icons';
import Button from '../../button';
import FilterWrap from './FilterWrap';
import type { FilterButtonRef } from './FilterButton';
import ConfigProvider from '../../config-provider';
import type { FilterLocale } from '../../locale';
import defaultLocale from '../../locale/en-US';
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
  showCount?: boolean;
  locale?: FilterLocale;
}

// 检查元素是否是 Filter 组件（通过 __isFilterComponent 静态标记识别）
const isFilterComponent = (child: ReactElement): boolean => {
  const type = child.type as any;
  if (type?.__isFilterComponent) return true;

  if (child.props?.children && isValidElement(child.props.children)) {
    const innerType = (child.props.children as ReactElement).type as any;
    if (innerType?.__isFilterComponent) return true;
  }

  return false;
};

// 检查子元素是否可以被折叠（只有 Filter 组件默认可折叠，其他组件需要显式设置 collapsible）
const isCollapsibleCheck = (child: ReactElement): boolean => {
  const childProps = child.props;

  if (childProps?.collapsible !== undefined) {
    return childProps.collapsible !== false;
  }

  if (childProps?.children && isValidElement(childProps.children)) {
    const innerChild = childProps.children as ReactElement;
    if (innerChild.props?.collapsible !== undefined) {
      return innerChild.props.collapsible !== false;
    }
  }

  return isFilterComponent(child);
};

// 检查子元素是否应该始终折叠
const isAlwaysCollapseCheck = (child: ReactElement): boolean => {
  const childProps = child.props;

  if (childProps?.alwaysCollapse !== undefined) {
    return childProps.alwaysCollapse === true;
  }

  if (childProps?.children && isValidElement(childProps.children)) {
    const innerChild = childProps.children as ReactElement;
    if (innerChild.props?.alwaysCollapse !== undefined) {
      return innerChild.props.alwaysCollapse === true;
    }
  }

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
  showCount = true,
  locale: customLocale,
}) => {
  const { locale: contextLocale } = useContext(ConfigProvider.ConfigContext);
  const filterLocale: FilterLocale = {
    ...defaultLocale.Filter,
    ...contextLocale?.Filter,
    ...customLocale,
  };
  const filterLabel = label ?? filterLocale?.filters;

  const containerRef = useRef<HTMLDivElement>(null);
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const moreButtonMeasureRef = useRef<HTMLDivElement>(null);
  const cachedWidths = useRef<number[]>([]);

  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [filterValues, setFilterValues] = useState<FilterValueItem[]>([]);

  const childrenArray = useMemo(
    () => Children.toArray(children).filter(isValidElement) as ReactElement[],
    [children]
  );

  const childInfo = useMemo(
    () =>
      childrenArray.map((child, index) => ({
        child,
        index,
        isCollapsible: isCollapsibleCheck(child),
        isAlwaysCollapse: isAlwaysCollapseCheck(child),
      })),
    [childrenArray]
  );

  const collapsibleItems = useMemo(() => childInfo.filter(item => item.isCollapsible), [childInfo]);
  const alwaysCollapseItems = useMemo(
    () => collapsibleItems.filter(item => item.isAlwaysCollapse),
    [collapsibleItems]
  );
  const normalCollapsibleItems = useMemo(
    () => collapsibleItems.filter(item => !item.isAlwaysCollapse),
    [collapsibleItems]
  );

  // 当 children 结构变化（增删/重排）时才重置为测量模式
  // 不能用 childrenArray 引用比较，因为 JSX 每次渲染都产生新引用
  const childrenStructureKey = childrenArray.map(c => c.key ?? c.type).join(',');
  const [prevStructureKey, setPrevStructureKey] = useState(childrenStructureKey);
  if (childrenStructureKey !== prevStructureKey) {
    setPrevStructureKey(childrenStructureKey);
    setVisibleCount(null);
  }

  const isMeasuring = visibleCount === null;

  // 纯计算函数：根据容器宽度计算可显示的可折叠项数量
  const calculateVisibleCount = useCallback(
    (containerWidth: number): number => {
      if (normalCollapsibleItems.length === 0) return 0;

      const widths = cachedWidths.current;
      if (widths.length === 0) return normalCollapsibleItems.length;

      let uncollapsibleTotalWidth = 0;
      let uncollapsibleCount = 0;
      childInfo.forEach(info => {
        if (!info.isCollapsible) {
          uncollapsibleTotalWidth += widths[info.index] || 0;
          uncollapsibleCount++;
        }
      });

      const moreWidth = moreButtonMeasureRef.current?.offsetWidth || 0;
      const hasAlwaysCollapse = alwaysCollapseItems.length > 0;

      let visibleWidth = 0;
      let count = 0;

      for (let i = 0; i < normalCollapsibleItems.length; i++) {
        const itemWidth = widths[normalCollapsibleItems[i].index] || 0;
        const newWidth = visibleWidth + itemWidth;

        const remaining = normalCollapsibleItems.length - i - 1;
        const needMore = remaining > 0 || hasAlwaysCollapse;

        const totalItems = uncollapsibleCount + count + 1 + (needMore ? 1 : 0);
        const totalGaps = totalItems > 1 ? (totalItems - 1) * gap : 0;

        const totalWidth =
          uncollapsibleTotalWidth + newWidth + (needMore ? moreWidth : 0) + totalGaps;

        if (totalWidth <= containerWidth) {
          visibleWidth = newWidth;
          count++;
        } else {
          break;
        }
      }

      return count;
    },
    [childInfo, normalCollapsibleItems, alwaysCollapseItems, gap]
  );

  // 使用 ref 保存最新的计算函数，避免 ResizeObserver 等 effect 频繁重建
  const calculateRef = useRef(calculateVisibleCount);
  calculateRef.current = calculateVisibleCount;

  // Effect 1: 测量模式下，读取所有子元素宽度并计算 visibleCount
  useLayoutEffect(() => {
    if (!containerRef.current || !isMeasuring) return;

    const items = containerRef.current.querySelectorAll<HTMLElement>('[data-filter-item]');
    const newWidths: number[] = [];
    items.forEach(el => {
      const idx = Number(el.dataset.filterItem);
      if (!isNaN(idx)) {
        newWidths[idx] = el.offsetWidth;
      }
    });
    cachedWidths.current = newWidths;

    const count = calculateRef.current(containerRef.current.offsetWidth);
    setVisibleCount(count);
  }, [isMeasuring]);

  // Effect 2: 监听容器大小变化，用缓存宽度重新计算（不需要重新测量）
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver(() => {
      if (cachedWidths.current.length === 0) return;
      const count = calculateRef.current(el.offsetWidth);
      setVisibleCount(prev => (prev === count ? prev : count));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Effect 3: filterValues 变化时，more 按钮 badge 可能变化，需要重新计算
  useEffect(() => {
    if (!containerRef.current || cachedWidths.current.length === 0) return;
    const count = calculateRef.current(containerRef.current.offsetWidth);
    setVisibleCount(prev => (prev === count ? prev : count));
  }, [filterValues]);

  // Effect 4: 监听子元素的宽度变化（如筛选值变化导致按钮变宽），
  // 更新缓存宽度并重新计算可见数量。
  // 依赖 visibleCount 以便在显隐切换后重新查询 DOM 元素。
  useEffect(() => {
    if (!containerRef.current || isMeasuring) return;
    const el = containerRef.current;
    const items = el.querySelectorAll<HTMLElement>('[data-filter-item]');
    if (items.length === 0) return;

    const ro = new ResizeObserver(() => {
      let widthChanged = false;
      items.forEach(item => {
        const idx = Number(item.dataset.filterItem);
        if (isNaN(idx)) return;
        const w = item.offsetWidth;
        if (w > 0 && Math.abs(w - (cachedWidths.current[idx] || 0)) > 1) {
          cachedWidths.current[idx] = w;
          widthChanged = true;
        }
      });
      if (widthChanged) {
        const count = calculateRef.current(el.offsetWidth);
        setVisibleCount(prev => (prev === count ? prev : count));
      }
    });

    items.forEach(item => ro.observe(item));
    return () => ro.disconnect();
  }, [isMeasuring, visibleCount]);

  // --- 派生状态 ---
  const visibleIndexSet = useMemo(() => {
    if (visibleCount === null) return null;
    return new Set(normalCollapsibleItems.slice(0, visibleCount).map(item => item.index));
  }, [visibleCount, normalCollapsibleItems]);

  const hiddenCollapsibleItems = useMemo(() => {
    if (!visibleIndexSet) return [];
    return normalCollapsibleItems.filter(item => !visibleIndexSet.has(item.index));
  }, [visibleIndexSet, normalCollapsibleItems]);

  const allHiddenItems = useMemo(
    () => [...alwaysCollapseItems, ...hiddenCollapsibleItems],
    [alwaysCollapseItems, hiddenCollapsibleItems]
  );

  // --- 值管理 ---
  const updateFilterValue = useCallback(
    (
      id: string,
      _filterLabel: ReactNode,
      value: FilterValue,
      options?: unknown[],
      componentName?: FilterComponentName
    ) => {
      setFilterValues(prev => {
        const isEmpty =
          value === undefined ||
          value === null ||
          value === '' ||
          (componentName === 'switch' && value === false) ||
          (Array.isArray(value) && value.length === 0);

        if (isEmpty) {
          const filtered = prev.filter(item => item.id !== id);
          return filtered.length === prev.length ? prev : filtered;
        }
        const existingIndex = prev.findIndex(item => item.id === id);
        if (existingIndex >= 0) {
          const existing = prev[existingIndex];
          const optionsEqual =
            existing.options === options ||
            (existing.options === undefined && options === undefined) ||
            (existing.options !== undefined &&
              options !== undefined &&
              JSON.stringify(existing.options) === JSON.stringify(options));

          if (
            existing.value === value &&
            optionsEqual &&
            existing.componentName === componentName &&
            existing.label === _filterLabel
          ) {
            return prev;
          }
          const newValues = [...prev];
          newValues[existingIndex] = { id, label: _filterLabel, value, options, componentName };
          return newValues;
        }
        return [...prev, { id, label: _filterLabel, value, options, componentName }];
      });
    },
    []
  );

  const handleClearAll = () => {
    allHiddenItems.forEach(item => {
      if (isValidElement(item.child)) {
        const childProps = item.child.props as {
          children?: ReactNode;
          onChange?: (value: unknown) => void;
        };
        if (childProps.children && isValidElement(childProps.children)) {
          const innerChildProps = childProps.children.props as {
            onChange?: (value: unknown) => void;
          };
          innerChildProps.onChange?.(undefined);
        } else {
          childProps.onChange?.(undefined);
        }
      }
    });
    setFilterValues([]);
    onClearAll?.();
  };

  // --- 渲染 FilterWrap（收起的筛选项） ---
  const renderHiddenChildren = () => {
    if (allHiddenItems.length === 0) return null;

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
          showCount={showCount}
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
                    {filterLocale?.apply}
                  </Button>
                )}
                {onClearAll && (
                  <Button type="link" size="small" onClick={handleClearAll}>
                    {filterLocale?.clearAll}
                  </Button>
                )}
              </Flex>
            )
          }
        >
          {allHiddenItems.map((item, index) => {
            if (isValidElement(item.child)) {
              const stableKey = item.child.key || `responsive-filter-child-${index}`;
              return <React.Fragment key={stableKey}>{item.child}</React.Fragment>;
            }
            return item.child;
          })}
        </FilterWrap>
      </FilterProvider>
    );
  };

  // --- 渲染子元素 ---
  // 所有子元素始终保持在 Flex 中的稳定位置（FilterProvider + div 包裹 + 稳定 key），
  // 通过 CSS display 控制显隐，避免在可见/折叠间切换时卸载重挂载导致表单值丢失。
  // FilterProvider 使隐藏的原始组件能直接感知 isCollapsed 并上报值，无需依赖 Popover 中的克隆。
  const renderChildren = () => {
    const elements: ReactNode[] = [];
    let filterWrapInserted = false;
    let collapsibleIdx = 0;

    childrenArray.forEach((child, index) => {
      const info = childInfo[index];
      const stableKey = child.key || `filter-item-${index}`;

      let display: string | undefined;
      let isHidden = false;

      if (isMeasuring) {
        display = 'inline-flex';
      } else if (!info.isCollapsible) {
        display = undefined;
      } else if (info.isAlwaysCollapse) {
        display = 'none';
        isHidden = true;
      } else {
        const isVisible = collapsibleIdx < visibleCount!;
        display = isVisible ? undefined : 'none';
        isHidden = !isVisible;
        collapsibleIdx++;
      }

      elements.push(
        <FilterProvider
          key={stableKey}
          isCollapsed={!isMeasuring && isHidden}
          filterValues={filterValues}
          updateFilterValue={updateFilterValue}
        >
          <div data-filter-item={index} style={{ display, flexShrink: 0 }}>
            {child}
          </div>
        </FilterProvider>
      );

      if (!isMeasuring && isHidden && !filterWrapInserted && allHiddenItems.length > 0) {
        filterWrapInserted = true;
        elements.push(<React.Fragment key="filter-wrap">{renderHiddenChildren()}</React.Fragment>);
      }
    });

    if (!isMeasuring && !filterWrapInserted && allHiddenItems.length > 0) {
      elements.push(<React.Fragment key="filter-wrap">{renderHiddenChildren()}</React.Fragment>);
    }

    return elements;
  };

  return (
    <div
      ref={containerRef}
      className="responsive-filter-group"
      style={{
        flex: '1 1 auto',
        minWidth: 0,
        position: 'relative',
        overflow: 'hidden',
        visibility: isMeasuring ? 'hidden' : undefined,
        ...style,
      }}
    >
      {/* 隐藏的 FilterWrap 按钮，仅用于测量 more 按钮宽度（含 badge） */}
      <div
        ref={moreButtonMeasureRef}
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          top: -9999,
          left: -9999,
          display: 'inline-flex',
        }}
      >
        <FilterProvider
          isCollapsed={true}
          filterValues={filterValues}
          updateFilterValue={updateFilterValue}
        >
          <FilterWrap
            collapsed
            icon={icon}
            label={filterLabel}
            showCount={showCount}
            onClearAll={handleClearAll}
          >
            <div />
          </FilterWrap>
        </FilterProvider>
      </div>

      <Flex gap={gap} align="center" wrap="nowrap">
        {renderChildren()}
      </Flex>
    </div>
  );
};

export default ResponsiveFilterGroup;
