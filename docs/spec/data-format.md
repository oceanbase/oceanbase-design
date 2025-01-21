---
group: Design Foundation 设计基础
subGroup: Communication 交流
title: Data format 数据格式
order: 19
---

基于软件国际化（i18n）要求, 所定义的OB系统中不同类型数字和语言数据的呈现格式。

## 日期

| 单位       | 如何显示       | 中文       | 英文       |
| ---------- | -------------- | ---------- | ---------- |
| 月，日，年 | 显示日期和年份 | 2012-01-14 | 01/04/2012 |

## 时间

| 单位 | 如何显示 | 中文 | 英文 |
| --- | --- | --- | --- |
| 24小时时钟 | 不显示上下午信息（AM/PM） | 14:00 |  |
| 预估时间 | 四舍五入到最大和最近的日期或时间 | 5分钟内<br />3天前 | In 5 mintues<br />3 days ago |
| 绝对时间 | 显示具体日期或时间 | 2012-01-14 10:00 | 01/04/2012 10:00 |

## 日期范围

| 范围 | 如何显示               | 中文                     | 英文                     |
| ---- | ---------------------- | ------------------------ | ------------------------ |
| 年   | 在开头和结尾都显示年份 | 2024-09-02 ～ 2024-10-12 | 09/02/2024 ～ 10/12/2024 |
| 时间 | 以24小时制显示         | 11:00 - 14:30            | 11:00 - 14:30            |

## 时区

统一以 UTC 为单位呈现时间地区的偏移，UTC 非必要信息，可基于场景定义此信息是否显示。若显示，时间需以数据格式 yyyy-mm-dd 或 mm/dd/yyyy 呈现，时区信息以括号（UTC + X ）形式呈现在时间数据右侧。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/z5ZMRpKx4p8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">显示时区偏移信息时，日期时间需使用数据格式</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JW-iTZGgJeoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

## 货币符号

英文站中，始终以【货币符号 + 货币数字】方式显示货币，符号放在数值前面。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/tNDHQoNAlA0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/cej4QqzJ_pIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

## 数字、电话号码

数字及电话应该始终以数字显示，不用文本代替。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/em7IS48ajWIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/y3yySIroC54AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

## 地址

英文书写顺序由小到大：房间号、楼层、楼号、道路、地区、市、省、国家；中文则相反。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/d3ksQos_VpEAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/-_i2TavtYBQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

## 品牌图标

UI组件中， 若使用品牌图标，图标需与文案分离显示；文案与图标不可同时存在于一张图片中。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Nk6aQpAaeY0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/MK6ZTbfKdb0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

## 数据脱敏

### 邮箱

用「\*」在 @ 前代表需要脱敏的邮箱信息。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5_roQqUP_sAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/efvRR6-GFIAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">避免用省略号显示脱敏信息</div>
  </div>
</div>

### 银行卡

信用卡和借记卡数据使用4个中线修订符\[····] 脱敏显示。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/0VadRJed6zMAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/xgaMTKiZ1E4AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description-center"></div>
  </div>
</div>
