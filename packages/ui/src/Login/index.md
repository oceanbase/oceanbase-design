---
title: Login 登录
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

<code src="./demo/bg-image.tsx" title="背景图片"></code>

<code src="./demo/board.tsx" title="顶部公告"></code>

<code src="./demo/otherLogin.tsx" title="第三方登录"></code>

<code src="./demo/with-alert.tsx" title="警告提示"></code>

<code src="./demo/activate.tsx" title="用户激活"></code>

<code src="./demo/authCode.tsx" title="登录验证码"></code>

<code src="./demo/is-mobile.tsx" title="移动端支持" iframe="600"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| logo | 标题 | string | - | - |
| bgImage | 背景图片 URL 地址 | string | - | - |
| title | 背景图片上的文案标题 | string | - | - |
| description | 背景图片上的描述文案 | string | - | - |
| board | 顶部公告 | ReactNode | - | - |
| alertProps | Alert 属性 | [ButtonProps](https://ant.design/components/alert-cn/#API) | - | - |
| enableRegister | 是否开启注册 | boolean | - | - |
| loginProps | 传递给 login 的参数，继承自 FormProps | [FormProps](https://ant.design/components/form-cn/#API) | - | - |
| registerProps | 传递给 register 的参数，继承自 FormProps | [FormProps](https://ant.design/components/form-cn/#API) | - | - |
| otherLoginProps | 传递给 register 的参数，继承自 FormProps | [FormProps](https://ant.design/components/form-cn/#API) | - | - |
| showAuthCode | 是否显示验证码 | boolean | - | - |
| showOtherLoginButton | 是否显示第三方登录按钮 | boolean | - | - |
| authCodeImg | 验证码图片 URL 地址 | string | - | - |
| onAuthCodeImgChange | 刷新验证码回调 | function | - | - |
| isMobile | 是否为移动端 | boolean | false | - |
