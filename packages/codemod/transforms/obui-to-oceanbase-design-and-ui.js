const importComponent = require('./utils/import-component');
const { proComponents } = require('./utils/config');

module.exports = (file, api, options) => {
  return importComponent(file, api, {
    ...options,
    fromPkgNames: '@alipay/ob-ui',
    // order: @oceanbase/ui -> @oceanbase/design
    toPkgList: [
      {
        name: '@oceanbase/ui',
        components: [
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
          /* pro-components */
          ...proComponents.components,
        ],
        types: [
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
          /* pro-components */
          ...proComponents.types,
        ],
        paths: ['/locale/', '/locale/'],
      },
      {
        name: '@oceanbase/design',
      },
    ],
  });
};
