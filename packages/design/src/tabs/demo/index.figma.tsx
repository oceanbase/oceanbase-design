import { Col, Row, Space, Switch, Tabs, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_TABS>` 的 `props` / `example` 对齐。
 * Figma `divider` 枚举键为 typo「ture」与「false」，面板用布尔 `divider` 语义等价；Switch 标签侧写「ture」以对应设计稿拼写。
 */

function FigmaTabsExample(props: { divider: boolean }) {
  const { divider } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Tabs divider={divider} defaultActiveKey="2">
        <Tabs.TabPane tab="Tab001" key="1" badge={99}>
          Content
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab002" key="2" active>
          Content
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab003" key="3" disabled>
          Content
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab004" key="4">
          Content
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

const App: React.FC = () => {
  /** 对应 Figma `divider`：`ture` → true，`false` → false */
  const [divider, setDivider] = useState(true);

  const preview = useMemo(() => <FigmaTabsExample divider={divider} />, [divider]);

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
          Tabs
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>divider（Figma: ture / false）</span>
            <Switch checked={divider} onChange={setDivider} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
