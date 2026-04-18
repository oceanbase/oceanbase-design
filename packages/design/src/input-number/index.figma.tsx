// @ts-nocheck

import { figma } from '@figma/code-connect';
import { InputNumber } from '@oceanbase/design';

/**
 * Code Connect — InputNumber（2245:2152）。
 * §3.4c：映射不含 style / styles / className；预览根尺寸与白底见 `demo/index.figma.tsx`（§3.4a）。
 * 稿面 `placeholder` / `disabled` / `minus` 为布尔 VARIANT；`minus` 为真时对应 `addonAfter="Days"`（与稿面后缀文案一致）。
 */

// Figma: "InputNumber" · 2245:2152
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2152&m=dev
figma.connect(InputNumber, '<FIGMA_OCEANBASE_INPUTNUMBER>', {
  props: {
    disabled: figma.boolean('disabled', {
      true: true,
      false: false,
    }),
    placeholder: figma.boolean('placeholder', {
      true: 'Enter',
      false: undefined,
    }),
    defaultValue: figma.boolean('placeholder', {
      true: undefined,
      false: 1,
    }),
    addonAfter: figma.boolean('minus', {
      true: 'Days',
      false: undefined,
    }),
    controls: true,
  },
  example: ({ disabled, placeholder, defaultValue, addonAfter, controls }) => (
    <InputNumber
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={defaultValue}
      addonAfter={addonAfter}
      controls={controls}
    />
  ),
});
