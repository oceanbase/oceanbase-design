import { Tag } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => (
  <>
    <Tag>
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
    <Tag
      ellipsis={{
        tooltip: {
          placement: 'topLeft',
          title: 'Custom Title',
        },
      }}
      style={{
        width: 200,
        marginTop: 16,
      }}
    >
      Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show
      ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for
      excess.Show ellipsis for excess.Show ellipsis for excess.Show ellipsis for excess.
    </Tag>
  </>
);

export default App;
