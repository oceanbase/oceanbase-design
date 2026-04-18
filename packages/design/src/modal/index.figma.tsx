// @ts-nocheck

import { figma } from '@figma/code-connect';
import { ExclamationCircleOutlined } from '@oceanbase/icons';
import { Alert, Button, Flex, Form, Input, Modal, Space, Typography } from '@oceanbase/design';

/**
 * Code Connect — Modal（2351:5318：default 表单 / confirm / errorConfirm）。
 * Page: "↵Modal"
 *
 * - **type=confirm**：业务侧为 `Modal.confirm({ title, icon, content, okText, cancelText, width })`；映射写在 `props.root` 的 confirm 分支（`onClick` 内调用，且 `figma.string` 仅在 `props` 内）。
 * - **type=default | errorConfirm**：`<Modal open />` 与稿面一致。
 * - 预览像素见 `demo/index.figma.tsx`（§3.4a）；本文件不挂 style / className / styles（§3.4c）。
 */

// Figma: "Modal" · 2351:5318
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2351-5318&m=dev
figma.connect(Modal, '<FIGMA_OCEANBASE_MODAL>', {
  props: {
    root: figma.enum('type', {
      default: (
        <Modal
          open={true}
          width={520}
          title={figma.string('title')}
          closable={true}
          footer={
            <Space size={8}>
              <Button type="default">Button</Button>
              <Button type="primary">Button</Button>
            </Space>
          }
          onCancel={() => {}}
          maskClosable={false}
        >
          <Flex vertical gap={24}>
            <Form layout="vertical">
              <Form.Item label="Label">
                <Input placeholder="Enter" />
              </Form.Item>
              <Form.Item label="Label">
                <Input placeholder="Enter" />
              </Form.Item>
            </Form>
          </Flex>
        </Modal>
      ),
      confirm: (
        <Button
          type="primary"
          onClick={() =>
            Modal.confirm({
              title: figma.string('title'),
              icon: <ExclamationCircleOutlined />,
              content: figma.string('description'),
              okText: '确认',
              cancelText: '取消',
              width: 384,
            })
          }
        >
          Open confirm
        </Button>
      ),
      errorConfirm: (
        <Modal
          open={true}
          width={520}
          title={figma.string('title')}
          closable={true}
          footer={
            <Space size={8}>
              <Button type="default">Button</Button>
              <Button danger type="default">
                Button
              </Button>
            </Space>
          }
          onCancel={() => {}}
          maskClosable={false}
        >
          <Flex vertical gap={24}>
            <Alert
              type="warning"
              showIcon
              message={
                <Typography.Text strong>
                  All data will be deleted upon release. Please proceed with caution!
                </Typography.Text>
              }
              description={
                <Flex vertical gap={4}>
                  <Typography.Text>Operation Target: OB Cluster ob2322</Typography.Text>
                  <Typography.Text>Cluster ID: 23242212</Typography.Text>
                  <Typography.Text>Cluster Type: Primary Cluster</Typography.Text>
                  <Typography.Text>Number of Tenants: 3</Typography.Text>
                  <Typography.Text>Current Session Count: 92</Typography.Text>
                  <Typography.Text>Current QPS: 27</Typography.Text>
                  <Typography.Text>Current TPS: 0</Typography.Text>
                </Flex>
              }
            />
            <Flex vertical gap={6}>
              <Typography.Text>
                Please enter &apos;
                <Typography.Text type="danger" strong>
                  release
                </Typography.Text>
                &apos; to confirm the release.
              </Typography.Text>
              <Input placeholder="Enter" />
            </Flex>
          </Flex>
        </Modal>
      ),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
