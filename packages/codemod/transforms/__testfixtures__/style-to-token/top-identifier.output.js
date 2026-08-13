import { obToken } from '@oceanbase/design';
const color = obToken.colorBgPrimary;
const border = `1px solid ${obToken.colorBgPrimary}`;

const colorMap = {
  info: obToken.colorTextLink,
  success: obToken.colorTextSuccess,
  warning: obToken.colorTextWarning,
  error: obToken.colorTextError,
  border: `1px solid ${obToken.colorBorderDefault}`,
  fontSize: obToken.fontSize325,
};
