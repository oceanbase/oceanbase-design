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

  it('contentAlign="left" should add content-align-left class', () => {
    const { container, asFragment } = render(<DescriptionsTest1 contentAlign="left" />);
    expect(container.querySelector('.ant-descriptions-content-align-left')).toBeTruthy();
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('css ellipsis renders lightweight structure without typography', () => {
    const { container, asFragment } = render(
      <Descriptions
        title="User Info"
        items={[
          {
            key: '1',
            label: 'Address',
            children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
            contentProps: {
              ellipsis: 'css',
            },
          },
        ]}
      />
    );
    expect(container.querySelector('.ant-descriptions-item-content-css-ellipsis')).toBeTruthy();
    // 不包 Typography，避免每个描述项都挂溢出测量和 Tooltip
    expect(container.querySelector('.ant-typography')).toBeFalsy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeFalsy();
    // 字符串内容自动派生原生 title
    expect(
      container.querySelector('.ant-descriptions-item-content-css-ellipsis')?.getAttribute('title')
    ).toBe('No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China');
    // 截断样式已注入，且选择器和渲染出的类名一致
    expect(document.head.textContent).toContain('.ant-descriptions-item-content-css-ellipsis');
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('css ellipsis prefers explicit title and skips structured children', () => {
    const { container } = render(
      <Descriptions
        items={[
          {
            key: '1',
            label: 'Address',
            children: 'No. 18, Wantang Road',
            contentProps: {
              ellipsis: 'css',
              title: 'Explicit Title',
            },
          },
          {
            key: '2',
            label: 'Live',
            children: <span>Hangzhou</span>,
            contentProps: {
              ellipsis: 'css',
            },
          },
        ]}
      />
    );
    const ellipsisList = container.querySelectorAll('.ant-descriptions-item-content-css-ellipsis');
    expect(ellipsisList[0]?.getAttribute('title')).toBe('Explicit Title');
    expect(ellipsisList[1]?.getAttribute('title')).toBeNull();
  });

  it('css ellipsis falls back to full mode when copyable or editable is set', () => {
    const { container } = render(
      <Descriptions
        items={[
          {
            key: '1',
            label: 'Telephone',
            children: '1810000000',
            contentProps: {
              ellipsis: 'css',
              copyable: true,
            },
          },
          {
            key: '2',
            label: 'Address',
            children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
            contentProps: {
              ellipsis: 'css',
              editable: true,
            },
          },
        ]}
      />
    );
    // 内联操作按钮会被 css 截断容器一并裁掉，因此回退为完整模式
    expect(container.querySelector('.ant-descriptions-item-content-css-ellipsis')).toBeFalsy();
    // 省略能力仍然生效，可正常展示 Tooltip
    expect(container.querySelectorAll('.ant-typography-ellipsis').length).toBe(2);
    expect(container.querySelector('.ant-typography-copy')).toBeTruthy();
    expect(container.querySelector('.ant-typography-edit')).toBeTruthy();
  });

  it('css ellipsis keeps lightweight mode when copyable and editable are disabled', () => {
    const { container } = render(
      <Descriptions
        items={[
          {
            key: '1',
            label: 'Telephone',
            children: '1810000000',
            contentProps: {
              ellipsis: 'css',
              copyable: false,
              editable: false,
            },
          },
        ]}
      />
    );
    // 未渲染内联操作按钮，仍然使用 css 截断容器
    expect(container.querySelector('.ant-descriptions-item-content-css-ellipsis')).toBeTruthy();
    expect(container.querySelector('.ant-typography')).toBeFalsy();
  });

  it('component level contentProps works and can be overridden by item contentProps', () => {
    const { container } = render(
      <Descriptions
        contentProps={{
          ellipsis: 'css',
        }}
        items={[
          {
            key: '1',
            label: 'Address',
            children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
          },
          {
            key: '2',
            label: 'Remark',
            children: 'No ellipsis for this item',
            contentProps: {
              ellipsis: false,
            },
          },
        ]}
      />
    );
    const ellipsisList = container.querySelectorAll('.ant-descriptions-item-content-css-ellipsis');
    expect(ellipsisList.length).toBe(1);
    expect(
      container.querySelector('.ant-descriptions-item-content-css-ellipsis')?.getAttribute('title')
    ).toBe('No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China');
    // 单项覆盖为完整模式后，仍然包 Typography 用于内容处理
    expect(container.querySelector('.ant-typography')).toBeTruthy();
    expect(container.querySelector('.ant-typography-ellipsis')).toBeFalsy();
  });

  it('css ellipsis does not wrap item when bordered', () => {
    const { container } = render(
      <Descriptions
        bordered
        items={[
          {
            key: '1',
            label: 'Address',
            children: 'No. 18, Wantang Road',
            contentProps: {
              ellipsis: 'css',
            },
          },
        ]}
      />
    );
    expect(container.querySelector('.ant-descriptions-item-content-css-ellipsis')).toBeFalsy();
  });
});
