---
title: Theme Usage
order: 9
group: Charts
---

OceanBase Charts follows the AntV design specification and extends it with OceanBase product-style design patterns, including but not limited to global styles (color palette, radius, border) and visual customization of specific charts, to convey OceanBase's brand characteristics of technology, vitality, focus, and care.

## Theme Configuration

```tsx | pure
import { ChartProvider, useTheme } from '@oceanbase/charts';

export default () {
  // Get theme config
  const themeConfig = useTheme();
  // Theme color
  console.log(themeConfig.defaultColor);
  // Line chart line width
  console.log(themeConfig.styleSheet.lineBorder);
  // Set theme
  return (
    <>
      <ChartProvider theme="light">
        {...}
      </ChartProvider>
      <ChartProvider theme="dark">
        {...}
      </ChartProvider>
      <ChartProvider theme={{ defaultColor: '#ff0000', subColor: '#00ff00' }}>
        {...}
      </ChartProvider>
    </>
  );
};
```

- For full theme tokens, see https://github.com/oceanbase/charts/blob/master/src/theme/index.ts#L29 .
