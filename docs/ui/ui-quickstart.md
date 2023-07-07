---
title: 快速上手
order: 2
group: 业务组件
---

## 使用 CodeSandbox 快速创建

- 可以使用我们提供的 [CodeSandbox 模板](https://codesandbox.io/s/oceanbase-ui-reproduction-template-k26fm5) 快速创建和预览。

<iframe src="https://codesandbox.io/embed/oceanbase-ui-reproduction-template-k26fm5?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/ui reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 在项目中使用

### 安装

```bash
$ npm i @oceanbase/ui --save
```

### 示例

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
