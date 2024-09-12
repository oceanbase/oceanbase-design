import * as React from 'react';
import { detectFlexGapSupported } from './styleChecker';

export default () => {
  const [flexible, setFlexible] = React.useState(true);
  React.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);

  return flexible;
};
