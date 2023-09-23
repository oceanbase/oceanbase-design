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
            title: '你好',
            children: [
              { value: 'world', title: '世界' },
              { value: 'name', title: '名称' },
            ],
          },
          {
            value: 'hello1',
            title: '你好',
            children: [
              { value: 'world', title: '世界' },
              { value: 'name', title: '名称' },
            ],
          },
          {
            value: 'hello2',
            title: '你好',
            children: [
              { value: 'world', title: '世界' },
              { value: 'name', title: '名称' },
            ],
          },
          {
            value: 'hello3',
            title: '你好',
            children: [
              { value: 'world', title: '世界' },
              { value: 'name', title: '名称' },
            ],
          },
          {
            value: 'hello4',
            title: '你好',
            children: [
              { value: 'world', title: '世界' },
              { value: 'name', title: '名称' },
            ],
          },
          { value: 'say', title: '说' },
        ]}
      />
      <Divider style={{ margin: '12px 0' }} />
      <Button onClick={checkAll} style={{ marginRight: 12 }}>
        全选
      </Button>
      <Button onClick={invertSelect} style={{ marginRight: 12 }}>
        反选
      </Button>
      <Button onClick={reset} style={{ marginRight: 12 }}>
        重置
      </Button>
      <Button type="primary" onClick={submit}>
        确定
      </Button>
    </div>
  );
};
