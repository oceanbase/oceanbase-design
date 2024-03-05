import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Checkbox, Divider, Flex } from '@oceanbase/design';

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
        hasForward={getValue('hasForward')}
        // hasPlay={getValue('hasPlay')}
        hasRewind={getValue('hasRewind')}
        // hasZoomOut={getValue('hasZoomOut')}
      />
    </div>
  );
};
