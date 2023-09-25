import React, { useCallback, useState } from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  const [state, setState] = useState('NOT_OPEN');
  const MONITOR_OPEN_CONFIG = {
    NOT_OPEN: {
      title: '未开启性能监控',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*EIJaSJDIP2kAAAAAAAAAAAAAARQnAQ',
      buttonText: '开启性能监控',
    },
    PENDING: {
      title: '开启性能监控提交成功',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*Qf2zSKyaJYwAAAAAAAAAAAAAARQnAQ',
      buttonText: '',
    },
    CANNOT_ACCESS: {
      title: '性能监控开启失败',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*pwK7QqOf-dwAAAAAAAAAAAAAARQnAQ',
      buttonText: '重新开启性能监控',
    },
  };

  const handleClick = useCallback(() => {
    const theState = Object.keys(MONITOR_OPEN_CONFIG)[Math.floor(Math.random() * 2)];
    setState(theState);
  }, []);

  return <Boundary.Function config={MONITOR_OPEN_CONFIG} state={state} onClick={handleClick} />;
};
