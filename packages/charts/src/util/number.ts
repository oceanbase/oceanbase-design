/**
 * 将比例值转换为百分比数值，默认最多保留两位有效小数
 */
export function toPercent(ratio: number, decimal = 2) {
  const realDecimal = getDecimalForRatio(ratio, decimal);
  return Math.round(Number(ratio || 0) * Math.pow(10, realDecimal + 2)) / Math.pow(10, realDecimal);
}

// 根据 ratio (0 ~ 1) 值，计算最多保留的有效小数位数，以保证数据的展示效果和精度
export function getDecimalForRatio(ratio: number, decimal = 2) {
  // 0.1% 及以上，最多保留 2 位小数
  // 0.1% 以下，最多保留 2 位有效小数
  if (ratio >= 0.001) {
    return decimal;
  } else if (ratio >= 0.0001) {
    return decimal + 1;
  } else if (ratio >= 0.00001) {
    return decimal + 2;
  } else if (ratio < 0.000001) {
    return decimal + 3;
  } else if (ratio >= 0.0000001) {
    return decimal + 4;
  } else if (ratio >= 0.00000001) {
    return decimal + 5;
  } else if (ratio >= 0.000000001) {
    return decimal + 6;
  }
  return decimal;
}
