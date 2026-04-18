import { Col, Row, Select, Space, Typography } from '@oceanbase/design';
import { ObTenantOutlined } from '@oceanbase/icons';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_MENUTITLE 的 `titleNode` / `example` 一致。
 */

function FigmaMenuTitleExample(props: { type: 'default' | 'subtitle' }) {
  const { type } = props;
  if (type === 'subtitle') {
    return (
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
    );
  }
  return (
    <Typography.Title
      level={5}
      style={{
        margin: 0,
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '20px',
        letterSpacing: '0.06em',
        color: '#8b9bb8',
        textTransform: 'uppercase',
      }}
    >
      DATA SERVICE
    </Typography.Title>
  );
}

const App: React.FC = () => {
  const [type, setType] = useState<'default' | 'subtitle'>('default');

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
        <div style={{ padding: 16, background: '#f5f8ff', borderRadius: 8, maxWidth: 400 }}>
          <FigmaMenuTitleExample type={type} />
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
          MenuTitle
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as 'default' | 'subtitle')}
              options={[
                { value: 'default', label: 'default' },
                { value: 'subtitle', label: 'subtitle' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
