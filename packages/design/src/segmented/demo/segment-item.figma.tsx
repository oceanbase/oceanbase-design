import { Col, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_SEGMENTITEM>` 的 `props` / `example` 对齐。
 * Figma 侧为单段「SegmentItem」子组件；代码中无独立导出名，此处用与分段轨道一致的容器 + 单段样式块复现 `text` / `size` / `status`。
 * `index.figma.tsx` 中 `<FIGMA_OCEANBASE_SEGMENTITEM>` 映射为单轨 `Segmented`（`status` + `text` / `size`）；此处为视觉对齐的独立预览。
 */

type FigmaItemSize = 'small' | 'medium';
type FigmaItemStatus = 'selected' | 'default' | 'hover';

const ITEM_BOX_BY_SIZE: Record<FigmaItemSize, CSSProperties> = {
  small: {
    padding: '2px 10px',
    fontSize: 12,
    lineHeight: '20px',
    minHeight: 24,
  },
  medium: {
    padding: '4px 14px',
    fontSize: 14,
    lineHeight: '22px',
    minHeight: 32,
  },
};

const ITEM_SURFACE_BY_STATUS: Record<FigmaItemStatus, CSSProperties> = {
  selected: {
    background: 'var(--ant-color-bg-elevated, #ffffff)',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
    color: 'var(--ant-color-text, rgba(0, 0, 0, 0.88))',
    fontWeight: 500,
  },
  default: {
    background: 'transparent',
    color: 'var(--ant-color-text-secondary, rgba(0, 0, 0, 0.65))',
    fontWeight: 400,
  },
  hover: {
    background: 'var(--ant-color-fill-secondary, rgba(0, 0, 0, 0.06))',
    color: 'var(--ant-color-text, rgba(0, 0, 0, 0.88))',
    fontWeight: 400,
  },
};

function FigmaSegmentItemExample(props: {
  text: string;
  size: FigmaItemSize;
  status: FigmaItemStatus;
}) {
  const { text, size, status } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          padding: 2,
          borderRadius: 6,
          background: 'var(--ant-color-fill-quaternary, #f5f5f5)',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            boxSizing: 'border-box',
            transition: 'background 0.2s',
            ...ITEM_BOX_BY_SIZE[size],
            ...ITEM_SURFACE_BY_STATUS[status],
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [text, setText] = useState('Weekly');
  const [size, setSize] = useState<FigmaItemSize>('medium');
  const [status, setStatus] = useState<FigmaItemStatus>('selected');

  const preview = useMemo(
    () => <FigmaSegmentItemExample text={text} size={size} status={status} />,
    [text, size, status]
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
          SegmentItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Segment label"
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={size}
              onChange={v => setSize(v as FigmaItemSize)}
              options={[
                { value: 'small', label: 'small' },
                { value: 'medium', label: 'medium' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaItemStatus)}
              options={[
                { value: 'selected', label: 'selected' },
                { value: 'default', label: 'default' },
                { value: 'hover', label: 'hover' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
