import { Flex, Form, Switch, type SwitchProps, theme } from '@oceanbase/design';
import type { FC } from 'react';
import { useControlledState } from '../hooks/useControlledState';
import { useFilterWrapped } from '../hooks/useFilterWrapped';
import useFilterStyle, { getFilterCls } from '../style';
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
  const { token } = theme.useToken();
  const isWrapped = useFilterWrapped();
  const { prefixCls } = useFilterStyle();

  // 获取 Form.Item 的校验状态
  const formItemStatus = Form.Item?.useStatus?.();

  // 使用受控状态 hook
  const [currentValue, setValue] = useControlledState(value, false, onChange);

  const handleClear = () => {
    setValue(false);
  };

  // 渲染弹框内容
  const renderContent = (
    <Flex justify="space-between" align="center">
      <span>{label}</span>
      <Switch checked={currentValue} onChange={setValue} size="small" {...switchProps} />
    </Flex>
  );

  // 如果被 FilterWrap 包裹，只渲染内容部分
  if (isWrapped) {
    return renderContent;
  }

  const wrappedContent = wrapContent(renderContent, '8px 0px');

  return (
    <FilterButton
      icon={icon}
      label={label}
      bordered={bordered}
      onClear={handleClear}
      content={wrappedContent}
      formItemStatus={formItemStatus}
      {...restProps}
    >
      <span>{label}</span>
    </FilterButton>
  );
};

export default FilterSwitch;
