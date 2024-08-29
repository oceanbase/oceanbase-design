---
title: Typography 字体
order: 3
---

用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。字体选择应遵循美观、清晰和好用的设计原则，保证内容的可读性和页面的整洁。

## 原则

OBUI 字体选择的原则主要分为三点。

#### 细节清晰

选择字体时，注意相似字形的区分，如字母“I”“l”和数字“1”，以免影响可读性。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TuH5SJIWFR8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">字体需要清晰的区分出数字 1、字母 i 和 l</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aQMRRLiM60AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">字体不能选择数字 1、字母 i 和 l 过于相近的字体</div>
  </div>
</div>

#### 多种字重和样式

拥有多种字重、样式、宽度的字体能给设计师更多灵活性，实际应用时便于区分信息层级。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nhdBQp6uk5UAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">不同字重帮助设计师区分信息层级</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-wKESKe1oDIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">只用一种字重不利于区分信息层级</div>
  </div>
</div>

#### 等宽字体

涉及到数据展示，尽量使用等宽字体，可以保证页面的整洁和可读性。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/77uUQpRYq7AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">等宽字体可以保证相同位数的数据宽度一致</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/27lEQqKoI6oAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">非等宽字体由于宽度不一致，会造成理解偏差</div>
  </div>
</div>

## 字体样式

OBUI 字体家族中的中文主字体选用系统默认字体；英文主字体选用开源字体 Inter。Inter 拥有干净的线条和优秀的可读性，是一种可变字体，能够适应不同屏幕尺寸和分辨率。

#### 中文字体家族

主字体苹方(苹果系统字体)

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ED-FSbpA5-8AAAAAAAAAAAAADv3-AQBr/original)

替代字体（若主字体不支持时，按以下字体顺序进行替换）

    -apple-system, Noto Sans, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

#### 英文字体家族

主字体 Inter

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Nv0eS7ayZM8AAAAAAAAAAAAADv3-AQBr/original)

替代字体（若主字体不支持时，按以下字体顺序进行替换）

    Inter,Noto sans，sans-serif,Roboto,Open Sans,Segoe UI,Helvetica Neue,Helvetica,Arial,Apple Color Emoji;

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WruIQoYSmOcAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Gb9ATZKXBnUAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/iPW7S6n6SicAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/rnPDSp3pn2sAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9vtmQrFH9gEAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

#### 代码字体家族

主字体Consolas

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/ug8JQL9l8s8AAAAAAAAAAAAADv3-AQBr/original)

替代字体（若主字体不支持时，按以下字体顺序进行替换）

    Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace；

#### 数字字体

数据表格为主要场景。为了更方便用户对比数据，采用等宽字体 Helvetica Neue 进行展示。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/J_Q4SYrqk3kAAAAAAAAAAAAADv3-AQBr/original)

## 字阶与行高

国际无障碍网页使用标准中明确给出指引：line-height=font size\*1.5。OB在实际应用中发现，若固定 1.5 倍的行高比例，当字号越大时，行高也会随之增大。为了让不同字号间的间距保持相同，在字号的基础上 +8 得到行高，即：font+8=line-height，保持呼吸空间的一致性。

**为方便记忆，中英文使用同一套字阶，在中英文展示场景下，均可兼容。**

| 字号     | 行高 | 应用场景                   |
| -------- | ---- | -------------------------- |
| **32px** | 40px | 超大字体，起特殊强调的作用 |
| **24px** | 32px | 页容器一级标题             |
| **20px** | 28px | 页容器二级标题             |
| **16px** | 24px | 卡片标题、容器标题         |
| **14px** | 22px | 正文、描述性文字           |
| **12px** | 20px | 提示、辅助性文字           |

## 字重

由于中英文字体差异，字重也有所区别。

#### 中文

使用 regular 以及 medium 的两种字重，分别对应代码中的 400 和 500。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/y4ZVT5bljk4AAAAAAAAAAAAADv3-AQBr/original)

#### 英文

使用 regular 以及 semibold 两种字重，分别对应代码中的 400 和 600。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/mF9SQbdAMdkAAAAAAAAAAAAADv3-AQBr/original)

#### 数字

主应用场景为数据表，不涉及信息层级的区分，只使用一种字重 regular，对应代码中的400。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/iGOOQYSwfo8AAAAAAAAAAAAADv3-AQBr/original)

## 使用案例

提供产品中字号和字重的最佳实践。

#### 一级标题

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7lzBRpvAackAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页容器一级标题需使用 24px 字号，中文字重使用 500，英文字重使用 600</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/LsLIQ4YiJwIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页容器一级标题不可以使用 32px 字号，这样和二级标题字阶跨度太大</div>
  </div>
</div>

#### 二级标题

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/pIMRTJ3XFDMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页容器二级标题需使用 20px 字号，中文字重使用 500，英文字重使用 600</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qa3bTI-i3vYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">页容器二级标题不可以和一级标题使用相同字号，这样无法拉开信息层级</div>
  </div>
</div>

#### 表格标题

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6sBCTrts6GYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图表标题中英文均使用 400</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TIsiSIQkGxgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图表标题不可使用 500 或 600</div>
  </div>
</div>
