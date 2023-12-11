import * as React from 'react';
import { render } from '@testing-library/react';
import { createCache, StyleProvider } from '@ant-design/cssinjs';
import path from 'path';
import { globSync } from 'glob';
import { renderToString } from 'react-dom/server';
import { resetWarned } from 'rc-util/lib/warning';
import { TriggerMockContext } from './demoTestContext';
import { excludeWarning, isSafeWarning } from './excludeWarning';
import rootPropsTest from './rootPropsTest';
import { isReactComponent } from '../util';

export { rootPropsTest };

require('isomorphic-fetch');

export type Options = {
  skip?: boolean | string[];
  testingLib?: boolean;
  testRootProps?: false | object;
  /**
   * Not check component `displayName`, check path only
   */
  nameCheckPathOnly?: boolean;
};

function baseText(
  doInject: boolean,
  packageName: string,
  component: string,
  options: Options = {}
) {
  const files = globSync(`./packages/${packageName}/src/${component}/demo/*.tsx`);
  files?.forEach(file => {
    // to compatible windows path
    file = file.split(path.sep).join('/');
    const testMethod =
      options.skip === true ||
      (Array.isArray(options.skip) && options.skip.some(c => file.includes(c)))
        ? test.skip
        : test;

    // function doTest(name: string, openTrigger = false) {
    testMethod(
      doInject ? `renders ${file} extend context correctly` : `renders ${file} correctly`,
      () => {
        resetWarned();

        Date.now = jest.fn(() => new Date('2016-11-22').getTime());
        jest.useFakeTimers().setSystemTime(new Date('2016-11-22'));

        // eslint-disable-next-line
        let Demo = require(`../../${file}`).default;
        // Inject Trigger status unless skipped
        Demo = typeof Demo === 'function' ? <Demo /> : Demo;
        if (doInject) {
          Demo = (
            <TriggerMockContext.Provider value={{ popupVisible: true }}>
              {Demo}
            </TriggerMockContext.Provider>
          );
        }

        // Inject cssinjs cache to avoid create <style /> element
        Demo = <StyleProvider cache={createCache()}>{Demo}</StyleProvider>;

        // Demo Test also include `dist` test which is already uglified.
        // We need test this as SSR instead.
        if (doInject) {
          const { container } = render(Demo);
          // comment demo snapshot tests for now
          // expect({ type: 'demo', html: container.innerHTML }).toMatchSnapshot();
        } else {
          const html = renderToString(Demo);
          // comment demo snapshot tests for now
          // expect({ type: 'demo', html }).toMatchSnapshot();
        }

        jest.clearAllTimers();

        // Snapshot of warning info
        if (doInject) {
          const errSpy = excludeWarning();
          const errorMessageSet = new Set(errSpy.mock.calls.map(args => args[0]));
          const errorMessages = Array.from(errorMessageSet)
            .filter(msg => !isSafeWarning(msg, true))
            .sort();

          expect(errorMessages).toMatchSnapshot();

          errSpy.mockRestore();
        }
      }
    );
    jest.useRealTimers();
  });
}

/**
 * Inject Trigger to force open in test snapshots
 */
export function extendTest(packageName: string, component: string, options: Options = {}) {
  baseText(true, packageName, component, options);
}

/**
 * Test all the demo snapshots
 */
export default function demoTest(
  packageName: string,
  component: string,
  Component: React.ComponentType,
  options: Options = {}
) {
  baseText(false, packageName, component, options);
  if (options?.testRootProps !== false) {
    if (isReactComponent(Component)) {
      rootPropsTest(Component, null!, {
        props: options?.testRootProps,
      });
    }
  }
}
