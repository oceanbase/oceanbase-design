import { Col, Input, Row, Select, Space, Switch, Tag, Typography } from '@oceanbase/design';
import { PlusOutlined } from '@ant-design/icons';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `figma.connect` 的 props / example 一一对应，
 * 便于在文档里用控件复现 Figma Component playground 中的 text / style / closeicon / plusicon。
 */

type FigmaTagColor = 'default' | 'processing' | 'success' | 'warning' | 'error' | 'purple';

/** 与 figma.connect example 相同的拼装方式（含外层容器样式） */
function FigmaTagExample(props: {
  text: string;
  color: FigmaTagColor;
  closable: boolean;
  icon?: React.ReactNode;
}) {
  const { text, color, closable, icon } = props;
  return (
    <Tag color={color} closable={closable} icon={icon} style={{ margin: 0 }}>
      {text}
    </Tag>
  );
}

const STYLE_OPTIONS: { value: FigmaTagColor; label: string }[] = [
  { value: 'default', label: 'default' },
  { value: 'processing', label: 'info' },
  { value: 'success', label: 'success' },
  { value: 'warning', label: 'alert' },
  { value: 'error', label: 'error' },
  { value: 'purple', label: 'critical' },
];

const App: React.FC = () => {
  const [text, setText] = useState('Tag');
  const [color, setColor] = useState<FigmaTagColor>('default');
  const [closable, setClosable] = useState(false);
  const [plusicon, setPlusicon] = useState(false);

  const icon = useMemo(
    () => (plusicon ? <PlusOutlined style={{ fontSize: 12, color: '#132039' }} /> : undefined),
    [plusicon]
  );

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 200,
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
          minHeight: 160,
          padding: 0,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaTagExample text={text} color={color} closable={closable} icon={icon} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Tag
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input value={text} onChange={e => setText(e.target.value)} placeholder="text" />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>style</div>
            <Select
              style={{ width: '100%' }}
              value={color}
              onChange={v => setColor(v as FigmaTagColor)}
              options={STYLE_OPTIONS.map(o => ({ value: o.value, label: o.label }))}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>closeicon</span>
            <Switch checked={closable} onChange={setClosable} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>plusicon</span>
            <Switch checked={plusicon} onChange={setPlusicon} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
