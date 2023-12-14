import React from 'react';
import { DateRanger } from '@oceanbase/ui';

export default () => (
  <DateRanger
    defaultQuickValue={DateRanger.TODAY.name}
    selects={[DateRanger.YESTERDAY, DateRanger.TODAY]}
  />
);
