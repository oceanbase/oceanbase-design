import React from 'react';
import Success from '../Success';
import Error from '../Error';
import Warning from '../Warning';
import Processing from '../Processing';
import Normal from '../Normal';
import Image403 from '../403';
import Image404 from '../404';
import Image500 from '../500';
import BuiltInImageTable, { type BuiltInImageRow } from '../../_util/demo/BuiltInImageTable';

const dataSource: BuiltInImageRow[] = [
  { key: 'success', name: 'success', description: '成功', image: <Success /> },
  { key: 'error', name: 'error', description: '失败', image: <Error /> },
  { key: 'warning', name: 'warning', description: '警告', image: <Warning /> },
  { key: 'processing', name: 'processing', description: '进行中', image: <Processing /> },
  { key: 'normal', name: 'normal', description: '正常', image: <Normal /> },
  { key: '403', name: '403', description: '无权限', image: <Image403 /> },
  { key: '404', name: '404', description: '页面未找到', image: <Image404 /> },
  { key: '500', name: '500', description: '服务器错误', image: <Image500 /> },
];

export default () => (
  <BuiltInImageTable
    columns={{ name: 'status', description: '说明', preview: '预览' }}
    dataSource={dataSource}
  />
);
