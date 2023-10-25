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
  '#fff': 'colorBgContainer',
  '#ffffff': 'colorBgContainer',
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

function trimAll(str) {
  return str?.replace(/(\s)*/g, '');
}

function formatValue(value) {
  return trimAll(toLower(value));
}

module.exports = {
  TOKEN_MAP,
  trimAll,
  formatValue,
};
