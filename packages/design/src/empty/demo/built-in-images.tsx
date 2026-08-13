import React from 'react';
import { Empty } from '@oceanbase/design';
import BuiltInImageTable, { type BuiltInImageRow } from '../../_util/demo/BuiltInImageTable';

const dataSource: BuiltInImageRow[] = [
  {
    key: 'default',
    name: 'PRESENTED_IMAGE_DEFAULT / PRESENTED_IMAGE_SIMPLE',
    description: '默认与简单空状态',
    image: Empty.PRESENTED_IMAGE_DEFAULT,
  },
  {
    key: 'colored',
    name: 'PRESENTED_IMAGE_COLORED',
    description: '页面和区块级空状态',
    image: Empty.PRESENTED_IMAGE_COLORED,
  },
  {
    key: 'database',
    name: 'PRESENTED_IMAGE_DATABASE',
    description: '引导新建',
    image: Empty.PRESENTED_IMAGE_DATABASE,
  },
  {
    key: 'guide',
    name: 'PRESENTED_IMAGE_GUIDE',
    description: '功能开通等引导类场景',
    image: Empty.PRESENTED_IMAGE_GUIDE,
  },
];

export default () => (
  <BuiltInImageTable
    columns={{ name: '常量', description: '说明', preview: '预览' }}
    dataSource={dataSource}
  />
);
