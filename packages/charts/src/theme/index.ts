import { G2 } from '@ant-design/charts';

const { registerTheme } = G2;

// 分类色板
const COLORS_10 = [
  '#4C96FF',
  '#53D3A9',
  '#FFBE5F',
  '#5BC4FF',
  '#809CD1',
  '#A881FF',
  '#FF9F9F',
  '#6875FF',
  '#AEDB43',
  '#FF7ECB',
];

// 折线宽度
const LINE_WIDTH = 1.5;

// 刻度线、坐标轴线、网格线颜色
const AXIS_LINE_COLOR = '#E2E8F3';

// 刻度线、坐标轴线、网格线宽度
const AXIS_LINE_WIDTH = 0.5;

export const theme = {
  isDark: false,
  // 主题色
  defaultColor: COLORS_10[0],
  // 分类色，分类个数小于 10 时使用
  colors10: COLORS_10,
  // 语义色
  semanticGreen: '#53D3A9',
  semanticYellow: '#FFAC33',
  semanticRed: '#FF4B4B',

  /* 以下为自定义主题 token */
  // 语义色的渐变色，常用于面积图等区域着色
  semanticGreenGradient: 'l(270) 0:rgba(10,193,133,0) 1:rgba(10,193,133,0.2)',
  semanticRedGradient: 'l(270) 0:rgba(255,75,75,0) 1:rgba(255,75,75,0.2)',
  // 条形宽度
  barWidth: 12,
  barBackgroundColor: AXIS_LINE_COLOR,
  // 柱子宽度
  columnWidth: 16,

  styleSheet: {
    /** 默认颜色 */
    brandColor: COLORS_10[0],
    /** 坐标轴线颜色 */
    axisLineBorderColor: AXIS_LINE_COLOR,
    /** 坐标轴线粗细 */
    axisLineBorder: AXIS_LINE_WIDTH,

    /** 坐标轴刻度线颜色 */
    axisTickLineBorderColor: AXIS_LINE_COLOR,
    /** 坐标轴刻度线粗细 */
    axisTickLineBorder: AXIS_LINE_WIDTH,

    /** 坐标轴次刻度线颜色 */
    axisSubTickLineBorderColor: AXIS_LINE_COLOR,
    /** 坐标轴次刻度线粗细 */
    axisSubTickLineBorder: AXIS_LINE_WIDTH,

    /** 坐标轴刻度文本颜色 */
    axisLabelFillColor: '#8592AD',

    /** 坐标轴网格线颜色 */
    axisGridBorderColor: AXIS_LINE_COLOR,
    /** 坐标轴网格线粗细 */
    axisGridBorder: AXIS_LINE_WIDTH,

    // -------------------- Legend 图例 --------------------
    /** 图例与图表绘图区域的偏移距离  */
    legendPadding: [16, 16, 16, 16],
    /** 水平布局的图例与绘图区域偏移距离 */
    legendHorizontalPadding: [16, 0, 0, 0],
    /** 垂直布局的图例与绘图区域偏移距离 */
    legendVerticalPadding: [0, 16, 0, 16],

    /** 图例项文本颜色 */
    legendItemNameFillColor: '#5C6B8A',

    // -------------------- Geometry 图形样式--------------------
    /** 线图粗细 */
    lineBorder: LINE_WIDTH,

    /** 线图 Active 状态下粗细 */
    lineActiveBorder: 2.5,

    /** 线图 selected 状态下粗细 */
    lineSelectedBorder: 2.5,

    /** 线图 inactive 状态下透明度 */
    lineInactiveBorderOpacity: 0.3,
  },
};

// 注册主题
registerTheme('ob', theme);
