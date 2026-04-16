import { Col, ConfigProvider, Row, Select, Skeleton, Space, Typography } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应。
 * Figma `type` 当前枚举仅 `default` 一档；控件保留以便与设计稿 Component properties 对齐。
 */

/** 与 index.figma.tsx example 中 `theme` 字面量一致 */
const SKELETON_THEME = {
  components: {
    Skeleton: {
      gradientFromColor: '#e2e8f3',
      gradientToColor: '#d4dbe8',
      paragraphLiHeight: 16,
      blockRadius: 2,
    },
  },
};

const WRAPPER_STYLE: CSSProperties = {
  width: 235,
  minHeight: 139,
  padding: 13,
  boxSizing: 'border-box',
  background: '#ffffff',
};

type FigmaSkeletonType = 'default';

/** 与 figma.connect example 相同的拼装方式 */
function FigmaSkeletonExample(props: { type: FigmaSkeletonType }) {
  const { type } = props;
  return (
    <ConfigProvider theme={SKELETON_THEME}>
      <div style={WRAPPER_STYLE}>
        <Skeleton
          key={type}
          active
          title={false}
          paragraph={{ rows: 4, width: ['91px', '100%', '100%', '146px'] }}
          style={{ width: 209 }}
        />
      </div>
    </ConfigProvider>
  );
}

const App: React.FC = () => {
  const [type, setType] = useState<FigmaSkeletonType>('default');

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
        <FigmaSkeletonExample type={type} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Skeleton
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaSkeletonType)}
              options={[{ value: 'default', label: 'default' }]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
