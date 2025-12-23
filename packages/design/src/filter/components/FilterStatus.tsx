import { Badge, theme } from '@oceanbase/design';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import type { BaseFilterProps, InternalFilterProps } from '../type';
import FilterCheckbox from './FilterCheckbox';
import type { CheckboxOption } from './FilterCheckbox';

export interface StatusOption {
  /** 状态文本 */
  label: string;
  /** 状态值 */
  value: string;
  /** 状态颜色 */
  color: string;
  /** 是否禁用 */
  disabled?: boolean;
}

export interface FilterStatusProps extends BaseFilterProps, InternalFilterProps {
  /** 状态选项列表 */
  options?: StatusOption[];
  /** 当前选中值 */
  value?: string[];
  /** 值变化回调 */
  onChange?: (value: string[]) => void;
  /** 是否显示计数，可传入 { showTotal: true } 同时显示总数 */
  count?: boolean | { showTotal?: boolean };
}

const FilterStatus: FC<FilterStatusProps> = ({
  options = [],
  value,
  onChange,
  icon,
  label,
  bordered = true,
  count = false,
  _isInWrap = false,
  ...restProps
}) => {
  const { token } = theme.useToken();

  // 从 restProps 中排除 showArrow，避免类型冲突
  const { showArrow: _showArrowFilter, ...filterButtonProps } = restProps;

  // 渲染状态图标（重叠显示）
  const renderStatusIcon = useMemo(() => {
    if (options.length === 0) return null;

    // 每个 icon 的宽度
    const iconWidth = 8;
    // 重叠距离（每个 icon 向左偏移的距离）
    const overlapDistance = 3;
    // 计算容器宽度：第一个 icon 的完整宽度 + (icon数量 - 1) * 重叠距离
    const containerWidth = iconWidth + (options.length - 1) * overlapDistance;

    // 获取当前选中的值
    const selectedStatuses = value || [];

    return (
      <div
        style={{
          position: 'relative',
          width: containerWidth,
          height: iconWidth,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {options.map((item, index) =>
          selectedStatuses.includes(item.value) ? (
            <Badge
              key={item.value}
              color={item.color}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                top: -6,
                zIndex: options.length - index, // 后面的 icon z-index 更高，显示在上层
              }}
            />
          ) : (
            <div
              key={item.value}
              style={{
                position: 'absolute',
                left: index * overlapDistance,
                top: 1,
                width: iconWidth,
                height: iconWidth,
                backgroundColor: 'white',
                borderRadius: '50%',
                border: `1px solid ${token.colorBorder}`,
                zIndex: options.length - index, // 后面的 icon z-index 更高，显示在上层
              }}
            />
          )
        )}
      </div>
    );
  }, [options, value, token.colorBorder]);

  // 将 options 转换为 CheckboxOption 格式
  const checkboxOptions: CheckboxOption[] = useMemo(
    () =>
      options.map(item => ({
        label: <Badge text={item.label} color={item.color} />,
        value: item.value,
        disabled: item.disabled,
      })),
    [options]
  );

  // 使用 FilterCheckbox 组件，传入自定义的 icon
  return (
    <FilterCheckbox
      icon={icon || renderStatusIcon}
      label={label}
      bordered={bordered}
      value={value}
      onChange={onChange}
      options={checkboxOptions}
      count={count}
      _isInWrap={_isInWrap}
      {...filterButtonProps}
    />
  );
};

export default FilterStatus;
