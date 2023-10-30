import { token } from '@oceanbase/design';
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
    },
    {
      type: 'border',
      color: `1px solid ${token.colorBorder}`,
    },
  ];
}
