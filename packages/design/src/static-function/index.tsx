import React, { useContext } from 'react';
import {
  App,
  message as antMessage,
  Modal as AntModal,
  notification as antNotification,
} from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
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

let message: MessageInstance & {
  useMessage: typeof antMessage.useMessage;
} = antMessage;
let notification: ObNotificationInstance & {
  useNotification: typeof useObNotification;
} = {
  ...createObNotification(antNotification),
  useNotification: useObNotification,
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
  message = {
    ...staticFunction.message,
    useMessage: antMessage.useMessage,
  };
  notification = {
    ...createObNotification(staticFunction.notification),
    useNotification: useObNotification,
  };
  modal = {
    ...staticFunction.modal,
    useModal: AntModal.useModal,
  };

  return null;
};

export { token, obToken, message, notification, modal };
