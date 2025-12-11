const { isString, fromPairs, toLower } = require('lodash');
const { default: defaultTheme } = require('@oceanbase/design/lib/theme/default');

const token = defaultTheme.token;

const tokenMap = fromPairs(
  Object.keys(token)
    .filter(key =>
      // filter token by token key
      key.startsWith('color')
    )
    .filter(
      key =>
        // filter token by token value
        isString(token[key]) && !!token[key]
    )
    .map(key => {
      return [token[key], key];
    })
    // sort by token value and token key length
    .sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      }
      return a[1]?.length > b[1]?.length ? -1 : a[1]?.length < b[1]?.length ? 1 : 0;
    })
);

const TOKEN_MAP = {
  // obui 3.x style => token
  ...tokenMap,
  // antd style => token
  '#1677ff': 'colorInfo',
  '#1890ff': 'colorInfo',
  '#40a9ff': 'colorInfo',
  '#006aff': 'colorInfo',
  '#1843ff': 'colorInfo',
  '#597ef7': 'colorInfo',
  '#f7f9fb': 'colorInfoBg',
  '#91a9f8': 'colorInfoBg',
  '#e6f7ff': 'colorInfoBgHover',
  '#f3f9ff': 'colorInfoBgHover',
  '#e6f7ff': 'colorInfoBgHover',
  '#73d13d': 'colorSuccess',
  '#52c41a': 'colorSuccess',
  '#faad14': 'colorWarning',
  '#ffa940': 'colorWarning',
  '#fef6e7': 'colorWarningBg',
  '#fed59c': 'colorWarningBg',
  '#ff4d4f': 'colorError',
  '#f5222d': 'colorError',
  '#f8636b': 'colorError',
  '#f93939': 'colorError',
  '#eb4444': 'colorError',
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
  '#f3f6fc': 'colorBgLayout',
  'rgb(250,250,250)': 'colorBgLayout',
  '#ffffff': 'colorBgContainer',
  '#fff': 'colorBgContainer',
  'rgb(255 255 255 / 100%)': 'colorBgContainer',
  'rgba(0,0,0,0.88)': 'colorText',
  'rgba(0,0,0,0.85)': 'colorText',
  'rgba(0,0,0,0.65)': 'colorTextSecondary',
  'rgba(0,0,0,0.45)': 'colorTextTertiary',
  '#5c6b8a': 'colorTextSecondary',
  '#5C6B8A': 'colorTextSecondary',
  '#ced5e3': '@colorTextPlaceholder',
  'rgba(0,0,0,0.25)': 'colorTextQuaternary',
  'rgba(0,0,0,.85)': 'colorText',
  'rgba(0,0,0,.65)': 'colorTextSecondary',
  'rgba(0,0,0,.45)': 'colorTextTertiary',
  'rgba(0,0,0,.25)': 'colorTextQuaternary',
  'rgba(0,0,0,0.2)': 'colorFillQuaternary',
  'rgba(0,0,0,85%)': 'colorText',
  'rgba(0,0,0,65%)': 'colorTextSecondary',
  'rgba(0,0,0,45%)': 'colorTextTertiary',
  'rgba(0,0,0,25%)': 'colorTextQuaternary',
  'rgb(0 0 0 / 85%)': 'colorText',
  'rgb(0 0 0 / 65%)': 'colorTextSecondary',
  'rgb(0 0 0 / 45%)': 'colorTextTertiary',
  'rgb(0 0 0 / 25%)': 'colorTextQuaternary',
  '#000': 'colorText',
  '#000000': 'colorText',
  '#000000E0': 'colorText',
  '#000000d9': 'colorText',
  '#000000a6': 'colorTextSecondary',
  '#00000073': 'colorTextTertiary',
  '#00000040': 'colorTextQuaternary',
  '#0000000f': 'colorFillSecondary',
  '#00000009': 'colorFillTertiary',
  '#00000008': 'colorFillQuaternary',
  '#00000005': 'colorFillQuaternary',
  '#f5f5f5': 'colorFillQuaternary',
  'rgba(0,0,0,0.06)': 'colorFillSecondary',
  'rgba(0,0,0,0.04)': 'colorFillTertiary',
  'rgba(0,0,0,0.02)': 'colorFillQuaternary',
  'rgba(0,0,0,0.03)': 'colorFillQuaternary',
  '#f5f6fa': 'colorBgLayout',
  '#edeff2': 'colorBgLayout',
  // obui legacy style => token
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
  '#f8fafe': 'colorBgLayout',
  'rgba(140,140,140,0.1)': 'colorBgLayout',
  'rgb(240,242,245)': 'colorBgLayout',
  '#132039': 'colorText',
  '#364563': 'colorTextSecondary',
  '#8592ad': 'colorTextTertiary',
};

const TOKEN_MAP_KEYS = Object.keys(TOKEN_MAP).map(key => formatValue(key));

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

// 基于属性名和数值的 token 映射
const PROPERTY_TOKEN_MAP = {
  fontSize: {
    11: 'fontSizeSM',
    12: 'fontSizeSM',
    13: 'fontSize',
    14: 'fontSize',
    15: 'fontSizeLG',
    16: 'fontSizeLG',
  },
  fontWeight: {
    300: 'fontWeightWeak',
    400: 'fontWeight',
    500: 'fontWeightStrong',
    600: 'fontWeightStrong',
  },
  borderRadius: {
    2: 'borderRadiusSM',
    4: 'borderRadius',
    6: 'borderRadiusMD',
    8: 'borderRadiusLG',
  },
};

function propertyTokenParse(propertyName, value) {
  // 基于属性名和数值的 token 解析
  const propertyMap = PROPERTY_TOKEN_MAP[propertyName];
  if (!propertyMap) {
    return null;
  }

  const stringValue = String(value);
  // 提取数值部分（去掉单位）
  const numericValue = stringValue.replace(/[^\d.]/g, '');
  const token = propertyMap[numericValue];
  if (!token) {
    return null;
  }

  return {
    key: stringValue,
    token,
    formattedValue: stringValue,
    propertyName,
  };
}

module.exports = {
  TOKEN_MAP,
  TOKEN_MAP_KEYS,
  tokenParse,
  PROPERTY_TOKEN_MAP,
  propertyTokenParse,
  isLower,
};
