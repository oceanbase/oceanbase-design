import Cascader from './components/FilterCascader';
import Checkbox from './components/FilterCheckbox';
import Range from './components/FilterRange';
import Input from './components/FilterInput';
import Select from './components/FilterSelect';
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
export type { FilterWrapProps } from './components/FilterWrap';
export type { ResponsiveFilterGroupProps } from './components/ResponsiveFilterGroup';

const Filter = {
  Select,
  Checkbox,
  Range,
  Wrap,
  Cascader,
  Switch,
  Input,
  ResponsiveGroup,
};

export default Filter;
