const { toLower } = require('lodash');

const TOKEN_MAP = {
  // antd fixed style => antd v5 token
  '#f0f2f5': 'colorBgLayout',
  '#fafafa': 'colorBgLayout',
  '#fff': 'colorBgContainer',
  '#ffffff': 'colorBgContainer',
  '#1890ff': 'colorInfo',
  '#52c41a': 'colorSuccess',
  '#73d13d': 'colorSuccess',
  '#faad14': 'colorWarning',
  '#ff4d4f': 'colorError',
  '#F5222D': 'colorError',
  '#F8636B': 'colorError',
  '#d9d9d9': 'colorBorder',
  '#bfbfbf': 'colorBorder',
  'rgba(0,0,0,0.85)': 'colorText',
  'rgba(0,0,0,0.65)': 'colorTextSecondary',
  'rgba(0,0,0,0.45)': 'colorTextTertiary',
  'rgba(0,0,0,0.25)': 'colorTextQuaternary',
  'rgba(0,0,0,0.2)': 'colorFillQuaternary',
  'rgba(0,0,0,0.04)': 'colorBgLayout',
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
