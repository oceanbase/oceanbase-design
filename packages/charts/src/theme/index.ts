import React, { useContext } from 'react';
import ChartProvider from '../ChartProvider';
import type { Theme } from '../ChartProvider';
import lightTheme from './light';
import darkTheme from './dark';

export type { Theme };

export type ThemeConfig = typeof lightTheme;

export function useTheme(customizeTheme?: Theme) {
  const { theme: globalTheme } = useContext(ChartProvider.ChartContext);
  const theme = customizeTheme || globalTheme;
  const themeMap = {
    light: lightTheme,
    dark: darkTheme,
  };
  const themeConfig = typeof theme === 'object' ? theme : themeMap[theme] || lightTheme;
  return themeConfig as ThemeConfig;
}
