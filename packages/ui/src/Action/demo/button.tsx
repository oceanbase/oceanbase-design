import React, { useState } from 'react';
import { Form, Radio, Space } from '@oceanbase/design';
import { ButtonSize } from '@oceanbase/design/es/button';
import { Action } from '@oceanbase/ui';
import { DownOutlined } from '@oceanbase/icons';

export default () => {
  const [buttonSize, setButtonSize] = useState<ButtonSize>('middle');
  return (
    <>
      <Form layout="inline" requiredMark={false} style={{ marginBottom: 24 }}>
        <Form.Item label="buttonSize">
          <Radio.Group
            value={buttonSize}
            onChange={e => {
              setButtonSize(e.target.value);
            }}
          >
            <Radio value="large">large</Radio>
            <Radio value="middle">middle</Radio>
            <Radio value="small">small</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Action.Group
        buttonSize={buttonSize}
        moreText={
          <Space size={4}>
            更多
            <DownOutlined />
          </Space>
        }
      >
        <Action.Button type="primary">action1</Action.Button>
        <Action.Button danger>危险按钮</Action.Button>
        <Action.Button>action3</Action.Button>
        <Action.Button>action4</Action.Button>
        <Action.Button>action5</Action.Button>
      </Action.Group>
    </>
  );
};
