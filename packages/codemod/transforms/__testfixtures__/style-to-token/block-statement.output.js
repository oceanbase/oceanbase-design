import { obToken } from '@oceanbase/design';
function getColorList() {
  return [
    {
      type: 'info',
      color: obToken.colorTextLink,
    },
    {
      type: 'success',
      color: obToken.colorTextSuccess,
    },
    {
      type: 'warning',
      color: obToken.colorTextWarning,
    },
    {
      type: 'error',
      color: obToken.colorTextError,
    },
    {
      type: 'border',
      color: `1px solid ${obToken.colorBorderDefault}`,
    },
    {
      type: 'fontSize',
      fontSize: obToken.fontSize325,
    },
  ];
}
