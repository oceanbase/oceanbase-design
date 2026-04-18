import { Badge, Breadcrumb, Col, Row, Space, Typography } from '@oceanbase/design';
import type { BreadcrumbProps } from '@oceanbase/design';
import React from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_BREADCRUMB>` 的 `props` / `example` 一致。
 * 本条 connect 的 `items` 为映射内静态结构，无 Figma 可变 props；右侧说明与映射对齐方式。
 */

/** 自 `index.figma.tsx` 第一条 `figma.connect` 的 `props.items` 原样复制 */
const FIGMA_BREADCRUMB_ITEMS: BreadcrumbProps['items'] = [
  {
    title: (
      <Space direction="horizontal" size={6}>
        <Typography.Text type="secondary">Org-name</Typography.Text>
      </Space>
    ),
  },
  {
    title: (
      <Space direction="horizontal" size={6}>
        <Typography.Text type="secondary">Project-name</Typography.Text>
      </Space>
    ),
  },
  {
    title: (
      <Space direction="horizontal" size={6}>
        <Badge status="error" />
        <Typography.Text type="secondary">Instance-name</Typography.Text>
      </Space>
    ),
  },
  {
    title: (
      <Space direction="horizontal" size={6}>
        <Badge status="error" />
        <Typography.Text strong>Tenant-name</Typography.Text>
      </Space>
    ),
  },
];

function FigmaBreadcrumbExample(props: { items: BreadcrumbProps['items'] }) {
  const { items } = props;
  return <Breadcrumb separator="/" items={items} />;
}

const App: React.FC = () => (
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
      <FigmaBreadcrumbExample items={FIGMA_BREADCRUMB_ITEMS} />
    </Col>
    <Col
      flex="0 0 280px"
      style={{
        borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        padding: '16px 20px',
      }}
    >
      <Typography.Text type="secondary" style={{ fontSize: 12 }}>
        Breadcrumb
      </Typography.Text>
      <Typography.Paragraph
        type="secondary"
        style={{ fontSize: 12, marginTop: 12, marginBottom: 0 }}
      >
        本条 figma.connect 无独立 Figma 控件维度；左侧 items 与 index.figma.tsx 中静态
        props.items、以及 example 对 Breadcrumb 的传参一致。
      </Typography.Paragraph>
    </Col>
  </Row>
);

export default App;
