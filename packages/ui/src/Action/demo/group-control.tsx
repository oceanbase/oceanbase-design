import React, { useState } from 'react';
import { Action } from '@oceanbase/ui';
import { Form, Switch } from '@oceanbase/design';

export default () => {
  const [visible, setVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Form layout="inline" style={{ marginBottom: 16 }}>
        <Form.Item label="visible" required={true}>
          <Switch
            size="small"
            value={visible}
            onChange={value => {
              setVisible(value);
            }}
          />
        </Form.Item>
        <Form.Item label="disabled" required={true}>
          <Switch
            size="small"
            value={disabled}
            onChange={value => {
              setDisabled(value);
            }}
          />
        </Form.Item>
      </Form>
      <Action.Group shouldVisible={key => visible} shouldDisabled={key => disabled}>
        <Action.Link key="action1">action1</Action.Link>
        <Action.Link key="action2">action2</Action.Link>
        <Action.Link key="action3">action3</Action.Link>
        <Action.Link key="action4">action4</Action.Link>
        <Action.Link key="action5">action5</Action.Link>
      </Action.Group>
    </>
  );
};
