import React, { useState, useCallback } from 'react';
import { Pie } from '@oceanbase/charts';

const Demo: React.FC = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]);

  // memo function to avoid re-render
  const onReady = useCallback(plot => {
    console.log(plot);
  }, []);

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    onReady,
  };

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          marginLeft: 16,
        }}
      >
        外部状态改变不会重新渲染
      </button>
      <button
        onClick={() => {
          setData([
            {
              type: '分类四',
              value: 15,
            },
            {
              type: '分类五',
              value: 10,
            },
            {
              type: '其他',
              value: Math.random() * 100,
            },
          ]);
        }}
        style={{
          marginLeft: 16,
        }}
      >
        数据改变重新渲染
      </button>
      <Pie {...config} />
    </div>
  );
};

export default Demo;
