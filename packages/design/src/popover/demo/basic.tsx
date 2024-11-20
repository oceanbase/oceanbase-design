import React from 'react';
import { Button, Popover } from '@oceanbase/design';

const App: React.FC = () => (
  <Popover
    content={
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    }
    title="Title"
  >
    <Button type="primary">Hover me</Button>
  </Popover>
);

export default App;
