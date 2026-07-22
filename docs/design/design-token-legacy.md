---
title: Design Token (Legacy)
order: 4
group: General
---

OceanBase Design Token is maintained and updated by designers. Technically, it supports the same capabilities as [antd](https://ant.design/docs/react/customize-theme-cn).

## Using Design Token

### In React

- For function components, use the `useToken` hook to get Design Token:

```tsx | pure
import { Button, useToken } from '@oceanbase/design';
import React from 'react';

const App: React.FC = () => {
  const { token } = useToken();

  return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
};

export default App;
```

- For class components, use the `token` object to get Design Token:

```tsx | pure
import { Button, ConfigProvider, token } from '@oceanbase/design';
import React from 'react';

class App extends React.Component {
  render() {
    return <Button style={{ backgroundColor: token.colorPrimary }}>Button</Button>;
  }
}

export default App;
```

### Outside React

- In constant files, dva models, or other non-React environments, use the `token` object to get Design Token.

```ts
import { token } from '@oceanbase/design';

export const taskStatusList = [
  {
    value: 'running',
    label: 'Running',
    color: token.colorPrimary,
  },
];
```

### In Less

- By importing the `less` theme file from @oceanbase/design, you can use Design Token variables directly in Less:

```less
@import '~@oceanbase/design/es/theme/index.less';

.button {
  color: @colorPrimary;
  border-radius: @borderRadius;
}
```

- To use a specific theme's Less file, set the `@theme` variable in your global styles:

```less
@theme: default | dark | compact | aliyun;
```

- Install the [Less IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-less) extension in VSCode for variable hints and autocomplete.

![](https://mdn.alipayobjects.com/huamei_fhnyvh/afts/img/A*_37-QqtQGQUAAAAAAAAAAAAADmfOAQ/original)

## Design Token List

### SeedToken

<TokenTable type="seed"></TokenTable>

### MapToken

> Inherits all SeedToken properties

<TokenTable type="map"></TokenTable>

### AliasToken

> Inherits all SeedToken and MapToken properties

<TokenTable type="alias"></TokenTable>

## More Usage

- For more usage of the theme, see the antd documentation: https://ant.design/docs/react/customize-theme-cn
