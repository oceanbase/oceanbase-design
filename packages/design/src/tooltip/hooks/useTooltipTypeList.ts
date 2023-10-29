import theme from '../../theme';

export const useTooltipTypeList = () => {
  const { token } = theme.useToken();
  return [
    {
      type: 'light',
      color: token.colorText,
      backgroundColor: token.colorBgElevated,
    },
    {
      type: 'success',
      color: token.colorSuccess,
      backgroundColor: token.colorSuccessBg,
    },
    {
      type: 'info',
      color: token.colorInfo,
      backgroundColor: token.colorInfoBg,
    },
    {
      type: 'warning',
      color: token.colorWarning,
      backgroundColor: token.colorWarningBg,
    },
    {
      type: 'error',
      color: token.colorError,
      backgroundColor: token.colorErrorBg,
    },
  ];
};
