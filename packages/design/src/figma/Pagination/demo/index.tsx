import { Col, Pagination, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中唯一一条 `figma.connect` 的
 * `props.size`（`figma.enum('size', { medium: 'default' })`）与 `example` 拼装一致。
 * Figma 当前仅 `medium` 一档；面板枚举键与映射一致，便于设计稿扩展后同步加选项。
 */

/** 与 `index.figma.tsx` 中 `figma.enum('size', …)` 分支字面量一致 */
const PAGINATION_SIZE_BY_FIGMA = {
  medium: 'default',
} as const;

type FigmaPaginationSizeKey = keyof typeof PAGINATION_SIZE_BY_FIGMA;

/** 与 figma.connect 的 `example` 传参一致 */
function FigmaPaginationExample(props: {
  size: (typeof PAGINATION_SIZE_BY_FIGMA)[FigmaPaginationSizeKey];
}) {
  const { size } = props;
  return (
    <Pagination
      size={size}
      total={500}
      current={7}
      pageSize={10}
      showTotal={total => 'Total ' + total + ' items'}
      showSizeChanger
    />
  );
}

const App: React.FC = () => {
  const [figmaSize, setFigmaSize] = useState<FigmaPaginationSizeKey>('medium');
  const size = PAGINATION_SIZE_BY_FIGMA[figmaSize];

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
        <FigmaPaginationExample size={size} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Pagination
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={figmaSize}
              onChange={v => setFigmaSize(v as FigmaPaginationSizeKey)}
              options={[{ value: 'medium', label: 'medium' }]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
