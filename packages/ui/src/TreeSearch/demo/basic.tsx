import React, { useRef, useState } from 'react';
import { Button, Divider } from '@oceanbase/design';
import { TreeSearch } from '@oceanbase/ui';
import type { Node, TreeSearchRef } from '@oceanbase/ui/es/TreeSearch';

export default () => {
  const ref = useRef<TreeSearchRef>();
  const [values, setValues] = useState<string[]>([]);

  const reset = () => {
    ref.current?.reset();
  };

  const checkAll = () => {
    ref.current?.checkAll();
  };

  const invertSelect = () => {
    ref.current?.invertSelect();
  };

  const handleChange = (nodes: Node[]) => {
    setValues(nodes.map(node => node.value));
  };

  const submit = () => {
    console.log(values);
  };

  return (
    <div>
      <TreeSearch
        ref={ref}
        onChange={handleChange}
        height={400}
        treeData={[
          {
            value: 'hello',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello1',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello2',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello3',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          {
            value: 'hello4',
            title: 'Hello',
            children: [
              { value: 'world', title: 'World' },
              { value: 'name', title: 'Name' },
            ],
          },
          { value: 'say', title: 'Say' },
        ]}
      />
      <Divider style={{ margin: '12px 0' }} />
      <Button onClick={checkAll} style={{ marginRight: 12 }}>
        Select All
      </Button>
      <Button onClick={invertSelect} style={{ marginRight: 12 }}>
        Invert Selection
      </Button>
      <Button onClick={reset} style={{ marginRight: 12 }}>
        Reset
      </Button>
      <Button type="primary" onClick={submit}>
        Submit
      </Button>
    </div>
  );
};
