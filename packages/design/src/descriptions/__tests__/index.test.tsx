import React from 'react';
import { render } from '@testing-library/react';
import { Descriptions } from '@oceanbase/design';
import type { DescriptionsProps } from '@oceanbase/design';

const DescriptionsTest1: React.FC<DescriptionsProps> = props => (
  <Descriptions
    title="User Info"
    items={[
      {
        key: '1',
        label: 'UserName',
        children: 'Zhou Maomao',
      },
      {
        key: '2',
        label: 'Telephone',
        children: '1810000000',
      },
      {
        key: '3',
        label: 'Live',
        children: 'Hangzhou, Zhejiang',
      },
      {
        key: '4',
        label: 'Remark',
        children: 'empty',
      },
      {
        key: '5',
        label: 'Address',
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      },
    ]}
    {...props}
  />
);

const DescriptionsTest2: React.FC<DescriptionsProps> = props => (
  <Descriptions title="User Info" {...props}>
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);

describe('Descriptions', () => {
  it('render for items', () => {
    const { container, asFragment } = render(<DescriptionsTest1 />);
    expect(container.querySelector('.ant-descriptions-item-no-colon')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('render for Descriptions.Item', () => {
    const { container, asFragment } = render(<DescriptionsTest2 />);
    expect(container.querySelector('.ant-descriptions-item-no-colon')).toBeFalsy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('remove colon for vertical layout by default for items', () => {
    const { container, asFragment } = render(<DescriptionsTest1 layout="vertical" />);
    expect(container.querySelector('.ant-descriptions-item-no-colon')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('remove colon for vertical layout by default for Descriptions.Item', () => {
    const { container, asFragment } = render(<DescriptionsTest2 layout="vertical" />);
    expect(container.querySelector('.ant-descriptions-item-no-colon')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('contentProps should work for items', () => {
    const { container, asFragment } = render(
      <Descriptions
        title="User Info"
        items={[
          {
            key: '1',
            label: 'UserName',
            children: 'This is long long long long long long long long long long long Link',
          },
        ]}
      />
    );
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('contentProps should work for Descriptions.Item', () => {
    const { container, asFragment } = render(
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">
          This is long long long long long long long long long long long Link
        </Descriptions.Item>
      </Descriptions>
    );
    expect(container.querySelector('.ant-typography-ellipsis')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
