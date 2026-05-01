import { Checkbox, Col, Row, Space, Typography } from '@oceanbase/design';
import React from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中第二条 `figma.connect`（`<FIGMA_OCEANBASE_CHECKBOXGROUP>`）对齐。
 * Figma API 未返回 component properties，stub 无 `props`；左侧展示固定 Checkbox.Group，右侧说明无属性维度。
 */

function FigmaCheckboxGroupExample() {
  return (
    <Checkbox.Group
      defaultValue={['Pear']}
      options={[
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ]}
    />
  );
}

const App: React.FC = () => (
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
      <FigmaCheckboxGroupExample />
    </Col>
    <Col
      flex="0 0 280px"
      style={{
        borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
        padding: '16px 20px',
      }}
    >
      <Typography.Text type="secondary" style={{ fontSize: 12 }}>
        CheckboxGroup
      </Typography.Text>
      <Space direction="vertical" size={12} style={{ width: '100%', marginTop: 12 }}>
        <Typography.Text type="secondary" style={{ fontSize: 12, lineHeight: 1.6 }}>
          当前 Figma 组件在 API 中无 component properties，Code Connect stub 未映射可调项。
        </Typography.Text>
      </Space>
    </Col>
  </Row>
);

export default App;
