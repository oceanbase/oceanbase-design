import React, { useContext } from 'react';
import { App, Modal as AntModal, notification as antNotification } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import { createMessageCompat } from '../message/createMessageCompat';
import { useMessageCompat } from '../message/useMessageCompat';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import formatToken from 'antd/lib/theme/util/alias';
import ConfigProvider from '../config-provider';
import useModalStyle from '../modal/style';
import { createObNotification } from '../notification/createObNotification';
import { ensureNotificationConfig } from '../notification/ensureNotificationConfig';
import useNotificationStyle from '../notification/style';
import { useObNotification } from '../notification/useObNotification';
import type { ObNotificationInstance } from '../notification/interface';
import { genObToken } from '../theme/obToken';
import theme from '../theme';
import defaultTheme from '../theme/default';
import type { GlobalToken } from '../theme/interface';

const { defaultAlgorithm, defaultSeed, useToken } = theme;

// set default token
const mapToken = {
  ...defaultAlgorithm(defaultSeed),
  ...defaultTheme.token,
  // need to override some Alias Token values
  override: {
    boxShadow: defaultTheme.token?.boxShadow,
    boxShadowSecondary: defaultTheme.token?.boxShadowSecondary,
    boxShadowTertiary: defaultTheme.token?.boxShadowTertiary,
  },
};
let token = formatToken(mapToken);
let obToken = genObToken(token as GlobalToken);

let notification: ObNotificationInstance & {
  useNotification: typeof useObNotification;
} = {
  ...createObNotification(antNotification),
  useNotification: useObNotification,
};
let message: MessageInstance & {
  useMessage: typeof useMessageCompat;
} = {
  ...createMessageCompat(notification),
  useMessage: useMessageCompat,
};

ensureNotificationConfig();
let modal: Omit<ModalStaticFunctions, 'warn'> & {
  useModal: typeof AntModal.useModal;
} = AntModal;

export default () => {
  // automatically inject useToken, avoid declaring it every time
  token = useToken().token;
  obToken = genObToken(token as GlobalToken);

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('modal');
  const notificationPrefixCls = getPrefixCls('notification');

  // register Modal style, ensure static function can also apply style
  useModalStyle(prefixCls);
  useNotificationStyle(notificationPrefixCls);

  const staticFunction = App.useApp();
  // replace antd's static methods, support consuming ConfigProvider configuration
  notification = {
    ...createObNotification(staticFunction.notification),
    useNotification: useObNotification,
  };
  message = {
    ...createMessageCompat(notification),
    useMessage: useMessageCompat,
  };
  modal = {
    ...staticFunction.modal,
    useModal: AntModal.useModal,
  };

  return null;
};

export { token, obToken, message, notification, modal };
