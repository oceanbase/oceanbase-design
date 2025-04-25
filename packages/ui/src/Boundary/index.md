---
title: Boundary 错误兜底
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/Function.tsx" title="业务功能兜底展示" ></code>
<code src="./demo/403Code.tsx" title="403 错误码兜底" ></code>
<code src="./demo/404Code.tsx" title="404 错误码兜底"></code>
<code src="./demo/ErrorException.tsx" title="JS Error 兜底报错" description="Exception 使用时只需用该组件将需要兜底的页面包裹,然后子组件报错即可触发。"></code>
<code src="./demo/CompatibleException.tsx" title="兼容性报错" title="Exception 使用时只需用该组件将需要兜底的页面包裹,应用判断是否存在兼容性问题传值即可"></code>

## API

### Boundary.Code

| 参数       | 说明           | 类型                         | 默认值 | 版本 |
| :--------- | :------------- | :--------------------------- | :----- | :--- |
| code       | 异常状态码     | number (目前仅支持 403，404) | -      | -    |
| children   | 子元素         | ReactNode                    | -      | -    |
| onClick    | 点击按钮的回调 | () => void                   | -      | -    |
| imageUrl   | 图片地址       | string                       | -      | -    |
| title      | 标题文案       | string                       | -      | -    |
| buttonText | 按钮文案       | string                       | -      | -    |

### Boundary.Function

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| config | 所渲染数据的对象 | Record<string, [ConfigType](boundary#ConfigType)> | - | - |
| state | 此时所渲染的数据 | key of config | - | - |
| children | 子元素 | ReactNode | - | - |
| onClick | 点击按钮的回调 （当所有类型的按钮点击事件一致时，可统一传值，如不同，请在 config 中单独配置） | () => void | - | - |

### ConfigType

| 参数       | 说明         | 类型       | 默认值 | 版本 |
| :--------- | :----------- | :--------- | :----- | :--- |
| title      | 标题         | string     | -      | -    |
| imageUrl   | 图片链接     | string     | -      | -    |
| buttonText | 按钮文案     | string     | -      | -    |
| onClick    | 按钮点击回调 | () => void | -      | -    |

### Boundary.Exception

| 参数         | 说明             | 类型       | 默认值 | 版本 |
| :----------- | :--------------- | :--------- | :----- | :--- |
| children     | 子元素           | ReactNode  | -      | -    |
| subscription | 内容文案         | string     | -      | -    |
| onClick      | 点击按钮的回调   | () => void | -      | -    |
| imageUrl     | 图片地址         | string     | -      | -    |
| title        | 标题文案         | string     | -      | -    |
| buttonText   | 按钮文案         | string     | -      | -    |
| showError    | 是否显示报错信息 | boolean    | false  | -    |
| hasButton    | 是否有按钮       | boolean    | true   | -    |
