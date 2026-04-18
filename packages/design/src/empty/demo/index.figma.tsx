import { Button, Col, Empty, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应，
 * 便于在文档里用 `layout` + `type` 复现 Figma Component playground 与 Code Connect 的分支组合。
 */

type FigmaEmptyLayout = 'horizontal' | 'vertical';
type FigmaEmptyType = 'component' | 'page';

/** 与 figma.connect example 相同的拼装方式 */
function FigmaEmptyExample(props: {
  layout: FigmaEmptyLayout;
  image: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  const { layout, image, title, description, actions } = props;
  return (
    <Empty layout={layout} image={image} title={title} description={description}>
      {actions}
    </Empty>
  );
}

const App: React.FC = () => {
  const [layout, setLayout] = useState<FigmaEmptyLayout>('vertical');
  const [type, setType] = useState<FigmaEmptyType>('component');

  /** 与 `index.figma.tsx` 中嵌套 `figma.enum` 分支字面量一致（勿手填漂移） */
  const { image, title, description, actions } = useMemo(() => {
    if (layout === 'horizontal') {
      if (type === 'component') {
        return {
          image: Empty.PRESENTED_IMAGE_COLORED,
          title: undefined as React.ReactNode,
          description: 'No data',
          actions: undefined as React.ReactNode,
        };
      }
      return {
        image: Empty.PRESENTED_IMAGE_DATABASE,
        title: 'Create Your Cluster',
        description: 'There is no cluster, welcome to create one!',
        actions: <Button type="primary">Create</Button>,
      };
    }
    if (type === 'component') {
      return {
        image: Empty.PRESENTED_IMAGE_COLORED,
        title: undefined as React.ReactNode,
        description: 'No data',
        actions: undefined as React.ReactNode,
      };
    }
    return {
      image: Empty.PRESENTED_IMAGE_GUIDE,
      title: 'Welcome',
      description: 'Here is the description.Here is the description.',
      actions: (
        <Space size={8}>
          <Button type="primary">Start</Button>
          <Button>Action</Button>
        </Space>
      ),
    };
  }, [layout, type]);

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 420,
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
          minHeight: 320,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaEmptyExample
          layout={layout}
          image={image}
          title={title}
          description={description}
          actions={actions}
        />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Empty
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>layout</div>
            <Select
              style={{ width: '100%' }}
              value={layout}
              onChange={v => setLayout(v as FigmaEmptyLayout)}
              options={[
                { value: 'horizontal', label: 'horizontal' },
                { value: 'vertical', label: 'vertical' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={type}
              onChange={v => setType(v as FigmaEmptyType)}
              options={[
                { value: 'component', label: 'component' },
                { value: 'page', label: 'page' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
