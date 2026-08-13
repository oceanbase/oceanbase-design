import React from 'react';
import { Result } from '@oceanbase/design';
import BuiltInImageTable, { type BuiltInImageRow } from '../../_util/demo/BuiltInImageTable';

const dataSource: BuiltInImageRow[] = [
  {
    key: 'not-found',
    name: 'PRESENTED_IMAGE_NOT_FOUND',
    description: 'Resource not found',
    image: <Result.PRESENTED_IMAGE_NOT_FOUND />,
  },
  {
    key: 'network-error',
    name: 'PRESENTED_IMAGE_NETWORK_ERROR',
    description: 'Network error',
    image: <Result.PRESENTED_IMAGE_NETWORK_ERROR />,
  },
  {
    key: 'version-update',
    name: 'PRESENTED_IMAGE_VERSION_UPDATE',
    description: 'Version update',
    image: <Result.PRESENTED_IMAGE_VERSION_UPDATE />,
  },
];

export default () => (
  <BuiltInImageTable
    columns={{ name: 'Constant', description: 'Description', preview: 'Preview' }}
    dataSource={dataSource}
  />
);
