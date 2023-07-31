import { Space, Tooltip, Button } from '@oceanbase/design';
import { CloseCircleTwoTone } from '@oceanbase/icons';
import React from 'react';

const App: React.FC = () => {
  const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };

  return (
    <Space>
      <Tooltip title="This is prompt text">
        <Button>Basic</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" closeIcon={true} onClose={preventDefault}>
        <Button>Prevent Default</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" closeIcon={<CloseCircleTwoTone />} onClose={log}>
        <Button>Customize closeIcon</Button>
      </Tooltip>
      <Tooltip title="This is prompt text" closeTitle="close title" closeIcon={true}>
        <Button>CloseTitle and closeIcon</Button>
      </Tooltip>
    </Space>
  );
}
export default App;
