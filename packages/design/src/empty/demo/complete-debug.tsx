import React, { useState } from 'react';
import { Button, Empty, Form, Switch } from '@oceanbase/design';

export default () => {
  const [title, setTitle] = useState(true);
  const [description, setDescription] = useState(true);
  const [children, setChildren] = useState(true);

  return (
    <>
      <Form
        layout="inline"
        style={{
          marginBottom: 48,
        }}
      >
        <Form.Item label="title" required={true}>
          <Switch
            size="small"
            value={title}
            onChange={value => {
              setTitle(value);
            }}
          />
        </Form.Item>
        <Form.Item label="description" required={true}>
          <Switch
            size="small"
            value={description}
            onChange={value => {
              setDescription(value);
            }}
          />
        </Form.Item>
        <Form.Item label="children" required={true}>
          <Switch
            size="small"
            value={children}
            onChange={value => {
              setChildren(value);
            }}
          />
        </Form.Item>
      </Form>
      <Empty
        image={Empty.PRESENTED_IMAGE_COLORED}
        title={title && 'Create Your Cluster'}
        description={description ? 'There is no cluster, welcome to create one!' : ''}
      >
        {children && <Button type="primary">Create</Button>}
      </Empty>
    </>
  );
};
