import React from 'react';
import { render } from '@testing-library/react';
import { Pie } from '@oceanbase/charts';
import type { PieConfig } from '@oceanbase/charts';

const DonutTest = (props: Partial<PieConfig>) => {
  const data = [
    {
      type: '分类一',
      value: 1.3,
    },
    {
      type: '分类二',
      value: 3.38,
    },
    {
      type: '分类三',
      value: 4.56,
    },
    {
      type: '分类四',
      value: 5.7,
    },
    {
      type: '分类五',
      value: 6.22,
    },
  ];
  const config: PieConfig = {
    data,
    angleField: 'value',
    colorField: 'type',
    isDonut: true,
    ...props,
  };
  return <Pie {...config} />;
};

describe('donut', () => {
  it('floor number', () => {
    const { container, asFragment } = render(<DonutTest />);
    expect(container.querySelectorAll('.g2-html-annotation')?.[1].textContent).toBe('21.16');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('statistic title and content formatter', () => {
    const { container, asFragment } = render(
      <DonutTest
        statistic={{
          title: {
            formatter: () => 'custom title',
          },
          content: {
            formatter: () => 'custom content',
          },
        }}
      />
    );
    expect(container.querySelectorAll('.g2-html-annotation')?.[0].textContent).toBe('custom title');
    expect(container.querySelectorAll('.g2-html-annotation')?.[1].textContent).toBe(
      'custom content'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
