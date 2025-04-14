import React from 'react';
import type { PaginationProps } from '@oceanbase/design';
import { Pagination } from '@oceanbase/design';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};

const App: React.FC = () => (
  <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
);

export default App;
