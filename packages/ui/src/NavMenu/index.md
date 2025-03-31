---
title: NavMenu 导航菜单
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="基本"></code>

## API

| 参数     | 说明           | 类型    | 默认值 |
| :------- | :------------- | :------ | :----- |
| menuList | 菜单栏配置数据 | IMenu[] | -      |

### IMenu

| 参数       | 说明                                        | 类型               | 默认值 |
| :--------- | :------------------------------------------ | :----------------- | :----- |
| key        | 菜单项唯一标识                              | string             | -      |
| title      | 菜单项展示文案                              | string             | -      |
| link       | 菜单项应用内路由链接                        | string \| string[] | ''     |
| openNewTab | 菜单项是否不在本应用内打开                  | boolean            | false  |
| href       | 菜单项外链                                  | string             | ''     |
| disabled   | 是否置灰                                    | boolean            | ''     |
| id         | 菜单项绑定元素 id，用于埋点等场景对元素识别 | string             | ''     |
| children   | 菜单项配置数据                              | IMenu[]            | []     |
