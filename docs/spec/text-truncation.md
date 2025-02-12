---
group: Design Foundation 设计基础
subGroup: Communication 交流
title: Text Truncation 文字截断
order: 21
---

当字符串超过容器尺寸，溢出容器时，截断或缩短内容的方式；通常，通过使用省略号（…）来完成。

## 设计原则

- 清晰：使用熟悉的符号与用户交流文字无法全部显示
- 可扩展：一直提供用户查看被截断信息的方式

## 截断方法

共支持 2 种截断方式。

### 尾部截断

句子及文本信息无法显示完整时，在尾部以“...”的方式进行字符省略。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/qnswRozhkcAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">确保所有信息在容器内显示</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/29XZR75lnA0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免文字溢出容器</div>
  </div>
</div>

### 中间截断

邮件无法显示完整时，使用中间截断的方式，为用户显示完整的域名信息。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/6-v3SauTLhcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">截断时保留完整的邮件域名</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/oLOsRaGTO6UAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免截断邮件域名</div>
  </div>
</div>

## 截断剖析

用 3 个省略号（…）示意被截断的文本。

### 字符限制

<strong>截断文本时，保留不少于4个字符</strong>。在容器中的任何字符串中，如果没有足够的空间容纳完整拼写或用连字符连接的单词，考虑缩写文本。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/q1MDTYexsgsAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">截断时至少保留 4 个字符</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/q361Q7TioPUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免将 “demo1.internal-el6.satellite” 截断为 “de…”</div>
  </div>
</div>

### 符号限制

尽可能避免在标点符号之前或之后直接截断。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/jEW8QIM5xukAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">在文字后截断</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RoddQq0baRAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免在标点后直接截断，多个符号难以分割</div>
  </div>
</div>

### 扩展性

确保至少有一个方法供用户查看整个字符串。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Kuu4TrMjz7gAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">截断后在气泡展示完整信息</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/wDDRQrBDsEYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免不提供查看完整信息的方式</div>
  </div>
</div>

## 使用案例

### 导航

导航组件中的文字应完整展示，避免在导航项中使用缩写或截断的文本。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/8lCrRLWhel8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">完整显示导航文字</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/uOnlS5AK4mcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免截断导航中的文字信息</div>
  </div>
</div>

### 标题

定义表格列宽时应注意文字长度，不要截断列标题中的文本。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/BL5wSrmq0RgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">标题文字应该完整显示，不被截断</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Nb-MQ6UsyjgAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免以截断的方式显示标题</div>
  </div>
</div>

### 链接

如果文本是链接的一部分，省略号也应该是链接的一部分。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/TBUYR7BhWzUAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HpsIQYlc2EMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

### 帮助文字

对用户行为起到引导作用的帮助信息应完整展示，避免截断。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/hrzyRr4M9eEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/RAMkTZtLYfkAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>
