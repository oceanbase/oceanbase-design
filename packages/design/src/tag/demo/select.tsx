import { Select, Tag, Divider } from '@oceanbase/design';
import React from 'react';

const options = ['gold', 'green', 'red', 'cyan'];

const tagRender = props => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag color={value} onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose}>
      {label}
    </Tag>
  );
};

const App: React.FC = () => (
  <>
    <Divider orientation="left">Custom Select</Divider>
    <Select
      mode="multiple"
      tagRender={tagRender}
      defaultValue={['gold', 'cyan']}
      style={{ width: '100%' }}
      options={options.map(item => ({ label: item, value: item }))}
    />
    <Divider orientation="left">Input</Divider>
    <Select mode="tags" open={false} style={{ width: '100%' }} defaultValue={['input']} />
  </>
);

export default App;
