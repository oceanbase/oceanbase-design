import React from 'react';
import { Ranger } from '@oceanbase/ui';

export default () => {
  const handleChange = range => {
    console.log(range[0].format('YYYY-MM-DD HH:mm:ss'));
    console.log(range[1].format('YYYY-MM-DD HH:mm:ss'));
  };

  return (
    <Ranger.QuickPicker
      type="dropdown"
      onChange={handleChange}
      defaultName={Ranger.TODAY.name}
      selects={[Ranger.YESTERDAY, Ranger.TODAY, Ranger.TOMORROW]}
    />
  );
};
