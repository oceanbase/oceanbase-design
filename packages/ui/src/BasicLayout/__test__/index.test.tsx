import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import BasicLayout from '..';

describe('BasicLayout', () => {
  it('', () => {});
  // it('menus', async () => {
  //   const menus = [
  //     {
  //       link: '/test1',
  //       title: '测试1',
  //     },
  //     {
  //       link: '/test2',
  //       title: '测试2',
  //     },
  //     {
  //       link: '/test',
  //       title: '测试3',
  //       children: [],
  //     },
  //   ];
  //   const { getAllByTestId, getByTestId } = render(
  //     <BasicLayout
  //       location={{
  //         pathname: '/',
  //       }}
  //       menus={menus}
  //     />,
  //   );
  //   const items = getAllByTestId('menu.item');
  //   const sub = getByTestId('menu.sub');
  //   expect(items.length).toBe(2);
  //   expect(items[0].textContent).toBe('测试1');
  //   expect(items[1].textContent).toBe('测试2');
  //   expect(sub.textContent).toBe('测试3');
  // });
  // it('username userMenu', async () => {
  //   const username = 'testuser';
  //   const userMenu = <div data-testid="menu" />;
  //   const { getByTestId, queryByTestId, rerender } = render(
  //     <BasicLayout location={{ pathname: '/' }} topHeader={{ username }} />
  //   );
  //   fireEvent.mouseEnter(screen.getByText(username));
  //   expect(await waitFor(() => queryByTestId('menu'))).toBeNull();
  //   await rerender(<BasicLayout location={{ pathname: '/' }} topHeader={{ username, userMenu }} />);
  //   fireEvent.mouseEnter(screen.getByText(username));
  //   expect(await waitFor(() => getByTestId('menu'))).not.toBeNull();
  // });
  // it('logo', async () => {
  //   const url =
  //     'https://gw.alipayobjects.com/zos/bmw-prod/3282eb3a-9a1e-4129-968e-be5f9e6cd1a2.svg';
  //   const { getByTestId } = render(
  //     <BasicLayout location={{ pathname: '/' }} simpleLogoUrl={url} />
  //   );
  //   expect(getByTestId('logo').firstElementChild.getAttribute('src')).toEqual(url);
  // });
  // it('appData', async () => {
  //   const { getByTestId, getByText } = render(
  //     <BasicLayout
  //       location={{ pathname: '/' }}
  //       topHeader={{
  //         appData: {
  //           shortName: 'shortName test',
  //           version: 'version test',
  //           releaseTime: 'releaseTime test',
  //         },
  //       }}
  //     />
  //   );
  //   fireEvent.mouseEnter(getByTestId('help'));
  //   fireEvent.click(await waitFor(() => getByText(new RegExp(/shortName test/, 'i'))));
  //   expect(await waitFor(() => getByText(new RegExp(/shortName test/)))).not.toBeNull();
  //   expect(await waitFor(() => getByText(new RegExp(/version test/)))).not.toBeNull();
  //   expect(await waitFor(() => getByText(new RegExp(/shortName test/)))).not.toBeNull();
  // });
});
