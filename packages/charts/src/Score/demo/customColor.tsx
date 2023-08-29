import React from 'react';
import { Score } from '@oceanbase/charts';

export default () => {
  return (
    <Score
      value={100}
      color="#A084E8"
      unit=""
      valueStyle={{ color: '#D0BFFF' }}
    />
  );
};
