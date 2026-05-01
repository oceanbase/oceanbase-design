import { AwsColored, GoogleCloudColored, TencentCloudColored } from '@oceanbase/icons';
import { Col, Radio, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_RADIOTAGGROUP>` 的 `props` / `example` 一致。
 * `groupRow` 在映射内为 `type` 枚举的三段子树；此处与 `index.figma.tsx` 使用相同的 `options` 字面量。
 */

type GroupRowType = 'text' | 'pic+text' | 'pic';

const GROUP_ROW_TEXT = (
  <Radio.Group
    defaultValue="a"
    options={[
      { label: 'item', value: 'a' },
      { label: 'item', value: 'b' },
      { label: 'item', value: 'c', disabled: true },
    ]}
  />
);

const GROUP_ROW_PIC_TEXT = (
  <Radio.Group
    defaultValue="a"
    options={[
      {
        label: (
          <Space size={4} align="center">
            <AwsColored />
            <Typography.Text>AWS</Typography.Text>
          </Space>
        ),
        value: 'a',
      },
      {
        label: (
          <Space size={4} align="center">
            <GoogleCloudColored />
            <Typography.Text>Google Cloud</Typography.Text>
          </Space>
        ),
        value: 'b',
      },
      {
        label: (
          <Space size={4} align="center">
            <TencentCloudColored />
            <Typography.Text type="secondary">Tencent Cloud</Typography.Text>
          </Space>
        ),
        value: 'c',
        disabled: true,
      },
    ]}
  />
);

const GROUP_ROW_PIC = (
  <Radio.Group
    defaultValue="a"
    options={[
      { label: <AwsColored />, value: 'a' },
      { label: <GoogleCloudColored />, value: 'b' },
      { label: <TencentCloudColored />, value: 'c', disabled: true },
    ]}
  />
);

function FigmaRadioTagGroupExample(props: { groupRow: React.ReactNode }) {
  return <>{props.groupRow}</>;
}

const App: React.FC = () => {
  const [rowType, setRowType] = useState<GroupRowType>('text');

  const groupRow =
    rowType === 'text'
      ? GROUP_ROW_TEXT
      : rowType === 'pic+text'
        ? GROUP_ROW_PIC_TEXT
        : GROUP_ROW_PIC;

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
        <FigmaRadioTagGroupExample groupRow={groupRow} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          RadioTagGroup
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={rowType}
              onChange={v => setRowType(v as GroupRowType)}
              options={[
                { value: 'text', label: 'text' },
                { value: 'pic+text', label: 'pic+text' },
                { value: 'pic', label: 'pic' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
