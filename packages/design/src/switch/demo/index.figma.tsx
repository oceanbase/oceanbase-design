import { Col, Row, Select, Space, Switch, Typography } from '@oceanbase/design';
import type { SwitchProps } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：`props` 维度与 `../index.figma.tsx` 一致；根容器预览样式仅在此文件（§3.4a）。
 * 右侧面板与预览区同步使用受控 `checked`/`onChange`；Code Connect 映射为 `defaultChecked={checked}` 以匹配 Figma 静态实例。
 */

type FigmaSwitchSizeKey = 'small' | 'medium';

function mapFigmaSizeToAntd(sizeKey: FigmaSwitchSizeKey): NonNullable<SwitchProps['size']> {
  return sizeKey === 'medium' ? 'default' : 'small';
}

/** 预览区外层白底与居中由本组件承担；`Switch` 的 size/checked/disabled 与 Code Connect `example` 一致；交互演示用受控（见文件头注释）。 */
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
