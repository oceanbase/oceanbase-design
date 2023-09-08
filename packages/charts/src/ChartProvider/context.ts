import React from 'react';

export type Theme = 'light' | 'dark' | string | object;

export interface ChartConsumerProps {
  theme?: Theme;
}

export const ChartContext = React.createContext<ChartConsumerProps>({
  theme: 'light',
});
