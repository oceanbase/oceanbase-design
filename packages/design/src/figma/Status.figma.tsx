// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Badge } from '@oceanbase/design';

/**
 * Code Connect — Status（Figma 5025:2382）。
 * 设计为状态点 + 文案；映射为 antd Badge 独立 status 模式。
 * Figma `size=medium` 对应 Badge `size="default"`。
 * `type=info` 用 `color="#1677ff"`（实心蓝）；其余用 `status`；`loading` 用 `status="processing"`。
 */

// Figma: "Status" · 5025:2382
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2382&m=dev
figma.connect(Badge, '<FIGMA_OCEANBASE_STATUS>', {
  props: {
    text: figma.string('text'),
    size: figma.enum('size', {
      medium: 'default',
      small: 'small',
    }),
    status: figma.enum('type', {
      alert: 'warning',
      error: 'error',
      info: undefined,
      success: 'success',
      terminate: 'default',
      loading: 'processing',
    }),
    color: figma.enum('type', {
      alert: undefined,
      error: undefined,
      info: '#1677ff',
      success: undefined,
      terminate: undefined,
      loading: undefined,
    }),
  },
  example: ({ text, size, status, color }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: 16,
        background: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Badge text={text} size={size} status={status} color={color} />
    </div>
  ),
});
