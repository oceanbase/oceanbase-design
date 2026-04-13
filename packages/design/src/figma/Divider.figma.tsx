// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Divider } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵ Divider"
 */

// Figma: "Divider" · 5025:1156
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-1156&m=dev
figma.connect(Divider, '<FIGMA_OCEANBASE_DIVIDER>', {
  props: {
    type: figma.enum('type', {
      horizontal: 'horizontal',
      vertical: 'vertical',
    }),
  },
  example: ({ type }) => <Divider type={type} />,
});
