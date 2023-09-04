import { G2 } from '@ant-design/charts';
import { merge } from 'lodash';
import lightTheme from './light';

const { registerTheme } = G2;

// 分类色板
const COLORS_10 = [
  '#4D97FF',
  '#55D3A9',
  '#FFC061',
  '#5CC3FF',
  '#809CD1',
  '#A880FF',
  '#FF9E9E',
  '#6673FF',
  '#ADDB43',
  '#FF80CC',
];

const BLACK_COLORS = {
  100: '#000000',
  95: '#0D0D0D',
  85: '#262626',
  65: '#595959',
  45: '#8C8C8C',
  25: '#BFBFBF',
  15: '#D9D9D9',
  6: '#F0F0F0',
};

const WHITE_COLORS = {
  100: '#FFFFFF',
  85: 'rgba(255, 255, 255, 0.85)',
  65: 'rgba(255, 255, 255, 0.65)',
  25: 'rgba(255, 255, 255, 0.25)',
};

// 刻度线、坐标轴线、网格线颜色
const AXIS_LINE_COLOR = WHITE_COLORS[25];

const darkTheme = merge({}, lightTheme, {
  theme: 'dark',
  // 主题色
  defaultColor: COLORS_10[0],
  // 分类色，分类个数小于 10 时使用
  colors10: COLORS_10,
  // 背景色
  backgroundColor: '#141414',
  // 图表辅助色
  subColor: '#424242',
  // 语义色
  semanticBlue: COLORS_10[0],
  semanticGreen: '#2CAA80',
  semanticYellow: '#CC7A00',
  semanticRed: '#B30000',

  /* 以下为自定义主题 token */
  // 语义色的渐变色，常用于面积图等区域着色
  semanticBlueGradient: 'l(270) 0:rgba(77,151,255,0) 1:rgba(77,151,255,0.8)',
  semanticGreenGradient: 'l(270) 0:rgba(44,170,128,0) 1:rgba(44,170,128,0.8)',
  semanticYellowGradient: 'l(270) 0:rgba(204,122,0,0) 1:rgba(204,122,0,0.8)',
  semanticRedGradient: 'l(270) 0:rgba(179,0,0,0) 1:rgba(179,0,0,0.8)',

  barBackgroundColor: AXIS_LINE_COLOR,

  components: {
    tooltip: {
      domStyles: {
        'g2-tooltip': {
          backgroundColor: '#424242',
          color: WHITE_COLORS[85],
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
        },
      },
    },
    annotation: {
      text: {
        style: {
          stroke: '#ffffff',
        },
      },
    },
  },

  geometries: {
    interval: {
      // 适用于 Column、Bar 和 Pie 等图表
      rect: {
        active: {
          style: {
            stroke: lightTheme.backgroundColor,
          },
        },
        selected: {
          style: {
            stroke: lightTheme.backgroundColor,
          },
        },
      },
    },
  },

  styleSheet: {
    /** 默认颜色 */
    brandColor: COLORS_10[0],
    /** 坐标轴线颜色 */
    axisLineBorderColor: AXIS_LINE_COLOR,

    /** 坐标轴刻度线颜色 */
    axisTickLineBorderColor: AXIS_LINE_COLOR,

    /** 坐标轴次刻度线颜色 */
    axisSubTickLineBorderColor: AXIS_LINE_COLOR,

    /** 坐标轴刻度文本颜色 */
    axisLabelFillColor: WHITE_COLORS[65],

    /** 坐标轴网格线颜色 */
    axisGridBorderColor: AXIS_LINE_COLOR,

    /** 图例项文本颜色 */
    legendItemNameFillColor: WHITE_COLORS[85],

    // -------------------- Geometry 图形样式 --------------------

    // -------------------- Geometry labels --------------------

    /** label 文本颜色 */
    labelFillColor: WHITE_COLORS[85],

    // -------------------- Annotation，图形标注 --------------------
    /** text 图形标注文本颜色 */
    annotationTextFillColor: WHITE_COLORS[85],
  },
}) as typeof lightTheme;

// 注册暗色主题
registerTheme('dark', darkTheme);

export default darkTheme;
