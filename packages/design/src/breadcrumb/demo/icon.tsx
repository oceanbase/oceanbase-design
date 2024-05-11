import React from 'react';
import { Breadcrumb } from '@oceanbase/design';
import { UserOutlined } from '@oceanbase/icons';

const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>User</span>
          </>
        ),
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
