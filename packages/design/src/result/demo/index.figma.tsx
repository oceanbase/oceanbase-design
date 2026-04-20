import { Button, Col, Input, Result, Row, Select, Space, Typography } from '@oceanbase/design';
import { EllipsisCircleFilled } from '@oceanbase/icons';
import type { CSSProperties } from 'react';
import React, { useMemo, useState } from 'react';

import type { ResultStatusType } from '@oceanbase/design';

/**
 * Playground：与 `../index.figma.tsx` 中 `FIGMA_OCEANBASE_RESULT` 的 props / example 一一对应。
 * 预览容器样式仅在本文件（§3.4a）；映射内不传 Result 的 style。
 */

const PREVIEW_WRAP: CSSProperties = { padding: 24, background: '#ffffff', width: '100%' };

/** 与 figma.connect 中 `title` 的 `figma.enum('status', …)` 分支字面量一致 */
const TITLE_BY_STATUS: Record<
  'success' | 'error' | 'warning' | 'processing' | '403' | '404' | '500',
  string
> = {
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  processing: 'Processing',
  '403': '403',
  '404': '404',
  '500': '500',
};

/** 与 figma.connect example 相同的拼装方式 */
function FigmaResultExample(props: {
  status: ResultStatusType;
  title: string;
  subTitle: string;
  extra: React.ReactNode;
}) {
  const { status, title, subTitle, extra } = props;
  return <Result status={status} title={title} subTitle={subTitle} extra={extra} />;
}

const App: React.FC = () => {
  const [statusKey, setStatusKey] = useState<
    'success' | 'error' | 'warning' | 'processing' | '403' | '404' | '500'
  >('success');
  const [subTitle, setSubTitle] = useState('Here is the description.Here is the description.');

  const status = statusKey as ResultStatusType;
  const title = TITLE_BY_STATUS[statusKey];

  const extra = useMemo(
    () => (
      <Space size={8}>
        <Button type="primary">Button</Button>
        <Button>Button</Button>
        <Button icon={<EllipsisCircleFilled />} />
      </Space>
    ),
    []
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
        <div style={PREVIEW_WRAP}>
          <FigmaResultExample status={status} title={title} subTitle={subTitle} extra={extra} />
        </div>
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Result
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={statusKey}
              onChange={v =>
                setStatusKey(
                  v as 'success' | 'error' | 'warning' | 'processing' | '403' | '404' | '500'
                )
              }
              options={[
                { value: 'success', label: 'success' },
                { value: 'error', label: 'error' },
                { value: 'warning', label: 'warning' },
                { value: 'processing', label: 'processing' },
                { value: '403', label: '403' },
                { value: '404', label: '404' },
                { value: '500', label: '500' },
              ]}
            />
          </div>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>subTitle</div>
            <Input.TextArea
              value={subTitle}
              onChange={e => setSubTitle(e.target.value)}
              rows={3}
              style={{ width: '100%' }}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
