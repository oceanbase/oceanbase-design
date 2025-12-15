# 快速开始指南

## 安装步骤

### 1. 安装依赖

在项目根目录运行：

```bash
# 在 oceanbase-design 根目录
pnpm install
```

### 2. 启动开发服务器

在 `packages/shadcn` 目录下运行：

```bash
cd packages/shadcn
pnpm dev
```

或在项目根目录运行：

```bash
pnpm --filter @oceanbase/shadcn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## 项目说明

### 核心特性

1. **OceanBase Design 主题集成**
   - 完整的 CSS 变量系统（`--ob-*`）
   - 颜色、字体、圆角、间距、阴影等设计 token
   - 通过 `ConfigProvider` 自动注入主题变量

2. **shadcn/ui 组件架构**
   - 可复制的组件系统
   - 基于 Tailwind CSS
   - 易于定制和扩展

3. **TypeScript 支持**
   - 完整的类型定义
   - 类型安全的组件 API

### 使用 OceanBase Design 主题

#### 方式一：使用 Tailwind 类

```tsx
<div className="bg-ob-blue-4 text-ob-white p-300 rounded-md">
  使用 OceanBase 主题
</div>
```

#### 方式二：使用 CSS 变量

```tsx
<div style={{ backgroundColor: 'var(--ob-blue-4)' }}>
  使用 CSS 变量
</div>
```

#### 方式三：使用主题工具函数

```tsx
import { colors, spacing, radius } from '@/lib/theme'

<div style={{ 
  backgroundColor: colors.blue[4],
  padding: spacing[300],
  borderRadius: radius.md
}}>
  使用主题工具函数
</div>
```

## 添加新组件

### 使用 shadcn/ui CLI

```bash
npx shadcn-ui@latest add [component-name]
```

添加后，记得根据 OceanBase Design 规范调整样式。

### 手动创建组件

1. 在 `components/ui/` 目录创建组件文件
2. 使用 OceanBase Design 的 CSS 变量
3. 参考现有组件的实现

示例：

```tsx
// components/ui/my-component.tsx
import { cn } from "@/lib/utils"

export function MyComponent({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-ob-color-bg-default",
        "border border-ob-color-border-default",
        "rounded-md p-300",
        className
      )}
      {...props}
    />
  )
}
```

## 主题定制

### 修改 Tailwind 配置

编辑 `tailwind.config.ts` 来调整主题映射：

```typescript
theme: {
  extend: {
    colors: {
      // 添加自定义颜色映射
    },
  },
}
```

### 修改全局样式

编辑 `app/globals.css` 来调整 CSS 变量默认值。

## 组件示例

查看 `app/page.tsx` 了解如何使用各个组件。

## 下一步

- 查看 [README.md](./README.md) 了解更多信息
- 查看 [OceanBase Design](../design) 包了解设计系统
- 参考 [OceanBase Design 文档](https://design.oceanbase.com/)
- 参考 [shadcn/ui 文档](https://ui.shadcn.com/)

## Monorepo 说明

本项目是 `oceanbase-design` monorepo 的一部分。在 monorepo 中：

- `@oceanbase/design` 使用 `workspace:^` 引用，确保使用本地开发版本
- 所有依赖在根目录统一管理
- 可以使用 `pnpm --filter @oceanbase/shadcn <command>` 来运行特定包的命令

