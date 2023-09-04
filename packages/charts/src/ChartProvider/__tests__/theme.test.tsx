import React from 'react';
import { render } from '@testing-library/react';
import { ChartProvider, useTheme } from '@oceanbase/charts';

describe('ChartProvider theme', () => {
  it('default theme', () => {
    const Child = () => {
      const themeConfig = useTheme();
      expect(themeConfig.theme).toBe('light');
      expect(themeConfig.defaultColor).toBe('#4C96FF');
      return <div />;
    };
    render(
      <ChartProvider>
        <Child />
      </ChartProvider>
    );
  });

  it('light theme', () => {
    const Child = () => {
      const themeConfig = useTheme();
      expect(themeConfig.theme).toBe('light');
      expect(themeConfig.defaultColor).toBe('#4C96FF');
      return <div />;
    };
    render(
      <ChartProvider theme="light">
        <Child />
      </ChartProvider>
    );
  });

  it('dark theme', () => {
    const Child = () => {
      const themeConfig = useTheme();
      expect(themeConfig.theme).toBe('dark');
      expect(themeConfig.defaultColor).toBe('#4D97FF');
      return <div />;
    };
    render(
      <ChartProvider theme="dark">
        <Child />
      </ChartProvider>
    );
  });

  it('custom theme config', () => {
    const Child = () => {
      const themeConfig = useTheme();
      expect(themeConfig.theme).toBe('custom-theme');
      expect(themeConfig.defaultColor).toBe('#ff0000');
      expect(themeConfig.subColor).toBe('#00ff00');
      return <div />;
    };
    render(
      <ChartProvider
        theme={{ theme: 'custom-theme', defaultColor: '#ff0000', subColor: '#00ff00' }}
      >
        <Child />
      </ChartProvider>
    );
  });
});
