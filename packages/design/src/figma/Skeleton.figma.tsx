// @ts-nocheck

import { figma } from '@figma/code-connect';
import { ConfigProvider, Skeleton } from '@oceanbase/design';

/**
 * Code Connect — Skeleton（段落占位条矩阵，与设计稿 5026:7749 一致）。
 * Page: "↵Skeleton"
 *
 * 遵循 gen-figma §3.1：`type` 映射 Figma 控件；段落行宽与设计稿四段矩形宽度一致；
 * 主题色用 ConfigProvider 的 Skeleton token 字面量，避免 var(--ob-…)。
 */

// Figma: "Skeleton" · 5026:7749
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7749&m=dev
figma.connect(Skeleton, '<FIGMA_OCEANBASE_SKELETON>', {
  props: {
    type: figma.enum('type', {
      default: 'default',
    }),
  },
  example: ({ type }) => (
    <ConfigProvider
      theme={{
        components: {
          Skeleton: {
            gradientFromColor: '#e2e8f3',
            gradientToColor: '#d4dbe8',
            paragraphLiHeight: 16,
            blockRadius: 2,
          },
        },
      }}
    >
      <div
        style={{
          width: 235,
          minHeight: 139,
          padding: 13,
          boxSizing: 'border-box',
          background: '#ffffff',
        }}
      >
        <Skeleton
          key={type}
          active
          title={false}
          paragraph={{ rows: 4, width: ['91px', '100%', '100%', '146px'] }}
          style={{ width: 209 }}
        />
      </div>
    </ConfigProvider>
  ),
});
