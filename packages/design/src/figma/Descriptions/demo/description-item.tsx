import { QuestionCircleOutlined } from '@ant-design/icons';
import { Col, Descriptions, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { CSSProperties, ReactNode } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中第二条 `figma.connect`（DescriptionItem）的 props / example 一致。
 * `layout` + `info`（Figma 布尔名）共同决定 `styles`；`label` 在 info 为 true 时为带图标的节点。
 * 外层包一层 `Descriptions` 仅为文档中可渲染子项；Code Connect 的 example 根节点为 `Descriptions.Item`。
 */

type Layout = 'horizontal' | 'vertical';

function getItemLabelAndStyles(layout: Layout, info: boolean) {
  if (layout === 'horizontal') {
    const styles = info
      ? {
          label: { color: '#5c6b8a', fontSize: 14, lineHeight: '20px' },
          content: {
            color: '#132039',
            fontSize: 14,
            lineHeight: '20px',
            whiteSpace: 'nowrap' as const,
          },
        }
      : {
          label: { color: '#5c6b8a', fontSize: 14, lineHeight: '20px' },
          content: {
            color: '#132039',
            fontSize: 14,
            lineHeight: '20px',
            whiteSpace: 'nowrap' as const,
          },
        };
    const label = info ? (
      <Space size={4} align="center">
        <span>label</span>
        <QuestionCircleOutlined style={{ fontSize: 16, color: '#8c8c8c' }} />
      </Space>
    ) : (
      'label'
    );
    return { label, styles };
  }
  const styles = info
    ? {
        label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px' },
        content: {
          color: '#132039',
          fontSize: 14,
          lineHeight: '20px',
          display: 'block' as const,
          width: '100%',
        },
      }
    : {
        label: { color: '#5c6b8a', fontSize: 12, lineHeight: '20px' },
        content: {
          color: '#132039',
          fontSize: 14,
          lineHeight: '20px',
          display: 'block' as const,
          width: '100%',
        },
      };
  const label = info ? (
    <Space size={4} align="center">
      <span>label</span>
      <QuestionCircleOutlined style={{ fontSize: 16, color: '#8c8c8c' }} />
    </Space>
  ) : (
    'label'
  );
  return { label, styles };
}

/** 与 figma.connect example 相同的拼装方式（根节点为 Descriptions.Item） */
function FigmaDescriptionItemExample(props: {
  label: ReactNode;
  styles: { label: CSSProperties; content: CSSProperties };
}) {
  const { label, styles } = props;
  return (
    <Descriptions.Item label={label} styles={styles}>
      caption
    </Descriptions.Item>
  );
}

const App: React.FC = () => {
  const [layout, setLayout] = useState<Layout>('horizontal');
  const [info, setInfo] = useState(true);

  const { label, styles } = useMemo(() => getItemLabelAndStyles(layout, info), [layout, info]);

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
        <Descriptions bordered={false} column={1} layout={layout}>
          <FigmaDescriptionItemExample label={label} styles={styles} />
        </Descriptions>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          DescriptionItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>layout</div>
            <Select
              style={{ width: '100%' }}
              value={layout}
              onChange={v => setLayout(v as Layout)}
              options={[
                { value: 'horizontal', label: 'horizontal' },
                { value: 'vertical', label: 'vertical' },
              ]}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>info</span>
            <Switch checked={info} onChange={setInfo} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
