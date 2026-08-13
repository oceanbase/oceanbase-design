import * as React from 'react';
import useLayoutEffect from 'rc-util/es/hooks/useLayoutEffect';
import { detectFlexGapSupported } from './styleChecker';

export default () => {
  const [flexible, setFlexible] = React.useState(true);
  useLayoutEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);

  return flexible;
};
