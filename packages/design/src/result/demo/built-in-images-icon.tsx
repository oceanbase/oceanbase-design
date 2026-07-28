import React from 'react';
import { Result } from '@oceanbase/design';
import BuiltInImageTable, { type BuiltInImageRow } from '../../_util/demo/BuiltInImageTable';

const dataSource: BuiltInImageRow[] = [
  {
    key: 'not-found',
    name: 'PRESENTED_IMAGE_NOT_FOUND',
    description: '资源不存在',
    image: <Result.PRESENTED_IMAGE_NOT_FOUND />,
  },
  {
    key: 'network-error',
    name: 'PRESENTED_IMAGE_NETWORK_ERROR',
    description: '网络异常',
    image: <Result.PRESENTED_IMAGE_NETWORK_ERROR />,
  },
  {
    key: 'version-update',
    name: 'PRESENTED_IMAGE_VERSION_UPDATE',
    description: '版本更新',
    image: <Result.PRESENTED_IMAGE_VERSION_UPDATE />,
  },
];

export default () => (
  <BuiltInImageTable
    columns={{ name: '常量', description: '说明', preview: '预览' }}
    dataSource={dataSource}
  />
);
