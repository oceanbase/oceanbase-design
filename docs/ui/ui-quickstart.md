---
title: Quick Start
order: 2
group: Biz Components
---

## Quick Create with CodeSandbox

- Use our [CodeSandbox template](https://codesandbox.io/s/oceanbase-ui-reproduction-template-cknd9y) to quickly create and preview.

<iframe src="https://codesandbox.io/embed/oceanbase-ui-reproduction-template-cknd9y?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/ui reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Use in Your Project

### Installation

```bash
$ npm i @oceanbase/ui --save
```

### Example

```jsx | pure
import { Lottie } from '@oceanbase/ui';

const App = () => {
  return (
    <Lottie
      path="https://assets9.lottiefiles.com/packages/lf20_WPqksadnNs.json"
      style={{
        height: 200,
      }}
    />
  );
};
```
