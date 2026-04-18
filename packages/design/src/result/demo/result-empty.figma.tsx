import {
  Button,
  Col,
  Flex,
  Result,
  Row,
  Select,
  Skeleton,
  Space,
  Typography,
} from '@oceanbase/design';
import { EllipsisCircleFilled } from '@oceanbase/icons';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `FIGMA_OCEANBASE_RESULTEMPTY` 的 props / example 一一对应。
 * `emptyNode` 各分支 JSX 与映射内字面量一致；稿面装饰性样式可在此文件维护（§3.4a）。
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
          icon={<Skeleton.Avatar active size={160} shape="square" />}
          title="Create Instance"
          subTitle="Here is the description.Here is the description."
          extra={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button>Button</Button>
              <Button icon={<EllipsisCircleFilled />} />
            </Space>
          }
        />
      );
    case '欢迎使用':
      return (
        <Flex gap={32} align="center">
          <Skeleton.Avatar active size={160} shape="round" />
          <Flex vertical flex="1">
            <Result
              title="Welcome"
              subTitle="Here is the description.Here is the description."
              extra={
                <Space size={8}>
                  <Button type="primary">Button</Button>
                  <Button>Button</Button>
                  <Button icon={<EllipsisCircleFilled />} />
                </Space>
              }
            />
          </Flex>
        </Flex>
      );
    case '区块无数据':
      return (
        <Result
          icon={<Skeleton.Avatar active size={56} shape="square" />}
          title={<Typography.Text type="secondary">No data.</Typography.Text>}
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
