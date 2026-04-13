// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Button, Empty, Space } from '@oceanbase/design';

/**
 * Auto-generated — Code Connect (one file per Figma page).
 * Page: "↵Empty"
 */

// Figma: "Empty" · 5313:15023
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5313-15023&m=dev
figma.connect(Empty, '<FIGMA_OCEANBASE_EMPTY>', {
  props: {
    layout: figma.enum('layout', {
      horizontal: 'horizontal',
      vertical: 'vertical',
    }),
    type: figma.enum('type', {
      component: 'component',
      page: 'page',
    }),
    image: figma.enum('layout', {
      horizontal: figma.enum('type', {
        component: Empty.PRESENTED_IMAGE_COLORED as never,
        page: Empty.PRESENTED_IMAGE_DATABASE as never,
      }),
      vertical: figma.enum('type', {
        component: Empty.PRESENTED_IMAGE_COLORED as never,
        page: Empty.PRESENTED_IMAGE_GUIDE as never,
      }),
    }),
    title: figma.enum('layout', {
      horizontal: figma.enum('type', {
        component: undefined,
        page: 'Create Your Cluster',
      }),
      vertical: figma.enum('type', {
        component: undefined,
        page: 'Welcome',
      }),
    }),
    description: figma.enum('layout', {
      horizontal: figma.enum('type', {
        component: 'No data',
        page: 'There is no cluster, welcome to create one!',
      }),
      vertical: figma.enum('type', {
        component: 'No data',
        page: 'Here is the description.Here is the description.',
      }),
    }),
    actions: figma.enum('layout', {
      horizontal: figma.enum('type', {
        component: undefined,
        page: (<Button type="primary">Create</Button>) as never,
      }),
      vertical: figma.enum('type', {
        component: undefined,
        page: (
          <Space size={8}>
            <Button type="primary">Start</Button>
            <Button>Action</Button>
          </Space>
        ) as never,
      }),
    }),
  },
  example: ({ layout, image, title, description, actions }) => (
    <Empty layout={layout} image={image} title={title} description={description}>
      {actions}
    </Empty>
  ),
});
