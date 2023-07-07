import type { AlertProps } from '@oceanbase/design';
import { Alert } from '@oceanbase/design';
import React from 'react';

const MdAlert: React.FC<AlertProps> = ({ style, ...props }) => (
  <Alert {...props} style={{ margin: '24px 0', ...style }} />
);

export default MdAlert;
