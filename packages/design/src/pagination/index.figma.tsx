// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Pagination } from '@oceanbase/design';

/**
 * Code Connect — Pagination（5025:2181）。
 * §3.4c：映射不含 style / styles / className；预览根尺寸与白底见 `demo/index.figma.tsx`（§3.4a）。
 * 稿面 `size`：`medium` → antd `default`。`total` / `current` / `pageSize` / `showTotal` / `showSizeChanger` 为稿面旁路静态演示值（与 Code Connect 预览一致）。
 */

// Figma: "Pagination" · 5025:2181
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2181&m=dev
figma.connect(Pagination, '<FIGMA_OCEANBASE_PAGINATION>', {
  props: {
    size: figma.enum('size', {
      medium: 'default',
    }),
    total: 500,
    current: 7,
    pageSize: 10,
    showSizeChanger: true,
    showTotal: total => 'Total ' + total + ' items',
  },
  example: ({ size, total, current, pageSize, showSizeChanger, showTotal }) => (
    <Pagination
      size={size}
      total={total}
      current={current}
      pageSize={pageSize}
      showSizeChanger={showSizeChanger}
      showTotal={showTotal}
    />
  ),
});
