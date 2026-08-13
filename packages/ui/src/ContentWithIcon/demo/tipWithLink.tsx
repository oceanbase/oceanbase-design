import React from 'react';
import { ContentWithIcon } from '@oceanbase/ui';

export default () => {
  return (
    <>
      <ContentWithIcon
        iconType="question"
        content="Paid service ratio"
        popOver={{
          content: (
            <div>
              <span style={{ marginRight: '4px' }}>Description text with a hyperlink</span>
              <a>View help documentation</a>
            </div>
          ),
          overlayStyle: { maxWidth: '180px' },
        }}
        color="default"
        tooltipWithLink={true}
      />
    </>
  );
};
