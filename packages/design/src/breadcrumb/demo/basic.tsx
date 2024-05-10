import React from 'react';
import { Breadcrumb } from '@oceanbase/design';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: 'User',
      },
      {
        href: '',
        title: 'User List',
      },
      {
        title: 'User Detail',
      },
    ]}
  />
);

export default App;
