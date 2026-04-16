// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Spin } from '@oceanbase/design';

/**
 * Code Connect — Mask 页（与设计稿一致）。
 * Page: "↵ Mask"
 * Figma 为整页蒙层：深底 + 透明度；无组件级变体，用 Spin 的蒙层语义对齐。
 */

// Figma: "Mask" · 5026:8067
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-8067&m=dev
figma.connect(Spin, '<FIGMA_OCEANBASE_MASK>', {
  props: {
    spinning: true,
    gray: true,
    indicator: <span style={{ display: 'none' }} aria-hidden />,
    children: (
      <div
        style={{
          position: 'relative',
          width: 1440,
          height: 900,
          overflow: 'hidden',
        }}
      />
    ),
  },
  example: ({ spinning, gray, indicator, children }) => (
    <Spin spinning={spinning} gray={gray} indicator={indicator}>
      {children}
    </Spin>
  ),
});
