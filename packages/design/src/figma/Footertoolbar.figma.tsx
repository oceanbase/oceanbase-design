// @ts-nocheck

import { figma } from '@figma/code-connect';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Flex, Space } from '@oceanbase/design';

/**
 * Code Connect — Footer Toolbar（2348:3890）。
 * VARIANT「info」为字符串 true/false；TEXT「info」仅在 info=false 稿面出现（见 MCP get_context_for_code_connect）。
 * Page: "↵FooterToolbar"
 */

// Figma: "Footer Toolbar" · 2348:3890
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2348-3890&m=dev
figma.connect(Flex, '<FIGMA_OCEANBASE_FOOTER_TOOLBAR>', {
  props: {
    layout: figma.enum('info', {
      true: (
        <Flex align="center" justify="flex-start" style={{ width: '100%' }}>
          <Space size="middle">
            <Button type="primary" size="middle">
              {figma.string('Text')}
            </Button>
            <Button type="default" color="primary" variant="outlined" size="middle">
              {figma.string('Text')}
            </Button>
            <Button type="default" size="middle" icon={<EllipsisOutlined />} />
          </Space>
        </Flex>
      ),
      false: (
        <Flex
          align="center"
          justify="space-between"
          style={{
            width: '100%',
            gap: 16,
          }}
        >
          <Space size="middle">
            <Button type="primary" size="middle">
              {figma.string('Text')}
            </Button>
            <Button type="default" color="primary" variant="outlined" size="middle">
              {figma.string('Text')}
            </Button>
            <Button type="default" size="middle" icon={<EllipsisOutlined />} />
          </Space>
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
        </Flex>
      ),
    }),
  },
  example: ({ layout }) => (
    <div
      style={{
        width: 1200,
        padding: '16px 32px',
        background: '#ffffff',
        boxShadow: '0px -1px 2px 0px rgba(19, 32, 57, 0.1)',
      }}
    >
      {layout}
    </div>
  ),
});
