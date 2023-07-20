import { cleanup, render } from '@testing-library/react';
import Welcome from '..';

describe('Welcome', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  afterAll(() => {
    cleanup();
  });
  it('渲染正常', async () => {
    const { findAllByTestId } = render(
      <Welcome
        introduces={[
          {
            image:
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
            title: '专业管理平台',
            description: '以 OB 为核心的专业数据库管理平台',
          },
        ]}
        steps={[
          {
            title: '创建集群',
            imgUrl:
              'https://gw-office.alipayobjects.com/bmw-prod/4e085e0f-8e35-4fe6-925c-cdc2c2036cef.png',
            description: '在租户内创建数据库，数据库即可对接应用。',
            operations: [
              {
                text: '创建应用服务',
                onClick: () => {
                  console.info('我被点击了');
                },
              },
            ],
          },
        ]}
        helps={[
          {
            title: '创建新的集群',
            link: 'https://www.alipay.com',
          },
        ]}
      />
    );
    expect((await findAllByTestId('introduces')).length).toBe(1);
    expect((await findAllByTestId('steps')).length).toBe(1);
    expect((await findAllByTestId('helps')).length).toBe(1);
  });
});
