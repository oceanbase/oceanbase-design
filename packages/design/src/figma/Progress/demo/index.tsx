import { Col, Progress, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应，
 * 复现 Figma「Process」的 type（Circle / Line / LineMini）与 status（going / success / error）组合。
 */

/** 与 Figma `type` 枚举键一致 */
type FigmaProcessType = 'Circle' | 'Line' | 'LineMini';

/** 与 Figma `status` 枚举键一致 */
type FigmaProcessStatus = 'going' | 'success' | 'error';

/**
 * 字面量自 `index.figma.tsx` 的 `props.root` 嵌套枚举拷贝，避免与映射漂移。
 */
function buildProgressRoot(type: FigmaProcessType, status: FigmaProcessStatus): React.ReactNode {
  if (type === 'Circle') {
    if (status === 'going') {
      return <Progress type="circle" percent={68} status="active" showInfo size={48} />;
    }
    if (status === 'success') {
      return <Progress type="circle" percent={100} status="success" showInfo size={48} />;
    }
    return <Progress type="circle" percent={100} status="exception" showInfo size={48} />;
  }
  if (type === 'Line') {
    if (status === 'going') {
      return <Progress type="line" percent={50} status="active" showInfo />;
    }
    if (status === 'success') {
      return <Progress type="line" percent={100} status="success" showInfo />;
    }
    return <Progress type="line" percent={100} status="exception" showInfo />;
  }
  if (status === 'going') {
    return <Progress type="line" percent={50} status="active" showInfo size="small" />;
  }
  if (status === 'success') {
    return <Progress type="line" percent={100} status="success" showInfo size="small" />;
  }
  return <Progress type="line" percent={100} status="exception" showInfo size="small" />;
}

/** 与 figma.connect 的 `example` 相同拼装 */
function FigmaProgressExample(props: { root: React.ReactNode }) {
  const { root } = props;
  return <div>{root}</div>;
}

const App: React.FC = () => {
  const [processType, setProcessType] = useState<FigmaProcessType>('Line');
  const [processStatus, setProcessStatus] = useState<FigmaProcessStatus>('going');

  const root = useMemo(
    () => buildProgressRoot(processType, processStatus),
    [processType, processStatus]
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
        <FigmaProgressExample root={root} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Process
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={processType}
              onChange={v => setProcessType(v as FigmaProcessType)}
              options={[
                { value: 'Circle', label: 'Circle' },
                { value: 'Line', label: 'Line' },
                { value: 'LineMini', label: 'LineMini' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={processStatus}
              onChange={v => setProcessStatus(v as FigmaProcessStatus)}
              options={[
                { value: 'going', label: 'going' },
                { value: 'success', label: 'success' },
                { value: 'error', label: 'error' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
