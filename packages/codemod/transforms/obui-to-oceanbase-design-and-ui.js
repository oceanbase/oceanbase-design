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
          'BasicLayout',
          'BatchOperationBar',
          'Boundary',
          'ContentWithQuestion',
          'Dialog',
          'DocDialog',
          'GraphToolbar',
          'Login',
          'Lottie',
          'NavMenu',
        ],
        types: [
          'PageContainerProps',
          'ActionProps',
          'BackgroundTaskManagerProps',
          'BasicLayoutProps',
          'BatchOperationBarProps',
          'BoundaryProps',
          'ContentWithQuestionProps',
          'DialogProps',
          'DocDialogProps',
          'GraphToolbarProps',
          'LoginProps',
          'LottieProps',
          'NavMenuProps',
        ],
      },
      {
        name: '@oceanbase/design',
      },
    ],
  });
};
