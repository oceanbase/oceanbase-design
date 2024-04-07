import React from 'react';
import { render } from '@testing-library/react';
import { ConfigProvider, TreeSelect } from '@oceanbase/design';
import type { TreeSelectProps } from '@oceanbase/design';

const TreeSelectTest: React.FC<TreeSelectProps> = props => {
  const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'leaf1',
            },
            {
              value: 'leaf2',
              title: 'leaf2',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'leaf3',
              title: <b style={{ color: '#006AFF' }}>leaf3</b>,
            },
          ],
        },
      ],
    },
  ];
  return <TreeSelect treeData={treeData} {...props} />;
};

describe('TreeSelect placeholder', () => {
  it('default placeholder should be correct', () => {
    const { container, asFragment } = render(<TreeSelectTest />);
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'Please select'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('custom placeholder should work', () => {
    const { container, asFragment } = render(<TreeSelectTest placeholder="custom placeholder" />);
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.global.placeholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <TreeSelectTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('TreeSelect placeholder should be priority to ConfigProvider locale.global.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <TreeSelectTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.TreeSelect.placeholder should work', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          TreeSelect: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <TreeSelectTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('TreeSelect placeholder should be priority to ConfigProvider locale.TreeSelect.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          TreeSelect: {
            placeholder: 'global placeholder',
          },
        }}
      >
        <TreeSelectTest placeholder="custom placeholder" />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'custom placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });

  it('ConfigProvider locale.TreeSelect.placeholder should be priority to ConfigProvider locale.global.placeholder', () => {
    const { container, asFragment } = render(
      <ConfigProvider
        locale={{
          locale: 'en',
          global: {
            placeholder: 'global placeholder',
          },
          TreeSelect: {
            placeholder: 'Select global placeholder',
          },
        }}
      >
        <TreeSelectTest />
      </ConfigProvider>
    );
    expect(container.querySelector('.ant-select-selection-placeholder').textContent).toBe(
      'Select global placeholder'
    );
    expect(asFragment().firstChild).toMatchSnapshot();
  });
});
