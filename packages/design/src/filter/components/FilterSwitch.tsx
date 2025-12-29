import type { FC } from 'react';
import { useEffect, useMemo } from 'react';
import { Flex, Switch } from 'antd';
import theme from '../../theme';
import type { SwitchProps } from 'antd';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterCollapsed } from '../hooks/useFilterCollapsed';
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
  const isCollapsed = useFilterCollapsed();
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('switch', label), [label]);

  // 支持从 Form.Item 通过 `valuePropName="checked"` 传入的 checked 属性
  const propChecked = (restProps as any).checked;

  // 使用受控状态 hook：优先使用明确的 value，其次使用 checked（来自 Form.Item）
  const [currentValue, setValue] = useControlledState(
    value !== undefined ? value : propChecked,
    false,
    onChange
  );

  // 当值变化时，更新 context 中的值
  useEffect(() => {
    if (isCollapsed && updateFilterValue) {
      updateFilterValue(filterId, label, currentValue, undefined, 'switch' as FilterComponentName);
    }
  }, [isCollapsed, updateFilterValue, filterId, label, currentValue]);

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

  // 如果处于折叠模式，只渲染内容部分
  if (isCollapsed) {
    return renderContent;
  }

  const wrappedContent = wrapContent(renderContent, '8px 12px');

  // 从 restProps 中排除不需要的属性，避免类型冲突
  const { ...filterButtonProps } = restProps;

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
