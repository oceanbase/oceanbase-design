// @ts-nocheck

import { figma } from '@figma/code-connect';
import { Pagination } from '@oceanbase/design';

/**
 * Code Connect — Pagination
 * Page: "↵Pagination"
 */

// Figma: "Pagination" · 5025:2181
// https://www.figma.com/design/dqhv73np0wsgrmzIZYRDf2/codeconnect%E6%B5%8B%E8%AF%95%E7%BB%84%E4%BB%B6%E5%BA%93?node-id=5025-2181&m=dev
figma.connect(Pagination, '<FIGMA_OCEANBASE_PAGINATION>', {
  props: {
    size: figma.enum('size', {
      medium: 'default',
    }),
  },
  example: ({ size }) => (
    <Pagination
      size={size}
      total={500}
      current={7}
      pageSize={10}
      showTotal={total => 'Total ' + total + ' items'}
      showSizeChanger
    />
  ),
});
