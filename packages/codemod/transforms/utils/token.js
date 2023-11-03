const { toLower } = require('lodash');

const TOKEN_MAP = {
  // antd style => token
  '#1677ff': 'colorInfo',
  '#1890ff': 'colorInfo',
  '#40a9ff': 'colorInfo',
  '#f7f9fb': 'colorInfoBg',
  '#e6f7ff': 'colorInfoBgHover',
  '#f3f9ff': 'colorInfoBgHover',
  '#e6f7ff': 'colorInfoBgHover',
  '#73d13d': 'colorSuccess',
  '#52c41a': 'colorSuccess',
  '#faad14': 'colorWarning',
  '#fef6e7': 'colorWarningBg',
  '#ff4d4f': 'colorError',
  '#f5222d': 'colorError',
  '#f8636b': 'colorError',
  '#d9d9d9': 'colorBorder',
  '#bfbfbf': 'colorBorder',
  '#e8e8e8': 'colorBorder',
  '#f0f0f0': 'colorBorder',
  '#dadada': 'colorBorder',
  'rgba(217,217,217,1)': 'colorBorder',
  'rgba(217,217,217,1.0)': 'colorBorder',
  'rgba(217,217,217)': 'colorBorder',
  '#f0f2f5': 'colorBgLayout',
  '#fafafa': 'colorBgLayout',
  '#f7f8fc': 'colorBgLayout',
  '#ffffff': 'colorBgContainer',
  '#fff': 'colorBgContainer',
  'rgba(0,0,0,0.85)': 'colorText',
  'rgba(0,0,0,0.65)': 'colorTextSecondary',
  'rgba(0,0,0,0.45)': 'colorTextTertiary',
  '#5c6b8a': 'colorTextTertiary',
  'rgba(0,0,0,0.25)': 'colorTextQuaternary',
  'rgba(0,0,0,.85)': 'colorText',
  'rgba(0,0,0,.65)': 'colorTextSecondary',
  'rgba(0,0,0,.45)': 'colorTextTertiary',
  'rgba(0,0,0,.25)': 'colorTextQuaternary',
  'rgba(0,0,0,0.2)': 'colorFillQuaternary',
  '#00000073': 'colorTextDescription',
  '#f5f5f5': 'colorFillQuaternary',
  'rgba(0,0,0,0.02)': 'colorBgLayout',
  'rgba(0,0,0,0.04)': 'colorBgLayout',
  '#f5f6fa': 'colorBgLayout',
  '#edeff2': 'colorBgLayout',
  // obui style => token
  '#006aff': 'colorInfo',
  '#086fff': 'colorInfo',
  'rgba(24,144,255,0.1)': 'colorInfoBg',
  'rgba(95,149,255,0.10)': 'colorInfoBg',
  'rgba(95,149,255,0.1)': 'colorInfoBg',
  'rgba(95,149,255,1)': 'colorInfoBorder',
  '#0ac185': 'colorSuccess',
  '#4dcca2': 'colorSuccess',
  'rgba(10,193,133,1)': 'colorSuccess',
  'rgba(82,196,26,0.1)': 'colorSuccessBg',
  '#ffac33': 'colorWarning',
  '#ff9700': 'colorWarning',
  '#fbba3a': 'colorWarning',
  'rgb(243,164,60)': 'colorWarning',
  'rgba(250,140,22,0.1)': 'colorWarningBg',
  '#ff4b4b': 'colorError',
  '#ff1a1a': 'colorError',
  '#fff1f0': 'colorErrorBg',
  'rgba(245,34,45,0.1)': 'colorErrorBg',
  '#ffa39e': 'colorErrorBorder',
  '#cdd5e4': 'colorBorder',
  '#f5f8fe': 'colorBgLayout',
  '#f5f7fa': 'colorBgLayout',
  'rgba(140,140,140,0.1)': 'colorBgLayout',
  '#132039': 'colorText',
  '#364563': 'colorTextSecondary',
  '#8592ad': 'colorTextTertiary',
  '#f8fafe': 'colorFillQuaternary',
};

const TOKEN_MAP_KEYS = Object.keys(TOKEN_MAP);

function isLower(str) {
  return toLower(str) === str;
}

function customTrim(str) {
  return str?.replace(/(\s)*([,\(\)])(\s)*/g, '$2');
}

function formatValue(value) {
  return customTrim(toLower(value));
}

function tokenParse(value) {
  const formattedValue = formatValue(value);
  const key = TOKEN_MAP_KEYS.find(
    item =>
      formattedValue.endsWith(item) ||
      formattedValue.includes(`${item} `) ||
      formattedValue.includes(`${item}, `) ||
      formattedValue.includes(`${item},`)
  );
  return {
    key,
    token: TOKEN_MAP[key],
    formattedValue,
  };
}

module.exports = {
  TOKEN_MAP,
  TOKEN_MAP_KEYS,
  tokenParse,
  isLower,
};
