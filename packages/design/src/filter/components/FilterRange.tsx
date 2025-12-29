import type { FC, ReactNode } from 'react';
import React, { useEffect, useMemo, useRef } from 'react';
import { Flex, theme } from '@oceanbase/design';
import { CheckOutlined } from '@oceanbase/icons';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import { useFilterTooltip } from '../hooks/useFilterTooltip';
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

export interface RangeOption {
  label: ReactNode;
  value: [Dayjs, Dayjs] | null;
}

export interface FilterRangeProps extends BaseFilterProps, InternalFilterProps {
  /** 当前选中值 */
  value?: [Dayjs, Dayjs];
  /** 值变化回调 */
  onChange?: (value: [Dayjs, Dayjs]) => void;
  /** 预设选项列表 */
  options?: RangeOption[];
  /** 是否加载中 */
  loading?: boolean;
}

const defaultOptions: RangeOption[] = [
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

const FilterRange: FC<FilterRangeProps> = ({
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
  const { token } = theme.useToken();
  const isWrapped = useFilterWrapped(_isInWrap);
  const filterButtonRef = useRef<FilterButtonRef>(null);
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('range', label), [label]);
  const stableOptionsKey = useMemo(() => getStableOptionsKey(options), [options]);

  // 从 restProps 中排除 onOpenChange，避免类型冲突
  const { onOpenChange: externalOnOpenChange, ...filterButtonProps } = restProps;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, null, onChange);

  // 查找选中的选项
  const selectedOption = currentValue
    ? options.find(option => {
        if (!option.value || !currentValue) return false;
        return (
          option.value[0].isSame(currentValue[0], 'day') &&
          option.value[1].isSame(currentValue[1], 'day')
        );
      })
    : null;
  const selectedLabel = selectedOption?.label;
  const currentLabel = selectedLabel || label;

  // 使用 Tooltip hook
  const { onPopoverOpenChange, wrapWithTooltip } = useFilterTooltip({
    hasValue: !!currentValue,
    label,
    content: selectedLabel ? selectedLabel : null,
    disabled: isWrapped,
  });

  // 处理 Popover 状态变化
  const handlePopoverOpenChange = (open: boolean) => {
    onPopoverOpenChange(open);
    externalOnOpenChange?.(open);
  };

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isWrapped && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, options, 'range' as FilterComponentName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWrapped, updateFilterValue, filterId, label, currentValue, stableOptionsKey]);

  const handleClear = () => {
    setValue(null);
  };

  const handleSelect = (optionValue: [Dayjs, Dayjs]) => {
    setValue(optionValue);
    filterButtonRef.current?.closePopover();
  };

  // 渲染弹框内容
  const renderContent = (
    <div>
      {options.map((option, index) => {
        const optionKey =
          typeof option.label === 'string' || typeof option.label === 'number'
            ? `range-${option.label}`
            : option.value
              ? `range-${option.value[0]?.format('YYYY-MM-DD')}-${option.value[1]?.format('YYYY-MM-DD')}`
              : `range-${index}`;

        const isSelected =
          currentValue &&
          option.value &&
          option.value[0].isSame(currentValue[0], 'day') &&
          option.value[1].isSame(currentValue[1], 'day');

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
              {isSelected && <CheckOutlined style={{ color: token.colorPrimary }} />}
            </span>
          </Flex>
        );
      })}
    </div>
  );

  const wrappedContent = wrapContent(renderContent);

  // wrapped 模式
  if (isWrapped) {
    const hasValue = !!currentValue;
    return (
      <div style={{ paddingBlock: token.paddingXXS }}>
        <div style={{ marginBottom: 8 }}>{label}</div>
        <FilterButton
          ref={filterButtonRef}
          icon={icon || getIcon('time')}
          label={label}
          bordered={bordered}
          onClear={handleClear}
          content={wrappedContent}
          loading={loading}
          selected={hasValue}
          onOpenChange={handlePopoverOpenChange}
          {...filterButtonProps}
        >
          <span
            className={getFilterCls(prefixCls, 'text-ellipsis')}
            style={getWrappedValueStyle(hasValue)}
          >
            {hasValue ? currentLabel : getPlaceholder()}
          </span>
        </FilterButton>
      </div>
    );
  }

  // 正常模式
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
      onOpenChange={handlePopoverOpenChange}
      {...filterButtonProps}
    >
      <span className={getFilterCls(prefixCls, 'text-ellipsis')}>{currentLabel || label}</span>
    </FilterButton>
  );

  return wrapWithTooltip(filterButton);
};

export default FilterRange;
