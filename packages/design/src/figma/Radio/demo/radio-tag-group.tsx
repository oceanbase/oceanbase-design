import { AwsColored, GoogleCloudColored, TencentCloudColored } from '@oceanbase/icons';
import { Col, Radio, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_RADIOTAGGROUP>` 的 `props` / `example` 一致。
 * `groupRow` 在映射内为 `type` 枚举的三段子树；此处仅切换 `type`，子树与 `index.figma.tsx` 字面量一致。
 */

type GroupRowType = 'text' | 'pic+text' | 'pic';

const GROUP_ROW_TEXT = (
  <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 8 }}>
    <Radio
      value="a"
      style={{
        margin: 0,
        padding: '4px 12px',
        borderRadius: 4,
        border: '1px solid #0d6cf2',
        height: 'auto',
      }}
    >
      <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>item</span>
    </Radio>
    <Radio
      value="b"
      style={{
        margin: 0,
        padding: '4px 12px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        height: 'auto',
      }}
    >
      <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>item</span>
    </Radio>
    <Radio
      value="c"
      disabled
      style={{
        margin: 0,
        padding: '4px 12px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        background: '#f5f7fc',
        height: 'auto',
      }}
    >
      <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>item</span>
    </Radio>
  </Radio.Group>
);

const GROUP_ROW_PIC_TEXT = (
  <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 8 }}>
    <Radio
      value="a"
      style={{
        margin: 0,
        padding: '4px 12px',
        borderRadius: 4,
        border: '1px solid #0d6cf2',
        height: 'auto',
      }}
    >
      <Space size={4} align="center">
        <AwsColored style={{ fontSize: 14 }} />
        <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>AWS</span>
      </Space>
    </Radio>
    <Radio
      value="b"
      style={{
        margin: 0,
        padding: '4px 12px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        height: 'auto',
      }}
    >
      <Space size={4} align="center">
        <GoogleCloudColored style={{ fontSize: 14 }} />
        <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>Google Cloud</span>
      </Space>
    </Radio>
    <Radio
      value="c"
      disabled
      style={{
        margin: 0,
        padding: '4px 12px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        background: '#f5f7fc',
        height: 'auto',
      }}
    >
      <Space size={4} align="center">
        <TencentCloudColored style={{ fontSize: 14 }} />
        <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>Tencent Cloud</span>
      </Space>
    </Radio>
  </Radio.Group>
);

const GROUP_ROW_PIC = (
  <Radio.Group defaultValue="a" style={{ display: 'flex', gap: 8 }}>
    <Radio
      value="a"
      style={{
        margin: 0,
        padding: '16px 32px',
        borderRadius: 4,
        border: '1px solid #0d6cf2',
        height: 'auto',
      }}
    >
      <AwsColored style={{ fontSize: 32 }} />
    </Radio>
    <Radio
      value="b"
      style={{
        margin: 0,
        padding: '16px 32px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        height: 'auto',
      }}
    >
      <GoogleCloudColored style={{ fontSize: 32 }} />
    </Radio>
    <Radio
      value="c"
      disabled
      style={{
        margin: 0,
        padding: '16px 32px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        background: '#f5f7fc',
        height: 'auto',
      }}
    >
      <TencentCloudColored style={{ fontSize: 32, opacity: 0.45 }} />
    </Radio>
  </Radio.Group>
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
