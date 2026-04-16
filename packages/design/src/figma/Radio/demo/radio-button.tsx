import { OceanbaseColored } from '@oceanbase/icons';
import { Col, Input, Radio, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { RadioChangeEvent } from '@oceanbase/design';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `<FIGMA_OCEANBASE_RADIOBUTTON>` 的 `props` / `example` 一致。
 * `figma.string('text')` → 右侧 Input；`logo` 布尔用 Switch。
 */

const POSITION_BY_FIGMA: Record<'left' | 'center' | 'right', CSSProperties> = {
  left: { borderRadius: '4px 0 0 4px' },
  center: { borderRadius: 0 },
  right: { borderRadius: '0 4px 4px 0' },
};

function FigmaRadioButtonExample(props: {
  groupSize: 'small' | 'middle';
  positionRadius: CSSProperties;
  value: 'on' | 'off';
  onValueChange: (value: 'on' | 'off') => void;
  disabledBool: boolean;
  buttonInner: React.ReactNode;
}) {
  const { groupSize, positionRadius, value, onValueChange, disabledBool, buttonInner } = props;
  return (
    <Radio.Group
      optionType="button"
      size={groupSize}
      value={value}
      onChange={(e: RadioChangeEvent) => onValueChange(e.target.value as 'on' | 'off')}
      style={{ display: 'inline-block' }}
    >
      <Radio.Button value="on" disabled={disabledBool} style={positionRadius}>
        {buttonInner}
      </Radio.Button>
      <Radio.Button value="off" style={{ display: 'none' }} tabIndex={-1} aria-hidden />
    </Radio.Group>
  );
}

const App: React.FC = () => {
  const [groupSize, setGroupSize] = useState<'small' | 'middle'>('middle');
  const [position, setPosition] = useState<'left' | 'center' | 'right'>('left');
  const [defaultOn, setDefaultOn] = useState(true);
  const [disabledBool, setDisabledBool] = useState(false);
  const [logo, setLogo] = useState(false);
  const [text, setText] = useState('Label');

  const buttonInner = useMemo(
    () =>
      logo ? (
        <Space size={4} align="center">
          <OceanbaseColored style={{ fontSize: 14, lineHeight: 1 }} />
          <span>{text}</span>
        </Space>
      ) : (
        <span>{text}</span>
      ),
    [logo, text]
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
        <FigmaRadioButtonExample
          groupSize={groupSize}
          positionRadius={POSITION_BY_FIGMA[position]}
          value={defaultOn ? 'on' : 'off'}
          onValueChange={v => setDefaultOn(v === 'on')}
          disabledBool={disabledBool}
          buttonInner={buttonInner}
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
          RadioButton
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={groupSize}
              onChange={v => setGroupSize(v as 'small' | 'middle')}
              options={[
                { value: 'small', label: 'small' },
                { value: 'middle', label: 'medium' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>position</div>
            <Select
              style={{ width: '100%' }}
              value={position}
              onChange={v => setPosition(v as 'left' | 'center' | 'right')}
              options={[
                { value: 'left', label: 'left' },
                { value: 'center', label: 'center' },
                { value: 'right', label: 'right' },
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
              checked={defaultOn}
              onChange={setDefaultOn}
              checkedChildren="on"
              unCheckedChildren="off"
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
            }}
          >
            <span style={{ fontSize: 12 }}>logo</span>
            <Switch checked={logo} onChange={setLogo} />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="figma.string('text')"
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
