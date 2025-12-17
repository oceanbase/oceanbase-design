import type { InputProps } from '@oceanbase/design';
import { Flex, Input, Switch, type SwitchProps } from '@oceanbase/design';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import type { BaseFilterProps } from '../type';
import { wrapContent } from '../utils';
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
  const isWrapped = useFilterWrapped();

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, '', onChange);
  const [switchValue, setSwitchValue] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  // 渲染弹框内容
  const renderContent = (
    <div>
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

  const wrappedContent = wrapContent(renderContent, '8px 0px');

  return (
    <FilterButton
      icon={icon}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      label={label}
      {...restProps}
    >
      <span>{label}</span>
    </FilterButton>
  );
};

export default FilterInput;
