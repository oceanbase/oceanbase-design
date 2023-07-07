---
title: TaskGraph 任务流程图
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/basic.tsx" title="基本"></code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| data | G6 的绘图数据 | [GraphData](https://github.com/antvis/G6/blob/master/src/types/index.ts#L497) | - | - |
| logLoading | 日志是否加载中 | boolean | - | - |
| subTaskLog | 任务日志 | string | - | - |
| onMenuClick | 点击下拉菜单的回调函数 | function(key: MenuKey, subTask: any, onSuccess: () => void) | - | - |
| onTabsChange | 标签页切换面板的回调函数 | function(targetKey: string) | - | - |
| onTabsEdit | 标签页编辑面板的回调函数，包括新增面板和删除面板 | function(targetKey: string, action: 'add' \| 'remove) | - | - |
| assetsPath | 图片资源引用路径 | string | /assets | - |

- 其中 type MenuKey = 'log' | 'parameter' | 'stop' | 'retry' | 'skip'，分别对应 `查看日志`、`查看参数`、`终止运行`、`重新运行` 和 `设置为成功/跳过` 的操作。
- 任务状态的枚举值分别为:
  - `SUCCESSFUL`: 已完成
  - `RUNNING`: 任务执行中
  - `FAILED`: 任务失败
  - `PENDING`: 未开始执行
- 由于任务流程图中涉及到多个图片资源，因此上层使用时需要将以下的图片资源加入到项目中:
  - `graph_fit_view_icon.svg`
  - `graph_reset_icon.svg`
  - `icon_ellipsis.svg`
  - `task_failed.svg`
  - `task_pending.svg`
  - `task_running.svg`
  - `task_successful.svg`
- 以上图片的默认引用路径为 `/assets/XXX.svg`，如果与实际项目的部署情况不符，可以通过设置 `assetsPath` 属性，来自定义图片资源的引用路径 (`${assetsPath}/XXX.svg`)。所有的图片资源可以在 [此处](https://github.com/oceanbase/oceanbase-design/tree/master/public/assets) 进行下载。
