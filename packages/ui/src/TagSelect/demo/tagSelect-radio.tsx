import React from 'react';
import { TagSelect } from '@oceanbase/ui';

export default () => {
  const option = [
    {
      label: 'Unselected Item',
      value: 1,
    },
    {
      label: 'Unselected Item',
      value: 2,
    },
    {
      label: 'Unselected Item',
      value: 3,
    },
    {
      label: 'Unselected Item',
      value: 4,
    },
  ];

  return (
    <div>
      <TagSelect.Group title="Default" options={option} />
      <TagSelect.Group title="Selected" defaultValue={1}>
        <TagSelect.Item value={1}>Selected Item</TagSelect.Item>
        <TagSelect.Item value={2}>Unselected Item</TagSelect.Item>
        <TagSelect.Item value={3}>Unselected Item</TagSelect.Item>
        <TagSelect.Item value={4}>Unselected Item</TagSelect.Item>
      </TagSelect.Group>
      <TagSelect.Group title="Disabled" defaultValue={4} disabled>
        <TagSelect.Item value={1}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={2}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={3}>Disabled Option</TagSelect.Item>
        <TagSelect.Item value={4}>Disabled Option</TagSelect.Item>
      </TagSelect.Group>
    </div>
  );
};
