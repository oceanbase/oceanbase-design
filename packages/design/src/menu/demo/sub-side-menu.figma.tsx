import { ExportOutlined, ObTenantOutlined } from '@oceanbase/icons';
import { Col, Layout, Menu, Row, Space, Typography } from '@oceanbase/design';
import React from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_SUBSIDEMENU 的 `subSideRoot` / `example` 一致。
 * 映射侧为整段 UI、无离散 Component properties → 右侧面板仅说明，不调参。
 */

function SubSideRoot() {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        width: 200,
        background: '#fbfcfe',
        borderRight: '1px solid #e2e8f3',
        overflow: 'auto',
      }}
    >
      <div style={{ padding: '16px 16px 12px' }}>
        <Typography.Title
          level={5}
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
            color: '#5c6b8a',
          }}
        >
          <Space size={8} align="center">
            <ObTenantOutlined />
            TENANT
          </Space>
        </Typography.Title>
      </div>
      <div style={{ height: 1, margin: '0 0 8px', background: '#e2e8f3' }} aria-hidden />
      <Menu
        className="code-connect-sub-sidebar-menu"
        mode="inline"
        theme="light"
        inlineIndent={40}
        selectedKeys={['overview']}
        style={{ width: 200, border: 'none', background: 'transparent' }}
        items={[
          { key: 'overview', label: 'Overview' },
          {
            key: 'sql-console',
            label: (
              <Space size={8} align="center">
                <span>SQL Console</span>
                <ExportOutlined />
              </Space>
            ),
          },
          { type: 'divider' },
          { key: 'databases', label: 'DataBases' },
          { key: 'powerrag', label: 'PowerRAG' },
          { key: 'manage-access', label: 'Manage Access' },
          { type: 'divider' },
          { key: 'load-data', label: 'Load Data' },
          { key: 'binlog', label: 'Binlog' },
          { type: 'divider' },
          { key: 'metrics', label: 'Metrics' },
          { key: 'diagnostics', label: 'Diagnostics' },
          { key: 'resource-isolation', label: 'Resource Isolation' },
          { type: 'divider' },
          { key: 'backup', label: 'Backup' },
          { key: 'parameters', label: 'Parameters' },
          { key: 'security', label: 'Security' },
          { key: 'recycle-bin', label: 'Recycle Bin' },
        ]}
      />
    </Layout>
  );
}

const App: React.FC = () => (
  <Row
    wrap={false}
    gutter={0}
    style={{
      minHeight: 400,
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
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 360,
        padding: 16,
        background: 'var(--ant-color-fill-quaternary, #fafafa)',
        overflow: 'auto',
      }}
    >
      <div style={{ display: 'flex', maxHeight: 480, overflow: 'auto' }}>
        <SubSideRoot />
      </div>
    </Col>
    <Col
      flex="0 0 280px"
      style={{
        borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        padding: '16px 20px',
      }}
    >
      <Typography.Text type="secondary" style={{ fontSize: 12 }}>
        SubSideMenu
      </Typography.Text>
      <Typography.Paragraph
        type="secondary"
        style={{ marginTop: 12, fontSize: 12, marginBottom: 0 }}
      >
        Figma 侧无离散组件属性；此处与 `subSideRoot` 整段 UI 一致，无额外控件。
      </Typography.Paragraph>
    </Col>
  </Row>
);

export default App;
