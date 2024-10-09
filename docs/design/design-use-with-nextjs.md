---
title: 在 Next.js 中使用
order: 3
group: 基础组件
---

- 为了和 `@oceanbase/design` 搭配使用，需要安装 `file-loader` 依赖，并修改 Next.js 配置：

```bash
npm install file-loader --save-dev
```

```ts
const nextConfig = {
  // to transpile some special packages to es5
  transpilePackages: ['@oceanbase', 'query-string', '@ant-design', '@ant-design/cssinjs'],
  webpack: config => {
    // to handle @oceanbase/design built-in font files
    config.module.rules.push({
      test: /\.(woff|woff2|ttf?g)$/i,
      use: ['file-loader'],
    });
    return config;
  },
};

export default nextConfig;
```

- 完整配置和可运行的示例，可以参考我们提供的 [Next.js + @oceanbase/design 项目模板](https://stackblitz.com/edit/nextjs-oceanbase-design)。

<iframe src="https://stackblitz.com/edit/nextjs-oceanbase-design?embed=1&file=app%2Fpage.tsx"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@oceanbase/ui reproduction template"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
