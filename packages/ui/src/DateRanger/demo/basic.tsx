import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Checkbox, Divider, Flex } from '@oceanbase/design';
import dayjs from 'dayjs';

export default () => {
  const options = [
    // { label: 'hasPlay', value: 'hasPlay' },
    { label: 'hasRewind', value: 'hasRewind' },
    { label: 'hasForward', value: 'hasForward' },
    // { label: 'hasZoomOut', value: 'hasZoomOut' },
  ];

  const [state, setState] = useState(options.map(item => item.value));

  const onChange = checkedValue => {
    setState(checkedValue);
  };
  const getValue = name => {
    return state.some(v => v === name);
  };

  return (
    <div>
      <Flex gap="middle" vertical>
        <Checkbox.Group options={options} value={state} onChange={onChange} />
      </Flex>
      <Divider children="preview" />
      <DateRanger
        tip="1.时间差不能小于 5 分钟（2 天前的数据时间差不能小于 10 分钟）
      2.时间差不能大于 1 天"
        rules={[
          {
            message: '时间差不能大于一天',
            validator: (sTime, eTime) => {
              const differenceSeconds = dayjs(eTime).diff(dayjs(sTime), 'seconds');
              const differenceDays = differenceSeconds / 60 / 60 / 24;

              if (differenceDays > 1) {
                return ['startDate', 'endDate'];
              }
            },
          },
        ]}
        hasForward={getValue('hasForward')}
        // hasPlay={getValue('hasPlay')}
        hasRewind={getValue('hasRewind')}
        // hasZoomOut={getValue('hasZoomOut')}
      />
    </div>
  );
};
