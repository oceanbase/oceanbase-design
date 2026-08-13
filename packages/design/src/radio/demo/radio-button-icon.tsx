import React from 'react';
import { PlusOutlined, DeleteOutlined, EditOutlined, DownloadOutlined } from '@oceanbase/icons';
import { Radio, Space, Divider } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';

const App: React.FC = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
  };

  return (
    <Space direction="vertical" size="middle">
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a" icon={<PlusOutlined />}>
          Add
        </Radio.Button>
        <Radio.Button value="b" icon={<EditOutlined />}>
          Edit
        </Radio.Button>
        <Radio.Button value="c" icon={<DeleteOutlined />}>
          Delete
        </Radio.Button>
        <Radio.Button value="d" icon={<DownloadOutlined />}>
          Download
        </Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a" icon={<PlusOutlined />}>
          Add
        </Radio.Button>
        <Radio.Button value="b" icon={<EditOutlined />} disabled>
          Edit
        </Radio.Button>
        <Radio.Button value="c" icon={<DeleteOutlined />}>
          Delete
        </Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue="a">
        <Radio.Button value="a" icon={<PlusOutlined />} />
        <Radio.Button value="b" icon={<EditOutlined />} />
        <Radio.Button value="c" icon={<DeleteOutlined />} />
        <Radio.Button value="d" icon={<DownloadOutlined />} />
      </Radio.Group>
    </Space>
  );
};

export default App;
