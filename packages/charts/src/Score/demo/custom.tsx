import React from 'react';
import { Score } from '@oceanbase/charts';

export default () => {
  return (
    <Score
      size={300}
      value={100}
      color="#A084E8"
      unit={false}
      valueStyle={{ color: '#D0BFFF' }}
    />
  );
};
