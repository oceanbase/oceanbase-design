import React from 'react';
import { Empty } from '@oceanbase/design';

const items = [
  {
    name: 'PRESENTED_IMAGE_DEFAULT / PRESENTED_IMAGE_SIMPLE',
    image: Empty.PRESENTED_IMAGE_DEFAULT,
  },
  {
    name: 'PRESENTED_IMAGE_COLORED',
    image: Empty.PRESENTED_IMAGE_COLORED,
  },
  {
    name: 'PRESENTED_IMAGE_DATABASE',
    image: Empty.PRESENTED_IMAGE_DATABASE,
  },
  {
    name: 'PRESENTED_IMAGE_GUIDE',
    image: Empty.PRESENTED_IMAGE_GUIDE,
  },
] as const;

export default () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(200px, 1fr) auto',
      gap: '16px 32px',
      alignItems: 'center',
    }}
  >
    {items.map(item => (
      <React.Fragment key={item.name}>
        <code style={{ whiteSpace: 'pre-wrap' }}>{item.name}</code>
        <div style={{ display: 'flex', justifyContent: 'center' }}>{item.image}</div>
      </React.Fragment>
    ))}
  </div>
);
