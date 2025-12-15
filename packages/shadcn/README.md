# @oceanbase/shadcn

基于 [shadcn/ui](https://ui.shadcn.com/) 和 [@oceanbase/design](../design) 主题的定制组件库。

这是 [oceanbase-design](https://github.com/oceanbase/oceanbase-design) monorepo 的一部分。

## 特性

- 🎨 **OceanBase Design 主题**：完整集成 OceanBase Design 的设计系统，包括颜色、字体、圆角、间距等
- 🧩 **shadcn/ui 组件**：基于 shadcn/ui 的可复制组件架构，易于定制和扩展
- 🎯 **TypeScript 支持**：完整的类型定义
- 📦 **npm 包**：可作为 npm 包安装使用
- 🎨 **Tailwind CSS**：基于 Tailwind CSS 的样式系统

## 安装

```bash
npm install @oceanbase/shadcn
# 或
pnpm add @oceanbase/shadcn
# 或
yarn add @oceanbase/shadcn
```

## 使用

### 前置要求

1. 安装并配置 Tailwind CSS
2. 安装 `@oceanbase/design` 并配置 `ConfigProvider` 以注入 CSS 变量
3. 配置 Tailwind 以使用 OceanBase Design 的主题变量

### 基础使用

```tsx
import { Button, Card, Badge } from '@oceanbase/shadcn';

function App() {
  return (
    <div>
      <Button>点击我</Button>
      <Card>
        <CardHeader>
          <CardTitle>标题</CardTitle>
        </CardHeader>
        <CardContent>内容</CardContent>
      </Card>
      <Badge>标签</Badge>
    </div>
  );
}
```

### 配置 Tailwind CSS

在你的 `tailwind.config.js` 中，需要配置 OceanBase Design 的主题变量。参考项目中的 `tailwind.config.ts` 文件。

## 项目结构

```
packages/shadcn/
├── src/
│   ├── components/
│   │   └── ui/            # shadcn/ui 组件
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── input.tsx
│   │       └── alert.tsx
│   ├── lib/
│   │   ├── utils.ts       # 工具函数
│   │   └── theme.ts       # 主题工具函数
│   ├── style/
│   │   └── index.css      # 样式文件
│   └── index.ts           # 入口文件
├── .fatherrc.ts           # 构建配置
├── tailwind.config.ts     # Tailwind 配置示例（参考用）
└── package.json
```

## 主题系统

### OceanBase Design CSS 变量

项目使用 OceanBase Design 的 CSS 变量系统，所有变量都以 `--ob-` 为前缀：

- **颜色**：`--ob-blue-4`、`--ob-green-4`、`--ob-gray-10` 等
- **语义颜色**：`--ob-color-bg-default`、`--ob-color-text-default` 等
- **字体**：`--ob-font-family-default`、`--ob-font-size-325` 等
- **圆角**：`--ob-radius-sm`、`--ob-radius-md`、`--ob-radius-lg`
- **间距**：`--ob-space-200`、`--ob-space-300` 等
- **阴影**：`--ob-shadow-2` 等

### Tailwind CSS 映射

在 `tailwind.config.ts` 中，OceanBase Design 的主题已映射到 Tailwind 的配置：

```typescript
colors: {
  primary: {
    DEFAULT: "var(--ob-blue-4)",
    foreground: "var(--ob-white)",
    hover: "var(--ob-blue-5)",
  },
  // ... 更多颜色
}
```

### 使用主题

#### 在组件中使用

```tsx
import { Button } from '@/components/ui/button';

export default function MyComponent() {
  return <Button className="bg-ob-blue-4 text-ob-white">使用 OceanBase 主题</Button>;
}
```

#### 在 Tailwind 类中使用

```tsx
<div className="bg-ob-gray-1 text-ob-gray-10 p-300 rounded-md">
  使用 OceanBase Design 的颜色和间距
</div>
```

## 添加新组件

### 使用 shadcn/ui CLI

```bash
npx shadcn-ui@latest add [component-name]
```

### 手动创建组件

1. 在 `components/ui/` 目录下创建组件文件
2. 使用 OceanBase Design 的 CSS 变量和 Tailwind 类
3. 参考现有组件的实现方式

## 组件示例

### Button

```tsx
import { Button } from '@oceanbase/shadcn';

<Button>默认按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="destructive">危险按钮</Button>
<Button variant="outline">轮廓按钮</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@oceanbase/shadcn';

<Card>
  <CardHeader>
    <CardTitle>标题</CardTitle>
  </CardHeader>
  <CardContent>内容</CardContent>
</Card>;
```

### Badge

```tsx
import { Badge } from '@oceanbase/shadcn';

<Badge>默认</Badge>
<Badge variant="secondary">次要</Badge>
<Badge variant="destructive">危险</Badge>
```

## 设计规范

本项目遵循 OceanBase Design 的设计规范：

- **颜色系统**：使用 OceanBase Design 的完整色板
- **字体系统**：遵循 OceanBase Design 的字体规范
- **间距系统**：使用 OceanBase Design 的间距 token
- **圆角系统**：使用 OceanBase Design 的圆角规范
- **阴影系统**：使用 OceanBase Design 的阴影规范

更多设计规范请参考 [OceanBase Design 文档](https://design.oceanbase.com/)。

## 技术栈

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [@oceanbase/design](https://github.com/oceanbase/oceanbase-design)

## 许可证

MIT

## 相关链接

- [OceanBase Design](../design) - 设计系统核心包
- [shadcn/ui](https://ui.shadcn.com/) - 组件架构基础
- [Tailwind CSS 文档](https://tailwindcss.com/docs) - Tailwind CSS 文档

## Monorepo 说明

本项目是 `oceanbase-design` monorepo 的一部分。在 monorepo 中，`@oceanbase/design` 使用 `workspace:^` 引用，确保使用本地开发版本。
