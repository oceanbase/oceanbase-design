import { Col, Divider, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应。
 * 左右两侧的说明文案仅用于预览区排版，不参与 Code Connect；根节点仍为 `Divider`。
 */

type FigmaDividerType = 'horizontal' | 'vertical';

/** 与 figma.connect `example` 相同的拼装方式 */
function FigmaDividerExample(props: { type: FigmaDividerType }) {
  const { type } = props;
  return <Divider type={type} />;
}

const App: React.FC = () => {
  const [type, setType] = useState<FigmaDividerType>('horizontal');

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 320,
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
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 240,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        {type === 'horizontal' ? (
          <div style={{ width: '100%', maxWidth: 420 }}>
            <Typography.Text>Above</Typography.Text>
            <FigmaDividerExample type={type} />
            <Typography.Text>Below</Typography.Text>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Typography.Text>Left</Typography.Text>
            <FigmaDividerExample type={type} />
            <Typography.Text>Right</Typography.Text>
          </div>
        )}
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Divider
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaDividerType)}
              options={[
                { value: 'horizontal', label: 'horizontal' },
                { value: 'vertical', label: 'vertical' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
