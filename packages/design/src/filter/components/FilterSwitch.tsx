import type { FC } from 'react';
import { useEffect, useMemo } from 'react';
import { Flex } from 'antd';
import Switch, { type SwitchProps } from '../../switch';
import theme from '../../theme';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import type { BaseFilterProps } from '../type';
import { generateFilterId, wrapContent } from '../utils';
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
  const { token } = theme.useToken();
  const isWrapped = useFilterWrapped();
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('switch', label), [label]);

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, false, onChange);

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isWrapped && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, undefined, 'switch' as FilterComponentName);
    }
  }, [isWrapped, updateFilterValue, filterId, label, currentValue]);

  const handleClear = () => {
    setValue(false);
  };

  // 渲染弹框内容
  const renderContent = (
    <Flex justify="space-between" align="center" style={{ paddingBlock: token.paddingXXS }}>
      <span>{label}</span>
      <Switch checked={currentValue} onChange={setValue} size="small" {...switchProps} />
    </Flex>
  );

  // 如果被 FilterWrap 包裹，只渲染内容部分
  if (isWrapped) {
    return renderContent;
  }

  const wrappedContent = wrapContent(renderContent, '8px 12px');

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps;

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
