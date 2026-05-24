import { FilterOutlined } from '@oceanbase/icons';
import { Filter } from '@oceanbase/design';
import React, { type ReactNode } from 'react';

type ChipOption = { value: string; label: ReactNode };

/**
 * 与 `../index.figma.tsx` `<FIGMA_OCEANBASE_FILTERS>` 一致：OBUI `Filter.Checkbox` + 与 Figma 变体相同的 options / value / count / label / icon。
 * 维度：status / mini / multiple / value / moreFilters / filterIcon；文案 Title、Value 对应 figma.string。
 */

const OPTIONS_6: ChipOption[] = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' },
  { value: 'c', label: 'C' },
  { value: 'd', label: 'D' },
  { value: 'e', label: 'E' },
  { value: 'f', label: 'F' },
];

export type FigmaFilterStatus = 'default' | 'hover' | 'disabled';

type Emit = {
  label: React.ReactNode;
  bordered: boolean;
  options: ChipOption[];
  value: string[];
  count: boolean | { showTotal?: boolean };
  disabled: boolean;
  icon?: React.ReactNode;
};

function emitCheckbox(
  status: FigmaFilterStatus,
  mini: boolean,
  multiple: boolean,
  value: boolean,
  moreFilters: boolean,
  filterIcon: boolean,
  title: string,
  valueText: string
): Emit {
  const disabled = status === 'disabled';
  const iconColor = disabled ? '#b6c0d4' : '#595959';
  const icon = filterIcon ? (
    <FilterOutlined style={{ fontSize: 14, color: iconColor }} />
  ) : undefined;
  const bordered = !mini;

  if (multiple) {
    if (value) {
      if (moreFilters) {
        return {
          label: title,
          bordered,
          options: OPTIONS_6,
          value: ['a', 'b', 'c', 'd', 'e'],
          count: { showTotal: true },
          disabled,
          icon,
        };
      }
      return {
        label: title,
        bordered,
        options: OPTIONS_6,
        value: ['a', 'b', 'c'],
        count: true,
        disabled,
        icon,
      };
    }
    if (moreFilters) {
      return {
        label: title,
        bordered,
        options: OPTIONS_6,
        value: [],
        count: false,
        disabled,
        icon,
      };
    }
    return {
      label: title,
      bordered,
      options: OPTIONS_6,
      value: [],
      count: false,
      disabled,
      icon,
    };
  }
  const opt1: ChipOption[] = [{ value: '1', label: valueText }];
  if (value) {
    if (moreFilters) {
      return {
        label: valueText,
        bordered,
        options: opt1,
        value: ['1'],
        count: false,
        disabled,
        icon,
      };
    }
    return {
      label: valueText,
      bordered,
      options: opt1,
      value: ['1'],
      count: false,
      disabled,
      icon,
    };
  }
  if (moreFilters) {
    return {
      label: title,
      bordered,
      options: OPTIONS_6,
      value: [],
      count: false,
      disabled,
      icon,
    };
  }
  return {
    label: title,
    bordered,
    options: OPTIONS_6,
    value: [],
    count: false,
    disabled,
    icon,
  };
}

/** 与 `figma.connect` 的 `example: ({ chip }) => chip` 中 `chip` 语义一致 */
export function buildFigmaOceanbaseFiltersChip(props: {
  status: FigmaFilterStatus;
  mini: boolean;
  multiple: boolean;
  value: boolean;
  moreFilters: boolean;
  filterIcon: boolean;
  title: string;
  valueText: string;
}): React.ReactElement {
  const e = emitCheckbox(
    props.status,
    props.mini,
    props.multiple,
    props.value,
    props.moreFilters,
    props.filterIcon,
    props.title,
    props.valueText
  );
  return (
    <Filter.Checkbox
      label={e.label}
      icon={e.icon}
      disabled={e.disabled}
      bordered={e.bordered}
      options={e.options}
      value={e.value}
      count={e.count}
      allowClear={false}
    />
  );
}

export function FigmaFiltersChipExample(props: { chip: React.ReactNode }) {
  return <>{props.chip}</>;
}
