// @ts-nocheck

import { figma } from '@figma/code-connect';
import { MoreHorizontalOutlined } from '@oceanbase/icons';
import { Button, Space, Typography } from '@oceanbase/design';
import { FooterToolbar } from '@oceanbase/ui';

/**
 * Code Connect — Footer Toolbar（2348:3890）。
 * `extra` 在 `props` 内按稿面 `info` 分支拼装；`example` 只传 `extra`（§4 不在 example 内写三目）。
 * VARIANT「info」为字符串 true/false；TEXT「info」仅在 info=false 稿面出现（见 MCP get_context_for_code_connect）。
 * §3.4c：映射不含 style / className；预览根样式见 `demo/index.figma.tsx`（§3.4a）。
 * Page: "↵FooterToolbar"
 */

// Figma: "Footer Toolbar" · 2348:3890
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-3890&m=dev
figma.connect(FooterToolbar, '<FIGMA_OCEANBASE_FOOTER_TOOLBAR>', {
  props: {
    extra: figma.enum('info', {
      true: (
        <Space size="middle">
          <Button type="primary" size="middle">
            {figma.string('Text')}
          </Button>
          <Button type="default" color="primary" variant="outlined" size="middle">
            {figma.string('Text')}
          </Button>
          <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
        </Space>
      ),
      false: (
        <Space size="middle">
          <Space size="middle">
            <Button type="primary" size="middle">
              {figma.string('Text')}
            </Button>
            <Button type="default" color="primary" variant="outlined" size="middle">
              {figma.string('Text')}
            </Button>
            <Button type="default" size="middle" icon={<MoreHorizontalOutlined />} />
          </Space>
          <Typography.Text type="secondary" ellipsis>
            {figma.textContent('info')}
          </Typography.Text>
        </Space>
      ),
    }),
  },
  /** 省略 `style` / `className`，与 Playground 外置预览样式分工一致。 */
  example: ({ extra }) => <FooterToolbar portalDom={false} extra={extra} />,
});
