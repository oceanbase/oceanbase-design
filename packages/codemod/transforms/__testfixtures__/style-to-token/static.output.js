import { token } from '@oceanbase/design';
const color = token.colorBgLayout;
const border = `1px solid ${token.colorBgLayout}`;

const colorMap = {
  info: token.colorInfo,
  success: token.colorSuccess,
  warning: token.colorWarning,
  error: token.colorError,
  border: `1px solid ${token.colorBorder}`,
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
    },
    {
      type: 'border',
      color: `1px solid ${token.colorBorder}`,
    },
  ];
}
