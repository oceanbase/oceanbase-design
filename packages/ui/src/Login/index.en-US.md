---
title: Login
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/basic.tsx" title="Basic"></code>
<code src="./demo/bg-image.tsx" title="Background image"></code>
<code src="./demo/board.tsx" title="Top announcement"></code>
<code src="./demo/otherLogin.tsx" title="Third-party login"></code>
<code src="./demo/with-alert.tsx" title="Alert"></code>
<code src="./demo/activate.tsx" title="User activation"></code>
<code src="./demo/authCode.tsx" title="Login captcha"></code>
<code src="./demo/password-optional.tsx" title="Optional password"></code>
<code src="./demo/component-props.tsx" title="Default username and disabled"></code>
<code src="./demo/is-mobile.tsx" title="Mobile support" iframe="600"></code>

## API

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| logo | Title | string | - | - |
| bgImage | Background image URL | string | - | - |
| title | Title on background image | string | - | - |
| description | Description on background image | string | - | - |
| board | Top announcement | ReactNode | - | - |
| alertProps | Alert props | [ButtonProps](https://ant.design/components/alert-cn/#API) | - | - |
| enableRegister | Enable registration | boolean | - | - |
| loginProps | Login form props, extends FormProps | [LoginProps](#loginprops) | - | - |
| registerProps | Register form props, extends FormProps | [FormProps](https://ant.design/components/form-cn/#API) | - | - |
| otherLoginProps | Other login form props, extends FormProps | [FormProps](https://ant.design/components/form-cn/#API) | - | - |
| showAuthCode | Show captcha | boolean | - | - |
| showOtherLoginButton | Show third-party login button | boolean | - | - |
| authCodeImg | Captcha image URL | string | - | - |
| onAuthCodeImgChange | Captcha refresh callback | function | - | - |
| isMobile | Mobile mode | boolean | false | - |

### LoginProps

- Extends [FormProps](https://ant.design/components/form-cn/#API) with:

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| passwordOptional | Allow empty password | boolean | false | - |
| componentProps | Component props | `{ username?: InputProps; password?: PasswordProps; authCode?: InputProps }` | - | - |
