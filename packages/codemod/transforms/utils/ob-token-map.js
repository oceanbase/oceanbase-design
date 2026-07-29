const { tokenParse } = require('./token');
const { default: defaultTheme } = require('@oceanbase/design/lib/theme/default');
const { genObToken } = require('@oceanbase/design/lib/theme/obToken');
const { obTokenMeta } = require('@oceanbase/design/lib/theme/obTokenMeta');

/**
 * kebab-case meta name → camelCase obToken key
 * e.g. color-bg-default → colorBgDefault, gray-1 → gray1
 */
function metaNameToCamel(name) {
  return name.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
}

/**
 * camelCase → kebab-case fallback
 */
function camelToKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .toLowerCase();
}

// obToken key → CSS variable name (without --prefix-)
const OB_TOKEN_CSS_NAMES = {};
obTokenMeta.forEach(({ name }) => {
  OB_TOKEN_CSS_NAMES[metaNameToCamel(name)] = name;
});

// antd design token name → preferred obToken key (default context)
const ANT_TOKEN_TO_OB_DEFAULT = {
  colorText: 'colorTextDefault',
  colorTextSecondary: 'colorTextLabel',
  colorTextTertiary: 'colorTextDescription',
  colorTextQuaternary: 'colorTextDisabled',
  colorTextHeading: 'colorTextDefault',
  colorTextLabel: 'colorTextLabel',
  colorTextDescription: 'colorTextDescription',
  colorTextDisabled: 'colorTextDisabled',
  colorTextPlaceholder: 'colorTextDisabled',
  colorBgContainer: 'colorBgDefault',
  colorBgLayout: 'colorBgPrimary',
  colorBgElevated: 'colorBgDefault',
  colorBgSpotlight: 'colorBgSecondary',
  colorBorder: 'colorBorderDefault',
  colorBorderSecondary: 'colorBorderContainer',
  colorSplit: 'colorDivider',
  colorInfo: 'colorTextLink',
  colorSuccess: 'colorTextSuccess',
  colorWarning: 'colorTextWarning',
  colorError: 'colorTextError',
  colorInfoBg: 'colorBgInfo',
  colorSuccessBg: 'colorBgSuccess',
  colorWarningBg: 'colorBgWarning',
  colorErrorBg: 'colorBgError',
  colorInfoBorder: 'colorBorderFocus',
  colorSuccessBorder: 'colorBorderSuccess',
  colorWarningBorder: 'colorBorderWarning',
  colorErrorBorder: 'colorBorderError',
  colorPrimary: 'colorTextLink',
  colorPrimaryBg: 'colorBgInfo',
  colorPrimaryBorder: 'colorBorderFocus',
  colorPrimaryHover: 'colorTextLink',
  colorPrimaryActive: 'colorTextLink',
  colorLink: 'colorTextLink',
  colorLinkHover: 'colorTextLink',
  colorLinkActive: 'colorTextLink',
  colorFill: 'colorBgSecondary',
  colorFillSecondary: 'colorBgHoverSecondary',
  colorFillTertiary: 'colorBgFocus',
  colorFillQuaternary: 'colorBgPrimary',
  colorFillContent: 'colorBgSecondary',
  colorFillAlter: 'colorBgPrimary',
  colorIcon: 'colorIconDefault',
  colorIconHover: 'colorIconHover',
  fontSize: 'fontSize325',
  fontSizeSM: 'fontSize300',
  fontSizeLG: 'fontSize400',
  fontSizeXL: 'fontSize400',
  fontSizeHeading1: 'fontSize500',
  fontSizeHeading2: 'fontSize500',
  fontSizeHeading3: 'fontSize450',
  fontSizeHeading4: 'fontSize400',
  fontSizeHeading5: 'fontSize325',
  fontWeight: 'fontWeightMd',
  fontWeightWeak: 'fontWeightSm',
  fontWeightStrong: 'fontWeightLg',
  borderRadius: 'radiusSm',
  borderRadiusSM: 'radiusSm',
  borderRadiusMD: 'radiusMd',
  borderRadiusLG: 'radiusLg',
  borderRadiusXS: 'radiusSm',
  lineHeight: 'fontLineHeight500',
  boxShadow: 'shadow2',
  boxShadowSecondary: 'shadow2',
  boxShadowTertiary: 'shadow2',
  padding: 'space400',
  paddingSM: 'space300',
  paddingLG: 'space500',
  paddingXS: 'space200',
  paddingXXS: 'space100',
  margin: 'space400',
  marginSM: 'space300',
  marginLG: 'space500',
  marginXS: 'space200',
  marginXXS: 'space100',
  controlHeight: 'space600',
  controlHeightSM: 'space500',
  controlHeightLG: 'space800',
  white: 'white',
  black: 'black',
};

// Property-context overrides for antd token → obToken
const PROPERTY_ANT_TOKEN_TO_OB = {
  color: {
    colorInfo: 'colorTextLink',
    colorSuccess: 'colorTextSuccess',
    colorWarning: 'colorTextWarning',
    colorError: 'colorTextError',
    colorPrimary: 'colorTextLink',
    colorBgContainer: 'colorTextInverse',
    colorBgLayout: 'colorTextDefault',
  },
  background: {
    colorText: 'colorBgDefault',
    colorTextSecondary: 'colorBgSecondary',
    colorTextTertiary: 'colorBgHoverSecondary',
    colorInfo: 'colorBgInfo',
    colorSuccess: 'colorTextSuccess',
    colorWarning: 'colorTextWarning',
    colorError: 'colorTextError',
    colorBgContainer: 'colorBgDefault',
    colorBgLayout: 'colorBgPrimary',
  },
  backgroundcolor: {
    colorText: 'colorBgDefault',
    colorTextSecondary: 'colorBgSecondary',
    colorTextTertiary: 'colorBgHoverSecondary',
    colorInfo: 'colorBgInfo',
    colorSuccess: 'colorTextSuccess',
    colorWarning: 'colorTextWarning',
    colorError: 'colorTextError',
    colorErrorBg: 'colorBgError',
    colorBgContainer: 'colorBgDefault',
    colorBgLayout: 'colorBgPrimary',
  },
  border: {
    colorBorder: 'colorBorderDefault',
    colorBgLayout: 'colorBorderDefault',
    colorBgContainer: 'colorBorderDefault',
  },
  bordercolor: {
    colorBorder: 'colorBorderDefault',
    colorBgLayout: 'colorBorderDefault',
    colorBgContainer: 'colorBorderDefault',
  },
  fontsize: {
    fontSize: 'fontSize325',
    fontSizeSM: 'fontSize300',
    fontSizeLG: 'fontSize400',
  },
  fontweight: {
    fontWeight: 'fontWeightMd',
    fontWeightWeak: 'fontWeightSm',
    fontWeightStrong: 'fontWeightLg',
  },
  borderradius: {
    borderRadius: 'radiusSm',
    borderRadiusSM: 'radiusSm',
    borderRadiusMD: 'radiusMd',
    borderRadiusLG: 'radiusLg',
  },
};

// ob property token → obToken (fontSize, borderRadius, fontWeight from numeric values)
const OB_PROPERTY_TOKEN_MAP = {
  fontSize: {
    11: 'fontSize300',
    12: 'fontSize300',
    13: 'fontSize325',
    14: 'fontSize325',
    15: 'fontSize400',
    16: 'fontSize400',
  },
  fontWeight: {
    300: 'fontWeightSm',
    400: 'fontWeightMd',
    500: 'fontWeightLg',
    600: 'fontWeightLg',
  },
  borderRadius: {
    2: 'radiusSm',
    4: 'radiusSm',
    6: 'radiusMd',
    8: 'radiusLg',
  },
};

function normalizePropertyName(propertyName) {
  if (!propertyName) {
    return '';
  }
  return String(propertyName)
    .replace(/-([a-z])/g, (_, c) => c.toUpperCase())
    .toLowerCase();
}

function getObTokenCssName(obTokenKey) {
  return OB_TOKEN_CSS_NAMES[obTokenKey] || camelToKebab(obTokenKey);
}

function antdTokenToObToken(antdToken, options = {}) {
  if (!antdToken) {
    return null;
  }

  const propertyKey = normalizePropertyName(options.propertyName);
  const propertyMap = PROPERTY_ANT_TOKEN_TO_OB[propertyKey];
  if (propertyMap && propertyMap[antdToken]) {
    return propertyMap[antdToken];
  }

  if (ANT_TOKEN_TO_OB_DEFAULT[antdToken]) {
    return ANT_TOKEN_TO_OB_DEFAULT[antdToken];
  }

  // Direct obToken keys (gray1, blue4, etc.)
  const obToken = genObToken(defaultTheme.token);
  if (Object.prototype.hasOwnProperty.call(obToken, antdToken)) {
    return antdToken;
  }

  console.warn(
    `[codemod] No obToken mapping for antd token "${antdToken}"${
      options.propertyName ? ` (property: ${options.propertyName})` : ''
    }`
  );
  return null;
}

function obTokenToCssVar(obTokenKey, prefix = 'ob') {
  if (!obTokenKey) {
    return null;
  }
  const cssName = getObTokenCssName(obTokenKey);
  return `var(--${prefix}-${cssName})`;
}

function obPropertyTokenParse(propertyName, value) {
  const propertyMap = OB_PROPERTY_TOKEN_MAP[propertyName];
  if (!propertyMap) {
    return null;
  }
  const numericValue = String(value).replace(/[^\d.]/g, '');
  const obToken = propertyMap[numericValue];
  if (!obToken) {
    return null;
  }
  return { obToken, propertyName, formattedValue: String(value) };
}

function hexToObToken(value, options = {}) {
  const propertyResult = obPropertyTokenParse(options.propertyName, value);
  if (propertyResult) {
    return propertyResult.obToken;
  }

  const { token: antdToken } = tokenParse(value);
  if (!antdToken) {
    return null;
  }

  // Handle invalid token from legacy map (e.g. @colorTextPlaceholder)
  const cleanToken = antdToken.startsWith('@') ? antdToken.slice(1) : antdToken;
  return antdTokenToObToken(cleanToken, options);
}

function antdVarToObCssVar(varName, options = {}) {
  const obTokenKey = antdTokenToObToken(varName, options);
  if (!obTokenKey) {
    return null;
  }
  return getObTokenCssName(obTokenKey);
}

function antdCssVarToObCssVar(cssVarName, fromPrefix = 'ant', toPrefix = 'ob', options = {}) {
  // --ant-color-text → colorText → ob mapping
  const match = cssVarName.match(new RegExp(`^--${fromPrefix}-(.+)$`));
  if (!match) {
    return null;
  }
  const kebabName = match[1];
  // kebab to camel: color-text → colorText
  const antdLikeName = kebabName.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
  const obCssName = antdVarToObCssVar(antdLikeName, options);
  if (!obCssName) {
    return null;
  }
  return `--${toPrefix}-${obCssName}`;
}

function transformCssVarValue(value, options = {}) {
  const { fromPrefix = 'ant', toPrefix = 'ob', propertyName } = options;
  if (!value || typeof value !== 'string') {
    return value;
  }

  const cssVarRegex = /var\(\s*--([a-z0-9-]+)\s*\)/g;
  let changed = false;
  const result = value.replace(cssVarRegex, (match, varName) => {
    const fullName = `--${varName}`;
    if (!fullName.startsWith(`--${fromPrefix}-`)) {
      return match;
    }
    const obVar = antdCssVarToObCssVar(fullName, fromPrefix, toPrefix, { propertyName });
    if (obVar) {
      changed = true;
      return `var(${obVar})`;
    }
    // Fallback: only change prefix
    if (fromPrefix !== toPrefix) {
      changed = true;
      return `var(--${toPrefix}-${varName.slice(fromPrefix.length + 1)})`;
    }
    return match;
  });

  return changed ? result : value;
}

module.exports = {
  metaNameToCamel,
  camelToKebab,
  getObTokenCssName,
  antdTokenToObToken,
  obTokenToCssVar,
  hexToObToken,
  antdVarToObCssVar,
  antdCssVarToObCssVar,
  transformCssVarValue,
  ANT_TOKEN_TO_OB_DEFAULT,
  OB_TOKEN_CSS_NAMES,
  OB_PROPERTY_TOKEN_MAP,
  obPropertyTokenParse,
};
