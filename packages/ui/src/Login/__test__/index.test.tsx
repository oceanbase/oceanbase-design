import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
// import Login from '..';

describe('Login', () => {
  beforeAll(() => {
    jest.useFakeTimers();
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
  it('', () => {});
  // it('登录', async () => {
  //   // https://github.com/testing-library/react-testing-library/issues/54
  //   const fakeFn = jest.fn();
  //   const { getByTestId, debug } = render(
  //     <Login
  //       loginProps={{
  //         onFinish: () => {
  //           console.log('clicked');
  //         },
  //       }}
  //     />,
  //   );
  //   debug(getByTestId('login.form'));
  //   fireEvent.submit(getByTestId('login.form'));
  //   jest.advanceTimersByTime(1000);
  //   expect(fakeFn).toBeCalledTimes(1);
  // });

  // it('错误提示', async () => {
  //   const message = '登录失败，请重新输入';
  //   const { getByText } = render(
  //     <Login
  //       alertProps={{
  //         message,
  //       }}
  //     />
  //   );
  //   expect(getByText(message)).not.toBeNull();
  // });

  // it('注册', async () => {
  //   const { getByTestId } = render(<Login enableRegister />);
  //   fireEvent.click(getByTestId('login.register.btn'));
  //   expect(await waitFor(() => getByTestId('login.register'))).not.toBeNull();
  // });
});
