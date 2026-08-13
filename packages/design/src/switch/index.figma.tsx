// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Switch } from '@oceanbase/design';

/**
 * Code Connect — Switch（2245:2483）。Figma `size=medium` 对应 antd `size="default"`。
 * 预览根尺寸与白底见 `demo/index.figma.tsx`（§3.4a）。
 */

// Figma: "Switch" · 2245:2483
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2483&m=dev
figma.connect(Switch, '<FIGMA_OCEANBASE_SWITCH>', {
  props: {
    size: figma.enum('size', {
      small: 'small',
      medium: 'default',
    }),
    checked: figma.boolean('checked', {
      true: true,
      false: false,
    }),
    disabled: figma.boolean('disabled', {
      true: true,
      false: false,
    }),
  },
  example: ({ size, checked, disabled }) => (
    <Switch defaultChecked={checked} disabled={disabled} size={size} />
  ),
});
