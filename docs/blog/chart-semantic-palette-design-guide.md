---
group: 设计
order: 2
title: 图表语义色板设计推导
---

> OBCharts 语义色板和 OBUI 的功能色同根同源，为了让用户对界面上的语义不产生歧义，语义色板和功能色尽量使用相似的颜色，这样也能让图表和UI组件更好的融合。

## 颜色定调

语义色板的颜色将在 OBUI 功能色基础上做调整，由于语义色板中需要一个表示其他、剩余、无效等含义的中性色，于是在 OBUI 中性色板中选择了5号色用于中性语义色。

| OBUI 功能色 | 色号 | 色值 | 示意图 |
| --- | --- | --- | --- |
| 常规色 | Blue-5-默认 | 006AFF | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/J5BhTKQG1UQAAAAAAAAAAAAADv3-AQBr/original) |
| 成功色 | Green-5-默认 | 0AC185 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/hDPUTqp5D0EAAAAAAAAAAAAADv3-AQBr/original) |
| 警示色-低风险 | Gold-5-默认 | FFA21A | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/na4cSKjgWmYAAAAAAAAAAAAADv3-AQBr/original) |
| 警示色-中风险 | Orange-5-默认 | FF7633 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/him2SKtrep0AAAAAAAAAAAAADv3-AQBr/original) |
| 错误色-高风险 | Red-5-默认 | FF1A1A | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/I09YQYgyMpsAAAAAAAAAAAAADv3-AQBr/original) |
| 错误色-非常严重 | Fuchsia-5-默认 | 8E2640 | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/LPPBTpXKBVYAAAAAAAAAAAAADv3-AQBr/original) |
| 中性色 | Grey-6 | 8592AD | ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QFz0QpjHDQYAAAAAAAAAAAAADv3-AQBr/original) |

由于 OBUI 功能色饱和度明度偏高，不适合用在图表中，因此将颜色的饱和度收敛至65-75范围内，使色彩更加柔和；中性色本身属于灰色范畴，不需要在此环节调整饱和度。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HjITR6ncSUkAAAAAAAAAAAAADv3-AQBr/original)

## 生成色阶

将上述颜色作为基准色，用 ColorLab 工具生成10色色阶，可得出如下色板：

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/GbdgQagxaNMAAAAAAAAAAAAADv3-AQBr/original)

## 定义色板

7 号色的明度饱和度与图表分类色板相近，可作为语义色板的基础色；中性色由于本身明度饱和度较低，7号色应用到图表中不太和谐，可以选择4号色作为基础色，得到语义基础色板如下：

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/nXm3TKjjjLgAAAAAAAAAAAAADv3-AQBr/original)

| 语义色板 | 色值 | 名称 | 色号 | 语义 | 表达含义 |
| --- | --- | --- | --- | --- | --- |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/A1UUTqdajt0AAAAAAAAAAAAADv3-AQBr/original) | 9DAAC6 | 灰 | 4 | 中性的 | 表示：默认的、其他、剩余、失效的 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/JF3UQLMU4z4AAAAAAAAAAAAADv3-AQBr/original) | 3983ED | 蓝 | 7 |  | 表示：常规的、常态的、默认的 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/LJwkRqOXqckAAAAAAAAAAAAADv3-AQBr/original) | 42C79B | 绿 | 7 | 正向的 | 表示：成功的、安全的、可行的、可获得的 |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/pspsSqsFZVwAAAAAAAAAAAAADv3-AQBr/original) | F9B048 | 黄 | 7 | 负向的 | 表示：提醒、注意、警示、低风险（严重等级 1） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/MPigSIef6nEAAAAAAAAAAAAADv3-AQBr/original) | F97A3B | 橙 | 7 |  | 表示：警告、严重、中风险（严重等级 2） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/xbRkS4Dl-XoAAAAAAAAAAAAADv3-AQBr/original) | E5363B | 红 | 7 |  | 表示：危险、失败、严重、错误（严重等级 3） |
| ![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Q0JxTLe8LyIAAAAAAAAAAAAADv3-AQBr/original) | 89273F | 紫红 | 7 |  | 表示：非常严重、高风险、停服（严重等级 4） |

## 应用效果

### 数据状态

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/VTN5QIxxOBQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">兼容性概览</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/9VjQS451mokAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">慢 SQL 指标</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/UyA2RYne-mwAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">资源水位</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/A0EURoKFHY0AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">备份任务状态</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/AvhzQYaFvGQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">迁移任务状态</div>
  </div>
</div>

### 异常标记

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/C58-RbypfJcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">异常数据点标记</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/MtSZTY-YrLcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">异常检测标记</div>
  </div>
</div>

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/KrdvS7IctOoAAAAAAAAAAAAADv3-AQBr/original)

CPU 使用率

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/wfgeSJlUTqMAAAAAAAAAAAAADv3-AQBr/original)

CPU 消耗比

<style>
table tr td img {
  max-width: 100%;
  height: 32px;
}
</style>
