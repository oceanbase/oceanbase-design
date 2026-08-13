// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Alert, Button } from '@oceanbase/design';

/**
 * Code Connect — Alert
 * Page: "↵Alert"
 * Figma `size` default/large 在组件 API 中无独立 prop，与 `mini` 的像素差在 `demo/index.figma.tsx` 用容器样式呈现（§3.4a / §3.4c）。
 */

// Figma: "Alert" · 5025:6647
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-6647&m=dev
figma.connect(Alert, '<FIGMA_OCEANBASE_ALERT>', {
  props: {
    closable: figma.boolean('closable', {
      true: true,
      false: false,
    }),
    type: figma.enum('type', {
      info: 'info',
      warning: 'warning',
      success: 'success',
      error: 'error',
    }),
    mini: figma.enum('size', {
      default: false,
      large: false,
      mini: true,
    }),
    action: figma.enum('button', {
      false: undefined,
      ture: <Button type="default">Button</Button>,
    }),
    message: figma.textContent('Text'),
  },
  example: ({ closable, type, mini, action, message }) => (
    <Alert closable={closable} type={type} mini={mini} action={action} message={message} />
  ),
});
