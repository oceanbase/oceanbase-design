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
  const format = 'YYYY-MM-DD HH:mm:ss';
  return (
    <div>
      <Flex gap="middle" align="center">
        <Button
          onClick={() => {
            console.log('ref: ', ref);
            ref.current.updateCurrentTime();
          }}
        >
          从外部更新时间
        </Button>
        {timeRange.length && (
          <span>
            {`${dayjs(timeRange[0]).format(format)} ~ ${dayjs(timeRange[1]).format(format)}`}
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
