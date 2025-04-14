import React from 'react';
import { Divider, Steps } from '@oceanbase/design';

const description = 'This is a description.';
const App: React.FC = () => (
  <>
    <Steps
      direction="vertical"
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
    <Divider />
    <Steps
      size="small"
      direction="vertical"
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ]}
    />
  </>
);

export default App;
