import React, { useContext } from 'react';
import { ConfigProvider } from '@oceanbase/design';

export default () => {
  const { navigate } = useContext(ConfigProvider.ExtendedConfigContext);
  return navigate;
};
