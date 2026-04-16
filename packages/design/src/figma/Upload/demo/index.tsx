import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Space, Switch, Typography, Upload } from '@oceanbase/design';
import React, { useMemo, useState } from 'react';

/**
 * Playground：与 `../index.figma.tsx` 中 FIGMA_OCEANBASE_UPLOAD（Upload · 2245:2500）的
 * `props.body` / `example` 一致；右侧面板对应嵌套的 `file`、`multiple` 两个 boolean。
 */

function FigmaUploadExample(props: { body: React.ReactNode }) {
  const { body } = props;
  return (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
        boxSizing: 'border-box',
      }}
    >
      {body}
    </div>
  );
}

function renderBody(file: boolean, multiple: boolean): React.ReactNode {
  if (file) {
    if (multiple) {
      return (
        <div
          style={{
            width: 275,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Upload
            listType="text"
            multiple
            defaultFileList={[
              { uid: 'a', name: 'filename.docx', status: 'done' },
              { uid: 'b', name: 'filename.docx', status: 'uploading', percent: 80 },
              { uid: 'c', name: 'filename.docx', status: 'error' },
            ]}
            showUploadList={{
              showRemoveIcon: fileItem =>
                fileItem.status === 'uploading' || fileItem.status === 'error',
            }}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
          <Typography.Text style={{ color: '#8592ad', fontSize: 12, lineHeight: '20px' }}>
            Supported: .rar .zip .doc .docx .pdf .jpg...
          </Typography.Text>
        </div>
      );
    }
    return (
      <div
        style={{
          width: 275,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Upload
          listType="text"
          multiple={false}
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'done' }]}
          showUploadList={{ showRemoveIcon: false }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <Typography.Text style={{ color: '#8592ad', fontSize: 12, lineHeight: '20px' }}>
          Supported: .rar .zip .doc .docx .pdf .jpg...
        </Typography.Text>
      </div>
    );
  }
  if (multiple) {
    return (
      <div
        style={{
          width: 275,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Upload listType="text" defaultFileList={[]} multiple>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
        <Typography.Text style={{ color: '#8592ad', fontSize: 12, lineHeight: '20px' }}>
          Supported: .rar .zip .doc .docx .pdf .jpg...
        </Typography.Text>
      </div>
    );
  }
  return (
    <div
      style={{
        width: 275,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Upload listType="text" defaultFileList={[]} multiple={false}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <Typography.Text style={{ color: '#8592ad', fontSize: 12, lineHeight: '20px' }}>
        Supported: .rar .zip .doc .docx .pdf .jpg...
      </Typography.Text>
    </div>
  );
}

const App: React.FC = () => {
  const [file, setFile] = useState(true);
  const [multiple, setMultiple] = useState(true);

  const body = useMemo(() => renderBody(file, multiple), [file, multiple]);

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
        <FigmaUploadExample body={body} />
      </Col>
      <Col
        flex="0 0 280px"
        style={{
          borderLeft: '1px solid var(--ant-color-border-secondary, #f0f0f0)',
          padding: '16px 20px',
        }}
      >
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Upload
        </Typography.Text>
        <Space direction="vertical" size={16} style={{ width: '100%', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>file</span>
            <Switch checked={file} onChange={setFile} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12 }}>multiple</span>
            <Switch checked={multiple} onChange={setMultiple} />
          </div>
        </Space>
      </Col>
    </Row>
  );
};

export default App;
