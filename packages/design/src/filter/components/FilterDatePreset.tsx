import { Flex } from '@oceanbase/design';
import { CheckOutlined } from '@oceanbase/icons';
import type { FC, ReactNode } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import useFilterStyle, { getFilterCls } from '../style';
import type { BaseFilterProps } from '../type';
import { getIcon } from '../utils';
import FilterButton from './FilterButton';
import dayjs from 'dayjs';

export interface DatePresetOption {
  label: ReactNode;
  value: string;
}

export interface FilterDatePresetProps extends BaseFilterProps {
  /** 当前选中值 */
  value?: string;
  /** 值变化回调 */
  onChange?: (value: string) => void;
  /** 预设选项列表 */
  options?: DatePresetOption[];
}

const defaultOptions: DatePresetOption[] = [
  {
    label: 'Last 1 Days',
    value: dayjs().subtract(1, 'day').toISOString(),
  },
  {
    label: 'Last 3 Days',
    value: dayjs().subtract(3, 'day').toISOString(),
  },
  {
    label: 'Last 7 Days',
    value: dayjs().subtract(7, 'day').toISOString(),
  },
  {
    label: 'Last 30 Days',
    value: dayjs().subtract(30, 'day').toISOString(),
  },
];

const FilterDatePreset: FC<FilterDatePresetProps> = ({
  icon,
  label,
  bordered = true,
  value,
  onChange,
  options = defaultOptions,
  ...restProps
}) => {
  const { prefixCls } = useFilterStyle();

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, '', onChange);

  // 根据当前值计算显示标签
  const currentLabel = options.find(option => option.value === currentValue)?.label || label;

  const handleClear = () => {
    setValue('');
  };

  const content = (
    <div style={{ padding: 8 }}>
      {options.map(option => (
        <Flex
          gap={8}
          key={option.value}
          className={getFilterCls(prefixCls, 'select-option')}
          onClick={() => setValue(option.value)}
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

  return (
    <FilterButton
      icon={icon || getIcon('time')}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={content}
      {...restProps}
    >
      <span>{currentLabel || label}</span>
    </FilterButton>
  );
};

export default FilterDatePreset;
