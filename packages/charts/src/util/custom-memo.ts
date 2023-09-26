import { memo } from 'react';
import type { FunctionComponent } from 'react';
import { isEqual } from 'lodash';
import type { BaseConfig, AllBaseConfig } from '@ant-design/charts';

export function customMemo<P extends BaseConfig<AllBaseConfig>>(
  Component: FunctionComponent<P>,
  propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
) {
  return memo(Component, (prevProps, nextProps) =>
    propsAreEqual ? propsAreEqual(prevProps, nextProps) : isEqual(prevProps, nextProps)
  );
}
