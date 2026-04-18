import { Col, Input, Row, Select, Space, Switch, Tabs, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_TABSITEM>` 的 `props` / `example` 对齐。
 * 设计侧维度为 `status`（default / selected / disabled）与 `badge`（boolean）；与 `index.figma.tsx` 中嵌套 `figma.enum` + `figma.boolean` 的导出一致，
 * 解构得到 `tabText`、`disabled`、`active`、`badgeCount` 后传入单条 `Tabs.TabPane`。
 */

type FigmaTabStatus = 'default' | 'selected' | 'disabled';

function tabPanePropsFromFigmaDimensions(status: FigmaTabStatus, withBadge: boolean) {
  const disabled = status === 'disabled';
  const active = status === 'selected';
  const badgeCount = withBadge ? 99 : undefined;
  return { disabled, active, badgeCount };
}

function FigmaTabsTabPaneExample(props: {
  tabText: string;
  disabled: boolean;
  active: boolean;
  badgeCount: number | undefined;
}) {
  const { tabText, disabled, active, badgeCount } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={tabText} key="1" disabled={disabled} active={active} badge={badgeCount}>
          Content
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

const App: React.FC = () => {
  const [tabText, setTabText] = useState('Tab001');
  const [status, setStatus] = useState<FigmaTabStatus>('default');
  const [withBadge, setWithBadge] = useState(true);

  const { disabled, active, badgeCount } = useMemo(
    () => tabPanePropsFromFigmaDimensions(status, withBadge),
    [status, withBadge]
  );

  const preview = useMemo(
    () => (
      <FigmaTabsTabPaneExample
        tabText={tabText}
        disabled={disabled}
        active={active}
        badgeCount={badgeCount}
      />
    ),
    [tabText, disabled, active, badgeCount]
  );

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
          TabsItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text（figma.string）</div>
            <Input
              value={tabText}
              onChange={e => setTabText(e.target.value)}
              placeholder="Tab label"
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaTabStatus)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'selected', label: 'selected' },
                { value: 'disabled', label: 'disabled' },
              ]}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>badge</span>
            <Switch checked={withBadge} onChange={setWithBadge} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
