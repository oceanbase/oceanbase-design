import React from 'react';
import { ChartContext } from './context';
import type { ChartConsumerProps } from './context';

export * from './context';

export interface ChartProviderProps extends ChartConsumerProps {
  children?: React.ReactNode;
}

const ChartProvider: React.FC<ChartProviderProps> & {
  ChartContext: typeof ChartContext;
} = ({ children, theme = 'light', ...restProps }) => {
  return (
    <ChartContext.Provider
      value={{
        theme,
        ...restProps,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
};

ChartProvider.ChartContext = ChartContext;

export default ChartProvider;
