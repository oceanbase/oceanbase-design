import { Spin as AntSpin } from 'antd';
import type { SpinProps as AntSpinProps } from 'antd/es/spin';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import Lottie from '../lottie';
import useStyle from './style';

export * from 'antd/es/spin';

export interface SpinProps extends AntSpinProps {
  // only work for default indicator
  gray?: boolean;
}

const Spin = ({
  prefixCls: customizePrefixCls,
  className,
  indicator: customizeIndicator,
  gray,
  ...restProps
}: SpinProps) => {
  const { getPrefixCls, spin } = useContext(ConfigProvider.ConfigContext);

  const indicator =
    customizeIndicator ||
    spin?.indicator ||
    (gray ? <Lottie path="/lottie/spin-gray.json" /> : <Lottie path="/lottie/spin.json" />);
  const isDefaultIndicator = !(customizeIndicator || spin?.indicator);
  const isGrayIndicator = isDefaultIndicator && gray;

  const prefixCls = getPrefixCls('spin', customizePrefixCls);
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const spinCls = classNames(
    {
      [`${prefixCls}-oceanbase`]: isDefaultIndicator,
      [`${prefixCls}-oceanbase-gray`]: isGrayIndicator,
    },
    className,
    hashId
  );

  return wrapSSR(
    <AntSpin
      prefixCls={customizePrefixCls}
      className={spinCls}
      indicator={indicator}
      {...restProps}
    />
  );
};

Spin.setDefaultIndicator = AntSpin.setDefaultIndicator;

if (process.env.NODE_ENV !== 'production') {
  Spin.displayName = AntSpin.displayName;
}

export default Spin;
