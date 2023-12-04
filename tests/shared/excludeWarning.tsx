// eslint-disable-next-line no-console
const originError = console.error;

export function isSafeWarning(message: boolean, all = false) {
  const list = [
    // remove react warning
    'useLayoutEffect does nothing on the server',
    // remove antd warning
    'Warning: [antd',
    // remove @ant-design/icons warning
    'Warning: [@ant-design/icons]',
    // remove warning
    'Warning:',
  ];

  if (all) {
    list.push('is deprecated in StrictMode');
  }

  return list.some(msg => String(message).includes(msg));
}

export function excludeWarning() {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation((msg, ...rest) => {
    if (isSafeWarning(msg)) {
      return;
    }
    originError(msg, ...rest);
  });

  return errorSpy;
}

export default function excludeAllWarning() {
  let cleanUp: Function;

  beforeAll(() => {
    cleanUp = excludeWarning().mockRestore;
  });

  afterAll(() => {
    cleanUp();
  });
}
