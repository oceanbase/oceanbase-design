import { G2 } from '@ant-design/charts';

const { registerTheme } = G2;

// 分类色板
const COLORS_10 = [
  '#3D88F2',
  '#41D9A6',
  '#FAC357',
  '#547199',
  '#79BFF2',
  '#4D997F',
  '#88CC66',
  '#B3749E',
  '#E6987F',
  '#8C675B',
];

const COLORS_20 = [
  '#3D88F2',
  '#8BB8F7',
  '#41D9A6',
  '#8DE8CA',
  '#FAC357',
  '#FCDB9A',
  '#547199',
  '#98AAC2',
  '#79BFF2',
  '#AFD9F7',
  '#4D997F',
  '#94C2B3',
  '#88CC66',
  '#B7E0A3',
  '#B3749E',
  '#D1ACC5',
  '#E6987F',
  '#F0C1B2',
  '#8C675B',
  '#BAA49D',
];

const BLACK_COLORS = {
  100: '#000000',
  85: '#5C6B8A',
  45: '#8592AD',
  15: '#E2E8F3',
};

const WHITE_COLORS = {
  100: '#FFFFFF',
  95: '#F2F2F2',
  85: '#D9D9D9',
  65: '#A6A6A6',
  45: '#737373',
  25: '#404040',
  15: '#262626',
  6: '#0F0F0F',
};

// 折线宽度
const LINE_WIDTH = 1.5;

// 刻度线、坐标轴线、网格线颜色
const AXIS_LINE_COLOR = BLACK_COLORS[15];

// 刻度线、坐标轴线、网格线宽度
const AXIS_LINE_WIDTH = 0.5;

const lightTheme = {
  theme: 'light',
  // 主题色
  defaultColor: COLORS_10[0],
  // 分类色
  colors10: COLORS_10,
  colors20: COLORS_20,
  // 背景色
  backgroundColor: '#ffffff',
  // 图表辅助色
  subColor: '#F8FAFE',
  // 语义色
  semanticBlue: '#3983ED',
  semanticGreen: '#42C79B',
  semanticYellow: '#F9B048',
  semanticOrange: '#F97A3B',
  semanticRed: '#E5363B',
  semanticDarkRed: '#89273F',
  semanticGray: '#ABB8D5',

  /* 以下为自定义主题 token */
  // 语义色的渐变色，常用于面积图等区域着色
  semanticBlueGradient: 'l(270) 0:rgba(57,131,237,0) 1:rgba(57,131,237,0.2)',
  semanticGreenGradient: 'l(270) 0:rgba(66,199,155,0) 1:rgba(66,199,155,0.2)',
  semanticYellowGradient: 'l(270) 0:rgba(249,176,72,0) 1:rgba(249,176,72,0.2)',
  semanticOrangeGradient: 'l(270) 0:rgba(249,122,59,0) 1:rgba(249,122,59,0.2)',
  semanticRedGradient: 'l(270) 0:rgba(229,54,59,0) 1:rgba(229,54,59,0.2)',
  semanticDarkRedGradient: 'l(270) 0:rgba(137,39,63,0) 1:rgba(137,39,63,0.2)',
  semanticGrayGradient: 'l(270) 0:rgba(171,184,213,0) 1:rgba(171,184,213,0.2)',
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
    axisLabelFillColor: BLACK_COLORS[45],

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
    legendItemNameFillColor: BLACK_COLORS[85],

    // -------------------- Geometry 图形样式--------------------

    /** 线图粗细 */
    lineBorder: LINE_WIDTH,

    /** 线图 Active 状态下粗细 */
    lineActiveBorder: 2.5,

    /** 线图 selected 状态下粗细 */
    lineSelectedBorder: 2.5,

    /** 线图 inactive 状态下透明度 */
    lineInactiveBorderOpacity: 0.3,

    // -------------------- Geometry labels --------------------
    /** label 文本颜色 */
    labelFillColor: BLACK_COLORS[85],

    // -------------------- Annotation，图形标注 --------------------
    /** text 图形标注文本颜色 */
    annotationTextFillColor: BLACK_COLORS[85],
  },
};

// 注册浅色主题
registerTheme('light', lightTheme);

export default lightTheme;
