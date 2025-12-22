import Cascader from './components/FilterCascader';
import Checkbox from './components/FilterCheckbox';
import DatePreset from './components/FilterDatePreset';
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
export type { FilterDatePresetProps, DatePresetOption } from './components/FilterDatePreset';
export type { FilterInputProps } from './components/FilterInput';
export type { FilterWrapProps } from './components/FilterWrap';
export type { ResponsiveFilterGroupProps } from './components/ResponsiveFilterGroup';

const Filter = {
  Select,
  Checkbox,
  DatePreset,
  Wrap,
  Cascader,
  Switch,
  Input,
  ResponsiveGroup,
};

export default Filter;
