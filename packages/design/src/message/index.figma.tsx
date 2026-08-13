// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Alert } from '@oceanbase/design';

/**
 * Code Connect — Message（Figma 为轻量 toast 条；代码侧用 Alert + showIcon 对齐图标与层级）。
 * Message 为全局 API，无独立 React 组件，故以 Alert 表示稿面形态。
 * 稿面像素（边距、阴影等）在 `demo/index.figma.tsx` 维护，本文件仅映射结构与变体。
 * Page: "↵Message"
 */

// Figma: "Message" · 5026:7044
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7044&m=dev
figma.connect(Alert, '<FIGMA_OCEANBASE_MESSAGE>', {
  props: {
    type: figma.enum('type', {
      info: 'info',
      success: 'success',
      alert: 'warning',
      error: 'error',
    }),
    message: figma.string('Text'),
  },
  example: ({ type, message }) => <Alert type={type} message={message} showIcon />,
});
