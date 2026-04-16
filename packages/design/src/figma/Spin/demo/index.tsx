import { Col, Row, Select, Space, Spin, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的 props / example 一致。
 * Figma `size=medium` 对应 antd `size="default"`（与映射注释一致）。
 */

/** 与 figma.connect `props.size` 各分支字面量一致 */
const WRAPPER_STYLE: CSSProperties = {
  padding: 24,
  background: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 120,
  boxSizing: 'border-box',
};

type FigmaSpinSizeKey = 'large' | 'medium' | 'small';

const FIGMA_SIZE_TO_SPIN: Record<FigmaSpinSizeKey, 'large' | 'default' | 'small'> = {
  large: 'large',
  medium: 'default',
  small: 'small',
};

/** 与 figma.connect `example` 相同的拼装方式 */
function FigmaSpinExample(props: { size: 'large' | 'default' | 'small' }) {
  const { size } = props;
  return (
    <div style={WRAPPER_STYLE}>
      <Spin spinning size={size} />
    </div>
  );
}

const App: React.FC = () => {
  const [figmaSize, setFigmaSize] = useState<FigmaSpinSizeKey>('medium');

  const size = FIGMA_SIZE_TO_SPIN[figmaSize];

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
        <FigmaSpinExample size={size} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Spin
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={figmaSize}
              onChange={v => setFigmaSize(v as FigmaSpinSizeKey)}
              options={[
                { value: 'large', label: 'large' },
                { value: 'medium', label: 'medium（→ default）' },
                { value: 'small', label: 'small' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
