import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <div>
        <ContentWithIcon
          iconType="info"
          content="Info tip"
          tooltip={{
            title:
              'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
        />
      </div>
      <div>
        <ContentWithIcon
          iconType="info"
          content="Custom info icon color"
          tooltip={{
            title:
              'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
            overlayStyle: { maxWidth: '330px' },
          }}
          color="default"
          textHidden={false}
          infoColor="#1890FF"
        />
      </div>
    </>
  );
};
