import { Col, Row, Space, Steps, Typography } from '@oceanbase/design';
import React from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect(Steps, '<FIGMA_OCEANBASE_STEPS>')` 的 `root` 静态拼装一致（四步标题占位 `Node`）。
 */

function FigmaStepsExample() {
  return (
    <Steps>
      <Steps.Step title="Node" status="finish" />
      <Steps.Step title="Node" status="process" />
      <Steps.Step title="Node" status="wait" />
      <Steps.Step title="Node" status="wait" />
    </Steps>
  );
}

const App: React.FC = () => {
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
        <FigmaStepsExample />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Steps
        </Typography.Text>
        <Space direction="vertical" size={12} style={{ width: '100%', marginTop: 12 }}>
          <Typography.Text type="secondary" style={{ fontSize: 12, lineHeight: 1.6 }}>
            映射为整段 <code>Steps</code>（<code>props.root</code>），标题占位 <code>Node</code>；与{' '}
            <code>example</code> 一致。
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
