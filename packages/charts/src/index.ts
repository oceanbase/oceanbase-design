import './index.less';

export * from '@ant-design/charts';

export { version } from '../package.json';

export { default as Stat } from './Stat';
export type { StatConfig } from './Stat';

export { default as Line } from './Line';
export type { LineConfig } from './Line';

export { default as Area } from './Area';
export type { AreaConfig } from './Area';

export { default as Bar } from './Bar';
export type { BarConfig } from './Bar';

export { default as Column } from './Column';
export type { ColumnConfig } from './Column';

export { default as Histogram } from './Histogram';
export type { HistogramConfig } from './Histogram';

export { default as Pie } from './Pie';
export type { PieConfig } from './Pie';

export { default as DualAxes } from './DualAxes';
export type { DualAxesConfig } from './DualAxes';

export { default as Gauge } from './Gauge';
export type { GaugeConfig } from './Gauge';

export { default as Liquid } from './Liquid';
export type { LiquidConfig } from './Liquid';

export { default as TinyLine } from './Tiny/TinyLine';
export type { TinyLineConfig } from './Tiny/TinyLine';

export { default as TinyArea } from './Tiny/TinyArea';
export type { TinyAreaConfig } from './Tiny/TinyArea';

export { default as TinyColumn } from './Tiny/TinyColumn';
export type { TinyColumnConfig } from './Tiny/TinyColumn';

export { default as Progress } from './Tiny/Progress';
export type { ProgressConfig } from './Tiny/Progress';
export { default as Score } from './Score';
export type { ScoreConfig } from './Score';

export { default as ChartProvider } from './ChartProvider';
export type { ChartProviderProps } from './ChartProvider';

export { useTheme } from './theme';
export type { Theme, ThemeConfig } from './theme';
