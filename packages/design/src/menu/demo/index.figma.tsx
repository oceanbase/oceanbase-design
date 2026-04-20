import {
  ClusterOutlined,
  ExportOutlined,
  OverviewFilled,
  PlConsoleOutlined,
} from '@oceanbase/icons';
import { Col, Input, Menu, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_MENUITEM 的嵌套 `type` × `focus` × `status` × `jumpoff`
 * 及 `figma.string('text')` / `figma.instance('icon')` 语义一致；文案可编辑，图标多档可选。
 */

const ITEM_KEY = 'oceanbase-menu-item';

type ItemType = 'default' | 'fold' | 'subitem';
type Focus = 'no' | 'yes';
type FigmaStatus = 'Default' | 'selected' | 'hover' | 'default';

const ICON_OPTIONS: { value: string; label: string; node: React.ReactNode }[] = [
  { value: 'overview', label: 'OverviewFilled', node: <OverviewFilled /> },
  { value: 'cluster', label: 'ClusterOutlined', node: <ClusterOutlined /> },
  { value: 'sql', label: 'PlConsoleOutlined', node: <PlConsoleOutlined /> },
];

function buildMenuItemMenu(args: {
  itemType: ItemType;
  focus: Focus;
  status: FigmaStatus;
  jumpoff: boolean;
  text: string;
  icon: React.ReactNode;
}) {
  const { itemType, focus, status, jumpoff, text, icon } = args;

  if (itemType === 'default') {
    if (focus === 'yes') {
      return (
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          inlineIndent={24}
          selectedKeys={[ITEM_KEY]}
          style={{ width: 200, border: 'none' }}
          items={[
            {
              key: ITEM_KEY,
              icon,
              label: text,
              style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
            },
          ]}
        />
      );
    }
    const hoverOnly = status === 'hover';
    return (
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        inlineIndent={24}
        selectedKeys={[]}
        style={{ width: 200, border: 'none' }}
        items={[
          {
            key: ITEM_KEY,
            icon,
            label: text,
            style: hoverOnly ? { backgroundColor: 'rgba(0, 0, 0, 0.06)' } : {},
          },
        ]}
      />
    );
  }

  if (itemType === 'fold') {
    if (focus === 'yes') {
      return (
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed
          inlineIndent={24}
          selectedKeys={[ITEM_KEY]}
          style={{ width: 80, border: 'none' }}
          items={[
            {
              key: ITEM_KEY,
              icon,
              title: text,
              label: text,
              style: { boxShadow: 'inset 0 0 0 2px #1677ff' },
            },
          ]}
        />
      );
    }
    let selectedKeys: string[] = [];
    let itemStyle: CSSProperties = {};
    if (status === 'Default') {
      selectedKeys = [ITEM_KEY];
    } else if (status === 'hover') {
      itemStyle = { backgroundColor: 'rgba(0, 0, 0, 0.06)' };
    }
    return (
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed
        inlineIndent={24}
        selectedKeys={selectedKeys}
        style={{ width: 80, border: 'none' }}
        items={[
          {
            key: ITEM_KEY,
            icon,
            title: text,
            label: text,
            style: itemStyle,
          },
        ]}
      />
    );
  }

  const pad: CSSProperties = { paddingLeft: 32 };
  const box: CSSProperties = { boxShadow: 'inset 0 0 0 2px #1677ff' };

  if (!jumpoff) {
    if (focus === 'no') {
      if (status === 'Default') {
        return (
          <Menu
            mode="inline"
            theme="light"
            inlineCollapsed={false}
            inlineIndent={40}
            selectedKeys={[ITEM_KEY]}
            style={{ width: 200, border: 'none' }}
            items={[
              {
                key: ITEM_KEY,
                icon,
                label: text,
                style: { ...pad, ...box },
              },
            ]}
          />
        );
      }
      if (status === 'hover') {
        return (
          <Menu
            mode="inline"
            theme="light"
            inlineCollapsed={false}
            inlineIndent={40}
            selectedKeys={[]}
            style={{ width: 200, border: 'none' }}
            items={[
              {
                key: ITEM_KEY,
                icon,
                label: text,
                style: { ...pad, backgroundColor: 'rgba(0, 0, 0, 0.06)' },
              },
            ]}
          />
        );
      }
      return (
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          inlineIndent={40}
          selectedKeys={[]}
          style={{ width: 200, border: 'none' }}
          items={[
            {
              key: ITEM_KEY,
              icon,
              label: text,
              style: pad,
            },
          ]}
        />
      );
    }
    return (
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        inlineIndent={40}
        selectedKeys={[ITEM_KEY]}
        style={{ width: 200, border: 'none' }}
        items={[
          {
            key: ITEM_KEY,
            icon,
            label: text,
            style: { ...pad, ...box },
          },
        ]}
      />
    );
  }

  const labelNode = (
    <Space size={8} align="center">
      <span>{text}</span>
      <ExportOutlined />
    </Space>
  );

  if (focus === 'no') {
    if (status === 'Default') {
      return (
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          inlineIndent={40}
          selectedKeys={[ITEM_KEY]}
          style={{ width: 200, border: 'none' }}
          items={[
            {
              key: ITEM_KEY,
              icon,
              label: labelNode,
              style: { ...pad, ...box },
            },
          ]}
        />
      );
    }
    if (status === 'hover') {
      return (
        <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={false}
          inlineIndent={40}
          selectedKeys={[]}
          style={{ width: 200, border: 'none' }}
          items={[
            {
              key: ITEM_KEY,
              icon,
              label: labelNode,
              style: { ...pad, backgroundColor: 'rgba(0, 0, 0, 0.06)' },
            },
          ]}
        />
      );
    }
    return (
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={false}
        inlineIndent={40}
        selectedKeys={[]}
        style={{ width: 200, border: 'none' }}
        items={[
          {
            key: ITEM_KEY,
            icon,
            label: labelNode,
            style: pad,
          },
        ]}
      />
    );
  }

  return (
    <Menu
      mode="inline"
      theme="light"
      inlineCollapsed={false}
      inlineIndent={40}
      selectedKeys={[ITEM_KEY]}
      style={{ width: 200, border: 'none' }}
      items={[
        {
          key: ITEM_KEY,
          icon,
          label: labelNode,
          style: { ...pad, ...box },
        },
      ]}
    />
  );
}

function FigmaMenuItemExample(props: {
  itemType: ItemType;
  focus: Focus;
  status: FigmaStatus;
  jumpoff: boolean;
  text: string;
  icon: React.ReactNode;
}) {
  const { itemType, focus, status, jumpoff, text, icon } = props;
  const menu = useMemo(
    () => buildMenuItemMenu({ itemType, focus, status, jumpoff, text, icon }),
    [itemType, focus, status, jumpoff, text, icon]
  );
  return (
    <div
      style={{
        minWidth: 0,
        width: '100%',
        maxWidth: 320,
        padding: 16,
        background: '#f5f5f5',
        borderRadius: 8,
      }}
    >
      {menu}
    </div>
  );
}

const App: React.FC = () => {
  const [itemType, setItemType] = useState<ItemType>('default');
  const [focus, setFocus] = useState<Focus>('no');
  const [status, setStatus] = useState<FigmaStatus>('Default');
  const [jumpoff, setJumpoff] = useState(false);
  const [text, setText] = useState('Menu item');
  const [iconKey, setIconKey] = useState('overview');

  const icon = ICON_OPTIONS.find(o => o.value === iconKey)?.node ?? <OverviewFilled />;

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 420,
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
          minHeight: 320,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaMenuItemExample
          itemType={itemType}
          focus={focus}
          status={status}
          jumpoff={itemType === 'subitem' ? jumpoff : false}
          text={text}
          icon={icon}
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
          MenuItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={itemType}
              onChange={v => setItemType(v as ItemType)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'fold', label: 'fold' },
                { value: 'subitem', label: 'subitem' },
              ]}
            />
          </div>
          {itemType === 'subitem' ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 12 }}>jumpoff</span>
              <Switch checked={jumpoff} onChange={setJumpoff} />
            </div>
          ) : null}
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>focus</div>
            <Select
              style={{ width: '100%' }}
              value={focus}
              onChange={v => setFocus(v as Focus)}
              options={[
                { value: 'no', label: 'no' },
                { value: 'yes', label: 'yes' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaStatus)}
              options={[
                { value: 'Default', label: 'Default' },
                { value: 'selected', label: 'selected' },
                { value: 'hover', label: 'hover' },
                { value: 'default', label: 'default' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text（figma.string）</div>
            <Input value={text} onChange={e => setText(e.target.value)} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>icon（figma.instance）</div>
            <Select
              style={{ width: '100%' }}
              value={iconKey}
              onChange={v => setIconKey(v as string)}
              options={ICON_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
