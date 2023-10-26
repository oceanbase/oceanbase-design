const importComponent = require('./utils/import-component');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@alipay/ob-ui',
    // order: @oceanbase/ui -> @oceanbase/design
    toPkgList: [
      {
        name: '@oceanbase/ui',
        components: [
          'PageContainer',
          'Action',
          'BackgroundTaskManager',
          'BackgroundTaskManagerConstants',
          'BasicLayout',
          'BatchOperationBar',
          'Boundary',
          'ContentWithQuestion',
          'Dialog',
          'DocDialog',
          'FullscreenBox',
          'Highlight',
          'GraphToolbar',
          'IconFont',
          'Login',
          'Lottie',
          'NavMenu',
          'Password',
          'Ranger',
          'SideTip',
          'TaskGraph',
          'TreeSearch',
          'Welcome',
        ],
        types: [
          'PageContainerProps',
          'ActionProps',
          // BackgroundTaskManager
          'BackgroundTaskManagerProps',
          'BackgroundTaskManagerRef',
          'ITaskMgrPreset',
          'ITaskMgrQueue',
          'TaskMgrID',
          'BasicLayoutProps',
          'BatchOperationBarProps',
          'BoundaryProps',
          'ContentWithQuestionProps',
          'DialogProps',
          'DocDialogProps',
          'FullscreenBoxProps',
          'GraphToolbarProps',
          'HighlightProps',
          'IconFontProps',
          'LoginProps',
          'LottieProps',
          'NavMenuProps',
          'PasswordProps',
          // Ranger
          'RangerProps',
          'QuickPickerProps',
          'SideTipProps',
          'TaskGraphProps',
          // TreeSearch
          'TreeSearchProps',
          'TreeSearchRef',
          'Node',
          'WelcomeProps',
        ],
        paths: ['/locale/', '/locale/'],
      },
      {
        name: '@oceanbase/design',
      },
    ],
  });
};
