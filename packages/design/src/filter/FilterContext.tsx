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
  isWrapped: boolean;
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
  isWrapped: false,
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider: FC<{
  children: ReactNode;
  isWrapped?: boolean;
  filterValues?: FilterValueItem[];
  updateFilterValue?: (
    id: string,
    label: ReactNode,
    value: FilterValue,
    options?: unknown[],
    componentName?: FilterComponentName
  ) => void;
  clearAllFilterValues?: () => void;
}> = ({ children, isWrapped = false, filterValues, updateFilterValue, clearAllFilterValues }) => {
  return (
    <FilterContext.Provider
      value={{ isWrapped, filterValues, updateFilterValue, clearAllFilterValues }}
    >
      {children}
    </FilterContext.Provider>
  );
};
