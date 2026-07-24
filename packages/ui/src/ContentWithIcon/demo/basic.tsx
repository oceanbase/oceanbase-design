import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';
import { StepForwardOutlined } from '@oceanbase/icons';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="question"
          content="Paid service ratio"
          tooltip={{
            title:
              'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="question"
          content="Custom font and icon size and color"
          tooltip={{
            title: 'Custom font and icon size and color',
          }}
          color="#8592AD"
          size={16}
        />
      </div>
      <div>
        <ContentWithIcon
          content="Custom icon"
          tooltip={{
            title: 'Custom icon',
          }}
          color="default"
          suffixIcon={<StepForwardOutlined />}
        />
      </div>
    </>
  );
};
