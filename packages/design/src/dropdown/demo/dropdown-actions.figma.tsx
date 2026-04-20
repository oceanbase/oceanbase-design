import { PlusOutlined } from '@oceanbase/icons';
import { Button, Col, Dropdown, Flex, Row, Select, Space, Typography } from '@oceanbase/design';
import type { MenuProps } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

import { SPLIT_BORDER } from './dropdown-popup-shell.figma';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_DROPDOWNACTIONS 的 props / example 语义一致。
 * - 复合浮层：外层一块背景/圆角/阴影，内层 Menu 透明拉满（与 `index.tsx` 中 FigmaDropdownMainExample 一致）。
 * - 文档首屏默认收起浮层，受控 `open` + `onOpenChange`；映射 example 为静态 `open`。
 */

function FigmaDropdownActionsExample(props: {
  actionsFooter: React.ReactNode;
  menu: MenuProps;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { actionsFooter, menu, open, onOpenChange } = props;
  const menuMerged = useMemo(
    () => ({
      ...menu,
      style: {
        ...menu.style,
        width: '100%',
        minWidth: 0,
        background: 'transparent',
        boxShadow: 'none',
        borderRadius: 0,
      },
    }),
    [menu]
  );
  return (
    <Dropdown
      trigger={['click']}
      open={open}
      onOpenChange={onOpenChange}
      menu={menuMerged}
      popupRender={node => (
        <Flex
          vertical
          align="stretch"
          style={{
            minWidth: 160,
            width: '100%',
            background: 'var(--ant-color-bg-elevated, #ffffff)',
            borderRadius: 'var(--ant-border-radius-lg, 8px)',
            boxShadow:
              'var(--ant-shadow-2, 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05))',
            overflow: 'hidden',
          }}
        >
          {node}
          <Flex
            vertical
            align="start"
            style={{ borderTop: SPLIT_BORDER, padding: '8px 12px', width: '100%' }}
          >
            {actionsFooter}
          </Flex>
        </Flex>
      )}
    >
      <Button type="default" size="small">
        选项
      </Button>
    </Dropdown>
  );
}

const MENU_ACTIONS: MenuProps = {
  selectable: true,
  multiple: true,
  items: [
    { key: 'oceanbase-dropdown-actions-1', label: 'Item 1' },
    { key: 'oceanbase-dropdown-actions-2', label: 'Item 2' },
  ],
};

const App: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [type, setType] = useState<'apply' | 'add'>('apply');

  const actionsFooter = useMemo(() => {
    if (type === 'apply') {
      return (
        <Row justify="space-between" align="middle" style={{ width: '100%' }}>
          <Col>
            <Button type="primary" size="small">
              Apply
            </Button>
          </Col>
          <Col>
            <Button type="link" size="small">
              Clear All
            </Button>
          </Col>
        </Row>
      );
    }
    return (
      <Button type="link" size="small" icon={<PlusOutlined />} iconPosition="start">
        Add
      </Button>
    );
  }, [type]);

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 360,
        border: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--ant-color-bg-container, #fff)',
      }}
    >
      <Col
        flex="1 1 auto"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaDropdownActionsExample
          actionsFooter={actionsFooter}
          menu={MENU_ACTIONS}
          open={dropdownOpen}
          onOpenChange={setDropdownOpen}
        />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          DropdownActions
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as 'apply' | 'add')}
              options={[
                { value: 'apply', label: 'apply' },
                { value: 'add', label: 'add' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
