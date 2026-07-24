import React, { useCallback, useState } from 'react';
import { Boundary } from '@oceanbase/ui';

export default () => {
  const [state, setState] = useState('NOT_OPEN');
  const MONITOR_OPEN_CONFIG = {
    NOT_OPEN: {
      title: 'Performance monitoring is not enabled',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*EIJaSJDIP2kAAAAAAAAAAAAAARQnAQ',
      buttonText: 'Enable performance monitoring',
    },
    PENDING: {
      title: 'Performance monitoring enabled successfully',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*Qf2zSKyaJYwAAAAAAAAAAAAAARQnAQ',
      buttonText: '',
    },
    CANNOT_ACCESS: {
      title: 'Failed to enable performance monitoring',
      imageUrl:
        'https://gw.alipayobjects.com/mdn/rms_6fd3f1/afts/img/A*pwK7QqOf-dwAAAAAAAAAAAAAARQnAQ',
      buttonText: 'Re-enable performance monitoring',
    },
  };

  const handleClick = useCallback(() => {
    const theState = Object.keys(MONITOR_OPEN_CONFIG)[Math.floor(Math.random() * 2)];
    setState(theState);
  }, []);

  return <Boundary.Function config={MONITOR_OPEN_CONFIG} state={state} onClick={handleClick} />;
};
