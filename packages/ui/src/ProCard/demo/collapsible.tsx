import React from 'react';
import { ProCard } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <ProCard collapsible bordered title="Title" style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
      <ProCard collapsible ghost title="Title" style={{ width: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </>
  );
};
