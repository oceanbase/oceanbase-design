import type { FC, ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

export interface FilterValueItem {
  id: string;
  label: ReactNode;
  value: any;
  options?: any[];
  componentName?: string;
}

interface FilterContextValue {
  isWrapped: boolean;
  filterValues?: FilterValueItem[];
  updateFilterValue?: (
    id: string,
    label: ReactNode,
    value: any,
    options?: any[],
    componentName?: string
  ) => void;
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
    value: any,
    options?: any[],
    componentName?: string
  ) => void;
}> = ({ children, isWrapped = false, filterValues, updateFilterValue }) => {
  return (
    <FilterContext.Provider value={{ isWrapped, filterValues, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};
