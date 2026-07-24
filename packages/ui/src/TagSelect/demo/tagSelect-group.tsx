import React, { useState } from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: 'Unselected Option',
      value: 1,
    },
    {
      label: 'Unselected Option',
      value: 2,
    },
    {
      label: 'Unselected Option',
      value: 3,
    },
  ];
  const [checked, setChecked] = useState();
  const handleChange = v => {
    setChecked(v);
  };

  return (
    <TagSelect.Group
      title="I am a title"
      options={option}
      onChange={handleChange}
      value={checked}
    />
  );
};
