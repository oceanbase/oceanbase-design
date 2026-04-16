import { Col, Row, Segmented, Select, Space, Typography } from '@oceanbase/design';
import type { SegmentedProps } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_SEGMENTED>` 的 `props` / `example` 对齐。
 * `index.figma.tsx` 中该条仍为占位（`<></>` + 空 `div`）；此处用真实 `Segmented`，`size` 与 Figma `medium` / `small` 分支语义一致（`medium` → antd `middle`）。
 */

type FigmaSegmentedSize = 'medium' | 'small';

const SIZE_TO_ANTD: Record<FigmaSegmentedSize, NonNullable<SegmentedProps['size']>> = {
  medium: 'middle',
  small: 'small',
};

function FigmaSegmentedExample(props: { size: FigmaSegmentedSize }) {
  const { size } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 80,
        boxSizing: 'border-box',
      }}
    >
      <Segmented size={SIZE_TO_ANTD[size]} options={['Daily', 'Weekly', 'Monthly']} />
    </div>
  );
}

const App: React.FC = () => {
  const [size, setSize] = useState<FigmaSegmentedSize>('medium');

  const preview = useMemo(() => <FigmaSegmentedExample size={size} />, [size]);

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
          Segmented
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={size}
              onChange={v => setSize(v as FigmaSegmentedSize)}
              options={[
                { value: 'medium', label: 'medium' },
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
