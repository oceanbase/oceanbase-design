import React from 'react';
import { Cascader, Space } from '@oceanbase/design';
import type { CascaderProps } from '@oceanbase/design';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Space direction="vertical" size="small">
        <div>自定义偏移（offset: [20, 10]）</div>
        <Cascader
          options={options}
          placeholder="Please select (custom offset)"
          builtinPlacements={{
            bottomLeft: {
              points: ['tl', 'bl'],
              offset: [20, 10], // [x, y] 偏移量：x 向右偏移 20px，y 向下偏移 10px
              overflow: {
                adjustX: true,
                adjustY: true,
                shiftY: true,
              },
              htmlRegion: 'visible',
              dynamicInset: true,
            },
          }}
          placement="bottomLeft"
          style={{ width: 300 }}
        />
      </Space>
      <Space direction="vertical" size="small">
        <div>顶部位置自定义偏移（offset: [20, -10]）</div>
        <Cascader
          options={options}
          placeholder="Please select (top with custom offset)"
          builtinPlacements={{
            topLeft: {
              points: ['bl', 'tl'],
              offset: [20, -10], // y 向上偏移 10px
              overflow: {
                adjustX: true,
                adjustY: true,
                shiftY: true,
              },
              htmlRegion: 'visible',
              dynamicInset: true,
            },
          }}
          placement="topLeft"
          style={{ width: 300 }}
        />
      </Space>
    </Space>
  );
};

export default App;
