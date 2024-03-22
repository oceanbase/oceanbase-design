import React from 'react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
// import Login from '@oceanbase/icons';

describe('Login', () => {
  beforeAll(() => {
    vi.useFakeTimers();
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // Deprecated
        removeListener: vi.fn(), // Deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });
  afterAll(() => {
    cleanup();
  });
  it('', () => {});
  // it('登录', async () => {
  //   // https://github.com/testing-library/react-testing-library/issues/54
  //   const fakeFn = vi.fn();
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
  //   vi.advanceTimersByTime(1000);
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
