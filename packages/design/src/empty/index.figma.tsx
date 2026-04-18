// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Button, Empty, Space } from '@oceanbase/design';

/**
 * Code Connect — Empty（layout × type 四分支）。
 * §3.4c：映射不含 style / styles / className；预览根尺寸与白底见 `demo/index.figma.tsx`（§3.4a）。
 * 文案与分支与 Playground `demo/index.figma.tsx` 中 `useMemo` 字面量对齐。
 */

// Figma: "Empty" · 5313:15023
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-15023&m=dev
figma.connect(Empty, '<FIGMA_OCEANBASE_EMPTY>', {
  props: {
    root: figma.enum('layout', {
      horizontal: figma.enum('type', {
        component: (
          <Empty layout="horizontal" image={Empty.PRESENTED_IMAGE_COLORED} description="No data" />
        ),
        page: (
          <Empty
            layout="horizontal"
            image={Empty.PRESENTED_IMAGE_DATABASE}
            title="Create Your Cluster"
            description="There is no cluster, welcome to create one!"
          >
            <Button type="primary">Create</Button>
          </Empty>
        ),
      }),
      vertical: figma.enum('type', {
        component: (
          <Empty layout="vertical" image={Empty.PRESENTED_IMAGE_COLORED} description="No data" />
        ),
        page: (
          <Empty
            layout="vertical"
            image={Empty.PRESENTED_IMAGE_GUIDE}
            title="Welcome"
            description="Here is the description.Here is the description."
          >
            <Space size={8}>
              <Button type="primary">Start</Button>
              <Button>Action</Button>
            </Space>
          </Empty>
        ),
      }),
    }),
  },
  example: ({ root }) => <div>{root}</div>,
});
