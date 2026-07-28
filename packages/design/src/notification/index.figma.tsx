// @ts-nocheck

import { figma } from '@figma/code-connect';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@oceanbase/icons';
import { Card, Flex, Typography } from '@oceanbase/design';

/**
 * Code Connect — Notification OBUI 2.0（5026:7081：type × actions；与设计稿控件名一致，含 Figma 拼写 ture）。
 * Notification 为全局 API，无独立 React 组件，故以 Card 承载稿面结构。
 * Page: "↵Notification"
 *
 * 稿面像素见 demo 文档；本文件不挂 style / className / styles（§3.4c）。
 */

// Figma: "Notification" · 5026:7081
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7081&m=dev
figma.connect(Card, '<FIGMA_OCEANBASE_NOTIFICATION>', {
  props: {
    children: figma.enum('type', {
      default: figma.enum('actions', {
        ture: (
          <Flex gap={8} align="flex-start">
            <InfoCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
        false: (
          <Flex gap={8} align="flex-start">
            <InfoCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
      alert: figma.enum('actions', {
        ture: (
          <Flex gap={8} align="flex-start">
            <ExclamationCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
        false: (
          <Flex gap={8} align="flex-start">
            <ExclamationCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
          <Flex gap={8} align="flex-start">
            <CheckCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
        false: (
          <Flex gap={8} align="flex-start">
            <CheckCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
          <Flex gap={8} align="flex-start">
            <CloseCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
        false: (
          <Flex gap={8} align="flex-start">
            <CloseCircleOutlined />
            <Flex vertical flex="1" gap={4}>
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
