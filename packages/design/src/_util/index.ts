export const isHorizontalPaddingZero = (padding?: string | number) => {
  if (typeof padding === 'number') {
    return padding === 0;
  }

  if (typeof padding === 'string') {
    const parts = padding.trim().split(/\s+/);

    switch (parts.length) {
      case 1: // padding: 0;
        return parseFloat(parts[0]) === 0;
      case 2: // padding: 0 10px;
        return parseFloat(parts[1]) === 0;
      case 3: // padding: 0 10px 5px;
        return parseFloat(parts[1]) === 0;
      case 4: // padding: 0 1px 2px 3px;
        return parseFloat(parts[1]) === 0 && parseFloat(parts[3]) === 0;
      default:
        return false;
    }
  }

  return false;
};

export const isPaddingBottomZero = (padding?: string | number) => {
  if (typeof padding === 'number') {
    return padding === 0;
  }

  if (typeof padding === 'string') {
    const parts = padding.trim().split(/\s+/);
    switch (parts.length) {
      case 1: // padding: 0;
        return parseFloat(parts[0]) === 0;
      case 2: // padding: 0 10px;
        return parseFloat(parts[0]) === 0;
      case 3: // padding: 0 10px 5px;
        return parseFloat(parts[2]) === 0;
      case 4: // padding: 0 1px 2px 3px;
        return parseFloat(parts[3]) === 0;
      default:
        return false;
    }
  }

  return false;
};
