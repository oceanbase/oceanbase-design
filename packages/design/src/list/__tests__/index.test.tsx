import React from 'react';
import { render } from '@testing-library/react';
import { List } from '@oceanbase/design';
import type { ListProps } from '@oceanbase/design';

const dataSource = [];
for (let i = 1; i < 100; i++) {
  dataSource.push({
    content: `This is long long long long long long long long text`,
  });
}

const ListTest: React.FC<ListProps<any>> = ({ pagination, ...restProps }) => (
  <List
    bordered={true}
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    dataSource={dataSource}
    renderItem={item => <List.Item>{item.content}</List.Item>}
    pagination={{
      ...pagination,
    }}
    {...restProps}
  />
);

describe('List', () => {
  it('render', () => {
    const { container, asFragment } = render(<ListTest />);
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('hideOnSinglePage should be true by default', () => {
    const { container, asFragment } = render(<ListTest dataSource={dataSource.slice(0, 10)} />);
    expect(container.querySelector('.ant-pagination')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('hideOnSinglePage could be changed', () => {
    const { container, asFragment } = render(
      <ListTest
        dataSource={dataSource.slice(0, 10)}
        pagination={{
          hideOnSinglePage: false,
        }}
      />
    );
    expect(container.querySelector('.ant-pagination')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
