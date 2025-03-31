import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import moment, { Moment } from 'moment';

const {
  NEAR_1_MINUTES,
  NEAR_30_MINUTES,
  NEAR_1_HOURS,
  NEAR_3_HOURS,
  NEAR_6_HOURS,
  TODAY,
  LAST_3_DAYS,
  THIS_WEEK,
  THIS_MONTH,
  THIS_YEAR,
} = DateRanger;
export default () => (
  <DateRanger
    defaultQuickValue={NEAR_30_MINUTES.name}
    selects={[
      NEAR_1_MINUTES,
      {
        label: '近 15 分钟',
        enLabel: 'Last 15 Minutes',
        rangeLabel: '15m',
        name: 'NEAR_15_MINUTES',
        range: (current: Moment = moment()) => [
          current.clone().subtract(15, 'minute'),
          current.clone(),
        ],
      },
      NEAR_30_MINUTES,
      NEAR_1_HOURS,
      NEAR_3_HOURS,
      NEAR_6_HOURS,
      TODAY,
      LAST_3_DAYS,
      THIS_WEEK,
      THIS_MONTH,
      THIS_YEAR,
    ]}
  />
);
