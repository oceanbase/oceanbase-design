import { useState, useRef } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Divider, Flex, Button } from '@oceanbase/design';
import dayjs from 'dayjs';

type TimeRangeRef = {
  updateCurrentTime: () => void;
};

export default () => {
  const ref = useRef<TimeRangeRef>();
  const [timeRange, setTimeRange] = useState([]);
  return (
    <div>
      <Flex gap="middle" align="center">
        <Button
          onClick={() => {
            console.log('ref: ', ref);
            ref.current.updateCurrentTime();
          }}
        >
          更新最新时间
        </Button>
        {timeRange.length && (
          <span>
            {`${dayjs(timeRange[0]).format('YYYY-MM-DD HH:mm:ss')} ~ ${dayjs(timeRange[1]).format(
              'YYYY-MM-DD HH:mm:ss'
            )}`}
          </span>
        )}
      </Flex>

      <Divider children="preview" />
      <DateRanger
        ref={ref}
        onChange={setTimeRange}
        defaultQuickValue={DateRanger.NEAR_30_MINUTES.name}
        hasRewind={false}
        hasForward={false}
        hasSync={false}
      />
    </div>
  );
};
