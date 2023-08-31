import {Tag, Tooltip, Typography} from '@oceanbase/design';
import React from 'react';

const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };
  
  const preventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };


const App: React.FC = () => (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
      <Tag width='150px'>Show ellipsis for excess</Tag>
    </>
  );
  

export default App;