import type { ChangeEvent, FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Flex } from 'antd';
import Input, { type InputProps } from '../../input';
import Switch, { type SwitchProps } from '../../switch';
import theme from '../../theme';
import type { FilterComponentName } from '../FilterContext';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterContext } from '../FilterContext';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import type { BaseFilterProps } from '../type';
import { generateFilterId, wrapContent } from '../utils';
import FilterButton from './FilterButton';

export interface FilterInputProps extends BaseFilterProps {
  /** 当前值 */
  value?: string;
  /** 值变化回调 */
  onChange?: (value: string) => void;
  /** Input 组件的额外属性 */
  inputProps?: InputProps;
  /** Switch 组件的额外属性 */
  switchProps?: SwitchProps;
}

const FilterInput: FC<FilterInputProps> = ({
  value,
  onChange,
  icon,
  label,
  bordered = true,
  inputProps,
  switchProps,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const isWrapped = useFilterWrapped();
  const { updateFilterValue } = useFilterContext();
  const filterId = useMemo(() => generateFilterId('input', label), [label]);

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, '', onChange);
  const [switchValue, setSwitchValue] = useState(false);

  // 当值变化时，更新 context 中的值
  // 只有当 switchValue 为 true 时才注册 currentValue，否则视为空值
  useEffect(() => {
    if (isWrapped && updateFilterValue) {
      const valueToRegister = switchValue ? currentValue : undefined;
      updateFilterValue(
        filterId,
        label,
        valueToRegister,
        undefined,
        'input' as FilterComponentName
      );
    }
  }, [isWrapped, updateFilterValue, filterId, label, currentValue, switchValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
    setSwitchValue(false);
  };

  // 渲染弹框内容
  const renderContent = (
    <div style={{ paddingBlock: token.paddingXXS }}>
      <Flex justify="space-between" align="center">
        <span>{label}</span>
        <Switch
          checked={switchValue}
          onChange={val => setSwitchValue(val)}
          size="small"
          {...switchProps}
        />
      </Flex>
      {switchValue ? (
        <div style={{ marginTop: 8 }}>
          <Input value={currentValue} onChange={handleChange} {...inputProps} />
        </div>
      ) : null}
    </div>
  );

  // 如果被 FilterWrap 包裹，只渲染内容部分
  if (isWrapped) {
    return renderContent;
  }

  const wrappedContent = wrapContent(renderContent, '8px 12px');

  // 从 restProps 中排除不需要的属性，避免类型冲突
  const { ...filterButtonProps } = restProps;

  return (
    <FilterButton
      icon={icon}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      label={label}
      {...filterButtonProps}
    >
      <span>{label}</span>
    </FilterButton>
  );
};

export default FilterInput;
