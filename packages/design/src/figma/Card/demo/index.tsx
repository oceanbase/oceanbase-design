import { EllipsisOutlined } from '@ant-design/icons';
import { Badge, Button, Card, Col, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import { DatasyncFilled } from '@oceanbase/icons';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一致
 *（`collapsible` / `tabs` / `fliters` 三个稿面维度）。
 */

const CARD_EXTRA = (
  <Space size={8}>
    <Button type="primary">Button</Button>
    <Button type="default" style={{ borderColor: '#0d6cf2', color: '#0d6cf2' }}>
      Button
    </Button>
    <Button>Button</Button>
    <Button icon={<EllipsisOutlined />} />
  </Space>
);

function tabListForVariant(fliters: boolean) {
  if (fliters) {
    return [
      { key: 'tab1', tab: 'Tab001', tag: 99 },
      { key: 'tab2', tab: 'Tab002' },
      { key: 'tab3', tab: 'Tab003', disabled: true },
      { key: 'tab4', tab: 'Tab004' },
    ];
  }
  return [
    {
      key: 'tab1',
      tab: 'Tab001',
      tag: <Badge dot color="#ff4d4f" size="small" />,
    },
    { key: 'tab2', tab: 'Tab002' },
    { key: 'tab3', tab: 'Tab003', disabled: true },
    { key: 'tab4', tab: 'Tab004' },
  ];
}

const FILTER_TOOLBAR = (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 16,
    }}
  >
    <Space size={8} wrap>
      <Input.Search placeholder="Search" style={{ width: 264 }} allowClear />
      <Select
        placeholder="Status"
        style={{ width: 120 }}
        options={[{ value: 'all', label: 'Status' }]}
      />
      <Button>Filters</Button>
    </Space>
    <Space size={8}>
      <Button>Button</Button>
      <Button icon={<EllipsisOutlined />} />
      <Button icon={<DatasyncFilled />} />
    </Space>
  </div>
);

/** 与 `index.figma.tsx` 中 `example` 回调相同的拼装 */
function FigmaCardExample(props: { collapsible: boolean; tabs: boolean; fliters: boolean }) {
  const { collapsible, tabs, fliters } = props;

  if (collapsible && !tabs && !fliters) {
    return (
      <Card
        title="Title"
        extra={CARD_EXTRA}
        collapsible
        defaultCollapsed={false}
        divided
        style={{ width: '100%', minHeight: 360 }}
      >
        <div style={{ minHeight: 240 }} />
      </Card>
    );
  }

  if (!collapsible && tabs && !fliters) {
    return (
      <Card
        tabList={tabListForVariant(false)}
        activeTabKey="tab2"
        onTabChange={() => {}}
        tabBarExtraContent={CARD_EXTRA}
        divided
        style={{ width: '100%', minHeight: 360 }}
      >
        <div style={{ minHeight: 240 }} />
      </Card>
    );
  }

  if (!collapsible && tabs && fliters) {
    return (
      <Card
        tabList={tabListForVariant(true)}
        activeTabKey="tab2"
        onTabChange={() => {}}
        tabBarExtraContent={CARD_EXTRA}
        divided
        style={{ width: '100%', minHeight: 360 }}
      >
        {FILTER_TOOLBAR}
        <div style={{ minHeight: 200 }} />
      </Card>
    );
  }

  return (
    <Card title="Title" extra={CARD_EXTRA} divided style={{ width: '100%', minHeight: 360 }}>
      <div style={{ minHeight: 240 }} />
    </Card>
  );
}

const App: React.FC = () => {
  const [collapsible, setCollapsible] = useState(true);
  const [tabs, setTabs] = useState(false);
  const [fliters, setFliters] = useState(false);

  const preview = useMemo(
    () => <FigmaCardExample collapsible={collapsible} tabs={tabs} fliters={fliters} />,
    [collapsible, tabs, fliters]
  );

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
          minHeight: 380,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        {preview}
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Card
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>collapsible</div>
            <Select
              style={{ width: '100%' }}
              value={collapsible ? 'true' : 'false'}
              onChange={v => setCollapsible(v === 'true')}
              options={[
                { value: 'false', label: 'false' },
                { value: 'true', label: 'true' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>tabs</div>
            <Select
              style={{ width: '100%' }}
              value={tabs ? 'true' : 'false'}
              onChange={v => setTabs(v === 'true')}
              options={[
                { value: 'false', label: 'false' },
                { value: 'true', label: 'true' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>fliters</div>
            <Select
              style={{ width: '100%' }}
              value={fliters ? 'true' : 'false'}
              onChange={v => setFliters(v === 'true')}
              options={[
                { value: 'false', label: 'false' },
                { value: 'true', label: 'true' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
