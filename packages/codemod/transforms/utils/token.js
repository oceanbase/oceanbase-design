const { toLower } = require('lodash');

const TOKEN_MAP = {
  // antd style => token
  '#1677ff': 'colorInfo',
  '#1890ff': 'colorInfo',
  '#73d13d': 'colorSuccess',
  '#52c41a': 'colorSuccess',
  '#faad14': 'colorWarning',
  '#ff4d4f': 'colorError',
  '#F5222D': 'colorError',
  '#F8636B': 'colorError',
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
  'rgba(0,0,0,0.2)': 'colorFillQuaternary',
  'rgba(0,0,0,0.04)': 'colorBgLayout',
  // obui style => token
  '#006aff': 'colorInfo',
  '#0ac185': 'colorSuccess',
  '#ffac33': 'colorWarning',
  '#ff4b4b': 'colorError',
  '#CDD5E4': 'colorBorder',
  '#F5F8FE': 'colorBgLayout',
  '#132039': 'colorText',
  '#364563': 'colorTextSecondary',
  '#8592AD': 'colorTextTertiary',
  '#F8FAFE': 'colorFillQuaternary',
};

const TOKEN_MAP_KEYS = Object.keys(TOKEN_MAP).map(item => formatValue(item));

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
};
