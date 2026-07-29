const { tokenParse } = require('./token');
const {
  hexToObToken,
  antdVarToObCssVar,
  transformCssVarValue,
  camelToKebab,
  getObTokenCssName,
} = require('./ob-token-map');

const COLOR_REGEX = /rgba?\([^)]+\)|#[0-9a-fA-F]{3,8}|rgb\([^)]+\)|hsl\([^)]+\)|hsla?\([^)]+\)/g;

function toCssVar(prefix, cssName) {
  return `var(--${prefix}-${cssName})`;
}

function resolveVarName(varName, prefix, propertyName, knownTokens, options = {}) {
  if (!knownTokens.includes(varName)) {
    return null;
  }
  if (options.useSemanticOb !== false && prefix === 'ob') {
    return antdVarToObCssVar(varName, { propertyName });
  }
  return camelToKebab(varName);
}

function transformHardcodedValue(value, prefix, propertyName, options = {}) {
  const obTokenKey = hexToObToken(value, { propertyName });
  if (obTokenKey) {
    const cssName =
      options.useSemanticOb !== false && prefix === 'ob'
        ? getObTokenCssName(obTokenKey)
        : camelToKebab(obTokenKey);
    return toCssVar(prefix, cssName);
  }
  return null;
}

function transformStyleValue(value, prefix, propertyName, knownTokens, options = {}) {
  if (!value || typeof value !== 'string') {
    return value;
  }

  let result = value;
  let changed = false;

  const cssVarResult = transformCssVarValue(result, {
    fromPrefix: 'ant',
    toPrefix: prefix,
    propertyName,
  });
  if (cssVarResult !== result) {
    result = cssVarResult;
    changed = true;
  }

  const varPattern =
    options.varPrefix === '$' ? /\$([a-zA-Z][a-zA-Z0-9]*)/g : /@\{?([a-zA-Z][a-zA-Z0-9]*)\}?/g;
  result = result.replace(varPattern, (match, varName) => {
    const cssName = resolveVarName(varName, prefix, propertyName, knownTokens, options);
    if (cssName) {
      changed = true;
      return toCssVar(prefix, cssName);
    }
    return match;
  });

  const isCompositeValue = result.includes(',') || COLOR_REGEX.test(result) || /\d+px/.test(result);

  if (isCompositeValue) {
    const colorMatches = result.match(COLOR_REGEX);
    if (colorMatches) {
      colorMatches.forEach(match => {
        const replacement = transformHardcodedValue(match, prefix, propertyName, options);
        if (replacement) {
          result = result.replace(match, replacement);
          changed = true;
        }
      });
    }

    const numericWithUnit = result.match(/\b(\d+(?:\.\d+)?)(px)\b/g);
    if (numericWithUnit && propertyName) {
      numericWithUnit.forEach(match => {
        const replacement = transformHardcodedValue(match, prefix, propertyName, options);
        if (replacement) {
          result = result.replace(match, replacement);
          changed = true;
        }
      });
    }
  } else {
    const replacement = transformHardcodedValue(result, prefix, propertyName, options);
    if (replacement) {
      result = replacement;
      changed = true;
    } else {
      const parsed = tokenParse(result);
      if (parsed.token) {
        const cssName = resolveVarName(parsed.token, prefix, propertyName, knownTokens, options);
        if (cssName) {
          result = toCssVar(prefix, cssName);
          changed = true;
        }
      }
    }
  }

  return { value: result, changed };
}

module.exports = {
  transformStyleValue,
  COLOR_REGEX,
};
