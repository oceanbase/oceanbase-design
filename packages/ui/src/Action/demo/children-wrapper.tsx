import React, { useState } from 'react';
import { Action } from '@oceanbase/ui';
import { Drawer, Space, Switch } from '@oceanbase/design';

const ActionButton4 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Action.Button
        onClick={() => {
          setOpen(true);
        }}
      >
        action4
      </Action.Button>
      <Drawer
        open={open}
        title="Drawer Title"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        Drawer Content
      </Drawer>
    </>
  );
};

const ActionButton5 = () => <Action.Button disabled>action5</Action.Button>;

const ActionLink4 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Action.Link
        onClick={() => {
          setOpen(true);
        }}
      >
        action4
      </Action.Link>
      <Drawer
        open={open}
        title="Drawer Title"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        Drawer Content
      </Drawer>
    </>
  );
};

const ActionLink5 = () => <Action.Link disabled>action5</Action.Link>;

export default () => {
  const [showConditionalAction, setShowConditionalAction] = useState(true);

  return (
    <Space direction="vertical" size="middle">
      <Space align="center" size="small">
        <span>Show conditional action item</span>
        <Switch checked={showConditionalAction} onChange={setShowConditionalAction} />
      </Space>
      <Action.Group>
        <>
          <Action.Button>action1</Action.Button>
          <Action.Button disabled tooltip={'Show tooltip when disabled'}>
            Disabled with tooltip
          </Action.Button>
          <Action.Button
            onClick={() => {
              console.log('hello~~');
            }}
          >
            action3
          </Action.Button>
          {showConditionalAction && (
            <Action.Button key="cond-true">Conditional action</Action.Button>
          )}
          <ActionButton4 />
          <ActionButton5 />
        </>
      </Action.Group>
      <Action.Group>
        <>
          <Action.Link>action1</Action.Link>
          <Action.Link disabled tooltip={'Show tooltip when disabled'}>
            Disabled with tooltip
          </Action.Link>
          <Action.Link
            onClick={() => {
              console.log('hello~~');
            }}
          >
            action3
          </Action.Link>
          {showConditionalAction && (
            <Action.Link key="cond-true-link">Conditional action</Action.Link>
          )}
          <ActionLink4 />
          <ActionLink5 />
        </>
      </Action.Group>
    </Space>
  );
};
