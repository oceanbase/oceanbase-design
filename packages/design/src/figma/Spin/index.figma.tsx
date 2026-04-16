// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Spin } from '@oceanbase/design';

/**
 * Code Connect — Spin（三种尺寸，与设计稿 5026:7713 一致）。
 * Figma `size=medium` 对应 antd `size="default"`。
 */

// Figma: "Spin" · 5026:7713
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5026-7713&m=dev
figma.connect(Spin, '<FIGMA_OCEANBASE_SPIN>', {
  props: {
    size: figma.enum('size', {
      large: 'large',
      medium: 'default',
      small: 'small',
    }),
  },
  example: ({ size }) => (
    <div
      style={{
        padding: 24,
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 120,
        boxSizing: 'border-box',
      }}
    >
      <Spin spinning size={size} />
    </div>
  ),
});
