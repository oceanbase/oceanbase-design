import { Flex, Tooltip } from '@oceanbase/design';
import { CheckOutlined } from '@oceanbase/icons';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import { getIcon } from '../utils';
import FilterButton from './FilterButton';
import type { FilterButtonRef } from './FilterButton';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { useFilterWrapped } from '../hooks';

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
  _isInWrap = false,
  ...restProps
}) => {
  const { prefixCls } = useFilterStyle();
  const isWrapped = useFilterWrapped(_isInWrap);
  const filterButtonRef = useRef<FilterButtonRef>(null);

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps as any;

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, null, onChange);

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

  const content = (
    <div style={{ padding: 8 }}>
      {options.map(option => (
        <Flex
          gap={8}
          key={option.toString()}
          className={getFilterCls(prefixCls, 'select-option')}
          onClick={() => handleSelect(option.value)}
          justify="space-between"
        >
          <span>{option.label}</span>
          <span style={{ width: 14 }}>
            {currentValue === option.value && <CheckOutlined style={{ color: '#1616ff' }} />}
          </span>
        </Flex>
      ))}
    </div>
  );

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

  const filterButton = (
    <FilterButton
      ref={filterButtonRef}
      icon={icon || getIcon('time')}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={content}
      {...filterButtonProps}
    >
      <span>{currentLabel || label}</span>
    </FilterButton>
  );

  return tooltipTitle ? (
    <Tooltip mouseEnterDelay={0.8} title={tooltipTitle} open={isWrapped ? false : undefined}>
      {filterButton}
    </Tooltip>
  ) : (
    filterButton
  );
};

export default FilterDatePreset;
