import React, { useState } from 'react';
import { DateRanger } from '@oceanbase/ui';
import { Checkbox, Divider, Flex } from '@oceanbase/design';
import dayjs from 'dayjs';

export default () => {
  return (
    <div>
      <Flex gap="middle" vertical>
        <DateRanger allowClear history />
        <DateRanger allowClear history />
      </Flex>
    </div>
  );
};
