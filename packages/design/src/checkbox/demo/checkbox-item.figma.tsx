import { QuestionCircleOutlined } from '@ant-design/icons';
import { Checkbox, Col, Input, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中第三条 `figma.connect`（`<FIGMA_OCEANBASE_CHECKBOXITEM>`）的
 * `props`（`text`、`info`）一致。stub 内 `example` 为占位；此处将 `text` 作为文案、`info` 控制说明图标。
 */

function FigmaCheckboxItemExample(props: { text: string; info: 'false' | 'true' }) {
  const { text, info } = props;
  return (
    <Checkbox>
      <Space size={4} align="center">
        <span style={{ fontSize: 13, lineHeight: '20px' }}>{text}</span>
        {info === 'true' && <QuestionCircleOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />}
      </Space>
    </Checkbox>
  );
}

const App: React.FC = () => {
  const [text, setText] = useState('Label');
  const [infoStr, setInfoStr] = useState<'false' | 'true'>('false');

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
        <FigmaCheckboxItemExample text={text} info={infoStr} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          CheckboxItem
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>text</div>
            <Input
              style={{ width: '100%' }}
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="text"
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>info</div>
            <Select
              style={{ width: '100%' }}
              value={infoStr}
              onChange={v => setInfoStr(v as 'false' | 'true')}
              options={[
                { value: 'false', label: 'false' },
                { value: 'true', label: 'true' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
