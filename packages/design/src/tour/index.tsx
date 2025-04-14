import React, { useContext, useEffect, useState } from 'react';
import { Tour as AntTour, theme } from 'antd';
import type { TourProps as AntTourProps, TourStepProps as AntTourStepProps } from 'antd';
import { LeftOutlined } from '@oceanbase/icons';
import canUseDom from 'rc-util/lib/Dom/canUseDom';
import classNames from 'classnames';
import { useUpdateEffect } from 'ahooks';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/tour/interface';
export * from 'antd/es/tour';

export interface TourProps extends AntTourProps {}

type CompoundedComponent = React.FC<TourProps> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntTour._InternalPanelDoNotUseOrYouWillBeFired;
};

const Tour: CompoundedComponent = ({
  prefixCls: customizePrefixCls,
  rootClassName,
  mask,
  open,
  steps: outerSteps,
  defaultCurrent,
  current: outerCurrent,
  onChange,
  gap,
  ...restProps
}) => {
  const { token } = theme.useToken();
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('tour', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const tourCls = classNames(rootClassName);

  const [current, setCurrent] = useState(outerCurrent ?? defaultCurrent ?? 0);

  useUpdateEffect(() => {
    setCurrent(outerCurrent);
  }, [outerCurrent]);

  useEffect(() => {
    if (open && !mask && canUseDom()) {
      document.body.style.overflowY = 'visible';
    }
  }, [open, mask]);

  const steps = outerSteps.map(item => ({
    ...item,
    // prevButtonProps: {
    //   children: <LeftOutlined />,
    //   size: 'middle',
    //   ...item.prevButtonProps,
    //   style: {
    //     padding: 0,
    //     border: 'none',
    //     fontSize: 12,
    //     ...item.prevButtonProps?.style,
    //   },
    // } as AntTourStepProps['prevButtonProps'],
    prevButtonProps: {
      ...item.prevButtonProps,
    } as AntTourStepProps['prevButtonProps'],
    nextButtonProps: {
      ...item.nextButtonProps,
    },
  }));

  const currentPrevButtonProps = steps[current]?.prevButtonProps;

  return wrapSSR(
    <AntTour
      prefixCls={customizePrefixCls}
      rootClassName={tourCls}
      mask={mask}
      open={open}
      steps={steps}
      defaultCurrent={defaultCurrent}
      current={current}
      onChange={newCurrent => {
        setCurrent(newCurrent);
        onChange?.(newCurrent);
      }}
      gap={{
        radius: token.borderRadius,
        ...gap,
      }}
      indicatorsRender={(_, total) => {
        return (
          <>
            {current !== 0 && (
              <LeftOutlined
                {...currentPrevButtonProps}
                className={classNames(`${prefixCls}-prev-icon`, currentPrevButtonProps?.className)}
                onClick={() => {
                  setCurrent(current - 1);
                  currentPrevButtonProps?.onClick?.();
                }}
              />
            )}
            {[...Array.from({ length: total }).keys()].map((stepItem, index) => (
              <span
                key={stepItem}
                className={classNames(
                  index === current && `${prefixCls}-indicator-active`,
                  `${prefixCls}-indicator`
                )}
                onClick={() => {
                  setCurrent(index);
                }}
              />
            ))}
          </>
        );
      }}
      {...restProps}
    />
  );
};

if (process.env.NODE_ENV !== 'production') {
  Tour.displayName = AntTour.displayName;
}

Tour._InternalPanelDoNotUseOrYouWillBeFired = AntTour._InternalPanelDoNotUseOrYouWillBeFired;

export default Tour;
