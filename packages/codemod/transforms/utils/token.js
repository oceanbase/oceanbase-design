const { toLower } = require('lodash');

const TOKEN_MAP = {
  // antd style => token
  '#1677ff': 'colorInfo',
  '#1890ff': 'colorInfo',
  '#73d13d': 'colorSuccess',
  '#52c41a': 'colorSuccess',
  '#faad14': 'colorWarning',
  '#ff4d4f': 'colorError',
  '#f5222d': 'colorError',
  '#f8636b': 'colorError',
  '#d9d9d9': 'colorBorder',
  '#bfbfbf': 'colorBorder',
  '#f0f2f5': 'colorBgLayout',
  '#fafafa': 'colorBgLayout',
  '#ffffff': 'colorBgContainer',
  '#fff': 'colorBgContainer',
  'rgba(0,0,0,0.85)': 'colorText',
  'rgba(0,0,0,0.65)': 'colorTextSecondary',
  'rgba(0,0,0,0.45)': 'colorTextTertiary',
  'rgba(0,0,0,0.25)': 'colorTextQuaternary',
  'rgba(0,0,0,.85)': 'colorText',
  'rgba(0,0,0,.65)': 'colorTextSecondary',
  'rgba(0,0,0,.45)': 'colorTextTertiary',
  'rgba(0,0,0,.25)': 'colorTextQuaternary',
  'rgba(0,0,0,0.2)': 'colorFillQuaternary',
  'rgba(0,0,0,0.04)': 'colorBgLayout',
  // obui style => token
  '#006aff': 'colorInfo',
  '#0ac185': 'colorSuccess',
  '#ffac33': 'colorWarning',
  '#ff9700': 'colorWarning',
  '#ff4b4b': 'colorError',
  '#ff1a1a': 'colorError',
  '#cdd5e4': 'colorBorder',
  '#f5f8fe': 'colorBgLayout',
  '#f5f7fa': 'colorBgLayout',
  '#132039': 'colorText',
  '#364563': 'colorTextSecondary',
  '#8592ad': 'colorTextTertiary',
  '#f8fafe': 'colorFillQuaternary',
  '#086fff': 'colorInfo',
  '#4dcca2': 'colorSuccess',
  '#fbba3a': 'colorWarning',
  '#fff1f0': 'colorErrorBg',
  '#ffa39e': 'colorErrorBorder',
  'rgba(24,144,255,0.1)': 'colorInfoBg',
  'rgba(82,196,26,0.1)': 'colorSuccessBg',
  'rgba(250,140,22,0.1)': 'colorWarningBg',
  'rgba(245,34,45,0.1)': 'colorErrorBg',
  'rgba(140,140,140,0.1)': 'colorBgLayout',
  'rgba(10,193,133,1)': 'colorSuccess',
  'rgba(95,149,255,0.10)': 'colorInfoBg',
  'rgba(95,149,255,0.1)': 'colorInfoBg',
  'rgba(95,149,255,1)': 'colorInfoBorder',
  'rgb(243,164,60)': 'colorWarning',
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
