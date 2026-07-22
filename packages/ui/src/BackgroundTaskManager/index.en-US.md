---
title: BackgroundTaskManager
nav:
  title: Biz Components
  path: /biz-components
---

## Code Examples

<!-- prettier-ignore -->
<code src="./demo/NotificationCenterDemo.tsx"></code>

## API

| Property         | Description                | Type                     | Default   | Version |
| :--------------- | :------------------------- | :----------------------- | :-------- | :------ |
| ref              | Ref for component methods  | BackgroundTaskManagerRef | {}        | -       |
| prefix           | localStorage namespace     | string                   | -         | -       |
| rollingFrequency | Task polling interval (ms) | number                   | 3 \* 1000 | -       |

### BackgroundTaskManagerRef

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| pushQueue | Push task to queue | (queue: [ITaskMgrQueue](background-task-manager#ITaskMgrQueue)) => void | - | - |
| popQueue | Pop task from queue | (id: [TaskMgrID](background-task-manager#TaskMgrID)) => void | - | - |
| setQueue | Set task queue entirely | (queue: [ITaskMgrQueue](background-task-manager#ITaskMgrQueue)) => void | - | - |
| pushPreset | Push task preset | (preset: [ITaskMgrPreset](background-task-manager#ITaskMgrPreset)) => void | - | - |
| setPreset | Set task preset entirely | (preset: [ITaskMgrPreset](background-task-manager#ITaskMgrPreset)) => void | - | - |

### ITaskMgrPreset

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| ITaskMgrPreset | Behavior definition for background task events | Record<[Namespace](background-task-manager#Namespace), [NotificationAction](background-task-manager#NotificationAction)> | - | - |

### NotificationAction

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| api | Task polling API | (params: any) => Promise<any> | - | - |
| successCb | Success callback | (response: any, id: ID) => { type: keyof NotificationInstance; config: [ConfigProps](https://ant.design/components/notification-cn/#API) } or null | - | - |
| failedCb | Failure callback | (response: any, id: ID ) => { type: keyof NotificationInstance; config: [ConfigProps](https://ant.design/components/notification-cn/#API) } or null | - | - |

### ITaskMgrQueue

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| ITaskMgrQueue | Task queue object collection | Record<[ID](background-task-manager#ID), [Namespace](background-task-manager#Namespace)> | - | - |

### TaskMgrID

| Property | Description            | Type             | Default | Version |
| :------- | :--------------------- | :--------------- | :------ | :------ |
| ID       | Unique task identifier | string or number | ''      | -       |

### Namespace

| Property  | Description                | Type   | Default | Version |
| :-------- | :------------------------- | :----- | :------ | :------ |
| Namespace | Task namespace / task type | string | ''      | -       |
