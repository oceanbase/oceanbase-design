import React, { useState } from 'react';
import { Pie } from '@oceanbase/charts';

const Demo: React.FC = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([
    {
      type: 'Category A',
      value: 27,
    },
    {
      type: 'Category B',
      value: 25,
    },
    {
      type: 'Category C',
      value: 18,
    },
    {
      type: 'Category D',
      value: 15,
    },
    {
      type: 'Category E',
      value: 10,
    },
    {
      type: 'Other',
      value: 5,
    },
  ]);

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    onReady: plot => {
      console.log(plot);
    },
  };

  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          marginLeft: 8,
        }}
      >
        External state changes will not re-render
      </button>
      <button
        onClick={() => {
          setData([
            {
              type: 'Category D',
              value: 15,
            },
            {
              type: 'Category E',
              value: 10,
            },
            {
              type: 'Other',
              value: Math.random() * 100,
            },
          ]);
        }}
        style={{
          marginLeft: 8,
        }}
      >
        Data changes trigger re-render
      </button>
      <Pie {...config} />
    </div>
  );
};

export default Demo;
