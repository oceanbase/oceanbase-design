import type { MessageType } from 'antd/es/message/interface';

/** Wrap message open with promise-like function, aligned with antd message API. */
export const wrapPromiseFn = (openFn: (resolve: () => void) => () => void): MessageType => {
  let closeFn: (() => void) | undefined;
  const closePromise = new Promise<boolean>(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = (() => {
    closeFn?.();
  }) as MessageType;
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  (result as MessageType & { promise: Promise<boolean> }).promise = closePromise;
  return result;
};
