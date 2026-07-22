---
title: Welcome
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/with-card-type.tsx" title="stepType"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| title | Title | string | - | - |
| description | Description | string | - | - |
| bgImage | Background image URL | string | - | - |
| introduces | Introduction list | [IntroduceItem](welcome#introduceitem)[] | - | - |
| buttonText | Button text | string | - | - |
| buttonProps | Button props | [ButtonProps](https://ant.design/components/button-cn/#API) | - | - |
| steps | Step list | [StepItem](welcome#stepitem)[] | {} | - |
| stepType | Step display type | ['default', 'card'] | default | - |
| helps | Fixed header | [HelpItem](welcome#helpitem)[] | - | - |

### IntroduceItem

| Property    | Description              | Type   | Default | Version |
| :---------- | :----------------------- | :----- | :------ | :------ |
| image       | Image URL                | string | -       | -       |
| title       | Introduction title       | string | -       | -       |
| description | Introduction description | string | -       | -       |

### StepItem

| Property    | Description            | Type             | Default | Version |
| :---------- | :--------------------- | :--------------- | :------ | :------ |
| title       | Step title             | string           | -       | -       |
| description | Step description       | string           | -       | -       |
| imgUrl      | icon                   | string           | -       | -       |
| operations  | Operation descriptions | OperationProps[] | -       | -       |

### OperationProps

| Property | Description        | Type   | Default | Version |
| :------- | :----------------- | :----- | :------ | :------ |
| onClick  | Operation callback | Func   | -       | -       |
| text     | Operation text     | string | -       | -       |

### HelpItem

| Property | Description         | Type    | Default | Version |
| :------- | :------------------ | :------ | :------ | :------ |
| title    | Help title          | string  | -       | -       |
| link     | Help document link  | string  | -       | -       |
| isMore   | Whether "View more" | boolean | false   | -       |
