import Cascader from './components/FilterCascader/index';
import Checkbox from './components/FilterCheckbox';
import Range from './components/FilterRange';
import Input from './components/FilterInput';
import Select from './components/FilterSelect';
import Slot from './components/FilterSlot';
import Switch from './components/FilterSwitch';
import Wrap from './components/FilterWrap';
import ResponsiveGroup from './components/ResponsiveFilterGroup';

export { FilterProvider, useFilterContext } from './FilterContext';
export type { BaseFilterProps, InternalFilterProps } from './type';
export type { FilterSelectProps, SelectOption } from './components/FilterSelect';
export type { FilterCheckboxProps, CheckboxOption } from './components/FilterCheckbox';
export type { FilterCascaderProps, CascaderOption } from './components/FilterCascader';
export type { FilterSwitchProps } from './components/FilterSwitch';
export type { FilterRangeProps, RangeOption } from './components/FilterRange';
export type { FilterInputProps } from './components/FilterInput';
export type { FilterSlotProps } from './components/FilterSlot';
export type { FilterWrapProps } from './components/FilterWrap';
export type { ResponsiveFilterGroupProps } from './components/ResponsiveFilterGroup';

function markAsFilterComponent<T>(component: T): T {
  (component as any).__isFilterComponent = true;
  return component;
}

const Filter = {
  Select: markAsFilterComponent(Select),
  Checkbox: markAsFilterComponent(Checkbox),
  Range: markAsFilterComponent(Range),
  Wrap: markAsFilterComponent(Wrap),
  Cascader: markAsFilterComponent(Cascader),
  Switch: markAsFilterComponent(Switch),
  Input: markAsFilterComponent(Input),
  Slot: markAsFilterComponent(Slot),
  ResponsiveGroup,
};

export default Filter;
