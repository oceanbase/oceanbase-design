import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="Custom font and icon size"
          tooltip={{
            title: 'Custom font and icon size',
          }}
          color="#default"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="exclamation"
          content="Custom icon color"
          tooltip={{
            title: 'Custom icon color',
          }}
          color="#8592AD"
          exclamationColor="#f5222d"
        />
      </div>
    </>
  );
};
