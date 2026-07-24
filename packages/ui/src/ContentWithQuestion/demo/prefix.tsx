import React from 'react';
import { ContentWithQuestion } from '@oceanbase/ui';

export default () => {
  return (
    <ContentWithQuestion
      content="Paid service ratio"
      tooltip={{
        title:
          'Percentage of registered service person-days attributed to a service package, calculated as (total person-days with a service package) / (total person-days invested)',
      }}
      prefixIcon={true}
      suffixIcon={null}
    />
  );
};
