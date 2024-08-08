---
title: 在 Vite 中使用
order: 3
group: 业务组件
---

- 由于 Vite 是 ESM 构建工具，为了和 `@oceanbase/ui` 搭配使用，需要修改 Vite 配置：

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // @oceanbase/ui 依赖了 @antv/g6 3.x 版本，其不兼容 ESM 构建，将其指向 UMD 产物
      // ref: https://github.com/antvis/G6/issues/2961#issuecomment-1041016015
      {
        find: /^@antv\/g6/,
        replacement: path.resolve(__dirname, './node_modules/@antv/g6/dist/g6.min.js'),
      },
      // 去掉 @oceanbase/ui 部分组件中的 ~ less 路径引入，以兼容 ESM 构建
      // ref: https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: '' },
    ],
  },
});
```

- 同时还需要安装 `less` 依赖，因为 `@oceanbase/ui` 部分组件的样式使用了 less:

```bash
$ npm install less --save-dev
```

- 完整配置和可运行的示例，可以参考我们提供的 [Vite + @oceanbase/ui 项目模板](https://stackblitz.com/edit/vite-oceanbase-ui)。

<iframe src="https://stackblitz.com/edit/vite-oceanbase-ui?embed=1&file=src%2FApp.tsx"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/ui reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
