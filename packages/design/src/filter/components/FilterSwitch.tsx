import { Flex, Switch, type SwitchProps, theme } from '@oceanbase/design';
import type { FC } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import type { BaseFilterProps } from '../type';
import { wrapContent } from '../utils';
import FilterButton from './FilterButton';

export interface FilterSwitchProps extends BaseFilterProps {
  /** 当前值 */
  value?: boolean;
  /** 值变化回调 */
  onChange?: (value: boolean) => void;
  /** Switch 组件的额外属性 */
  switchProps?: SwitchProps;
}

const FilterSwitch: FC<FilterSwitchProps> = ({
  value,
  onChange,
  icon,
  label,
  bordered = true,
  switchProps,
  ...restProps
}) => {
  const isWrapped = useFilterWrapped();

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, false, onChange);

  const handleClear = () => {
    setValue(false);
  };

  // 渲染弹框内容
  const renderContent = (
    <Flex justify="space-between" align="center" style={{ padding: 'var(--ob-space-100) 0px' }}>
      <span>{label}</span>
      <Switch checked={currentValue} onChange={setValue} size="small" {...switchProps} />
    </Flex>
  );

  // 如果被 FilterWrap 包裹，只渲染内容部分
  if (isWrapped) {
    return renderContent;
  }

  const wrappedContent = wrapContent(renderContent, '8px 0px');

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps as any;

  return (
    <FilterButton
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      {...filterButtonProps}
    >
      <span>{label}</span>
    </FilterButton>
  );
};

export default FilterSwitch;
