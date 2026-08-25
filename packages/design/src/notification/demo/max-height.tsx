import React from 'react';
import { Button, Space, notification } from '@oceanbase/design';

const longParagraph =
  'This is a very long description used to verify the max height behavior. ' +
  'When the content grows beyond the limit, the content area should scroll internally ' +
  'while the close button and the auto-close progress bar stay fixed at the card edge. ';

const longDescription = (
  <>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
      <p key={i} style={{ margin: 0 }}>
        {longParagraph}
      </p>
    ))}
  </>
);

const manyErrorDetails = Array.from({ length: 12 }, (_, i) => ({
  label: `Detail item ${i + 1}`,
  value: `value-${i + 1}-with-a-very-long-value-to-fill-up-the-available-height`,
}));

export default () => {
  return (
    <Space wrap>
      <Button
        onClick={() => {
          notification.info({
            message: 'Long description',
            description: longDescription,
          });
        }}
      >
        Long description
      </Button>
      <Button
        onClick={() => {
          notification.error({
            message: 'Long error details',
            description: 'Expand the details below to verify internal scrolling.',
            errorDetails: manyErrorDetails,
          });
        }}
      >
        Long error details
      </Button>
    </Space>
  );
};
