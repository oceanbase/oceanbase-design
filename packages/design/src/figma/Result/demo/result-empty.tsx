import { Button, Col, Result, Row, Select, Space, Typography } from '@oceanbase/design';
import { EllipsisCircleFilled } from '@oceanbase/icons';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `FIGMA_OCEANBASE_RESULTEMPTY` 的 props / example 一一对应。
 * `emptyNode` 各分支 JSX 与映射内字面量一致。
 */

type EmptyStatusKey = '页面无数据' | '欢迎使用' | '区块无数据';

/** 与 figma.connect example 相同的拼装方式 */
function FigmaResultEmptyExample(props: { emptyNode: React.ReactNode }) {
  const { emptyNode } = props;
  return <div>{emptyNode}</div>;
}

function buildEmptyNode(key: EmptyStatusKey): React.ReactNode {
  switch (key) {
    case '页面无数据':
      return (
        <Result
          icon={
            <div
              style={{
                width: 160,
                height: 160,
                margin: '0 auto',
                borderRadius: 8,
                background: 'linear-gradient(145deg, #e8eef8 0%, #f5f7fb 100%)',
              }}
            />
          }
          title="Create Instance"
          subTitle="Here is the description.Here is the description."
          extra={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button>Button</Button>
              <Button icon={<EllipsisCircleFilled style={{ fontSize: 16, color: '#132039' }} />} />
            </Space>
          }
          style={{ padding: 24, background: '#ffffff', width: 320, borderRadius: 8 }}
        />
      );
    case '欢迎使用':
      return (
        <div
          style={{
            display: 'flex',
            gap: 32,
            alignItems: 'center',
            padding: 24,
            background: '#ffffff',
            borderRadius: 8,
            width: 500,
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              flexShrink: 0,
              borderRadius: 15.48,
              background: '#0082ff',
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <Result
              title="Welcome"
              subTitle="Here is the description.Here is the description."
              extra={
                <Space size={8}>
                  <Button type="primary">Button</Button>
                  <Button>Button</Button>
                  <Button
                    icon={<EllipsisCircleFilled style={{ fontSize: 16, color: '#132039' }} />}
                  />
                </Space>
              }
              style={{ padding: 0, background: 'transparent' }}
            />
          </div>
        </div>
      );
    case '区块无数据':
      return (
        <Result
          icon={
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 4,
                background: '#e8eef8',
              }}
            />
          }
          title={
            <span style={{ color: '#8592ad', fontSize: 14, lineHeight: '20px' }}>No data.</span>
          }
          style={{ padding: 8, width: 200, boxSizing: 'border-box' }}
        />
      );
    default:
      return null;
  }
}

const App: React.FC = () => {
  const [emptyKey, setEmptyKey] = useState<EmptyStatusKey>('页面无数据');

  const emptyNode = useMemo(() => buildEmptyNode(emptyKey), [emptyKey]);

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
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 320,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaResultEmptyExample emptyNode={emptyNode} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          ResultEmpty
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={emptyKey}
              onChange={v => setEmptyKey(v as EmptyStatusKey)}
              options={[
                { value: '页面无数据', label: '页面无数据' },
                { value: '欢迎使用', label: '欢迎使用' },
                { value: '区块无数据', label: '区块无数据' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
