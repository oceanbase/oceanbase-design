---
title: Input 输入框
nav:
  title: 基础组件
  path: /components
demo:
  cols: 2
---

- 🔥 完全继承 antd [Input](https://ant.design/components/input-cn) 的能力和 API，可无缝切换。
- 💄 定制主题和样式，符合 OceanBase Design 设计规范。
- 📢 默认填充 `placeholder`，并支持通过 ConfigProvider `locale.Input.placeholder` 进行全局配置。

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本使用" description="默认填充 `placeholder`。"></code>
<code src="./demo/search.tsx" title="搜索框"></code>
<code src="./demo/password.tsx" title="密码输入框" description='新密码请设 `autoComplete="new-password"`，会禁用浏览器的自动填充、密码管理器和已保存密码的下拉提示，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/autocomplete)。'></code>
<code src="./demo/presuffix.tsx" title="前缀和后缀" description="在输入框上添加前缀或后缀图标。"></code>
<code src="./demo/showCount.tsx" title="字数提示" description="超出字数长度后无法输入。"></code>
<code src="./demo/allowClear.tsx" title="清除图标" description="用于一键清除输入内容。"></code>

## API

- 详见 antd Input 文档: https://ant.design/components/input-cn

### Input.Password 扩展

默认与 antd 一致，委托 `Input.Password` 实现，`type="password"` 支持浏览器密码自动填充。`autoComplete="new-password"` 时额外附加密码管理器 `data-*` hint，避免第三方密码管理器误识别。
