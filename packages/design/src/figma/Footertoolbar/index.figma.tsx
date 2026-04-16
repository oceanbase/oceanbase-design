// @ts-nocheck

import { figma } from '@figma/code-connect';
import { MoreHorizontalOutlined } from '@oceanbase/icons';
import { Button, Space } from '@oceanbase/design';
import { FooterToolbar } from '@oceanbase/ui';

/**
 * Code Connect — Footer Toolbar（2348:3890）。
 * `actions` 为左侧 `extra`；`infoAside` 仅 info=false 时有右侧说明（children）。
 * `example` 内组装 FooterToolbar（Pro：左侧 extra、右侧 children）。
 * VARIANT「info」为字符串 true/false；TEXT「info」仅在 info=false 稿面出现（见 MCP get_context_for_code_connect）。
 * Page: "↵FooterToolbar"
 */

// Figma: "Footer Toolbar" · 2348:3890
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-3890&m=dev
figma.connect(FooterToolbar, '<FIGMA_OCEANBASE_FOOTER_TOOLBAR>', {
  props: {
    actions: (
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
    infoAside: figma.enum('info', {
      true: null,
      false: (
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '20px',
            color: '#8592ad',
            whiteSpace: 'nowrap',
          }}
        >
          {figma.textContent('info')}
        </span>
      ),
    }),
  },
  example: ({ actions, infoAside }) => (
    <FooterToolbar
      portalDom={false}
      style={{
        width: '100%',
        maxWidth: 1200,
        padding: '16px 32px',
        background: '#ffffff',
        boxShadow: '0px -1px 2px 0px rgba(19, 32, 57, 0.1)',
      }}
      extra={actions}
    >
      {infoAside}
    </FooterToolbar>
  ),
});
