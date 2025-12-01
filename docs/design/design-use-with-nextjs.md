---
title: 在 Next.js 中使用
order: 3
group: 基础组件
---

## Turbopack 构建

- 如果使用 `turbopack` 作为构建工具，则无需额外配置，即可正常使用 `@oceanbase/design`。
  - Next.js 16: 默认使用 `turbopack`，详见 [Next.js 文档](https://nextjs.org/docs/app/guides/upgrading/version-16#turbopack-by-default)。
  - Next.js 15 及以下版本: 需要手动开启 `turbopack`。

```json
// package.json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build"
  }
}
```

## Webpack 构建

- 如果没有开启 `turbopack` 构建，则 Next.js 会使用 `webpack` 构建。由于 `@oceanbase/design` 内置了字体包，需要按如下修改 Next.js 配置，以正确处理字体文件：

```ts
// next.config.ts
const nextConfig = {
  webpack: config => {
    // Handle font files
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
```
