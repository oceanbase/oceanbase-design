// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  Button,
  Descriptions,
  Drawer,
  Flex,
  Form,
  Input,
  Space,
  Typography,
} from '@oceanbase/design';

/**
 * Code Connect — Drawer（2351:3603：无 footer 区为 Descriptions；有 footer 为 Form + 底部按钮）。
 * Page: "↵Drawer"
 *
 * - Figma 控件 **`footer`**：`figma.boolean` — `false` → 双组 Descriptions；`true` → 纵向表单 + `footer` 操作区。
 * - 预览像素见 `demo/index.figma.tsx`（§3.4a）；本文件不挂 style / className / styles（§3.4c）。
 */

// Figma: "Drawer" · 2351:3603
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2351-3603&m=dev
figma.connect(Drawer, '<FIGMA_OCEANBASE_DRAWER>', {
  props: {
    root: figma.boolean('footer', {
      false: (
        <Drawer open width={520} placement="right" title="Title" onClose={() => {}}>
          <Flex vertical gap={24}>
            <Descriptions
              title={<Typography.Text strong>Title</Typography.Text>}
              column={1}
              layout="horizontal"
              bordered={false}
              items={[
                { key: '1', label: 'label', children: 'caption' },
                { key: '2', label: 'label', children: 'caption' },
                { key: '3', label: 'label', children: 'caption' },
              ]}
            />
            <Descriptions
              title={<Typography.Text strong>Title</Typography.Text>}
              column={1}
              layout="horizontal"
              bordered={false}
              items={[
                { key: 'a', label: 'label', children: 'caption' },
                { key: 'b', label: 'label', children: 'caption' },
                { key: 'c', label: 'label', children: 'caption' },
              ]}
            />
          </Flex>
        </Drawer>
      ),
      true: (
        <Drawer
          open
          width={520}
          placement="right"
          title="Title"
          onClose={() => {}}
          footer={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button>Button</Button>
            </Space>
          }
        >
          <Form layout="vertical">
            {Array.from({ length: 9 }, (_, i) => (
              <Form.Item key={'drawer-form-' + i} label="Label">
                <Input placeholder="Enter" />
              </Form.Item>
            ))}
          </Form>
        </Drawer>
      ),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
