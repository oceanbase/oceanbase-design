---
title: 主题使用
order: 9
group: 可视化图表
---

OceanBase Charts 的设计体系遵循 AntV 设计规范，并在此基础上扩展出了很多具备 OceanBase 产品风格的设计规范模式，包括但不限于全局样式（色板、圆角、边框）和特定图表的视觉定制，以传递 OceanBase 科技、活力、专注和关怀的品牌特点。

## 使用主题配置

```tsx | pure
import { ChartProvider, useTheme } from '@oceanbase/charts';

export default () {
  const themeConfig = useTheme();
  // 主题色
  console.log(theme.defaultColor);
  // 折线图线宽
  console.log(theme.styleSheet.lineBorder);
  return (
    <ChartProvider theme="dark">
      {...}
    </ChartProvider>
  );
};
```

- 主题的全量 Token 可参考 https://github.com/oceanbase/charts/blob/master/src/theme/index.ts#L29 。
