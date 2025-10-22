import type {
  GlobalToken as GlobalTokenTypeUtil,
  OverrideTokenMap as OverrideTokenTypeUtil,
  FullToken as FullTokenTypeUtil,
  TokenMapKey,
} from '@ant-design/cssinjs-utils';

import type { AliasToken as AntAliasToken, ComponentTokenMap } from 'antd/es/theme/interface';

export * from 'antd/es/theme/interface';

export interface AliasToken extends AntAliasToken {
  /**
   * @nameZH 正文的字体粗细
   * @nameEN Font weight for body text
   * @desc 控制正文的字体粗细。
   * @descEN Control the font weight of body text.
   */
  fontWeight: number;
  /**
   * @nameZH 辅助描述的字体粗细，一般弱于正文
   * @nameEN Font weight for auxiliary description, usually weaker than body text
   * @desc 控制辅助描述的字体粗细，一般弱于正文。
   * @descEN Control the font weight of auxiliary description, usually weaker than body text.
   */
  fontWeightWeak: number;
  /**
   * @nameZH 等于 fontSize * lineHeight 的值
   * @nameEN Round of fontSize * lineHeight
   * @desc 等于 fontSize * lineHeight 的值。
   * @descEN Round of fontSize * lineHeight.
   */
  fontHeight: number;
  /**
   * @nameZH MD号圆角
   * @nameEN MD Border Radius
   * @desc MD号圆角，用于组件中的一些中圆角，如嵌套 Card、Alert、Tooltip、Dropdown 等一些组件样式。
   * @descEN MD size border radius, used in some medium border radius components, such as nested Card, Alert, Tooltip, Dropdown etc.
   * @default 6
   */
  borderRadiusMD: number;
  /**
   * @nameZH 严重错误色
   * @nameEN Critical Error Color
   * @desc 用于表示操作严重失败的 Token 序列，如严重错误告警等。
   * @descEN Used to represent the visual elements of the operation serious failure, such as critical error alert etc.
   */
  colorFuchsia: string;
  /**
   * @nameZH 严重错误色的描边色
   * @nameEN Critical error border color
   * @desc 严重错误色的描边色
   * @descEN The border color of the critical error state.
   */
  colorFuchsiaBorder: string;
  /**
   * @nameZH 严重错误色背景
   * @nameEN Critical error background color
   * @desc 严重错误色背景
   * @descEN The background color of the critical error state.
   */
  colorFuchsiaBg: string;
  /**
   * @nameZH 严重错误色文本
   * @nameEN Critical error text color
   * @desc 严重错误色文本
   * @descEN The text color of the critical error state.
   */
  colorFuchsiaText: string;
}

/** Final token which contains the components level override */
export type GlobalToken = GlobalTokenTypeUtil<ComponentTokenMap, AliasToken>;

export type OverrideToken = OverrideTokenTypeUtil<ComponentTokenMap, AliasToken>;

export type OverrideComponent = TokenMapKey<ComponentTokenMap>;

export type FullToken<C extends TokenMapKey<ComponentTokenMap>> = FullTokenTypeUtil<
  ComponentTokenMap,
  AliasToken,
  C
>;
