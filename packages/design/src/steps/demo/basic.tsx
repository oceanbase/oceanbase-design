import React from 'react';
import { Divider, Steps } from '@oceanbase/design';

const description = 'This is a description.';
const App: React.FC = () => (
  <>
    <Steps
      current={1}
      items={[
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
          subTitle: 'Left 00:00:08',
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
      current={1}
      items={[
        {
          title: 'Finished',
        },
        {
          title: 'In Progress',
        },
        {
          title: 'Waiting',
        },
      ]}
    />
  </>
);

export default App;
