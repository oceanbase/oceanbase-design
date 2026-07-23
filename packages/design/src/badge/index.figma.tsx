// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Badge, Space } from '@oceanbase/design';

/**
 * Code Connect — Badge（5025:2374、5025:2368、5025:2361）。
 * 三条对应三个 Figma 节点与 `documentUrlSubstitutions` 占位键（类比 Tabs / TabsItem）。
 * Figma `dot` 控件值为 typo「ture」与「false」，用 `figma.enum` 映射为布尔（§2.1 非原生布尔例外）。
 * §3.4c：映射不含 style / styles / className；`Badge` 的 `color` 为组件 API；预览根样式见 `demo/index.figma.tsx`（§3.4a）。
 * 仅整块子树映射的两条：`example` 用 `<div>{row}</div>`（§3.4）。
 */

// Figma: ".Badge/Non-status/Default" · 5025:2374
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2374&m=dev
figma.connect(Badge, '<FIGMA_OCEANBASE_BADGE_NON_STATUS_DEFAULT>', {
  props: {
    row: (
      <Space size={4}>
        <Badge dot color="#9eadc4" size="small" />
        <Badge dot color="#9eadc4" size="small" />
        <Badge dot color="#9eadc4" size="small" />
        <Badge dot color="#9eadc4" size="small" />
        <Badge dot color="#9eadc4" size="small" />
      </Space>
    ),
  },
  example: ({ row }) => <div>{row}</div>,
});

// Figma: ".Badge/status/Default" · 5025:2368
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2368&m=dev
figma.connect(Badge, '<FIGMA_OCEANBASE_BADGE_STATUS_DEFAULT>', {
  props: {
    row: (
      <Space size={4}>
        <Badge dot color="#c5ccd4" size="small" />
        <Badge dot color="#1677ff" size="small" />
        <Badge dot color="#52c41a" size="small" />
        <Badge dot color="#faad14" size="small" />
        <Badge dot color="#ff4d4f" size="small" />
      </Space>
    ),
  },
  example: ({ row }) => <div>{row}</div>,
});

// Figma: "Badge" · 5025:2361
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2361&m=dev
figma.connect(Badge, '<FIGMA_OCEANBASE_BADGE>', {
  props: {
    dot: figma.enum('dot', {
      ture: true,
      false: false,
    }),
    size: figma.enum('size', {
      medium: 'default',
      small: 'small',
    }),
    count: figma.enum('dot', {
      ture: undefined,
      false: figma.enum('size', {
        small: 5,
        medium: 99,
      }),
    }),
    color: figma.enum('dot', {
      ture: '#ff4d4f',
      false: figma.enum('size', {
        small: '#eb4242',
        medium: '#ebeff7',
      }),
    }),
  },
  example: ({ dot, size, count, color }) => (
    <Badge dot={dot} count={count} size={size} color={color} />
  ),
});
