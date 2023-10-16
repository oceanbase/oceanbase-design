import { Select, Tag } from '@oceanbase/design';
import React, { useState } from 'react';

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

const App: React.FC = () => {
  const [theme, setTheme] = useState();
  return (
    <>
      <Select
        mode="multiple"
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%' }}
        options={options.map(item => ({ label: item, value: item }))}
      />
      <Select mode="tags" style={{ width: '100%' }} defaultValue={['test']} />
      <Select<'light' | 'dark'>
        // defaultValue={DEFAULT_THEME}
        style={{ width: 120 }}
        onChange={value => setTheme(value)}
      >
        <Select.Option value="light">白色主题</Select.Option>
        <Select.Option value="dark">黑色主题</Select.Option>
      </Select>
    </>
  );
};

export default App;
