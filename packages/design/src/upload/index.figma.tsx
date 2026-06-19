// @ts-nocheck

import { UploadOutlined } from '@oceanbase/icons';
import { figma } from '@figma/code-connect';
import { Button, Flex, Typography, Upload } from '@oceanbase/design';

/**
 * Code Connect — Upload page (↵Upload).
 * Design refs: MCP get_design_context (2245:2500, 5313:16640) + gen-figma.md.
 */

// Figma: "Upload" · 2245:2500
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2500&m=dev
figma.connect(Upload, '<FIGMA_OCEANBASE_UPLOAD>', {
  props: {
    body: figma.boolean('file', {
      true: figma.boolean('multiple', {
        true: (
          <Flex vertical gap={4}>
            <Upload
              listType="text"
              multiple
              defaultFileList={[
                { uid: 'a', name: 'filename.docx', status: 'done' },
                { uid: 'b', name: 'filename.docx', status: 'uploading', percent: 80 },
                { uid: 'c', name: 'filename.docx', status: 'error' },
              ]}
              showUploadList={{
                showRemoveIcon: file => file.status === 'uploading' || file.status === 'error',
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <Typography.Text type="secondary">
              Supported: .rar .zip .doc .docx .pdf .jpg...
            </Typography.Text>
          </Flex>
        ),
        false: (
          <Flex vertical gap={4}>
            <Upload
              listType="text"
              multiple={false}
              defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'done' }]}
              showUploadList={{ showRemoveIcon: false }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <Typography.Text type="secondary">
              Supported: .rar .zip .doc .docx .pdf .jpg...
            </Typography.Text>
          </Flex>
        ),
      }),
      false: figma.boolean('multiple', {
        true: (
          <Flex vertical gap={4}>
            <Upload listType="text" defaultFileList={[]} multiple>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <Typography.Text type="secondary">
              Supported: .rar .zip .doc .docx .pdf .jpg...
            </Typography.Text>
          </Flex>
        ),
        false: (
          <Flex vertical gap={4}>
            <Upload listType="text" defaultFileList={[]} multiple={false}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <Typography.Text type="secondary">
              Supported: .rar .zip .doc .docx .pdf .jpg...
            </Typography.Text>
          </Flex>
        ),
      }),
    }),
  },
  example: ({ body }) => <div>{body}</div>,
});

// Figma: "UploadProcess" · 5313:16640
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-16640&m=dev
figma.connect(Upload, '<FIGMA_OCEANBASE_UPLOADPROCESS>', {
  props: {
    panel: figma.enum('status', {
      error: (
        <Upload
          listType="text"
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'error' }]}
          showUploadList={{ showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      ),
      processing: (
        <Upload
          listType="text"
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'uploading', percent: 72 }]}
          showUploadList={{ showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      ),
      finish: (
        <Upload
          listType="text"
          defaultFileList={[{ uid: '1', name: 'filename.docx', status: 'done' }]}
          showUploadList={{ showRemoveIcon: false }}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      ),
    }),
  },
  example: ({ panel }) => <div>{panel}</div>,
});
