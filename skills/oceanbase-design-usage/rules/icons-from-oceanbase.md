---
title: 图标从 @oceanbase/icons 引入
impact: high
tags: [icons, design, ui, dependency]
---

# 与 design/ui 搭配的图标必须从 @oceanbase/icons 引入

## Why

混用 @ant-design/icons 会导致依赖双源、样式与命名空间不一致，不利于升级与样式统一。

## Incorrect

```tsx
import { SearchOutlined } from '@ant-design/icons';
import { Button } from '@oceanbase/design';
<Button icon={<SearchOutlined />}>搜索</Button>;
```

## Correct

```tsx
import { SearchOutlined } from '@oceanbase/icons';
import { Button } from '@oceanbase/design';
<Button icon={<SearchOutlined />}>搜索</Button>;
```

## When not to use

- 某第三方库强制依赖 @ant-design/icons 且无法替换时，可仅在该局部使用；业务自写代码仍应使用 @oceanbase/icons。
