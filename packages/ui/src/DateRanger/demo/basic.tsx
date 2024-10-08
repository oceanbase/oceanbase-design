import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Checkbox, Divider, Flex } from '@oceanbase/design';
import dayjs from 'dayjs';

export default () => {
  const options = [
    { label: 'hasRewind', value: 'hasRewind' },
    { label: 'hasForward', value: 'hasForward' },
    { label: 'hasNow', value: 'hasNow' },
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
        hasForward={getValue('hasForward')}
        hasRewind={getValue('hasRewind')}
        hasNow={getValue('hasNow')}
      />
    </div>
  );
};
