import { Checkbox, Col, Row, Select, Space, Typography } from '@oceanbase/design';
import React, { useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中第一条 `figma.connect`（`<FIGMA_OCEANBASE_CHECKBOX>`）的
 * `props` 维度一致。stub 内 `example` 为占位 `<div />`；此处按 Figma `status` / `disabled` 映射到 Checkbox API。
 */

type FigmaStatus = 'default' | 'selected' | 'selected part';

function deriveCheckboxState(status: FigmaStatus): { checked: boolean; indeterminate: boolean } {
  switch (status) {
    case 'default':
      return { checked: false, indeterminate: false };
    case 'selected':
      return { checked: true, indeterminate: false };
    case 'selected part':
      return { checked: false, indeterminate: true };
    default:
      return { checked: false, indeterminate: false };
  }
}

/** 与 connect 的 `example` 解构字段一致；渲染语义由 `status`/`disabled` 派生 */
function FigmaCheckboxExample(props: { status: FigmaStatus; disabled: 'false' | 'true' }) {
  const { checked, indeterminate } = deriveCheckboxState(props.status);
  return (
    <Checkbox checked={checked} indeterminate={indeterminate} disabled={props.disabled === 'true'}>
      Checkbox
    </Checkbox>
  );
}

const App: React.FC = () => {
  const [status, setStatus] = useState<FigmaStatus>('default');
  const [disabledStr, setDisabledStr] = useState<'false' | 'true'>('false');

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
        <FigmaCheckboxExample status={status} disabled={disabledStr} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Checkbox
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as FigmaStatus)}
              options={[
                { value: 'default', label: 'default' },
                { value: 'selected', label: 'selected' },
                { value: 'selected part', label: 'selected part' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>disabled</div>
            <Select
              style={{ width: '100%' }}
              value={disabledStr}
              onChange={v => setDisabledStr(v as 'false' | 'true')}
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
