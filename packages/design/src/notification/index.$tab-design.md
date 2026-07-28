## 何时使用

用于展示与任务发起页脱钩的非阻断性任务流程结果或系统反馈。通过全局悬浮机制，实现跨页面触达，不打断用户当前任务。

## 组件剖析

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/MjFaSb8saCYAAAAAQKAAAAgADuOXAQJr/original)

1. 图标
2. 标题
3. 关闭
4. 描述（可选）
5. 异常明细（可选）
6. 按钮（可选）
7. 进度条（可选）

### 图标

图标必选，仅支持线性图标，置于文字左侧辅助说明通知类型；图标颜色与标题保持一致。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/pkQBTLRHAJ0AAAAARuAAAAgADuOXAQJr/original" />
    <div class="image-description">使用线性图标，颜色与标题保持一致</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/az6KS4icUPwAAAAAQJAAAAgADuOXAQJr/original" />
    <div class="image-description">避免使用面性图标</div>
  </div>
</div>

### 标题

标题必选，精炼总结提示内容。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/hXenTZCYZEYAAAAARtAAAAgADuOXAQJr/original" />
    <div class="image-description">直接说明问题</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/foAnTpd4txEAAAAAQKAAAAgADuOXAQJr/original" />
    <div class="image-description">避免无实质性内容的表达</div>
  </div>
</div>

### 关闭

不论是否支持自动关闭，均需提供关闭按钮。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/ffDqRI0XBO0AAAAAQJAAAAgADuOXAQJr/original" />
    <div class="image-description">避免取消关闭按钮</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/Y3OpQLpUMXIAAAAAQJAAAAgADuOXAQJr/original" />
    <div class="image-description">避免使用文字按钮替代图标按钮</div>
  </div>
</div>

### 描述

描述应简短、清晰、准确。在组件宽度不足时，换行显示全部描述内容。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/xP1uQJgl044AAAAAS5AAAAgADuOXAQJr/original" />
    <div class="image-description">描述完全展示</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/RofhRZWMxR0AAAAAQQAAAAgADuOXAQJr/original" />
    <div class="image-description">避免省略描述</div>
  </div>
</div>

异常通知（警告、错误）的描述语需按固定格式提供，提高用户自助排查问题的能力。

- 提供安抚/安心信息（可选）
- 异常原因
- 解决方案
- 推荐操作（可选）

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/pr0yTLos7LAAAAAATNAAAAgADuOXAQJr/original)

### 异常明细

异常通知（警告、错误）除了需要提供描述，还需提供异常明细，提高用户反馈问题时的准确性。

- 单独成行，出现在异常描述下方。
- 默认露出 1 行，支持展开更多，点击展开后展开按钮消失。
- 复制明细内容为 Markdown 格式。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/VuART6oyEr0AAAAASBAAAAgADuOXAQJr/original)

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/TdEfSZf7lfQAAAAASpAAAAgADuOXAQJr/original" />
    <div class="image-description">异常明细分行展示，字色为 Gray-8（#5C6B8A）</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/9U_JQKJwoDIAAAAAQSAAAAgADuOXAQJr/original" />
    <div class="image-description">避免单行展示全部信息，避免与正文字色一致</div>
  </div>
</div>

### 按钮

标题及描述中均可提供多个文字按钮，文字按钮之间用逗号隔开。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/eEIaSIjuENYAAAAARuAAAAgADuOXAQJr/original" />
    <div class="image-description">标题支持多个文字按钮</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/BPpcR6WVhdEAAAAAR7AAAAgADuOXAQJr/original" />
    <div class="image-description">描述中支持多个文字按钮，跳出按钮可提供图标指引</div>
  </div>
</div>

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/BNeyQLtTXXYAAAAAQJAAAAgADuOXAQJr/original" />
    <div class="image-description">避免使用 Button 按钮</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/F5C5TZgCD7IAAAAAQLAAAAgADuOXAQJr/original" />
    <div class="image-description">避免在标题和描述中同时出现按钮</div>
  </div>
</div>

### 进度条

启用规则：默认禁用自动关闭，启用后出现倒计时进度条。

计时时长：通知中仅有标题时默认显示 5s，同时包含标题 + 描述时默认显示 10s，支持自定义时长。

暂停规则：鼠标悬停时停止倒计时，移开后继续。用户离开页面后倒计时暂停，返回页面后继续。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/uYNSSKgsNY8AAAAAR1AAAAgADuOXAQJr/original" />
    <div class="image-description">鼠标悬停时停止计时，移开后继续</div>
  </div>
</div>

## 通知类型

### 信息

表示「这是件值得知道的事」。

推荐用法：默认启用自动关闭。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/Tre3RZVaee8AAAAAQ9AAAAgADuOXAQJr/original)

### 成功

表示「成功了」。

推荐用法：仅对【写入任务】的成功做提示。默认启用自动关闭。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/NcWLRqGls5QAAAAARCAAAAgADuOXAQJr/original)

### 警告

表示「这可能很重要，请注意」。

推荐用法：对【信息读取任务】或【系统未知原因】异常做提示。相同异常只显示第一条。默认启用自动关闭。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/zANNQLbncccAAAAARCAAAAgADuOXAQJr/original)

### 错误

表示「出错了，或者正在发生错误」。

推荐用法：对【写入任务】异常做提示。不启用自动关闭。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/YjoeQI3RRq8AAAAARAAAAAgADuOXAQJr/original)

### 进行中

表示「进行中」。

推荐用法：用于展示持续时间较长的进程（超过 4-5 秒）状态。使用时请尽量提供完成进程所需的预估时间，或用户当前所处的进程阶段。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/rYVGToOf1M4AAAAAQ3AAAAgADuOXAQJr/original)

## 如何使用

### 组件尺寸

组件宽度默认 350px，不允许调整。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/gDsHQZwdpEkAAAAAQ7AAAAgADuOXAQJr/original" />
    <div class="image-description">通知提示组件宽度默认 350px</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/N1OhQ4Z5P-sAAAAAQKAAAAgADuOXAQJr/original" />
    <div class="image-description">避免调窄或调宽</div>
  </div>
</div>

### 出现位置

仅支持放置组件到页面左下角，并留出 24px 边距。

<div style="display: flex">
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/V1evR6Vc7OEAAAAAROAAAAgADuOXAQJr/original" />
    <div class="image-description">仅支持放置于页面左下角</div>
  </div>
  <div style="width: 50%">
    <img src="https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/VX8_QIfGxAYAAAAAQfAAAAgADuOXAQJr/original" />
    <div class="image-description">避免用于其他位置</div>
  </div>
</div>

### 堆叠样式

如果同时出现多条通知，触发堆叠样式。新通知在最上方，重叠部分最多显示 3 条。启动自动关闭时，最上方的通知自动关闭后，下方的通知开始新的倒计时。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/019gSaZVN2gAAAAARJAAAAgADuOXAQJr/original)

鼠标悬停在通知组件上时，通知信息展开，最多展示 3 条，每个组件间隔 8 像素。当一条通知关闭后，下一条通知出现。启动自动关闭时，鼠标悬停到组件上时计时停止。

![](https://mdn.alipayobjects.com/huamei_qpzozj/afts/img/VSHSRr46lwoAAAAAVOAAAAgADuOXAQJr/original)
