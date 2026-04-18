import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Select, Space, Typography, Upload } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_UPLOADPROCESS（UploadProcess · 5313:16640）的
 * `props.panel` / `example` 一致；右侧面板对应 `status` 枚举（error / processing / finish）。
 */

type UploadProcessStatus = 'error' | 'processing' | 'finish';

function FigmaUploadProcessExample(props: { panel: React.ReactNode }) {
  const { panel } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 275,
          background: '#ffffff',
          padding: '4px 0',
          boxSizing: 'border-box',
        }}
      >
        {panel}
      </div>
    </div>
  );
}

function renderPanel(status: UploadProcessStatus): React.ReactNode {
  switch (status) {
    case 'error':
      return (
        <Upload
          listType="text"
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'error' }]}
          showUploadList={{ showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      );
    case 'processing':
      return (
        <Upload
          listType="text"
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'uploading', percent: 72 }]}
          showUploadList={{ showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      );
    case 'finish':
      return (
        <Upload
          listType="text"
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'done' }]}
          showUploadList={{ showRemoveIcon: false }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      );
  }
}

const App: React.FC = () => {
  const [status, setStatus] = useState<UploadProcessStatus>('processing');

  const panel = useMemo(() => renderPanel(status), [status]);

  return (
    <Row
      wrap={false}
      gutter={0}
      style={{
        minHeight: 320,
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
          minHeight: 240,
          padding: 24,
          background: 'var(--ant-color-fill-quaternary, #fafafa)',
        }}
      >
        <FigmaUploadProcessExample panel={panel} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          UploadProcess
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div>
            <div style={{ marginBottom: 6, fontSize: 12 }}>status</div>
            <Select
              style={{ width: '100%' }}
              value={status}
              onChange={v => setStatus(v as UploadProcessStatus)}
              options={[
                { value: 'error', label: 'error' },
                { value: 'processing', label: 'processing' },
                { value: 'finish', label: 'finish' },
              ]}
            />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
