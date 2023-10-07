import { memo } from 'react';
import type { FunctionComponent } from 'react';
import { isFunction, isEqualWith, isEqual, isPlainObject, maxBy } from 'lodash';
import type { BaseConfig, AllBaseConfig } from '@ant-design/charts';

export function isEqualWithFunction(v1: any, v2: any) {
  return isEqualWith(v1, v2, (value1, value2) => {
    // function equals
    if (isFunction(value1) && isFunction(value2)) {
      return value1.toString() === value2.toString();
    } else if (isPlainObject(value1) && isPlainObject(value2)) {
      const keys1 = Object.keys(value1);
      const keys2 = Object.keys(value2);
      const keys = maxBy([keys1, keys2], o => o.length);
      return keys.every(key => isEqualWithFunction(value1[key], value2[key]));
    }
    return isEqual(value1, value2);
  });
}

export function customMemo<P extends BaseConfig<AllBaseConfig>>(
  Component: FunctionComponent<P>,
  propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
) {
  return memo(Component, (prevProps, nextProps) =>
    propsAreEqual ? propsAreEqual(prevProps, nextProps) : isEqualWithFunction(prevProps, nextProps)
  );
}
