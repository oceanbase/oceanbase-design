---
title: Use with Next.js
order: 3
group: General
---

## Turbopack Build

- If you use `turbopack` as the build tool, `@oceanbase/design` works out of the box without extra config.
  - Next.js 16: Uses `turbopack` by default. See [Next.js docs](https://nextjs.org/docs/app/guides/upgrading/version-16#turbopack-by-default).
  - Next.js 15 and below: Enable `turbopack` manually.

```json
// package.json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build"
  }
}
```

## Webpack Build

- If `turbopack` is not enabled, Next.js uses `webpack`. Because `@oceanbase/design` bundles fonts, update your Next.js config to handle font files correctly:

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
