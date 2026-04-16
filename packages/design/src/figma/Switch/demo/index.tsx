import { Col, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { SwitchProps } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 `<FIGMA_OCEANBASE_SWITCH>` 的 `props` / `example` 一致。
 * 文档为右侧面板与点击预览区开关同步，使用受控 `checked`/`onChange`；Code Connect 示例为 `defaultChecked={checked}` 以匹配 Figma 静态实例。
 */

type FigmaSwitchSizeKey = 'small' | 'medium';

function mapFigmaSizeToAntd(sizeKey: FigmaSwitchSizeKey): NonNullable<SwitchProps['size']> {
  return sizeKey === 'medium' ? 'default' : 'small';
}

/** 与 figma.connect `example` 相同的根 `div` 与 `Switch` 属性；预览区 `Switch` 为交互演示使用受控（见文件头注释）。 */
function FigmaSwitchExample(props: {
  size: NonNullable<SwitchProps['size']>;
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
}) {
  const { size, checked, disabled, onChange } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 80,
        boxSizing: 'border-box',
      }}
    >
      <Switch checked={checked} onChange={onChange} disabled={disabled} size={size} />
    </div>
  );
}

const App: React.FC = () => {
  const [sizeKey, setSizeKey] = useState<FigmaSwitchSizeKey>('medium');
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const antdSize = mapFigmaSizeToAntd(sizeKey);

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
        <FigmaSwitchExample
          size={antdSize}
          checked={checked}
          disabled={disabled}
          onChange={setChecked}
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
          Switch
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>size</div>
            <Select
              style={{ width: '100%' }}
              value={sizeKey}
              onChange={v => setSizeKey(v as FigmaSwitchSizeKey)}
              options={[
                { value: 'small', label: 'small' },
                { value: 'medium', label: 'medium' },
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
            <Switch checked={checked} onChange={setChecked} />
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
            <Switch checked={disabled} onChange={setDisabled} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
