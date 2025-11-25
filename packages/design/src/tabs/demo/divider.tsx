import React, { useState } from 'react';
import { Form, Switch, Tabs } from '@oceanbase/design';

const App: React.FC = () => {
  const [divider, setDivider] = useState<boolean>(true);

  return (
    <div>
      <Form layout="inline">
        <Form.Item label="divider" required={true}>
          <Switch
            checked={divider}
            onChange={value => {
              setDivider(value);
            }}
          />
        </Form.Item>
      </Form>
      <Tabs
        defaultActiveKey="1"
        divider={divider}
        style={{ marginBottom: 32 }}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of tab ${id}`,
          };
        })}
      />
      <Tabs
        defaultActiveKey="1"
        divider={divider}
        type="card"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Card Tab ${id}`,
            key: id,
            children: `Content of card tab ${id}`,
          };
        })}
      />
    </div>
  );
};

export default App;
