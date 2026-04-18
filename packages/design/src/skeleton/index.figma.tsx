// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Skeleton } from '@oceanbase/design';

/**
 * Code Connect — Skeleton（段落占位条矩阵，与设计稿 5026:7749 一致）。
 * 预览根尺寸、白底、ConfigProvider 的 Skeleton token、以及稿面宽度见 `demo/index.figma.tsx`（§3.4a）。
 */

// Figma: "Skeleton" · 5026:7749
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7749&m=dev
figma.connect(Skeleton, '<FIGMA_OCEANBASE_SKELETON>', {
  props: {
    type: figma.enum('type', {
      default: 'default',
    }),
    paragraph: figma.enum('type', {
      default: { rows: 4, width: ['91px', '100%', '100%', '146px'] },
    }),
  },
  example: ({ type, paragraph }) => (
    <Skeleton key={type} active title={false} paragraph={paragraph} />
  ),
});
