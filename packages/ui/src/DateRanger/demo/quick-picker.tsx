import React from 'react';
import { DateRanger } from '@oceanbase/ui';

export default () => {
  const handleChange = range => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <DateRanger.QuickPicker
      type="dropdown"
      onChange={handleChange}
      defaultName={DateRanger.TODAY.name}
      selects={[DateRanger.YESTERDAY, DateRanger.TODAY, DateRanger.TOMORROW]}
    />
  );
};
