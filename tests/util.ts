import { act } from '@testing-library/react';
import fs from 'fs';
import { join } from 'path';
import { _rs as onEsResize } from 'rc-resize-observer/es/utils/observerUtil';
import { _rs as onLibResize } from 'rc-resize-observer/lib/utils/observerUtil';

export function getPackageList() {
  return fs
    .readdirSync(join(__dirname, '../packages'))
    .filter(item => item.charAt(0) !== '.' && item.charAt(0) !== '_');
}

export function getComponentList(packageName: string) {
  return fs
    .readdirSync(join(__dirname, `../packages/${packageName}/src`))
    .filter(item => item.charAt(0) !== '.' && item.charAt(0) !== '_');
}

// ref: https://www.codermore.com/post/2023/03/07/ejvf8/#%E5%88%A4%E6%96%AD-react-%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%9E%8B
export function isReactComponent(Component) {
  return !!Component?.prototype?.isReactComponent;
}

/**
 * Wait for a time delay. Will wait `advanceTime * times` ms.
 *
 * @param advanceTime Default 1000
 * @param times Default 20
 */
export async function waitFakeTimer(advanceTime = 1000, times = 20) {
  for (let i = 0; i < times; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await act(async () => {
      await Promise.resolve();

      if (advanceTime > 0) {
        jest.advanceTimersByTime(advanceTime);
      } else {
        jest.runAllTimers();
      }
    });
  }
}

export const triggerResize = (target: Element) => {
  const originGetBoundingClientRect = target.getBoundingClientRect;

  target.getBoundingClientRect = () => ({ width: 510, height: 903 }) as DOMRect;

  act(() => {
    onLibResize([{ target } as ResizeObserverEntry]);
    onEsResize([{ target } as ResizeObserverEntry]);
  });

  target.getBoundingClientRect = originGetBoundingClientRect;
};
