---
title: BackgroundTaskManager 后台任务管理器
nav:
  title: 业务组件
  path: /biz-components
---

## 代码演示

<code src="./demo/NotificationCenterDemo.tsx"></code>

## API

| 参数             | 说明                   | 类型                     | 默认值    | 版本 |
| :--------------- | :--------------------- | :----------------------- | :-------- | :-- |
| ref              | 获取组件内置函数的 ref | BackgroundTaskManagerRef | {}        | - |
| prefix           | localstorage 命名空间  | string                   | -         | - |
| rollingFrequency | 任务轮询时间间隔       | number                   | 3 \* 1000 | - |

### BackgroundTaskManagerRef

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| pushQueue | push 任务队列 | (queue: [ITaskMgrQueue](background-task-manager#ITaskMgrQueue)) => void | - | - |
| popQueue | pop 任务队列 | (id: [TaskMgrID](background-task-manager#TaskMgrID)) => void | - | - |
| setQueue | 全量设置任务队列 | (queue: [ITaskMgrQueue](background-task-manager#ITaskMgrQueue)) => void | - | - |
| pushPreset | push 任务预设 | (preset: [ITaskMgrPreset](background-task-manager#ITaskMgrPreset)) => void | - | - |
| setPreset | 全量设置任务预设 | (preset: [ITaskMgrPreset](background-task-manager#ITaskMgrPreset)) => void | - | - |

### ITaskMgrPreset

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| ITaskMgrPreset | 后台管理事件的行为定义 | Record<[Namespace](background-task-manager#Namespace), [NotificationAction](background-task-manager#NotificationAction)> | - | - |

### NotificationAction

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| api | 任务的轮询接口 | (params: any) => Promise<any> | - | - |
| successCb | 任务成功回调 | (response: any, id: ID) => { type: keyof NotificationInstance; config: [ConfigProps](https://ant.design/components/notification-cn/#API) } or null | - | - |
| failedCb | 任务失败回调 | (response: any, id: ID ) => { type: keyof NotificationInstance; config: [ConfigProps](https://ant.design/components/notification-cn/#API) } or null | - | - |

### ITaskMgrQueue

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| ITaskMgrQueue | 任务队列对象集合 | Record<[ID](background-task-manager#ID), [Namespace](background-task-manager#Namespace)> | - | - |

### TaskMgrID

| 参数 | 说明         | 类型             | 默认值 | 版本 |
| :--- | :----------- | :--------------- | :----- | :-- |
| ID   | 任务唯一标识 | string or number | ''     | - |

### Namespace

| 参数      | 说明                  | 类型   | 默认值 | 版本 |
| :-------- | :-------------------- | :----- | :----- | :-- |
| Namespace | 任务命名空间/任务类型 | string | ''     | - |
