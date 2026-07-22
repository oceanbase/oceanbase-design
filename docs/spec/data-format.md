---
group: Design Foundation
subGroup: Communication
title: Data Format
order: 19
---

Presentation formats for different types of numbers and language data in OB systems, defined based on software internationalization (i18n) requirements.

## Date

| Unit             | How to Display        | Chinese    | English    |
| ---------------- | --------------------- | ---------- | ---------- |
| Month, Day, Year | Display date and year | 2012-01-14 | 01/04/2012 |

## Time

| Unit | How to Display | Chinese | English |
| --- | --- | --- | --- |
| 24-hour clock | Do not display AM/PM | 14:00 |  |
| Estimated time | Round to the largest and nearest date or time | 5分钟内<br />3天前 | In 5 minutes<br />3 days ago |
| Absolute time | Display specific date or time | 2012-01-14 10:00 | 01/04/2012 10:00 |

## Date Range

| Range | How to Display                     | Chinese                  | English                  |
| ----- | ---------------------------------- | ------------------------ | ------------------------ |
| Year  | Display year at both start and end | 2024-09-02 ～ 2024-10-12 | 09/02/2024 ～ 10/12/2024 |
| Time  | Display in 24-hour format          | 11:00 - 14:30            | 11:00 - 14:30            |

## Timezone

Display timezone offset in UTC. UTC is optional; whether to display can be defined by scenario. If displayed, time should use data format yyyy-mm-dd or mm/dd/yyyy, and timezone info should appear in parentheses (UTC + X) to the right of the time data.

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/z5ZMRpKx4p8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
    <div class="image-description">When displaying timezone offset, use data format for date and time</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/JW-iTZGgJeoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
  </div>
</div>

## Currency Symbol

On English sites, always display currency as [currency symbol + amount], with the symbol before the value.

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

## Numbers, Phone Numbers

Numbers and phone numbers should always be displayed as digits, not as text.

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

## Address

English writing order: small to large (room number, floor, building, street, district, city, province, country); Chinese is the opposite.

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

## Brand Icons

In UI components, when using brand icons, the icon should be displayed separately from the text; text and icon should not exist in the same image.

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

## Data Masking

### Email

Use 「\*」 before @ to represent masked email information.

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5_roQqUP_sAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Do></Do></div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/efvRR6-GFIAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description"><Donot></Donot></div>
    <div class="image-description">Avoid using ellipsis for masked information</div>
  </div>
</div>

### Bank Card

Credit and debit card data use 4 middle-line revision symbols \[····] for masked display.

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
