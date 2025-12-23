import { Flex, Tooltip } from '@oceanbase/design';
import { CheckOutlined } from '@oceanbase/icons';
import type { FC, ReactNode } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import {
  generateFilterId,
  getIcon,
  getPlaceholder,
  getStableOptionsKey,
  getWrappedValueStyle,
  wrapContent,
} from '../utils';
import FilterButton from './FilterButton';
import type { FilterButtonRef } from './FilterButton';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

export interface DatePresetOption {
  label: ReactNode;
  value: [Dayjs, Dayjs] | null;
}

export interface FilterDatePresetProps extends BaseFilterProps, InternalFilterProps {
  /** 当前选中值 */
  value?: [Dayjs, Dayjs];
  /** 值变化回调 */
  onChange?: (value: [Dayjs, Dayjs]) => void;
  /** 预设选项列表 */
  options?: DatePresetOption[];
  /** 是否加载中 */
  loading?: boolean;
}

const defaultOptions: DatePresetOption[] = [
  {
    label: 'Last 1 Days',
    value: [dayjs().subtract(1, 'day'), dayjs()],
  },
  {
    label: 'Last 3 Days',
    value: [dayjs().subtract(3, 'day'), dayjs()],
  },
  {
    label: 'Last 7 Days',
    value: [dayjs().subtract(7, 'day'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().subtract(30, 'day'), dayjs()],
  },
];

const FilterDatePreset: FC<FilterDatePresetProps> = ({
  icon,
  label,
  bordered = true,
  value,
  onChange,
  options = defaultOptions,
  loading = false,
  _isInWrap = false,
  ...restProps
}) => {
  const { prefixCls } = useFilterStyle();
  const isWrapped = useFilterWrapped(_isInWrap);
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('datepreset', label), [label]);
  const stableOptionsKey = useMemo(() => getStableOptionsKey(options), [options]);

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, null, onChange);

  // 当值变化时，更新 context 中的值
  // 使用 stableOptionsKey 而不是 options 来避免不必要的更新
  useEffect(() => {
    if (isWrapped && updateFilterValue) {
      updateFilterValue(
        filterId,
        label,
        currentValue,
        options,
        'datepreset' as FilterComponentName
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWrapped, updateFilterValue, filterId, label, currentValue, stableOptionsKey]);

  // 根据当前值计算显示标签
  const currentLabel = options.find(option => option.value === currentValue)?.label || label;

  const handleClear = () => {
    setValue(null);
  };

  const handleSelect = (optionValue: [Dayjs, Dayjs]) => {
    setValue(optionValue);
    // 选择后立即关闭弹出层
    filterButtonRef.current?.closePopover();
  };

  // 渲染弹框内容
  const renderContent = (
    <div>
      {options.map((option, index) => {
        // 使用稳定的 key：优先使用 label，如果 label 是对象则使用 index
        const optionKey =
          typeof option.label === 'string' || typeof option.label === 'number'
            ? `datepreset-${option.label}`
            : option.value
              ? `datepreset-${option.value[0]?.format('YYYY-MM-DD')}-${option.value[1]?.format('YYYY-MM-DD')}`
              : `datepreset-${index}`;

        return (
          <Flex
            gap={8}
            key={optionKey}
            className={getFilterCls(prefixCls, 'select-option')}
            onClick={() => handleSelect(option.value)}
            justify="space-between"
          >
            <span>{option.label}</span>
            <span style={{ width: 14 }}>
              {currentValue === option.value && (
                <CheckOutlined style={{ color: 'var(--ob-color-text-link)' }} />
              )}
            </span>
          </Flex>
        );
      })}
    </div>
  );

  const wrappedContent = wrapContent(renderContent);

  // 获取选中值的显示文本
  const selectedValueText = currentValue
    ? options.find(option => {
        if (!option.value || !currentValue) return false;
        return (
          option.value[0].isSame(currentValue[0], 'day') &&
          option.value[1].isSame(currentValue[1], 'day')
        );
      })?.label
    : null;

  // 生成 Tooltip 内容
  const tooltipTitle = selectedValueText ? `${label}: ${selectedValueText}` : null;

  if (isWrapped) {
    const hasValue = !!currentValue;

    const filterButton = (
      <FilterButton
        ref={filterButtonRef}
        icon={icon || getIcon('time')}
        label={label}
        bordered={bordered}
        onClear={handleClear}
        content={wrappedContent}
        loading={loading}
        selected={hasValue}
        {...filterButtonProps}
      >
        <span
          className={getFilterCls(prefixCls, 'text-ellipsis')}
          style={getWrappedValueStyle(hasValue)}
        >
          {hasValue ? currentLabel : getPlaceholder()}
        </span>
      </FilterButton>
    );

    return (
      <div style={{ padding: 'var(--ob-space-100) 0px' }}>
        <div style={{ marginBottom: 8 }}>{label}</div>
        {tooltipTitle ? (
          <Tooltip mouseEnterDelay={0.8} title={tooltipTitle} open={isWrapped ? false : undefined}>
            {filterButton}
          </Tooltip>
        ) : (
          filterButton
        )}
      </div>
    );
  }

  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon || getIcon('time')}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      loading={loading}
      selected={!!currentValue}
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{currentLabel || label}</span>
    </FilterButton>
  );

  return tooltipTitle ? (
    <Tooltip mouseEnterDelay={0.8} title={tooltipTitle}>
      {filterButton}
    </Tooltip>
  ) : (
    filterButton
  );
};

export default FilterDatePreset;
