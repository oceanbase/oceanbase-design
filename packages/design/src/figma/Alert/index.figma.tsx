// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Alert, Button } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Alert"
 * Stubs use figma.connect(<></>, …); swap in your component and refine prop mappings.
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
    style: figma.enum('size', {
      default: { paddingTop: 8, paddingBottom: 8, paddingLeft: 16, paddingRight: 16 },
      large: { paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 16 },
      mini: { paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8 },
    }),
    action: figma.enum('button', {
      false: undefined,
      ture: <Button type="default">Button</Button>,
    }),
    message: figma.textContent('Text'),
  },
  example: ({ closable, type, style, action, message }) => (
    <Alert closable={closable} type={type} style={style} action={action} message={message} />
  ),
});
