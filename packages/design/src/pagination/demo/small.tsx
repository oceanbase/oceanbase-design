import React from 'react';
import type { PaginationProps } from '@oceanbase/design';
import { Pagination } from '@oceanbase/design';

const showTotal: PaginationProps['showTotal'] = total => `Total ${total} items`;

const App: React.FC = () => (
  <>
    <Pagination size="small" total={50} />
    <br />
    <Pagination size="small" total={50} showTotal={showTotal} />
  </>
);

export default App;
