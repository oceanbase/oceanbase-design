// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Segmented } from '@oceanbase/design';

/**
 * Code Connect — Segmented（5313:13313）、SegmentItem（5313:13322）。
 * §3.4c：映射不含 style / styles / className；预览根尺寸与白底见 `demo/*.figma.tsx`（§3.4a）。
 * SegmentItem 无独立导出，映射为单轨 `Segmented`：`status` 控制选中项与选项组合（hover 与 default 静态一致）。
 * 若稿面三段文案图层名与 `option 1` / `option 2` / `option 3` 不一致，请按 get_design_context 层名调整 `figma.string`。
 */

// Figma: "Segmented" · 5313:13313
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-13313&m=dev
figma.connect(Segmented, '<FIGMA_OCEANBASE_SEGMENTED>', {
  props: {
    size: figma.enum('size', {
      medium: 'middle',
      small: 'small',
    }),
    options: [
      { label: figma.string('option 1'), value: '1' },
      { label: figma.string('option 2'), value: '2' },
      { label: figma.string('option 3'), value: '3' },
    ],
    defaultValue: '1',
  },
  example: ({ size, options, defaultValue }) => (
    <Segmented size={size} options={options} defaultValue={defaultValue} />
  ),
});

// Figma: "SegmentItem" · 5313:13322
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-13322&m=dev
figma.connect(Segmented, '<FIGMA_OCEANBASE_SEGMENTITEM>', {
  props: {
    size: figma.enum('size', {
      small: 'small',
      medium: 'middle',
    }),
    segmentedProps: figma.enum('status', {
      selected: {
        options: [{ label: figma.string('text'), value: '1' }],
        defaultValue: '1',
      },
      default: {
        options: [
          { label: 'A', value: '0' },
          { label: figma.string('text'), value: '1' },
        ],
        defaultValue: '0',
      },
      hover: {
        options: [
          { label: 'A', value: '0' },
          { label: figma.string('text'), value: '1' },
        ],
        defaultValue: '0',
      },
    }),
  },
  example: ({ size, segmentedProps }) => (
    <Segmented
      size={size}
      options={segmentedProps.options}
      defaultValue={segmentedProps.defaultValue}
    />
  ),
});
