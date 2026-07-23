// @ts-nocheck

import { figma } from '@figma/code-connect';
import { EllipsisCircleFilled } from '@oceanbase/icons';
import { Button, Flex, Result, Skeleton, Space, Typography } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Result"
 *
 * 稿面像素见各 `demo/*.figma.tsx`（§3.4a）；本文件不挂 style / className / styles（§3.4c）。
 */

// Figma: "Result" · 5027:10867
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5027-10867&m=dev
figma.connect(Result, '<FIGMA_OCEANBASE_RESULT>', {
  props: {
    status: figma.enum('status', {
      success: 'success',
      error: 'error',
      warning: 'warning',
      processing: 'processing',
      '403': '403',
      '404': '404',
      '500': '500',
    }),
    title: figma.enum('status', {
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      processing: 'Processing',
      '403': '403',
      '404': '404',
      '500': '500',
    }),
    subTitle: 'Here is the description.Here is the description.',
    extra: (
      <Space size={8}>
        <Button type="primary">Button</Button>
        <Button>Button</Button>
        <Button icon={<EllipsisCircleFilled />} />
      </Space>
    ),
  },
  example: ({ status, title, subTitle, extra }) => (
    <Result status={status} title={title} subTitle={subTitle} extra={extra} />
  ),
});

// Figma: "ResultEmpty" · 5027:11760
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5027-11760&m=dev
//
// §3.3：Figma「status」三档对应不同结构（自定义 icon / 横向图文 / 小号空态），无法用 Result 单组离散 props
// 覆盖，故用 `emptyNode` 整块映射；example 仅包一层无样式 div（§3.4）。
figma.connect(Result, '<FIGMA_OCEANBASE_RESULTEMPTY>', {
  props: {
    emptyNode: figma.enum('status', {
      页面无数据: (
        <Result
          icon={<Skeleton.Avatar active size={160} shape="square" />}
          title="Create Instance"
          subTitle="Here is the description.Here is the description."
          extra={
            <Space size={8}>
              <Button type="primary">Button</Button>
              <Button>Button</Button>
              <Button icon={<EllipsisCircleFilled />} />
            </Space>
          }
        />
      ),
      欢迎使用: (
        <Flex gap={32} align="center">
          <Skeleton.Avatar active size={160} shape="round" />
          <Flex vertical flex="1">
            <Result
              title="Welcome"
              subTitle="Here is the description.Here is the description."
              extra={
                <Space size={8}>
                  <Button type="primary">Button</Button>
                  <Button>Button</Button>
                  <Button icon={<EllipsisCircleFilled />} />
                </Space>
              }
            />
          </Flex>
        </Flex>
      ),
      区块无数据: (
        <Result
          icon={<Skeleton.Avatar active size={56} shape="square" />}
          title={<Typography.Text type="secondary">No data.</Typography.Text>}
        />
      ),
    }),
  },
  example: ({ emptyNode }) => <div>{emptyNode}</div>,
});
