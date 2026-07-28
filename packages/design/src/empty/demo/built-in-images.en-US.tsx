import React from 'react';
import { Empty } from '@oceanbase/design';
import BuiltInImageTable, { type BuiltInImageRow } from '../../_util/demo/BuiltInImageTable';

const dataSource: BuiltInImageRow[] = [
  {
    key: 'default',
    name: 'PRESENTED_IMAGE_DEFAULT / PRESENTED_IMAGE_SIMPLE',
    description: 'Default/simple',
    image: Empty.PRESENTED_IMAGE_DEFAULT,
  },
  {
    key: 'colored',
    name: 'PRESENTED_IMAGE_COLORED',
    description: 'Page/block empty state',
    image: Empty.PRESENTED_IMAGE_COLORED,
  },
  {
    key: 'database',
    name: 'PRESENTED_IMAGE_DATABASE',
    description: 'Guide to create',
    image: Empty.PRESENTED_IMAGE_DATABASE,
  },
  {
    key: 'guide',
    name: 'PRESENTED_IMAGE_GUIDE',
    description: 'Onboarding / welcome',
    image: Empty.PRESENTED_IMAGE_GUIDE,
  },
];

export default () => (
  <BuiltInImageTable
    columns={{ name: 'Constant', description: 'Description', preview: 'Preview' }}
    dataSource={dataSource}
  />
);
