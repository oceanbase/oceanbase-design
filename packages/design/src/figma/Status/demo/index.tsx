import { Badge, Col, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import type { BadgeProps } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect`（`<FIGMA_OCEANBASE_STATUS>`）的
 * `props` / `example` 一致。Figma `type` 在映射中拆成 Badge 的 `status` 与 `color` 两路分支。
 */

/** Figma `size`：medium → Badge `default`，small → `small` */
type FigmaSizeKey = 'medium' | 'small';

/** Figma 组件属性 `type` 的枚举键（与 `figma.enum('type', …)` 一致） */
type FigmaTypeKey = 'alert' | 'error' | 'info' | 'success' | 'terminate' | 'loading';

/** 与 `index.figma.tsx` 中 `status: figma.enum('type', …)` 字面量一致 */
const STATUS_BY_TYPE: Record<FigmaTypeKey, BadgeProps['status']> = {
  alert: 'warning',
  error: 'error',
  info: undefined,
  success: 'success',
  terminate: 'default',
  loading: 'processing',
};

/** 与 `index.figma.tsx` 中 `color: figma.enum('type', …)` 字面量一致 */
const COLOR_BY_TYPE: Record<FigmaTypeKey, string | undefined> = {
  alert: undefined,
  error: undefined,
  info: '#1677ff',
  success: undefined,
  terminate: undefined,
  loading: undefined,
};

/** 与 figma.connect `example` 相同的拼装方式 */
function FigmaStatusExample(props: {
  text: string;
  size: 'default' | 'small';
  status: BadgeProps['status'];
  color?: string;
}) {
  const { text, size, status, color } = props;
  return <Badge text={text} size={size} status={status} color={color} />;
}

const App: React.FC = () => {
  const [text, setText] = useState('Status');
  const [figmaSize, setFigmaSize] = useState<FigmaSizeKey>('medium');
  const [figmaType, setFigmaType] = useState<FigmaTypeKey>('info');

  const size: 'default' | 'small' = figmaSize === 'medium' ? 'default' : 'small';

  const { status, color } = useMemo(
    () => ({
      status: STATUS_BY_TYPE[figmaType],
      color: COLOR_BY_TYPE[figmaType],
    }),
    [figmaType]
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
        <FigmaStatusExample text={text} size={size} status={status} color={color} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Status
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input value={text} onChange={e => setText(e.target.value)} placeholder="text" />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={figmaSize}
              onChange={v => setFigmaSize(v as FigmaSizeKey)}
              options={[
                { value: 'medium', label: 'medium' },
                { value: 'small', label: 'small' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={figmaType}
              onChange={v => setFigmaType(v as FigmaTypeKey)}
              options={[
                { value: 'alert', label: 'alert' },
                { value: 'error', label: 'error' },
                { value: 'info', label: 'info' },
                { value: 'success', label: 'success' },
                { value: 'terminate', label: 'terminate' },
                { value: 'loading', label: 'loading' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
