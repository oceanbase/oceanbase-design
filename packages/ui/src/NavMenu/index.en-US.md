---
title: NavMenu
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>

## API

| Property | Description      | Type    | Default |
| :------- | :--------------- | :------ | :------ |
| menuList | Menu config data | IMenu[] | -       |

### IMenu

| Property   | Description             | Type               | Default |
| :--------- | :---------------------- | :----------------- | :------ |
| key        | Unique menu item key    | string             | -       |
| title      | Menu item label         | string             | -       |
| link       | In-app route link       | string \| string[] | ''      |
| openNewTab | Open in new tab         | boolean            | false   |
| href       | External link           | string             | ''      |
| disabled   | Disabled                | boolean            | ''      |
| id         | Element id for tracking | string             | ''      |
| children   | Sub menu config         | IMenu[]            | []      |
