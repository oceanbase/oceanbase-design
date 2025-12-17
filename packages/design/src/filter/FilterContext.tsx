import type { FC, ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

interface FilterContextValue {
  isWrapped: boolean;
}

const FilterContext = createContext<FilterContextValue>({
  isWrapped: false,
});

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider: FC<{
  children: ReactNode;
  isWrapped?: boolean;
}> = ({ children, isWrapped = false }) => {
  return <FilterContext.Provider value={{ isWrapped }}>{children}</FilterContext.Provider>;
};
