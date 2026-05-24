import { Col, Input, Row, Select, Space, Steps, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect(Steps.Step, '<FIGMA_OCEANBASE_STEPITEM>')` 的
 * `props`（`status`）与 `example` 拼装一致；标题字面量 `Node`。Figma `current` → antd `process`。
 */

type StepStatusCode = 'wait' | 'finish' | 'process';

/** 与 figma.connect example 相同的拼装方式 */
function FigmaStepItemExample(props: { status: StepStatusCode; title: string }) {
  const { status, title } = props;
  return (
    <Steps current={0}>
      <Steps.Step title={title} status={status} />
    </Steps>
  );
}

const App: React.FC = () => {
  const [status, setStatus] = useState<StepStatusCode>('process');
  const [title, setTitle] = useState('Node');

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
        <FigmaStepItemExample status={status} title={title} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          StepItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>title（示例字面量，与映射一致）</div>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Node" />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as StepStatusCode)}
              options={[
                { value: 'wait', label: 'wait' },
                { value: 'finish', label: 'finish' },
                { value: 'process', label: 'current' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
