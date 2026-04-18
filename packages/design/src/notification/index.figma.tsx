// @ts-nocheck

import { figma } from '@figma/code-connect';
// Notification 稿面状态色与 antd 语义图标一致；@oceanbase/icons 无与稿面一一对应的 Filled 变体导出（§1）。
import {
  CheckCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { Button, Card, Flex, Space, Typography } from '@oceanbase/design';

/**
 * Code Connect — Notification（5026:7081：type × actions 卡片；与设计稿控件名一致，含 Figma 拼写 ture）。
 * Page: "↵Notification"
 *
 * 稿面像素见 `demo/index.figma.tsx`（§3.4a）；本文件不挂 style / className / styles（§3.4c）。
 */

// Figma: "Notification" · 5026:7081
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7081&m=dev
figma.connect(Card, '<FIGMA_OCEANBASE_NOTIFICATION>', {
  props: {
    children: figma.enum('type', {
      default: figma.enum('actions', {
        ture: (
          <Flex vertical gap={24}>
            <Flex vertical gap={12}>
              <Flex justify="space-between" align="center" gap={16}>
                <Typography.Text strong ellipsis>
                  {figma.string('title')}
                </Typography.Text>
                <CloseOutlined />
              </Flex>
              <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
            </Flex>
            <Flex justify="flex-end">
              <Space size={8}>
                <Button size="small">Cancel</Button>
                <Button type="primary" size="small">
                  Confirm
                </Button>
              </Space>
            </Flex>
          </Flex>
        ),
        false: (
          <Flex vertical gap={12}>
            <Flex justify="space-between" align="center" gap={16}>
              <Typography.Text strong ellipsis>
                {figma.string('title')}
              </Typography.Text>
              <CloseOutlined />
            </Flex>
            <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
          </Flex>
        ),
      }),
      alert: figma.enum('actions', {
        ture: (
          <Flex vertical gap={24}>
            <Flex gap={16} align="flex-start">
              <ExclamationCircleFilled />
              <Flex vertical flex="1" gap={12}>
                <Flex justify="space-between" align="center" gap={16}>
                  <Typography.Text strong ellipsis>
                    {figma.string('title')}
                  </Typography.Text>
                  <CloseOutlined />
                </Flex>
                <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
              </Flex>
            </Flex>
            <Flex justify="flex-end">
              <Space size={8}>
                <Button size="small">Cancel</Button>
                <Button type="primary" size="small">
                  Confirm
                </Button>
              </Space>
            </Flex>
          </Flex>
        ),
        false: (
          <Flex gap={16} align="flex-start">
            <ExclamationCircleFilled />
            <Flex vertical flex="1" gap={12}>
              <Flex justify="space-between" align="center" gap={16}>
                <Typography.Text strong ellipsis>
                  {figma.string('title')}
                </Typography.Text>
                <CloseOutlined />
              </Flex>
              <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
            </Flex>
          </Flex>
        ),
      }),
      success: figma.enum('actions', {
        ture: (
          <Flex vertical gap={24}>
            <Flex gap={16} align="flex-start">
              <CheckCircleFilled />
              <Flex vertical flex="1" gap={12}>
                <Flex justify="space-between" align="center" gap={16}>
                  <Typography.Text strong ellipsis>
                    {figma.string('title')}
                  </Typography.Text>
                  <CloseOutlined />
                </Flex>
                <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
              </Flex>
            </Flex>
            <Flex justify="flex-end">
              <Space size={8}>
                <Button size="small">Cancel</Button>
                <Button type="primary" size="small">
                  Confirm
                </Button>
              </Space>
            </Flex>
          </Flex>
        ),
        false: (
          <Flex gap={16} align="flex-start">
            <CheckCircleFilled />
            <Flex vertical flex="1" gap={12}>
              <Flex justify="space-between" align="center" gap={16}>
                <Typography.Text strong ellipsis>
                  {figma.string('title')}
                </Typography.Text>
                <CloseOutlined />
              </Flex>
              <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
            </Flex>
          </Flex>
        ),
      }),
      error: figma.enum('actions', {
        ture: (
          <Flex vertical gap={24}>
            <Flex gap={16} align="flex-start">
              <CloseCircleFilled />
              <Flex vertical flex="1" gap={12}>
                <Flex justify="space-between" align="center" gap={16}>
                  <Typography.Text strong ellipsis>
                    {figma.string('title')}
                  </Typography.Text>
                  <CloseOutlined />
                </Flex>
                <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
              </Flex>
            </Flex>
            <Flex justify="flex-end">
              <Space size={8}>
                <Button size="small">Cancel</Button>
                <Button type="primary" size="small">
                  Confirm
                </Button>
              </Space>
            </Flex>
          </Flex>
        ),
        false: (
          <Flex gap={16} align="flex-start">
            <CloseCircleFilled />
            <Flex vertical flex="1" gap={12}>
              <Flex justify="space-between" align="center" gap={16}>
                <Typography.Text strong ellipsis>
                  {figma.string('title')}
                </Typography.Text>
                <CloseOutlined />
              </Flex>
              <Typography.Text type="secondary">{figma.string('description')}</Typography.Text>
            </Flex>
          </Flex>
        ),
      }),
    }),
  },
  example: ({ children }) => <Card bordered={false}>{children}</Card>,
});
