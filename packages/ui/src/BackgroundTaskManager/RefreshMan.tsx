import { useInterval, useTimeout } from 'ahooks';
import { Spin } from '@oceanbase/design';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { REFRESH_FREQUENCY } from './constants';

interface IProps {
  run: () => void;
  children?: React.ReactNode;
  rollingFrequency?: number;
  refreshImmediate?: boolean;
  timeout?: number;
  spinning?: boolean;
}

export const RefreshMan = forwardRef((props: IProps, ref?: React.MutableRefObject<any>) => {
  const {
    run,
    timeout = null,
    refreshImmediate = true,
    rollingFrequency = REFRESH_FREQUENCY.LOW,
    children,
    spinning = false,
  } = props;
  const [interval, setInterval] = useState<number | null>(null);
  const [refreshManLoading, setRefreshManLoading] = useState(false);

  useEffect(() => {
    return () => setRefreshManLoading(true);
  }, []);

  useInterval(
    () => {
      run();
    },
    interval,
    { immediate: refreshImmediate }
  );

  const startLoop = useCallback(() => {
    setInterval(rollingFrequency);
  }, [setInterval, rollingFrequency]);

  const stopLoop = useCallback(() => {
    setInterval(null);
  }, [setInterval]);

  useImperativeHandle(ref, () => ({
    startLoop,
    stopLoop,
  }));

  useTimeout(() => {
    stopLoop();
  }, timeout);

  useEffect(() => {
    if (timeout !== 0) {
      startLoop();
    }
    return () => {
      stopLoop();
    };
  }, [startLoop, stopLoop, timeout]);

  return (
    <Spin spinning={spinning && refreshManLoading}>
      <>{children}</>
    </Spin>
  );
});
