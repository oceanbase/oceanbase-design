import './index.less';

export * from '@ant-design/pro-components';

export { version } from '../package.json';

export * from './constant';

export * from './interface';

export { default as Action } from './Action';
export type { ActionGroupProps } from './Action';

export { default as BasicLayout } from './BasicLayout';
export type { BasicLayoutProps } from './BasicLayout';

export { default as BatchOperationBar } from './BatchOperationBar';
export type { BatchOperationBarProps } from './BatchOperationBar';

export { default as Boundary } from './Boundary';

export { default as ContentWithQuestion } from './ContentWithQuestion';
export type { ContentWithQuestionProps } from './ContentWithQuestion';

export { default as ContentWithIcon } from './ContentWithIcon';
export type { ContentWithIconProps } from './ContentWithIcon';

export { default as Dialog } from './Dialog';
export type { DialogProps } from './Dialog';

export { default as DocDialog } from './DocDialog';
export type { DocDialogProps } from './DocDialog';

export { default as FullscreenBox } from './FullscreenBox';
export type { FullscreenBoxProps } from './FullscreenBox';

export { default as GraphToolbar } from './GraphToolbar';
export type { GraphToolbarProps } from './GraphToolbar';

export { default as Highlight } from './Highlight';
export type { HighlightProps } from './Highlight';

export { default as IconFont } from './IconFont';
export type { IconFontProps } from './IconFont';

export { default as Login } from './Login';
export type { LoginProps } from './Login';

export { default as Lottie } from './Lottie';
export type { LottieProps } from './Lottie';

export { default as NavMenu } from './NavMenu';
export type { NavMenuProps, NavMenuItem } from './NavMenu';

export { default as PageContainer } from './PageContainer';
export type { PageContainerProps } from './PageContainer';

export { default as FooterToolbar } from './FooterToolbar';
export type { FooterToolbarProps } from './FooterToolbar';

export { default as Password } from './Password';
export type { PasswordProps } from './Password';

export { default as Ranger } from './Ranger';
export type { RangerProps } from './Ranger';

export { default as SideTip } from './SideTip';
export type { SideTipProps } from './SideTip';

export { default as TaskGraph } from './TaskGraph';
export type { TaskGraphProps } from './TaskGraph';

export { default as TreeSearch } from './TreeSearch';
export type { TreeSearchProps, TreeSearchRef } from './TreeSearch';

export { default as Welcome } from './Welcome';
export type { WelcomeProps } from './Welcome';

export { default as TagSelect } from './TagSelect';

export {
  BackgroundTaskManagerConstants,
  default as BackgroundTaskManager,
} from './BackgroundTaskManager';
export type {
  BackgroundTaskManagerRef,
  ITaskMgrPreset,
  ITaskMgrQueue,
  TaskMgrID,
} from './BackgroundTaskManager';
