// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Tag } from '@oceanbase/design';
import { PlusOutlined } from '@oceanbase/icons';

/**
 * Code Connect — Tag（5025:5905；style→color 与 Figma 一致；closeicon / plusicon 为布尔）。
 * plusicon 使用 @ant-design/icons 的 PlusOutlined，与 Figma 加号图层语义一致。
 */

// Figma: "Tag" · 5025:5905
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-5905&m=dev
figma.connect(Tag, '<FIGMA_OCEANBASE_TAG>', {
  props: {
    text: figma.string('text'),
    color: figma.enum('style', {
      default: 'default',
      info: 'processing',
      success: 'success',
      alert: 'warning',
      error: 'error',
      critical: 'purple',
    }),
    closable: figma.boolean('closeicon', {
      true: true,
      false: false,
    }),
    icon: figma.boolean('plusicon', {
      true: <PlusOutlined />,
      false: undefined,
    }),
  },
  example: ({ text, color, closable, icon }) => (
    <Tag color={color} closable={closable} icon={icon}>
      {text}
    </Tag>
  ),
});
