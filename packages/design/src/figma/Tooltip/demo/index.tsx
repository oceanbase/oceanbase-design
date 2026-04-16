import { Col, Input, Row, Select, Space, Tooltip, Typography } from '@oceanbase/design';
import type { TooltipProps } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应。
 * 文档为交互演示省略 `open`（悬停查看）；映射侧为静态 `open` 便于稿面截图。
 */

/** 与 index.figma.tsx 中 `figma.enum('placement', …)` 枚举键一致 */
type FigmaPlacementKey =
  | 'topright'
  | 'topleft'
  | 'bottom'
  | 'bottomright'
  | 'bottomleft'
  | 'right'
  | 'righttop'
  | 'top'
  | 'rightbottom'
  | 'left'
  | 'lefttop'
  | 'leftbottom';

/** 与 index.figma.tsx 中 `figma.enum('placement', …)` 分支字面量一致 */
const PLACEMENT_BY_FIGMA_KEY: Record<FigmaPlacementKey, TooltipProps['placement']> = {
  topright: 'topRight',
  topleft: 'topLeft',
  bottom: 'bottom',
  bottomright: 'bottomRight',
  bottomleft: 'bottomLeft',
  right: 'right',
  righttop: 'rightTop',
  top: 'top',
  rightbottom: 'rightBottom',
  left: 'left',
  lefttop: 'leftTop',
  leftbottom: 'leftBottom',
};

const PLACEMENT_OPTIONS: { value: FigmaPlacementKey; label: string }[] = [
  { value: 'topright', label: 'topright' },
  { value: 'topleft', label: 'topleft' },
  { value: 'bottom', label: 'bottom' },
  { value: 'bottomright', label: 'bottomright' },
  { value: 'bottomleft', label: 'bottomleft' },
  { value: 'right', label: 'right' },
  { value: 'righttop', label: 'righttop' },
  { value: 'top', label: 'top' },
  { value: 'rightbottom', label: 'rightbottom' },
  { value: 'left', label: 'left' },
  { value: 'lefttop', label: 'lefttop' },
  { value: 'leftbottom', label: 'leftbottom' },
];

/** 与 figma.connect example 相同的拼装方式（不传 `open`，避免首屏常驻浮层） */
function FigmaTooltipExample(props: {
  title: React.ReactNode;
  placement: TooltipProps['placement'];
}) {
  const { title, placement } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
        boxSizing: 'border-box',
      }}
    >
      <Tooltip title={title} placement={placement}>
        <span style={{ color: '#1677ff', cursor: 'default' }}>Trigger</span>
      </Tooltip>
    </div>
  );
}

const App: React.FC = () => {
  const [title, setTitle] = useState('text');
  const [placementKey, setPlacementKey] = useState<FigmaPlacementKey>('top');

  const placement = PLACEMENT_BY_FIGMA_KEY[placementKey];

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
        <FigmaTooltipExample title={title} placement={placement} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Tooltip
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="title" />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>placement</div>
            <Select
              style={{ width: '100%' }}
              value={placementKey}
              onChange={v => setPlacementKey(v as FigmaPlacementKey)}
              options={PLACEMENT_OPTIONS}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
