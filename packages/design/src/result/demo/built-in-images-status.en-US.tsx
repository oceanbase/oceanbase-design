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
  { key: 'success', name: 'success', description: 'Success', image: <Success /> },
  { key: 'error', name: 'error', description: 'Error', image: <Error /> },
  { key: 'warning', name: 'warning', description: 'Warning', image: <Warning /> },
  { key: 'processing', name: 'processing', description: 'Processing', image: <Processing /> },
  { key: 'normal', name: 'normal', description: 'Normal', image: <Normal /> },
  { key: '403', name: '403', description: 'No permission', image: <Image403 /> },
  { key: '404', name: '404', description: 'Page not found', image: <Image404 /> },
  { key: '500', name: '500', description: 'Server error', image: <Image500 /> },
];

export default () => (
  <BuiltInImageTable
    columns={{ name: 'status', description: 'Description', preview: 'Preview' }}
    dataSource={dataSource}
  />
);
