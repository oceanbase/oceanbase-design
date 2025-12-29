import type { FC, ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

export type FilterComponentName = 'select' | 'checkbox' | 'cascader' | 'switch' | 'range' | 'input';

export type FilterValue = string | string[] | string[][] | boolean | [any, any] | null | undefined;

export interface FilterValueItem {
  id: string;
  label: ReactNode;
  value: FilterValue;
  options?: unknown[];
  componentName?: FilterComponentName;
}

interface FilterContextValue {
  /** 是否处于折叠模式 */
  isCollapsed: boolean;
  filterValues?: FilterValueItem[];
  updateFilterValue?: (
    id: string,
    label: ReactNode,
    value: FilterValue,
    options?: unknown[],
    componentName?: FilterComponentName
  ) => void;
  clearAllFilterValues?: () => void;
}

const FilterContext = createContext<FilterContextValue>({
  isCollapsed: false,
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider: FC<{
  children: ReactNode;
  /** 是否处于折叠模式 */
  isCollapsed?: boolean;
  filterValues?: FilterValueItem[];
  updateFilterValue?: (
    id: string,
    label: ReactNode,
    value: FilterValue,
    options?: unknown[],
    componentName?: FilterComponentName
  ) => void;
  clearAllFilterValues?: () => void;
}> = ({ children, isCollapsed = false, filterValues, updateFilterValue, clearAllFilterValues }) => {
  return (
    <FilterContext.Provider
      value={{ isCollapsed, filterValues, updateFilterValue, clearAllFilterValues }}
    >
      {children}
    </FilterContext.Provider>
  );
};
