import React from 'react';
import { DateRanger } from '@oceanbase/ui';
import dayjs from 'dayjs';

export default () => {
  return (
    <DateRanger
      rules={[
        {
          validator(value) {
            if (Math.abs(dayjs(value[0]).diff(dayjs(value[1]))) > 24 * 60 * 60 * 1000) {
              return 'all';
            }

            return null;
          },
          message: 'Time range cannot exceed one day',
        },
      ]}
    />
  );
};
