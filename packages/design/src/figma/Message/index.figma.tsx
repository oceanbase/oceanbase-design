// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Alert } from '@oceanbase/design';

/**
 * Code Connect — Message（Figma 为轻量 toast 条；代码侧用 Alert + showIcon 对齐图标与层级）。
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
    toastStyle: {
      margin: 0,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 4,
      boxShadow: '0px 6px 16px 2px rgba(19, 33, 57, 0.1)',
      border: 'none',
    },
  },
  example: ({ type, message, toastStyle }) => (
    <Alert type={type} message={message} style={toastStyle} showIcon />
  ),
});
