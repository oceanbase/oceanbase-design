import { AwsColored } from '@oceanbase/icons';
import { Col, Input, Radio, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_RADIOTAG>` 的 `props` / `example` 一致。
 * `type` × `checked` × `disabled` 分支与 `index.figma.tsx` 中字面量一致；`text` 对齐 `figma.string('text')`。
 */

type TagType = 'text' | 'pic+text' | 'pic';

function buildTagExample(
  type: TagType,
  checkedYes: boolean,
  disabledBool: boolean,
  text: string
): React.ReactNode {
  if (type === 'text') {
    if (checkedYes) {
      if (disabledBool) {
        return (
          <span
            style={{
              margin: 0,
              display: 'inline-flex',
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              background: '#cdd5e4',
            }}
          >
            <span style={{ color: '#8592ad', fontSize: 14, lineHeight: '20px' }}>{text}</span>
          </span>
        );
      }
      return (
        <span
          style={{
            margin: 0,
            display: 'inline-flex',
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #0d6cf2',
            background: '#ffffff',
          }}
        >
          <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>{text}</span>
        </span>
      );
    }
    if (disabledBool) {
      return (
        <span
          style={{
            margin: 0,
            display: 'inline-flex',
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #cdd5e4',
            background: '#f5f7fc',
          }}
        >
          <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>{text}</span>
        </span>
      );
    }
    return (
      <span
        style={{
          margin: 0,
          display: 'inline-flex',
          padding: '4px 12px',
          borderRadius: 4,
          border: '1px solid #cdd5e4',
          background: '#ffffff',
        }}
      >
        <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>{text}</span>
      </span>
    );
  }

  if (type === 'pic+text') {
    if (checkedYes) {
      if (disabledBool) {
        return (
          <span
            style={{
              margin: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 4,
              padding: '4px 12px',
              borderRadius: 4,
              border: '1px solid #cdd5e4',
              background: '#cdd5e4',
            }}
          >
            <AwsColored style={{ fontSize: 14 }} />
            <span style={{ color: '#8592ad', fontSize: 14, lineHeight: '20px' }}>{text}</span>
          </span>
        );
      }
      return (
        <span
          style={{
            margin: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #0d6cf2',
            background: '#ffffff',
          }}
        >
          <AwsColored style={{ fontSize: 14 }} />
          <span style={{ color: '#0d6cf2', fontSize: 14, lineHeight: '20px' }}>{text}</span>
        </span>
      );
    }
    if (disabledBool) {
      return (
        <span
          style={{
            margin: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '4px 12px',
            borderRadius: 4,
            border: '1px solid #cdd5e4',
            background: '#f5f7fc',
          }}
        >
          <AwsColored style={{ fontSize: 14 }} />
          <span style={{ color: '#b6c0d4', fontSize: 14, lineHeight: '20px' }}>{text}</span>
        </span>
      );
    }
    return (
      <span
        style={{
          margin: 0,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          padding: '4px 12px',
          borderRadius: 4,
          border: '1px solid #cdd5e4',
          background: '#ffffff',
        }}
      >
        <AwsColored style={{ fontSize: 14 }} />
        <span style={{ color: '#132039', fontSize: 14, lineHeight: '20px' }}>{text}</span>
      </span>
    );
  }

  /* pic */
  if (checkedYes) {
    if (disabledBool) {
      return (
        <span
          style={{
            margin: 0,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 32px',
            borderRadius: 4,
            border: '1px solid #cdd5e4',
            background: '#cdd5e4',
          }}
        >
          <AwsColored style={{ fontSize: 32 }} />
        </span>
      );
    }
    return (
      <span
        style={{
          margin: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 32px',
          borderRadius: 4,
          border: '1px solid #0d6cf2',
          background: '#ffffff',
        }}
      >
        <AwsColored style={{ fontSize: 32 }} />
      </span>
    );
  }
  if (disabledBool) {
    return (
      <span
        style={{
          margin: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px 32px',
          borderRadius: 4,
          border: '1px solid #cdd5e4',
          background: '#f5f7fc',
        }}
      >
        <AwsColored style={{ fontSize: 32, opacity: 0.45 }} />
      </span>
    );
  }
  return (
    <span
      style={{
        margin: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 32px',
        borderRadius: 4,
        border: '1px solid #cdd5e4',
        background: '#ffffff',
      }}
    >
      <AwsColored style={{ fontSize: 32 }} />
    </span>
  );
}

function FigmaRadioTagExample(props: {
  checked: boolean;
  tagExample: React.ReactNode;
  onCheckedChange: (checked: boolean) => void;
}) {
  const { checked, tagExample, onCheckedChange } = props;
  return (
    <Radio
      checked={checked}
      onChange={e => onCheckedChange(e.target.checked)}
      style={{ margin: 0, height: 'auto', alignItems: 'flex-start' }}
    >
      {tagExample}
    </Radio>
  );
}

const App: React.FC = () => {
  const [tagType, setTagType] = useState<TagType>('text');
  const [checkedYes, setCheckedYes] = useState(true);
  const [disabledBool, setDisabledBool] = useState(false);
  const [text, setText] = useState('Label');

  const tagExample = useMemo(
    () => buildTagExample(tagType, checkedYes, disabledBool, text),
    [tagType, checkedYes, disabledBool, text]
  );

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
        <FigmaRadioTagExample
          checked={checkedYes}
          tagExample={tagExample}
          onCheckedChange={setCheckedYes}
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
          RadioTag
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>type</div>
            <Select
              style={{ width: '100%' }}
              value={tagType}
              onChange={v => setTagType(v as TagType)}
              options={[
                { value: 'text', label: 'text' },
                { value: 'pic+text', label: 'pic+text' },
                { value: 'pic', label: 'pic' },
              ]}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>checked</span>
            <Switch
              checked={checkedYes}
              onChange={setCheckedYes}
              checkedChildren="yes"
              unCheckedChildren="no"
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>disabled</span>
            <Switch checked={disabledBool} onChange={setDisabledBool} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input value={text} onChange={e => setText(e.target.value)} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
