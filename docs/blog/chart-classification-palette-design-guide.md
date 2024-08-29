---
group: 设计
order: 1
title: 图表分类色板设计方法
---

> 摘要：设计图表色板时需要考虑很多因素，比如：品牌调性、界面和谐度、色彩辨识度、视障人群的可读性、复杂数据场景的灵活度等；设计初期需要通过对色相的选取来确定风格走向，然后通过调整明度饱和度来加强色彩差异，以便于用户识别，最后可通过工具来验证色板的合理性，看是否满足色彩辨识度和可读性标准。

## 基础色彩理论

### 24色相环

首先引入一个概念 24 色相环，色环是由基础三原色混合得来的，红、黄、蓝是基础三原色，红+黄=橙，黄+蓝=绿，蓝+红=紫，橙、绿、紫是间色，另外中间补间的颜色叫复合色。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/fitdTouCCBQAAAAAAAAAAAAADv3-AQBr/original)

设计色板时，可以采用主色取值法，在HSB模式下，先选定一个主色，然后以主色为起点，S（饱和度）、B（明度）保持不变，H（色相）以 15°为增量或减量，生成 24 色相环，通过该色环选取其他配色。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/cGdrS7Xj8RgAAAAAAAAAAAAADv3-AQBr/original)

### 常用配色方法

常用的色环配色法，有「邻近色配色法」「对比色配色法」「互补色配色法」「分裂互补色」「三角配色」「四分配色」等等。:::tips

- 邻近色：在色相环中，相差 15°的颜色为邻近色，凡在 60°范围内的颜色都属于邻近色的范围。邻近色之间往往是我中有你，你中有我，色彩之间比较和谐。
- 对比色：在色相环中，角度相差 120°-180°之间的色彩。
- 互补色：在色相环中成 180°角的两种颜色，互为补色，当这两种颜色彼此相邻放置时，它们会为这两种特定颜色创造最强烈的对比度。
- 分裂互补色：也叫等腰三角形配色，以互补色为中心，左右15°- 60°区间内的颜色。:::

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/5-Z9QIRe6nsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/ZtKwRZNGQKMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

竞品的颜色色相会根据自身的业务特性和要传递的品牌调性选择合适的配色方法，除了「Grafana」是比较标准的邻近色配色，其他竞品没有严谨的规律可寻，但可以找到大致的配色方向，比如：「AntV」和「Tableau」更像是分裂互补色配色，「Echarts」更偏向于四分法配色。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/DB47SZJbLgkAAAAAAAAAAAAADv3-AQBr/original)

配色方案除了设计师发挥自身的经验价值，还可以利用配色工具让方案更加科学，这里推荐给大家两个好用的配色工具，分别是[「Adobe Color」](https://color.adobe.com/zh/create/color-wheel)和[「Paletton」](http://paletton.com/#uid=703101kl6lPhAQkk2vSnjcbop3Ykm9lG3nsycJpjuWi1Sde2klzD09LrHgcwwq1NJuaXxkOmeQNQ7rAgfrX0m9T0Cn)。「Adobe Color」支持的配色方法很多，覆盖了上述所有配色方法，「Paletton」支持的方法相对基础，目前有邻近色、对比色和四分色三个配色模式，如：分裂互补色、三角配色等可以通过手动调节来完成。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/n0GjRaGBMuYAAAAAAAAAAAAADv3-AQBr/original)

Adobe Color 配色方法

## 图表配色原则

由于图表色板配色需要考虑界面和谐度、色彩辨识度、视障人群可读性、复杂数据场景灵活度等诸多因素。在设计色板时需满足以下几个原则：

### 色彩和谐

界面中会出现大面积图表，图表颜色饱和度过高，容易让用户产生疲劳感、不适合长时间阅读，因此图表配色需要柔和与均衡。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/KsS3ToT7LskAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">使用明度、饱和度舒适的色彩</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/XWvvTbymBtcAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">避免使用明度、饱和度过高的色彩</div>
  </div>
</div>

### 色彩可辨识

色彩辨识度是指颜色和颜色之间的区分度，在配色数量少的情况下很容易做到，但当颜色数量大于等于 10 时，相近的颜色会变多不容易辨别，可以通过拉开色相差距和拉开明暗差距两种方式来提高色彩辨识度。

在 CIELab 色彩空间模型中，L值一般在 35-85 之间，L值过高颜色太亮，L值过低颜色太暗，都不利于用户阅读。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Pxl6TICe_fIAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">L 值在 35-85 之间，颜色亮度适中</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/aaNuRJb1OVoAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">L 值过高或 L 值过低，不利于阅读</div>
  </div>
</div>

### 视障可读

视障人群无法准确的识别色相，主要依靠色彩的明暗去区分不同的颜色，可以借助工具 ColorLab 模拟视障显示效果来验证色板的可读性。

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mT_PQoF9ZYYAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">明暗相间，视障人群也可以辨别</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/hhscS47j-5AAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">明度相近，视障人群无法辨别</div>
  </div>
</div>

## OBCharts 色板设计

OBCharts 色板设计的过程可以分为以下几个步骤：① 确定主题色；② 选择配色色相；③ 收敛饱和度明度范围；④ 完善色板；⑤ 验证可读性。

### 确定主题色

为了传递出科技、专业和可靠的感受，OceanBase 的 logo 确定了 3 个品牌色「橙」「蓝」「绿」，「蓝色」代表科技，「绿色」代表生活或生机，「橙色」代表希望和美好的未来。

![1-最终确定版.jpg](https://mdn.alipayobjects.com/oceanbase_design/afts/img/44APQahoJX4AAAAAAAAAAAAADv3-AQBr/original)

OBUI 主题色是在 logo 品牌色的基础上做了微调，以便于适应工具产品的复杂场景。OBCharts 是 OBUI 生长出来的可视化图表，为了让图表和界面更好的融合，图表色板会采用 OBUI 的 3 个主题色。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/MPtpSLHV15QAAAAAAAAAAAAADv3-AQBr/original)

### 选择配色色相

#### 排除不符合品牌调性的色相

用户会通过色彩建立初步的品牌认知，在色彩搭配时要选取符合品牌调性的颜色，主题色虽然奠定了品牌基调，但配色的选择也会影响最终的风格走向。在选取颜色时，可以用排除法先排除掉不符合品牌调性的色相，比如：紫色，从色彩心理学来讲，紫色代表神秘、浪漫、女性等，常用于服饰与美妆行业，为了避免传递出错误的品牌调性，色板配色时尽量避开紫色；色彩传达要保证准确性和中立性，红色代表警示、警告，会让用户产生紧迫感，数据库产品中存在很多告警信息，普通图表使用红色存在一定误导性，在选择颜色时也可将红色排除。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/nN3LR4swnhIAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/FHbKTKns_3cAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

#### 选择合适的配色方式

##### 第一种 邻近色配色

以绿色为中心的邻近色配色（约等于半色环取色），可以避开红色和紫色，也能覆盖到主题色的3个色相，相邻色之间的角度分布也相对均匀，约等于45°。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mRQqTYS8dYsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7SHgSqJoA-gAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

##### 第二种 双分割互补色配色

互补色配色的优势在于颜色对比度高，具有视觉冲击力，双分割互补色配色也可以选择 5 个色相，分裂角度约等于30°，刚好可以覆盖主题色的三个色相。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/mnU7TJP_5vkAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WqBGR6da4yoAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

综上，将两种配色方式得出的颜色合并，可以整理出一个初步色板，如下：

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/wf06SYe126IAAAAAAAAAAAAADv3-AQBr/original)

### 收敛饱和度明度

色板的设计难点在于，颜色的色相、饱和度、明度这三个维度都要兼顾。前面通过常见配色方法得出了基本色相，但选用的是最纯最亮的颜色，还需要收敛「饱和度」和「明度」范围，让色彩从视觉上达到和谐一致。

通过竞品分析发现，Echarts 色板颜色的明度饱和度分布相对集中，没有过于突出的情况，颜色整体看起来比较柔和；Tableau 饱和度分布比较均匀色板整体也比较柔和；AntV 和 Grafana 颜色分布更靠右，颜色看起来更纯更亮。

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/WSr8RrvrgAsAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/k9BiQpSjPxEAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/K7NXR7CtKEYAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/22_ySKfZGTkAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

参考以上竞品的色彩分布，为了让色板颜色更加柔和，饱和度可以去掉过亮和过纯的区间范围，圈定在 S 35-80，B 60-95 之间，将基本颜色的饱和度明度收敛到阴影区域内，可得到新的色板。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/HPoITqdp9rcAAAAAAAAAAAAADv3-AQBr/original)

### 完善色板

为了兼容复杂场景，色板的颜色数量可以设为10个。上述色板只有7个颜色还差3个，剩下3个颜色可以根据Adobe Color 的配色规律，选择同色相、不同明度饱和度的颜色进行配色，选定一个基准值60，在色盘上画一个圈，即饱和度60的圈，然后取橙、绿、蓝这三个色相上，饱和度为60的点，同时明度也调为60。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QhnpRK51iMUAAAAAAAAAAAAADv3-AQBr/original)

目前得出的10个颜色中有2个橙色（图1），由于橙色和异常提示色相近要尽量少用，可以将2个颜色合并为1个，色相在35-45之间选择一个中间值40，作为新的橙色（图2）；

<div style="display: flex">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/7JofT7KW6IQAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图1</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/p36BSIBT32sAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图2

橙红色与警告色相近，避免产生歧义，可将橙红色明度饱和度降低作为新的颜色（图3）；为了能拉开色彩差距，让色相分布更均匀，再插入了一个色相为320的颜色（图4），可得到完整色板。</div>

  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/e7CvTocrTR8AAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图3</div>
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/gBD9SK5xcjAAAAAAAAAAAAAADv3-AQBr/original" />
    <div class="image-description">图4</div>
  </div>
</div>

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/9_VNRJmASNIAAAAAAAAAAAAADv3-AQBr/original)

完整色板

### 可读性验证

#### 明暗交替

通过工具 ColorLab 进行验证，在 LAB 色彩空间下，基本符合明暗交替原则。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/Y2tpTKyEwaIAAAAAAAAAAAAADv3-AQBr/original)

#### 视障可读

符合明暗交替的原则，视障人群（色弱色盲人群）可辨别色板颜色。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/bpNMSIQMNqMAAAAAAAAAAAAADv3-AQBr/original)

1.普通人群视觉效果

2.色弱人群视觉效果

#### 欧氏距离

在验证的过程中，难免会出现不符合标准的情况，需要不断反复地调整，直到符合色彩感知距离可读性标准（范围值26-30）。

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/FcRgToU-QVkAAAAAAAAAAAAADv3-AQBr/original)

### 色板应用效果

<div style="display: flex; justify-content: space-between">
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/d7gGTpRGX6YAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/HXrOT6BRa7sAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/L4DBTqhAUbAAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/I55rTpNNSDMAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
  <div>
    <img src="https://mdn.alipayobjects.com/oceanbase_design/afts/img/Mqy9SqIKnLgAAAAAAAAAAAAADv3-AQBr/original" />
  </div>
</div>

![image.png](https://mdn.alipayobjects.com/oceanbase_design/afts/img/QY9mToqPEAUAAAAAAAAAAAAADv3-AQBr/original)

**参考文档**

Material 色彩与设计科学 <https://material.io/blog/science-of-color-design>

Material 色彩体系 <https://m3.material.io/styles/color/the-color-system/key-colors-tones>

京东色彩构建 <https://www.uisdc.com/color-system>

Adobe 调色板 <https://color.adobe.com/zh/explore?page=7>

Paletton 配色工具 <http://paletton.com/#uid=54e1a0kr0pdobS5pLzuq+enoy6j>

Tableau 博客 <https://www.tableau.com/blog/colors-upgrade-tableau-10-56782>

色相环比较 <http://www.handprint.com/HP/WCL/vismixmap.html#harris>

色彩空间 <http://www.handprint.com/HP/WCL/color7.html#CIELAB>

色彩体验 <http://www.handprint.com/CE/book.html>
