# @oceanbase/charts 使用要点

## 定位

图表组件库，基于 `@ant-design/charts` 并封装 OceanBase 图表；依赖 `@oceanbase/util`。与 design 主题联动时需配合根节点 ConfigProvider 与 charts 的 ChartProvider。

## 导入约定

- **从 `@oceanbase/charts` 引入具体图表组件与 ChartProvider、useTheme**，类型一并从该包引入。

```tsx
// 推荐
import { Line, Pie, Column, ChartProvider, useTheme } from '@oceanbase/charts';
import type { LineConfig, PieConfig, ChartProviderProps, ThemeConfig } from '@oceanbase/charts';
```

## 图表组件与类型（示例）

| 类别 | 组件 | 类型 |
| --- | --- | --- |
| 常规 | Stat、Line、Area、Bar、Column、Histogram、Pie、DualAxes、Gauge、Liquid | 对应 \*Config |
| 迷你图 | TinyLine、TinyArea、TinyColumn、Progress | 对应 \*Config |
| 其他 | Score | ScoreConfig |
| 主题 | ChartProvider、useTheme | ChartProviderProps、ThemeConfig |

## 主题与 design 联动（约束与推荐）

- **同一应用内图表主题由单一 ChartProvider 控制**，避免多处设置冲突。
- 图表主题需与页面主题一致时：
  1. **根节点使用 design 的 ConfigProvider 包裹**（见 [design 概述](design/00-overview.md)）。
  2. 在图表使用处外层使用 charts 的 **ChartProvider**，传入 `theme="light" | "dark"`（可与 design 的 `theme.isDark` 联动）。

```tsx
import { ConfigProvider, theme as designTheme } from '@oceanbase/design';
import { ChartProvider, Line } from '@oceanbase/charts';

const App = () => {
  const { theme } = designTheme.useToken();
  const isDark = theme?.isDark ?? false;

  return (
    <ConfigProvider theme={{ isDark }}>
      <ChartProvider theme={isDark ? 'dark' : 'light'}>
        <Line data={lineData} xField="date" yField="value" />
      </ChartProvider>
    </ConfigProvider>
  );
};
```

## 使用场景简述

- **Stat**：单指标展示。
- **Line / Area / Bar / Column**：折线、面积、条形、柱形图。
- **Pie**：饼图；**DualAxes**：双轴图。
- **Gauge / Liquid**：仪表盘、水球图。
- **TinyLine / TinyArea / TinyColumn**：迷你图，适合表格内或卡片内小图。
- **Score**：评分/分数展示。

## 规范小结

- 与 [design 模块](design/index.md) 中的 ConfigProvider 配合使用，保证整站主题一致。
- 图表配置与数据格式参考 `@ant-design/charts` 文档，类型以 `@oceanbase/charts` 导出为准。
