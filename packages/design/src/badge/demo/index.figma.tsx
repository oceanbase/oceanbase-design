import { Badge, Col, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中第三条 `figma.connect`（`<FIGMA_OCEANBASE_BADGE>`）的
 * `props` / `example` 一致。前两条仅静态 `row` 的 connect 不在此交互复现。
 */

/** Figma `size`：medium → antd Badge `default`，small → `small` */
type FigmaSizeKey = 'medium' | 'small';

function FigmaBadgeExample(props: {
  dot: boolean;
  size: 'default' | 'small';
  count?: number;
  color: string;
}) {
  const { dot, size, count, color } = props;
  return <Badge dot={dot} count={count} size={size} color={color} />;
}

/** 与 `index.figma.tsx` 中 `count` / `color` 的嵌套 `figma.enum` 分支一致 */
function deriveCountAndColor(
  dot: boolean,
  figmaSize: FigmaSizeKey
): { count: number | undefined; color: string } {
  if (dot) {
    return { count: undefined, color: '#ff4d4f' };
  }
  if (figmaSize === 'small') {
    return { count: 5, color: '#eb4242' };
  }
  return { count: 99, color: '#ebeff7' };
}

const App: React.FC = () => {
  const [dotStr, setDotStr] = useState<'false' | 'true'>('false');
  const [figmaSize, setFigmaSize] = useState<FigmaSizeKey>('medium');

  const dot = dotStr === 'true';
  const size: 'default' | 'small' = figmaSize === 'medium' ? 'default' : 'small';

  const { count, color } = useMemo(() => deriveCountAndColor(dot, figmaSize), [dot, figmaSize]);

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
        <FigmaBadgeExample dot={dot} size={size} count={count} color={color} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Badge
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>dot</div>
            <Select
              style={{ width: '100%' }}
              value={dotStr}
              onChange={v => setDotStr(v as 'false' | 'true')}
              options={[
                { value: 'false', label: 'false' },
                /** 设计稿枚举键拼写为 ture */
                { value: 'true', label: 'ture' },
              ]}
            />
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
        </Space>
      </Col>
    </Row>
  );
};

export default App;
