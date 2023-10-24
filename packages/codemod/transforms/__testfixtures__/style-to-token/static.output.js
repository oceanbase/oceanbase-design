import { token } from '@oceanbase/design';
const colorMap = {
  info: token.colorInfo,
  success: token.colorSuccess,
  warning: token.colorWarning,
  error: token.colorError,
};

function getColorList() {
  return [
    {
      type: 'info',
      color: token.colorInfo,
    },
    {
      type: 'success',
      color: token.colorSuccess,
    },
    {
      type: 'warning',
      color: token.colorWarning,
    },
    {
      type: 'error',
      color: token.colorError,
    }
  ];
}
