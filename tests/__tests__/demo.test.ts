import { getPackageList, getComponentList, isReactComponent } from '../util';
import demoTest from '../shared/demoTest';
import mountTest from '../shared/mountTest';

const packageList = getPackageList();
packageList
  .filter(packageName => ['design', 'ui', 'charts'].includes(packageName))
  .forEach(packageName => {
    const componentList = getComponentList(packageName);
    componentList.forEach(component => {
      try {
        // eslint-disable-next-line
        const Component = require(`../../packages/${packageName}/src/${component}`)?.default;
        demoTest(packageName, component, Component);
        if (isReactComponent(Component)) {
          mountTest(Component);
        }
      } catch {}
    });
  });
