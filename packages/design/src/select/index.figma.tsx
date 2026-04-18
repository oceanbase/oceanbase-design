// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Select } from '@oceanbase/design';

/**
 * Code Connect — Select（单选 / 多选、占位与 status 派生行为）。
 * Page: "↵Select"
 *
 * §3.4c：映射不含 style / styles / className；稿面宽度与 status 边框色见 `demo/index.figma.tsx`（§3.4a）。
 * §3.1：离散 props；example 仅组装 `<Select />`。
 */

// Figma: "Select" · 2245:2285
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=2245-2285&m=dev
figma.connect(Select, '<FIGMA_OCEANBASE_SELECT>', {
  props: {
    mode: figma.boolean('multiple', {
      true: 'multiple',
      false: undefined,
    }),
    inputPlaceholder: figma.boolean('placeholder', {
      true: 'item',
      false: undefined,
    }),
    disabled: figma.enum('status', {
      default: false,
      hover: false,
      focus: false,
      disabled: true,
    }),
    defaultOpen: figma.enum('status', {
      default: false,
      hover: false,
      focus: true,
      disabled: false,
    }),
    showSearch: figma.enum('status', {
      default: false,
      hover: false,
      focus: true,
      disabled: false,
    }),
    allowClear: figma.boolean('placeholder', {
      true: false,
      false: figma.boolean('multiple', {
        false: figma.enum('status', {
          default: true,
          hover: true,
          focus: true,
          disabled: true,
        }),
        true: figma.enum('status', {
          default: false,
          hover: false,
          focus: true,
          disabled: false,
        }),
      }),
    }),
    defaultValue: figma.boolean('placeholder', {
      true: undefined,
      false: figma.boolean('multiple', {
        false: '2',
        true: ['t1', 't2', 't3'],
      }),
    }),
    options: figma.boolean('placeholder', {
      true: [
        { value: '1', label: 'item' },
        { value: '2', label: 'option' },
      ],
      false: figma.boolean('multiple', {
        false: [
          { value: '1', label: 'item' },
          { value: '2', label: 'option' },
        ],
        true: [
          { value: 't1', label: 'tag' },
          { value: 't2', label: 'tag' },
          { value: 't3', label: 'tag' },
        ],
      }),
    }),
  },
  example: ({
    mode,
    inputPlaceholder,
    disabled,
    defaultOpen,
    showSearch,
    allowClear,
    defaultValue,
    options,
  }) => (
    <Select
      mode={mode}
      placeholder={inputPlaceholder}
      disabled={disabled}
      defaultOpen={defaultOpen}
      showSearch={showSearch}
      allowClear={allowClear}
      defaultValue={defaultValue}
      options={options}
    />
  ),
});
